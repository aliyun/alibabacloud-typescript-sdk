// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeCloudPhoneNodeRequest extends $dara.Model {
  autoPay?: boolean;
  downBandwidthLimit?: number;
  /**
   * @example
   * ac.max
   */
  instanceType?: string;
  /**
   * @example
   * cpn-0ugbptfu473fy****
   */
  nodeId?: string;
  /**
   * @example
   * 20
   */
  phoneCount?: number;
  phoneDataVolume?: number;
  promotionId?: string;
  upBandwidthLimit?: number;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      downBandwidthLimit: 'DownBandwidthLimit',
      instanceType: 'InstanceType',
      nodeId: 'NodeId',
      phoneCount: 'PhoneCount',
      phoneDataVolume: 'PhoneDataVolume',
      promotionId: 'PromotionId',
      upBandwidthLimit: 'UpBandwidthLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      downBandwidthLimit: 'number',
      instanceType: 'string',
      nodeId: 'string',
      phoneCount: 'number',
      phoneDataVolume: 'number',
      promotionId: 'string',
      upBandwidthLimit: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

