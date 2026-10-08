// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyRCInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic payment. Valid values:
   * - **true** (default): Automatic payment is enabled. Make sure that your account balance is sufficient.
   * - **false**: An order is generated but payment is not automatically made.
   * > If your payment method balance is insufficient, set the parameter AutoPay to false. An unpaid order is generated, and you can log on to the ApsaraDB RDS console to complete the payment.
   * >
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Specifies whether to automatically use coupons. Valid values:
   * * **true** (default): Coupons are automatically used.
   * * **false**: Coupons are not used.
   * 
   * > If you use coupons and then perform a downgrade, the amount deducted by coupons is not refunded.
   * 
   * @example
   * true
   */
  autoUseCoupon?: boolean;
  businessInfo?: string;
  /**
   * @remarks
   * The type of the Upgrade/Downgrade. Valid values:
   * > This parameter does not need to be uploaded. The system can automatically determine whether the change is an upgrade or a downgrade. If you upload this parameter, follow the rules below.
   * - **Up** (default): Upgrades the instance type. Make sure that your account payment method balance is sufficient.
   * - **Down**: Downgrades the instance type. Set Direction to down when the instance type specified by InstanceType is lower than the current instance type.
   * 
   * @example
   * Up
   */
  direction?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * * **true**: Performs a dry run without creating the instance. The system checks items such as the request parameters, request format, service limits, and available resources.
   * * **false** (default): Sends the request. If the request passes the check, the instance is created.
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
   * The target instance type. For information about the instance types supported by RDS Custom instances, see [RDS Custom instance types](https://help.aliyun.com/document_detail/2844823.html).
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
   * - If **RebootWhenFinished** is set to **false** and the instance status is **Running**, you **must** set a restart time within 48 hours.
   * - The time follows the ISO 8601 standard in UTC+0. Format: `yyyy-MM-ddTHH:mmZ`.
   * 
   * @example
   * 2025-04-03T12:05Z
   */
  rebootTime?: string;
  /**
   * @remarks
   * Specifies whether to immediately restart the instance after the specification change is complete. Valid values:
   * 
   * - **true** (default): The instance is restarted immediately.
   * - **false**: The instance is not restarted.
   * 
   * > If the instance is in the **Stopped** state, the instance remains in the Stopped state and is not restarted even if you set `RebootWhenFinished=true`.
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

