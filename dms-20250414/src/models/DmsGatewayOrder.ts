// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DmsGatewayOrder extends $dara.Model {
  bizType?: string;
  chargeType?: string;
  commodityCode?: string;
  expireTime?: string;
  freeOrder?: boolean;
  gmtCreate?: string;
  instanceId?: string;
  instanceType?: string;
  orderId?: number;
  payNum?: number;
  region?: string;
  state?: string;
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      chargeType: 'ChargeType',
      commodityCode: 'CommodityCode',
      expireTime: 'ExpireTime',
      freeOrder: 'FreeOrder',
      gmtCreate: 'GmtCreate',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      orderId: 'OrderId',
      payNum: 'PayNum',
      region: 'Region',
      state: 'State',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      chargeType: 'string',
      commodityCode: 'string',
      expireTime: 'string',
      freeOrder: 'boolean',
      gmtCreate: 'string',
      instanceId: 'string',
      instanceType: 'string',
      orderId: 'number',
      payNum: 'number',
      region: 'string',
      state: 'string',
      tags: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

