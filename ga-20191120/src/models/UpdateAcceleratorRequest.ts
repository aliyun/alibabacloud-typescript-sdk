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
   * *   **false**: disables automatic payment. This is the default value. After an order is generated, you must go to the [Order Center](https://usercenter2-intl.aliyun.com/order/list) to complete the payment.
   * *   **true**: enables automatic payment. Payments are automatically completed.
   * 
   * >  This parameter takes effect only if you call the operation to upgrade a GA instance.
   * 
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Specifies whether to automatically pay bills by using coupons. Default value: false. Valid values:
   * 
   * *   **true**: automatically pays bills by using coupons.
   * *   **false**: does not automatically pay bills by using coupons.
   * 
   * >  This parameter takes effect only if the **AutoPay** parameter is set to **true**.
   * 
   * @example
   * false
   */
  autoUseCoupon?: boolean;
  bandwidth?: number;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * >  If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
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
   * The name must be 1 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name must start with a letter.
   * 
   * @example
   * Accelerator
   */
  name?: string;
  /**
   * @remarks
   * The region where the GA instance is deployed. Set the value to **cn-hangzhou**.
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
   * *   **1**: Small Ⅰ
   * *   **2**: Small Ⅱ
   * *   **3**: Small Ⅲ
   * *   **5**: Medium Ⅰ
   * *   **8**: Medium Ⅱ
   * *   **10**: Medium Ⅲ
   * *   **20**: Large Ⅰ
   * *   **30**: Large Ⅱ
   * *   **40**: Large Ⅲ
   * *   **50**: Large Ⅳ
   * *   **60**: Large Ⅴ
   * *   **70**: Large Ⅵ
   * *   **80**: Large VⅡ
   * *   **90**: Large VⅢ
   * *   **100**: Super Large Ⅰ
   * *   **200**: Super Large Ⅱ
   * 
   * >  The Large Ⅲ specification and higher specifications are available only for accounts that are added to the whitelist. To use these specifications, contact your Alibaba Cloud account manager.
   * 
   * Different specifications provide different capabilities. For more information, see [Instance specifications](https://help.aliyun.com/document_detail/153127.html).
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

