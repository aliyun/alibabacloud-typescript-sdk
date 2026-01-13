// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AccountCredentialDTO } from "./AccountCredentialDto";


export class LrOrder extends $dara.Model {
  accountCredentials?: AccountCredentialDTO[];
  aliUid?: string;
  commodityCode?: string;
  commodityId?: string;
  commoditySpec?: string;
  customerName?: string;
  eventTime?: string;
  expirationTime?: string;
  gmtCreate?: string;
  gmtModified?: string;
  instanceId?: string;
  orderCategory?: string;
  orderId?: number;
  qps?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      accountCredentials: 'accountCredentials',
      aliUid: 'aliUid',
      commodityCode: 'commodityCode',
      commodityId: 'commodityId',
      commoditySpec: 'commoditySpec',
      customerName: 'customerName',
      eventTime: 'eventTime',
      expirationTime: 'expirationTime',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      instanceId: 'instanceId',
      orderCategory: 'orderCategory',
      orderId: 'orderId',
      qps: 'qps',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountCredentials: { 'type': 'array', 'itemType': AccountCredentialDTO },
      aliUid: 'string',
      commodityCode: 'string',
      commodityId: 'string',
      commoditySpec: 'string',
      customerName: 'string',
      eventTime: 'string',
      expirationTime: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      instanceId: 'string',
      orderCategory: 'string',
      orderId: 'number',
      qps: 'number',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.accountCredentials)) {
      $dara.Model.validateArray(this.accountCredentials);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

