// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateBandwidthPackageRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic payment. Valid values:
   * 
   * - **false** (default): disables automatic payment. After an order is generated, you must go to the <props="china">[Order Hub](https://usercenter2.aliyun.com/order/list)<props="intl">[Order Hub](https://usercenter2-intl.aliyun.com/order/list) to complete the payment.
   * 
   * - **true**: enables automatic payment. The system automatically pays the bill.
   * 
   * > This parameter is required only for upgrade orders.
   * 
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Specifies whether to use coupons. Valid values:
   * 
   * - **true**: yes.
   * 
   * - **false** (default): no.
   * 
   * @example
   * false
   */
  autoUseCoupon?: boolean;
  /**
   * @remarks
   * The bandwidth of the bandwidth plan. Unit: Mbit/s.
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
   * The bandwidth type. Valid values:
   * 
   * - **Basic**: standard bandwidth.
   * 
   * - **Enhanced**: enhanced bandwidth.
   * 
   * - **Advanced**: premium bandwidth.
   * 
   * > You can upgrade a Basic bandwidth plan to Enhanced, or downgrade an **Enhanced** bandwidth plan to **Basic**. You cannot change the bandwidth type of an **Advanced** bandwidth plan.
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
   * The name of the bandwidth plan.
   * The name must be 1 to 128 characters in length, start with a letter or a Chinese character, and can contain letters, digits, periods (.), underscores (_), and hyphens (-).
   * 
   * @example
   * testName
   */
  name?: string;
  /**
   * @remarks
   * The ID of the region where the Global Accelerator instance is deployed. Set the value to **cn-hangzhou**.
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

