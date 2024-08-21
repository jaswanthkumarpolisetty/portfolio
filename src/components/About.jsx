import About from '../assets/about.jpg'

const About = () => {
    return (
        <div className="boarder-b border-neutral-900 pb-4">
            <h1 className="my-20 text-center text-4xl">
                About
            </h1>
            <span className="text-neutral-500">
                Me
            </span>
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <img src={About} alt="About"/>
                    </div>
                </div>
            </div>
        </div>
    )
}