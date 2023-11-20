import { BsFillTelephoneOutboundFill } from "react-icons/bs";
const Header = () => {
  return (
    <div className='w-full bg-red-300 flex justify-center'>
      {/* Wrapper */}
      <div className=' w-10/12 bg-slate-500 flex  flex-col '>
        {/* session 1 */}
        <div className='flex justify-between'>
          <div className='flex '>
            {/* icons $ number */}
            <div>
              <span>
                <BsFillTelephoneOutboundFill />
              </span>
              <div>+2349078338842</div>
            </div>
            <div className='pl-4'>Support@joblink.ng</div>
          </div>
          <div>
            <div>Become a member</div>
            <div>Login</div>
          </div>
        </div>

        {/* session 2 */}
        <div></div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
      </div>
    </div>
  );
};

export default Header;
