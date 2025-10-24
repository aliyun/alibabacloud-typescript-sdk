// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeCloudPhoneNodeRequest extends $dara.Model {
  autoPay?: boolean;
  displayConfig?: string;
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
  shareDataVolume?: number;
  swapSize?: number;
  upBandwidthLimit?: number;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      displayConfig: 'DisplayConfig',
      downBandwidthLimit: 'DownBandwidthLimit',
      instanceType: 'InstanceType',
      nodeId: 'NodeId',
      phoneCount: 'PhoneCount',
      phoneDataVolume: 'PhoneDataVolume',
      promotionId: 'PromotionId',
      shareDataVolume: 'ShareDataVolume',
      swapSize: 'SwapSize',
      upBandwidthLimit: 'UpBandwidthLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      displayConfig: 'string',
      downBandwidthLimit: 'number',
      instanceType: 'string',
      nodeId: 'string',
      phoneCount: 'number',
      phoneDataVolume: 'number',
      promotionId: 'string',
      shareDataVolume: 'number',
      swapSize: 'number',
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

