
const Contact = () => {
  return (
    <div>
        <div className="bg flex justify-start items-end">
            <h1 className="text-white text-8xl text-shadow p-9">Contact Us</h1>
            <div className="form glass">
                <input className="type" type="text" placeholder="Name" />
                <input className="type" type="text" placeholder="Email" />
                <textarea name="comment" id="comment" placeholder="Send us a message" cols="30" rows="10"></textarea>
                <input className="bg-black p-4 text-white rounded-md font-semibold cursor-pointer" type="submit" />
            </div>
        </div>
    </div>
  )
}

export default Contact