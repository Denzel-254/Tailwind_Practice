function Testimonials(props) {
    return (
        <div>
            <div>
                <h2 className="text-xl font-bold">{props.client}</h2>
                <p className="text-gray-600">Testimonials from our satisfied clients</p>
            </div>
            <div >
                <div className="bg-white p-5 rounded shadow">
                    <p className="text-gray-600">{props.testimonials}</p>
                    <p className="text-gray-500 text-sm">-{props.clientName}</p>
                </div>

            </div>
        </div>
    )
}

export default Testimonials