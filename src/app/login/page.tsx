export default function LoginPage() {
    return (
        <div className="flex h-screen items-center justify-center">
            <form className="w-full max-w-120 flex flex-col gap-4 text-black">
                <div className="">
                    <label htmlFor="email" className="">
                        이메일
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="h-10 px-2 w-full border-1 border-gray-300  rounded"
                        placeholder="abc@gmail.com"
                        required
                    />
                </div>
                <div className="">
                    <label htmlFor="password" className="">
                        비밀번호
                    </label>
                    <input type="password" id="password" className="h-10 px-2 w-full border-1 border-gray-300  rounded"
                        required />
                </div>
                <div className="flex gap-1">
                    <div className="">
                        <input
                            id="remember"
                            type="checkbox"
                            value=""
                            className=""
                            required
                        />
                    </div>
                    <label htmlFor="remember" className="">
                        로그인 상태 유지
                    </label>
                </div>
                <button type="submit" className="bg-blue-500 h-10 text-white rounded-xl">
                    Submit
                </button>
            </form>
        </div>
    )

}