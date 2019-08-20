import Helloworld from '@/components/HelloWorld.vue';
import Dashboard from '@/components/Dashboard.vue';
import Kandidat from '@/components/Kandidat.vue';
import UserHRD from '@/components/UserHRD.vue';
import Pelamar from '@/components/Pelamar.vue';

const routes = [
    { path: '/Helloword', component: Helloworld },
    { path: '/', component: Dashboard },
    { path: '/kandidat', component: Kandidat },
    { path: '/login', component: UserHRD },
    { path: '/pelamar', component: Pelamar },
];

export default routes;