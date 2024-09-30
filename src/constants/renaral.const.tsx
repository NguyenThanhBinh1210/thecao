import GARENA_01 from '~/assets/images/GARENA_01.png'
import ZING_01 from '~/assets/images/ZING_01.png'
import FUNCARD_01 from '~/assets/images/FUNCARD_01.png'
import GATE_01 from '~/assets/images/GATE_01.png'
import V_COIN_01 from '~/assets/images/V_COIN_01.png'
import SCOIN_01 from '~/assets/images/SCOIN_01.png'
import SOHA_02 from '~/assets/images/SOHA_02.png'
import APPOTA_CARD_01 from '~/assets/images/APPOTA_CARD_01.png'
import GOSU_01 from '~/assets/images/GOSU_01.png'
import BIT_01 from '~/assets/images/BIT_01.png'
import ONCASH_01 from '~/assets/images/ONCASH_01.png'

import qr from '~/assets/images/qr.png'
import vi from '~/assets/images/vi.jpg'
import bank from '~/assets/images/bank.jpg'
import atm from '~/assets/images/atm.jpg'

import logo_ViettelPay from '~/assets/images/logo_ViettelPay.jpg'
import vietcombank_logo from '~/assets/images/vietcombank_logo.png'
import vietinbank_logo from '~/assets/images/vietinbank_logo.png'
import bidv_logo from '~/assets/images/bidv_logo.png'
import agribank_logo from '~/assets/images/agribank_logo.png'
import sacombank_logo from '~/assets/images/sacombank_logo.png'
import techcombank_logo from '~/assets/images/techcombank_logo.png'
import acb_logo from '~/assets/images/acb_logo.png'
import vpbank_logo from '~/assets/images/vpbank_logo.png'
import eximbank_logo from '~/assets/images/eximbank_logo.png'
import tpbank_logo from '~/assets/images/tpbank_logo.png'
import ncb_logo from '~/assets/images/ncb_logo.png'
import ojb_logo from '~/assets/images/ojb_logo.png'
import msbank_logo from '~/assets/images/msbank_logo.png'
import hdbank_logo from '~/assets/images/hdbank_logo.png'
import scb_logo from '~/assets/images/scb_logo.png'
import ivb_logo from '~/assets/images/ivb_logo.png'
import abbank_logo from '~/assets/images/abbank_logo.png'
import mbbank_logo from '~/assets/images/mbbank_logo.png'
import shb_logo from '~/assets/images/shb_logo.png'
import bacabank_logo from '~/assets/images/bacabank_logo.png'
import pvcombank_logo from '~/assets/images/pvcombank_logo.png'
import saigonbank from '~/assets/images/saigonbank.png'
import woori_logo from '~/assets/images/woori_logo.png'
import vietbank_logo from '~/assets/images/vietbank_logo.png'
import vietabank_logo from '~/assets/images/vietabank_logo.png'
import vib_logo from '~/assets/images/vib_logo.png'
import vccb_logo from '~/assets/images/vccb_logo.png'

export const listThe = [
  {
    img: GARENA_01,
    type: 'GARENA_01',
    discount: 2,
    menhgia: [20000, 50000, 100000, 200000, 500000]
  },
  {
    img: ZING_01,
    type: 'ZING_01',
    discount: 2.1,
    menhgia: [20000, 50000, 100000, 200000, 500000, 1000000]
  },
  {
    img: FUNCARD_01,
    type: 'FUNCARD_01',
    discount: 2,
    menhgia: [20000, 50000, 100000, 200000, 500000, 1000000]
  },
  {
    img: GATE_01,
    type: 'GATE_01',
    discount: 2,
    menhgia: [10000, 20000, 50000, 100000, 200000, 500000]
  },
  {
    img: V_COIN_01,
    type: 'V_COIN_01',
    discount: 2,
    menhgia: [10000, 20000, 50000, 100000, 200000, 300000, 500000, 1000000]
  },
  {
    img: SCOIN_01,
    type: 'SCOIN_01'
  },
  {
    img: SOHA_02,
    type: 'SOHA_02',
    discount: 2,
    menhgia: [10000, 20000, 50000, 100000, 200000, 500000, 1000000]
  },
  {
    img: APPOTA_CARD_01,
    type: 'APPOTA_CARD_01',
    discount: 2,
    menhgia: [50000, 100000, 200000, 300000, 500000, 1000000]
  },
  {
    img: GOSU_01,
    type: 'GOSU_01',
    discount: 2,

    menhgia: [10000, 20000, 50000, 100000, 200000, 500000, 1000000]
  },
  {
    img: BIT_01,
    type: 'BIT_01'
  },
  {
    img: ONCASH_01,
    type: 'ONCASH_01',
    discount: 2,
    menhgia: [20000, 50000, 100000, 200000, 500000]
  }
]

