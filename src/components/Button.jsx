function Button({ variant = "primary", size = "large", children = "Button" }) {
    const baseStyles = "font-semibold rounded transition-colors duration-200";
    
    const variantStyles = {
        primary: "bg-blue-600 text-white hover:bg-blue-700",
        secondary: "bg-cyan-500 text-white hover:bg-cyan-600",
        error: "bg-red-500 text-white hover:bg-red-600",
        success: "bg-green-500 text-white hover:bg-green-600",
    };
    
    const sizeStyles = {
        small: "px-3 py-1 text-sm",
        medium: "px-4 py-2 text-base",
        large: "px-6 py-3 text-lg",
    };
    
    const className = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]}`;
    
    return (
        <button className={className}>
            {children}
        </button>
    );
}

export default Button;
