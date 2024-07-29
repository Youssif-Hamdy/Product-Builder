interface IProps{
msg:string,
}

const Errorm=({msg}:IProps)=> {
  return (
    <span className="block text-red-700 font-semibold text-sm">{msg}</span>
  )
}
export default Errorm;