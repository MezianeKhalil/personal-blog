export default function footer({home}) {
    return (
        <>
            <footer className={`py-3 ${home?'absolute bottom-0 left-0 w-full':''} font-Poppins dark:bg-blackTheme`}>
                <p className="text-gray-800 dark:text-gray-100 text-center text-sm" style={{direction:"ltr"}}>&copy; 2020, <b className="capitalize">khalil m.</b> - All Rights Reserved</p>
            </footer> 
        </>
    )
}
