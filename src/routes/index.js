import { HeaderOnlyLayout } from "~/components/Layout";
import Home from "~/pages/Home";
import Following from "~/pages/Following";
import Profile from "~/pages/Profile";
import Upload from "~/pages/Upload";
import Search from "~/pages/Search";


// public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/search', component: Search },
    { path: '/upload', component: Upload, layout: HeaderOnlyLayout }
]

// private routes
const privateRoutes = [

]

export { publicRoutes, privateRoutes }