// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAcceleratorRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the GA instance.
   * 
   * This parameter is required.
   * 
   * @example
   * ga-bp1odcab8tmno0hdq****
   */
  acceleratorId?: string;
  /**
   * @remarks
   * Specifies whether to enable automatic payment. Valid values:
   * 
   * - **false** (default): Disables automatic payment. After an order is generated, you must go to the [Order Hub](https://usercenter2-intl.aliyun.com/order/list) to complete the payment.
   * 
   * - **true**: Enables automatic payment. The system automatically pays the bill.
   * 
   * > This parameter is valid only for upgrade orders.
   * 
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Specifies whether to automatically use a coupon to pay for the bill. Valid values:
   * 
   * - **true**: Use a coupon.
   * 
   * - **false** (default): Do not use a coupon.
   * 
   * > This parameter is valid only if **AutoPay** is set to **true**.
   * 
   * @example
   * false
   */
  autoUseCoupon?: boolean;
  /**
   * @remarks
   * The bandwidth of the standard GA instance. Unit: **Mbps**.
   * 
   * Valid values: 200 to 5000.
   * 
   * > This parameter is valid only when the access mode of the acceleration area is Anycast.
   * 
   * @example
   * 200
   */
  bandwidth?: number;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * Generate a parameter value from your client to make sure that the value is unique among different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the request as the **ClientToken**. The **RequestId** of each API request may be different.
   * 
   * @example
   * 123e4567****
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the GA instance. The description can be up to 200 characters in length.
   * 
   * @example
   * Accelerator
   */
  description?: string;
  /**
   * @remarks
   * The name of the GA instance.
   * 
   * The name must be 1 to 128 characters in length, start with a letter or a Chinese character, and can contain digits, periods (.), underscores (_), and hyphens (-).
   * 
   * @example
   * Accelerator
   */
  name?: string;
  /**
   * @remarks
   * The region ID of the GA instance. Set the value to **cn-hangzhou**.
   * 
   * @example
   * cn-hangzhou
   * 
   * @deprecated
   */
  regionId?: string;
  /**
   * @remarks
   * The specification of the GA instance. Valid values:
   * 
   * - **1**: Small I
   * 
   * - **2**: Small II
   * 
   * - **3**: Small III
   * 
   * - **5**: Medium I
   * 
   * - **8**: Medium II
   * 
   * - **10**: Medium III
   * 
   * - **20**: Large I
   * 
   * - **30**: Large II
   * 
   * - **40**: Large III
   * 
   * - **50**: Large IV
   * 
   * - **60**: Large V
   * 
   * - **70**: Large VI
   * 
   * - **80**: Large VII
   * 
   * - **90**: Large VIII
   * 
   * - **100**: Ultra-large I
   * 
   * - **200**: Ultra-large II
   * 
   * > Large III and higher specifications are available only to whitelisted users. To use these specifications, contact your account manager.
   * 
   * The definitions of instance types vary. For more information, see [Instance types](https://help.aliyun.com/document_detail/153127.html).
   * 
   * @example
   * 1
   */
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      autoPay: 'AutoPay',
      autoUseCoupon: 'AutoUseCoupon',
      bandwidth: 'Bandwidth',
      clientToken: 'ClientToken',
      description: 'Description',
      name: 'Name',
      regionId: 'RegionId',
      spec: 'Spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      autoPay: 'boolean',
      autoUseCoupon: 'boolean',
      bandwidth: 'number',
      clientToken: 'string',
      description: 'string',
      name: 'string',
      regionId: 'string',
      spec: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

