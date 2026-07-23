// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ManagedDaOrderVO extends $dara.Model {
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ss.SSSZ
   */
  expireTime?: string;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ss.SSSZ
   */
  gmtCreate?: string;
  instanceId?: string;
  orderId?: number;
  payNum?: number;
  region?: string;
  state?: string;
  subscriptionPlan?: string;
  static names(): { [key: string]: string } {
    return {
      expireTime: 'expireTime',
      gmtCreate: 'gmtCreate',
      instanceId: 'instanceId',
      orderId: 'orderId',
      payNum: 'payNum',
      region: 'region',
      state: 'state',
      subscriptionPlan: 'subscriptionPlan',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireTime: 'string',
      gmtCreate: 'string',
      instanceId: 'string',
      orderId: 'number',
      payNum: 'number',
      region: 'string',
      state: 'string',
      subscriptionPlan: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

