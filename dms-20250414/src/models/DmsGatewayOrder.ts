// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DmsGatewayOrder extends $dara.Model {
  bizType?: string;
  chargeType?: string;
  commodityCode?: string;
  expireTime?: string;
  instanceId?: string;
  instanceType?: string;
  orderId?: number;
  payNum?: number;
  region?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      chargeType: 'ChargeType',
      commodityCode: 'CommodityCode',
      expireTime: 'ExpireTime',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      orderId: 'OrderId',
      payNum: 'PayNum',
      region: 'Region',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      chargeType: 'string',
      commodityCode: 'string',
      expireTime: 'string',
      instanceId: 'string',
      instanceType: 'string',
      orderId: 'number',
      payNum: 'number',
      region: 'string',
      state: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

