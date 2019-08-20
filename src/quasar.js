import Vue from 'vue'

import './styles/quasar.styl'
import '@quasar/extras/material-icons/material-icons.css'
import {
  Quasar, 
  QLayout,
  QHeader,
  QDrawer,
  QPageContainer,
  QPage,
  QToolbar,
  QToolbarTitle,
  QBtn,
  QIcon,
  QList,
  QItem,
  QItemSection,
  QItemLabel,

  QTable,
  QForm,
  QInput,
  Notify,
  QTh,
  QTr,
  QTd,
  QSelect,
  QParallax
} from 'quasar'

Vue.use(Quasar, {
  config: {},
  components: {
    QLayout,
    QHeader,
    QDrawer,
    QPageContainer,
    QPage,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QList,
    QItem,
    QItemSection,
    QItemLabel,

    QTable,
    QForm,
    QInput,
    Notify,
    QTh,
    QTr,
    QTd,
    QSelect,
    QParallax
  },
  directives: {
  },
  plugins: {
    Notify,
  }
 })