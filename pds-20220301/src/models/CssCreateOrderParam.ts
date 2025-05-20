// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CssInstanceCommodity } from "./CssInstanceCommodity";


export class CssCreateOrderParam extends $dara.Model {
  agentId?: string;
  autoPay?: boolean;
  autoUseCoupon?: boolean;
  bid?: string;
  buyerId?: number;
  certificate?: string;
  childId?: number;
  cilentIp?: string;
  commodities?: CssInstanceCommodity[];
  createrNick?: string;
  cssAuthRequestParam?: any;
  fromApp?: string;
  language?: string;
  marketType?: number;
  memo?: string;
  orderOrigin?: string;
  orderParams?: { [key: string]: string };
  payerId?: number;
  planGroupId?: number;
  planId?: number;
  planInstanceId?: string;
  promotionCode?: string;
  promotionInputParam?: any;
  requestId?: string;
  skipChannel?: boolean;
  token?: string;
  transientAccess?: any;
  umidToken?: string;
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      agentId: 'agentId',
      autoPay: 'autoPay',
      autoUseCoupon: 'autoUseCoupon',
      bid: 'bid',
      buyerId: 'buyerId',
      certificate: 'certificate',
      childId: 'childId',
      cilentIp: 'cilentIp',
      commodities: 'commodities',
      createrNick: 'createrNick',
      cssAuthRequestParam: 'cssAuthRequestParam',
      fromApp: 'fromApp',
      language: 'language',
      marketType: 'marketType',
      memo: 'memo',
      orderOrigin: 'orderOrigin',
      orderParams: 'orderParams',
      payerId: 'payerId',
      planGroupId: 'planGroupId',
      planId: 'planId',
      planInstanceId: 'planInstanceId',
      promotionCode: 'promotionCode',
      promotionInputParam: 'promotionInputParam',
      requestId: 'requestId',
      skipChannel: 'skipChannel',
      token: 'token',
      transientAccess: 'transientAccess',
      umidToken: 'umidToken',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      autoPay: 'boolean',
      autoUseCoupon: 'boolean',
      bid: 'string',
      buyerId: 'number',
      certificate: 'string',
      childId: 'number',
      cilentIp: 'string',
      commodities: { 'type': 'array', 'itemType': CssInstanceCommodity },
      createrNick: 'string',
      cssAuthRequestParam: 'any',
      fromApp: 'string',
      language: 'string',
      marketType: 'number',
      memo: 'string',
      orderOrigin: 'string',
      orderParams: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      payerId: 'number',
      planGroupId: 'number',
      planId: 'number',
      planInstanceId: 'string',
      promotionCode: 'string',
      promotionInputParam: 'any',
      requestId: 'string',
      skipChannel: 'boolean',
      token: 'string',
      transientAccess: 'any',
      umidToken: 'string',
      userId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.commodities)) {
      $dara.Model.validateArray(this.commodities);
    }
    if(this.orderParams) {
      $dara.Model.validateMap(this.orderParams);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

