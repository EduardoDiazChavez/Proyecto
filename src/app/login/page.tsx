import { LoginForm } from "../../../components/login/LoginForm"

const login = () => {
    return (
        <>
            <div className="grid grid-cols-2 h-[calc(100vh)] truncate ">
                <div className="h-[100vh] justify-self-center self-center w-[80%] max-w-96 ">
                    <LoginForm/>
                </div>
                <div className="justify-self-end">
                    <img src="/imgs/login/imgLogin.png" alt="Login imagen" className="h-[100vh]" />
                </div>
            </div>
       

        </>
    )
}

export default login 