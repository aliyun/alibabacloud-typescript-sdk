// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateBandwidthPackageRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic payment. Valid values:
   * 
   * *   **false**: disables automatic payment. This is the default value. If you select this option, you must go to [Order Center](https://usercenter2-intl.aliyun.com/order/list) to complete the payment after an order is generated.
   * *   **true**: enables automatic payment. Payments are automatically completed.
   * 
   * >  This parameter takes effect only if you call the UpdateBandwidthPackage operation to upgrade a bandwidth plan.
   * 
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Specifies whether to use coupons. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * @example
   * false
   */
  autoUseCoupon?: boolean;
  /**
   * @remarks
   * The bandwidth value of the bandwidth plan. Unit: Mbit/s.
   * 
   * Valid values: **2** to **2000**.
   * 
   * @example
   * 2
   */
  bandwidth?: number;
  /**
   * @remarks
   * The ID of the bandwidth plan that you want to modify.
   * 
   * This parameter is required.
   * 
   * @example
   * gbwp-bp1sgzldyj6b4q7cx****
   */
  bandwidthPackageId?: string;
  /**
   * @remarks
   * The type of bandwidth. Valid values:
   * 
   * *   **Basic**
   * *   **Enhanced**
   * *   **Advanced**
   * 
   * >  You can upgrade **Basic** bandwidth to **Enhanced** bandwidth or downgrade Enhanced bandwidth to Basic bandwidth. You cannot change **Advanced** bandwidth to another type of bandwidth.
   * 
   * @example
   * Basic
   */
  bandwidthType?: string;
  /**
   * @remarks
   * The description of the bandwidth plan.
   * 
   * The description can be up to 256 characters in length.
   * 
   * @example
   * testDescription
   */
  description?: string;
  /**
   * @remarks
   * The name of the bandwidth plan. The name must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name must start with a letter.
   * 
   * @example
   * testName
   */
  name?: string;
  /**
   * @remarks
   * The region ID of the GA instance. Set the value to **cn-hangzhou**.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      autoUseCoupon: 'AutoUseCoupon',
      bandwidth: 'Bandwidth',
      bandwidthPackageId: 'BandwidthPackageId',
      bandwidthType: 'BandwidthType',
      description: 'Description',
      name: 'Name',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      autoUseCoupon: 'boolean',
      bandwidth: 'number',
      bandwidthPackageId: 'string',
      bandwidthType: 'string',
      description: 'string',
      name: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

