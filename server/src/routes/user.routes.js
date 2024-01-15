const {Router}=require("express")
const { login } = require("../controller/user.controller")

const useRouter=Router()

useRouter.get("/login",login)
module.exports=useRouter