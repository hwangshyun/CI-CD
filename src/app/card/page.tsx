
export default function CardPage() {
    return (
        <div className="h-screen flex items-center justify-center">
            <div className="w-full max-w-160 border-2 border-gray-300 rounded-2xl overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1602080858428-57174f9431cf?q=80&w=2151&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                />
                <div className="p-3 flex flex-col gap-2 items-start">
                    <h5 className="text-2xl font-extrabold">2024년 기술 동향</h5>
                    <p className="text-gray-500">
                        최신 기술 동향에 대한 기사를 통해 혁신적인 아이디어와 트렌드를
                        탐구해보세요. 이 글에서는 인공지능과 머신러닝의 발전이 우리 생활에
                        미치는 영향을 다룹니다.
                    </p>
                    <button className="bg-blue-400 text-white rounded-md px-3 py-1">더보기</button>
                </div>
            </div>
        </div>
    )
}

