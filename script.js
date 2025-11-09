class AITrainerApp {
    constructor() {
        this.userBtn = document.getElementById('userBtn');
        this.dropdownMenu = document.getElementById('dropdownMenu');
        this.menuBtn = document.getElementById('menuBtn');
        this.closeMenu = document.getElementById('closeMenu');
        this.mobileMenu = document.getElementById('mobileMenu');
        this.addBtn = document.getElementById('addBtn');
        
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.setupClickOutside();
    }
    
    setupEventListeners() {
        // تحكم في القائمة المنسدلة للمستخدم
        this.userBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.toggleDropdown();
        });
        
        // تحكم في القائمة الجانبية للجوال
        this.menuBtn.addEventListener('click', () => {
            this.openMobileMenu();
        });
        
        this.closeMenu.addEventListener('click', () => {
            this.closeMobileMenu();
        });
        
        // زر الإضافة
        this.addBtn.addEventListener('click', () => {
            this.handleAddClick();
        });
        
        // إغلاق القوائم عند النقر خارجها
        document.addEventListener('click', () => {
            this.closeAllMenus();
        });
    }
    
    setupClickOutside() {
        // منع إغلاق القوائم عند النقر داخلها
        this.dropdownMenu.addEventListener('click', (e) => {
            e.stopPropagation();
        });
        
        this.mobileMenu.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }
    
    toggleDropdown() {
        this.dropdownMenu.classList.toggle('show');
    }
    
    openMobileMenu() {
        this.mobileMenu.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
    
    closeMobileMenu() {
        this.mobileMenu.classList.remove('show');
        document.body.style.overflow = '';
    }
    
    closeAllMenus() {
        this.dropdownMenu.classList.remove('show');
        this.closeMobileMenu();
    }
    
    handleAddClick() {
        // إضافة تأثير نقر
        this.addBtn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.addBtn.style.transform = '';
        }, 150);
        
        // هنا يمكنك إضافة منطق لبدء محادثة جديدة
        console.log('بدء محادثة جديدة...');
        
        // عرض رسالة تأكيد
        this.showNotification('جاري بدء محادثة جديدة...');
    }
    
    showNotification(message) {
        // إنشاء عنصر الإشعار
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            left: 50%;
            transform: translateX(-50%);
            background: var(--primary-color);
            color: white;
            padding: 1rem 2rem;
            border-radius: var(--radius);
            box-shadow: var(--shadow-lg);
            z-index: 3000;
            font-weight: 500;
            animation: slideDown 0.3s ease;
        `;
        
        notification.textContent = message;
        document.body.appendChild(notification);
        
        // إزالة الإشعار بعد 3 ثوان
        setTimeout(() => {
            notification.style.animation = 'slideUp 0.3s ease';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }
}

// تهيئة التطبيق عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    new AITrainerApp();
});

// إضافة أنماط CSS للرسوم المتحركة
const style = document.createElement('style');
style.textContent = `
    @keyframes slideDown {
        from {
            transform: translateX(-50%) translateY(-20px);
            opacity: 0;
        }
        to {
            transform: translateX(-50%) translateY(0);
            opacity: 1;
        }
    }
    
    @keyframes slideUp {
        from {
            transform: translateX(-50%) translateY(0);
            opacity: 1;
        }
        to {
            transform: translateX(-50%) translateY(-20px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);