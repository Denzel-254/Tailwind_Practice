function Stats(props) {
    return (
        <div >
            <div className="bg-white p-5 rounded shadow">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-blue-800">{props.title}</h2>
                <p className="text-gray-600">{props.description}</p>
            </div>

        </div>
    )
}

export default Stats