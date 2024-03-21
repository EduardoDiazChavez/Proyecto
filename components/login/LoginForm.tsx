import "../../styles/globals.css"

export const LoginForm = () => {
    return (
        <div className="flex flex-col justify-center h-full  space-y-5 text-secundario ">
            <div>
                <h1 className="text-[40px] font-semibold">Sign In</h1>
                <h3 className="text-[12px] text-blue-500">Enter your email and password to sign in!</h3>
            </div>
            <button type="button" className="bg-blue-100 py-3 rounded-xl text-[15px]">
                Sign in with Google
            </button>
            <div className="flex flex-col">
                <label>Email*</label>
                <input type="text" placeholder="mail@gmail.com"  className="capitalize text-sm  border border-gray-300  transition w-full py-2 px-2 mt-1 rounded-lg focus:outline-none" />
            </div>
            <div className="flex flex-col">
                <label>Password*</label>
                <input type="text" placeholder="Min. 8 characters" className="capitalize text-sm  border border-gray-300  transition w-full py-2 px-2 mt-1 rounded-lg focus:outline-none" />
            </div>
            <div className="flex justify-between text-[13px]">
                <div>
                    keep me logged in
                </div>
                <div className="text-Primario font-semibold">
                    Forget password?
                </div>
            </div>

            <button className="bg-Primario py-3 rounded-xl text-[15px] text-white">
                Sign In
            </button>

            <div className="text-secundario text-[13px]">
                <label >Not registered yet? <span className="text-Primario font-semibold">Create an Account</span></label>
            </div>

        </div>
    )
}