export const isAuth=()=>{
    console.log("checks",localStorage.getItem("token"))
   return localStorage.getItem("token")
}