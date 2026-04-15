function Alert({ variant = "info", children = "Alert message" }) {
    const variantStyles = {
        error: {
            container: "bg-red-200 border border-red-300",
            icon: "text-red-600",
            text: "text-red-900",
        },
        warning: {
            container: "bg-orange-200 border border-orange-300",
            icon: "text-orange-600",
            text: "text-orange-900",
        },
        info: {
            container: "bg-yellow-200 border border-yellow-300",
            icon: "text-yellow-600",
            text: "text-yellow-900",
        },
        success: {
            container: "bg-green-200 border border-green-300",
            icon: "text-green-600",
            text: "text-green-900",
        },
    };

    const icons = {
        error: "⊘",
        warning: "⚠",
        info: "ⓘ",
        success: "✓",
    };

    const styles = variantStyles[variant];
    const icon = icons[variant];

    return (
        <div className={`${styles.container} rounded-lg px-4 py-3 flex items-center gap-3`}>
            <span className={`${styles.icon} text-xl font-bold flex-shrink-0`}>
                {icon}
            </span>
            <span className={`${styles.text} font-semibold`}>
                {children}
            </span>
        </div>
    );
}

export default Alert;
