// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CssPurchase } from "./CssPurchase";


export class CssProduce extends $dara.Model {
  bid?: string;
  buyerId?: number;
  childId?: number;
  fromApp?: string;
  orderId?: number;
  payerId?: number;
  purchases?: CssPurchase[];
  requestId?: string;
  skipChannel?: boolean;
  token?: string;
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      bid: 'bid',
      buyerId: 'buyerId',
      childId: 'childId',
      fromApp: 'fromApp',
      orderId: 'orderId',
      payerId: 'payerId',
      purchases: 'purchases',
      requestId: 'requestId',
      skipChannel: 'skipChannel',
      token: 'token',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bid: 'string',
      buyerId: 'number',
      childId: 'number',
      fromApp: 'string',
      orderId: 'number',
      payerId: 'number',
      purchases: { 'type': 'array', 'itemType': CssPurchase },
      requestId: 'string',
      skipChannel: 'boolean',
      token: 'string',
      userId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.purchases)) {
      $dara.Model.validateArray(this.purchases);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

