// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeCloudPhoneNodeRequest extends $dara.Model {
  /**
   * @remarks
   * Indicates if automatic payment is enabled. Default: false.
   * 
   * @example
   * false
   */
  autoPay?: boolean;
  displayConfig?: string;
  /**
   * @remarks
   * The downstream bandwidth limit, in Mbps.
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
   * The number of cloud phone instances. Call the [](t2729804.xdita#)operation to query the minimum and maximum number of allowed instances.
   * 
   * @example
   * 20
   */
  phoneCount?: number;
  /**
   * @remarks
   * The capacity of the internal storage, in GiB. Valid values: 10 to 4000. If you do not specify this parameter, the current capacity is retained.
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
   * The upstream bandwidth limit, in Mbps.
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

