// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeCloudPhoneNodeRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic payment. Default value: false.
   * 
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The display settings.
   * 
   * @example
   * {"dpi":320}
   */
  displayConfig?: string;
  /**
   * @remarks
   * The downstream bandwidth throttling. Unit: Mbit/s.
   * 
   * @example
   * 50
   */
  downBandwidthLimit?: number;
  /**
   * @remarks
   * The instance type.
   * 
   * @example
   * ac.max
   */
  instanceType?: string;
  /**
   * @remarks
   * The ID of the cloud phone matrix.
   * 
   * @example
   * cpn-0ugbptfu473fy****
   */
  nodeId?: string;
  /**
   * @remarks
   * The number of cloud phone instances. You can call the [DescribeSpec](https://help.aliyun.com/document_detail/2807299.html) operation to query the maximum and minimum limits on the number of instances.
   * 
   * @example
   * 20
   */
  phoneCount?: number;
  /**
   * @remarks
   * The local storage size. Valid values: 10 to 4000. Unit: GiB. If this parameter is left empty, the original size is retained.
   * 
   * @example
   * 10
   */
  phoneDataVolume?: number;
  /**
   * @remarks
   * The ID of the promotion.
   * 
   * @example
   * 50003308011****
   */
  promotionId?: string;
  /**
   * @remarks
   * The size of the shared storage. Unit: GiB.
   * 
   * @example
   * 100
   */
  shareDataVolume?: number;
  /**
   * @remarks
   * The size of the swap space.
   * 
   * @example
   * 0
   */
  swapSize?: number;
  /**
   * @remarks
   * The upstream bandwidth throttling. Unit: Mbit/s.
   * 
   * @example
   * 50
   */
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

