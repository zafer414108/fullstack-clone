
const Register = () => {
  return (
    <div className="h-[calc(100vh-100px)] p5 pt-[70px]">


      <form class="max-w-[700px] mx-auto grid grid-cols-2 sm:gap-[90px] gap-10">

        {/* Customer Section */}
        <div className="max-sm:col-span-2">
        <h1 className="text-center font-bold text-xl mb-4" >Create New Account</h1>
          <div class="mb-5">
            <label for="user-name" class="block mb-2 text-sm font-medium text-gray-900 ">User Name</label>
            <input type="text" 
            id="customer-user-name" 
            name="customer-user-name" 
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " 
            required />
          </div>
          <div class="mb-5">
            <label for="customer-email" class="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
            <input type="email" 
            id="customer-email"
            name="customer-email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " 
            placeholder="name@flowbite.com" 
            required />
          </div>
          <div class="mb-5">
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 ">Your password</label>
            <input type="password" 
            id="customer-password" 
            name="customer-password"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " 
            required />
          </div>

          <div class="mb-5">
            <label for="avatar" class="block mb-2 text-sm font-medium text-gray-900 ">Profile Image</label>
            <input type="file"
              id="customer-profile-image"
              name="customer-profile-image"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              required />
          </div>

          <div class="mb-5">
            <label for="user-country" class="block mb-2 text-sm font-medium text-gray-900 ">Country</label>
            <input type="text"
              id="customer-user-name"
              name="customer-country"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              required
              placeholder="Turkey" />
          </div>

        </div>

        {/* Seller Section */}
        <div className="max-sm:col-span-2">
          <h1 className="text-center font-bold text-xl mb-4" >Become Seller</h1>

          <div class="mb-5">
            <label for="seller-phone" class="block mb-2 text-sm font-medium text-gray-900 ">Your phone</label>
            <input type="tel" id="seller-phone" name="seller-phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890" required />
          </div>

          <div class="mb-5">
            <label for="description" class="block mb-2 text-sm font-medium text-gray-900 ">Description</label>
           <textarea  cols="30" rows="10" name="description" class="mix-h-[100px] max-h-[300px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "  required />
          </div>
        </div>

        <div className="col-span-2 flex justify-center">
          <button type="submit" class="min-w-[200px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
        </div>
      </form>


    </div>

  )
}

export default Register