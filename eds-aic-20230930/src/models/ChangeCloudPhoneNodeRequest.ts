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
   * The cloud phone matrix ID.
   * 
   * @example
   * cpn-0ugbptfu473fy****
   */
  nodeId?: string;
  /**
   * @remarks
   * The number of cloud phone instances. Call the [DescribeSpec](https://help.aliyun.com/document_detail/2807299.html) operation to query the maximum and minimum instance count limits.
   * 
   * @example
   * 20
   */
  phoneCount?: number;
  /**
   * @remarks
   * The device storage size. Valid values: 10 GiB to 4000 GiB. If this parameter is left empty, the current size is retained.
   * 
   * @example
   * 10
   */
  phoneDataVolume?: number;
  /**
   * @remarks
   * The promotion ID.
   * 
   * @example
   * 50003308011****
   */
  promotionId?: string;
  shareDataVolume?: number;
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