export const paymentMethod = [
  {
    title: 'VNPAYQR',
    image: qr,
    slug: 'vnpayqr',
    banks: []
  },
  {
    title: 'Ví điện tử',
    image: vi,
    slug: 'vi-dien-tu',
    banks: [
      {
        method: 'viettel-money',
        image: logo_ViettelPay
      }
    ]
  },
  {
    title: 'Ngân hàng',
    image: bank,
    slug: 'ngan-hang',
    banks: [
      {
        method: 'vietcombank',
        image: vietcombank_logo
      },
      {
        method: 'vietinbank',
        image: vietinbank_logo
      },
      {
        method: 'bidv',
        image: bidv_logo
      },
      {
        method: 'agribank',
        image: agribank_logo
      },
      {
        method: 'sacombank',
        image: sacombank_logo
      },
      {
        method: 'techcombank',
        image: techcombank_logo
      },
      {
        method: 'acb',
        image: acb_logo
      },
      {
        method: 'vpbank',
        image: vpbank_logo
      },
      {
        method: 'eximbank',
        image: eximbank_logo
      },
      {
        method: 'tpbank',
        image: tpbank_logo
      },
      {
        method: 'ncb',
        image: ncb_logo
      },
      {
        method: 'ojb',
        image: ojb_logo
      },
      {
        method: 'msbank',
        image: msbank_logo
      },
      {
        method: 'hdbank',
        image: hdbank_logo
      },
      {
        method: 'scb',
        image: scb_logo
      },
      {
        method: 'ivb',
        image: ivb_logo
      },
      {
        method: 'abbank',
        image: abbank_logo
      },
      {
        method: 'mbbank',
        image: mbbank_logo
      },
      {
        method: 'shb',
        image: shb_logo
      },
      {
        method: 'bacabank',
        image: bacabank_logo
      },
      {
        method: 'pvcombank',
        image: pvcombank_logo
      },
      {
        method: 'saigonbank',
        image: saigonbank
      },
      {
        method: 'woori',
        image: woori_logo
      },
      {
        method: 'vietbank',
        image: vietbank_logo
      },
      {
        method: 'vietabank',
        image: vietabank_logo
      },
      {
        method: 'vib',
        image: vib_logo
      },
      {
        method: 'vccb',
        image: vccb_logo
      }
    ]
  },
  {
    title: 'Thẻ ATM',
    image: atm,
    slug: 'the-atm',
    banks: [
      {
        method: 'vietcombank',
        image: vietcombank_logo
      },
      {
        method: 'vietinbank',
        image: vietinbank_logo
      },
      {
        method: 'bidv',
        image: bidv_logo
      },
      {
        method: 'agribank',
        image: agribank_logo
      },
      {
        method: 'sacombank',
        image: sacombank_logo
      },
      {
        method: 'techcombank',
        image: techcombank_logo
      },
      {
        method: 'acb',
        image: acb_logo
      },
      {
        method: 'vpbank',
        image: vpbank_logo
      },
      {
        method: 'eximbank',
        image: eximbank_logo
      },
      {
        method: 'tpbank',
        image: tpbank_logo
      },
      {
        method: 'ncb',
        image: ncb_logo
      },
      {
        method: 'ojb',
        image: ojb_logo
      },
      {
        method: 'msbank',
        image: msbank_logo
      },
      {
        method: 'hdbank',
        image: hdbank_logo
      },
      {
        method: 'scb',
        image: scb_logo
      },
      {
        method: 'ivb',
        image: ivb_logo
      },
      {
        method: 'abbank',
        image: abbank_logo
      },
      {
        method: 'mbbank',
        image: mbbank_logo
      },
      {
        method: 'shb',
        image: shb_logo
      },
      {
        method: 'bacabank',
        image: bacabank_logo
      },
      {
        method: 'pvcombank',
        image: pvcombank_logo
      },
      {
        method: 'saigonbank',
        image: saigonbank
      },
      {
        method: 'woori',
        image: woori_logo
      },
      {
        method: 'vietbank',
        image: vietbank_logo
      },
      {
        method: 'vietabank',
        image: vietabank_logo
      },
      {
        method: 'vib',
        image: vib_logo
      },
      {
        method: 'vccb',
        image: vccb_logo
      }
    ]
  },
]
