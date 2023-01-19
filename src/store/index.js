import { createStore } from 'vuex'

import Auth from '../store/modules/auth'
import Alert from '../store/modules/alert'
import Portfolio from '../store/modules/portfolio'
import Ticker from '../store/modules/ticker'
import Asset from '../store/modules/asset'
import Dividend from '../store/modules/dividend'

const store = createStore({
    modules: {
        Auth,
        Alert,
        Portfolio,
        Ticker,
        Asset,
        Dividend
    }
})

export default store
