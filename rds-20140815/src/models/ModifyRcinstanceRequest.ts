// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyRCInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic payment. Valid values:
   * - **true** (default): enables automatic payment. Make sure that your account balance is sufficient.
   * - **false**: generates an order without deducting fees.
   * > If your account balance is insufficient, you can set the AutoPay parameter to false. An unpaid order is generated. You can log on to the ApsaraDB RDS console to complete the payment.
   * >
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Specifies whether to automatically use coupons. Valid values:
   * * **true**: automatically uses coupons. This is the default value.
   * * **false**: does not automatically use coupons.
   * 
   * > If you use a coupon and then downgrade the instance type, the amount deducted by the voucher is not refunded.
   * 
   * @example
   * true
   */
  autoUseCoupon?: boolean;
  businessInfo?: string;
  /**
   * @remarks
   * The instance upgrade or downgrade type. Valid values:
   * > You do not need to specify this parameter. The system automatically determines whether to upgrade or downgrade the instance type. If you want to specify it, follow these rules:
   * - **Up** (default): upgrades the instance type. Make sure that your account balance is sufficient.
   * - **Down**: downgrades the instance type. When the instance type specified in InstanceType is lower than the current instance type, set Direction to Down.
   * 
   * @example
   * Up
   */
  direction?: string;
  /**
   * @remarks
   * Specifies whether to perform a precheck on the instance creation operation. Valid values:
   * * **true**: performs a precheck without creating an instance. Check items include request parameters, request format, service limits, and inventory.
   * * **false**: sends a normal request and directly creates the instance after the request passes the precheck. This is the default value.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rm-uf62br2491p5l****
   */
  instanceId?: string;
  /**
   * @remarks
   * The destination instance type. For more information about the instance types supported by RDS Target instances, see [RDS Target instance types](https://help.aliyun.com/document_detail/2844823.html).
   * 
   * @example
   * mysql.i8.large.2cm
   */
  instanceType?: string;
  /**
   * @remarks
   * The coupon code.
   * 
   * @example
   * 72329885****
   */
  promotionCode?: string;
  /**
   * @remarks
   * The restart time of the instance.
   * 
   * - If **RebootWhenFinished** is set to **false** and the instance is in the **Running** state, you **must** specify a restart time within 48 hours.
   * - Specify the time in the ISO 8601 standard in the `yyyy-MM-ddTHH:mmZ` format. The time must be in UTC.
   * 
   * @example
   * 2025-04-03T12:05Z
   */
  rebootTime?: string;
  /**
   * @remarks
   * Specifies whether to immediately restart the instance after the instance type change is complete. Valid values:
   * 
   * - **true**: restarts the instance immediately. This is the default value.
   * - **false**: does not restart the instance immediately.
   * 
   * > If the instance is in the **Stopped** state, it remains in the Stopped state and is not restarted even if you set RebootWhenFinished to true.
   * 
   * @example
   * true
   */
  rebootWhenFinished?: boolean;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * @example
   * cn-hagnzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      autoUseCoupon: 'AutoUseCoupon',
      businessInfo: 'BusinessInfo',
      direction: 'Direction',
      dryRun: 'DryRun',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      promotionCode: 'PromotionCode',
      rebootTime: 'RebootTime',
      rebootWhenFinished: 'RebootWhenFinished',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      autoUseCoupon: 'boolean',
      businessInfo: 'string',
      direction: 'string',
      dryRun: 'boolean',
      instanceId: 'string',
      instanceType: 'string',
      promotionCode: 'string',
      rebootTime: 'string',
      rebootWhenFinished: 'boolean',
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

