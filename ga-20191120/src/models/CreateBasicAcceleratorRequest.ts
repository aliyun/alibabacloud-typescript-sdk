// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBasicAcceleratorRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. The tag key cannot be an empty string.
   * 
   * The tag key can be up to 64 characters in length and cannot contain `http://` or `https://`. The tag key cannot start with `aliyun` or `acs:`.
   * 
   * You can specify up to 20 tag keys.
   * 
   * @example
   * tag-key
   */
  key?: string;
  /**
   * @remarks
   * The tag value. The tag value cannot be an empty string.
   * 
   * The tag value can be up to 128 characters in length and cannot contain `http://` or `https://`. It cannot start with `acs:` or `aliyun`.
   * 
   * You can specify up to 20 tag values.
   * 
   * @example
   * tag-value
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBasicAcceleratorRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic payment. Valid values:
   * 
   * *   **false:** disables automatic payment. If you select this option, you must go to the Order Center to complete the payment after an order is generated. This is the default value.
   * *   **true:** enables automatic payment. Payments are automatically completed.
   * 
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal for the basic GA instance. Valid values:
   * 
   * *   **true:** enables auto-renewal for the basic GA instance.
   * *   **false:** disables auto-renewal for the basic GA instance. This is the default value.
   * 
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The auto-renewal duration. Unit: months.
   * 
   * Valid values: **1** to **12**. Default value: **1**.
   * 
   * >  This parameter takes effect only when the **AutoPay** parameter is set to **true**.
   * 
   * @example
   * 1
   */
  autoRenewDuration?: number;
  /**
   * @remarks
   * Specifies whether to automatically apply coupons to your bills. Valid values:
   * 
   * *   **true:** automatically applies coupons to your bills.
   * *   **false:** does not automatically apply coupons to your bills. This is the default value.
   * 
   * >  This parameter takes effect only when the **AutoPay** parameter is set to **true**.
   * 
   * @example
   * false
   */
  autoUseCoupon?: string;
  /**
   * @remarks
   * The bandwidth billing method. Valid values:
   * 
   * *   **BandwidthPackage:** billed based on bandwidth plans.
   * *   **CDT:** billed based on data transfer. The bills are managed by using Cloud Data Transfer (CDT).
   * *   **CDT95:** billed based on the 95th percentile bandwidth. The bills are managed by using Cloud Data Transfer (CDT). This bandwidth billing method is not available by default. Contact your Alibaba Cloud account manager for more information.
   * 
   * @example
   * CDT
   */
  bandwidthBillingType?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * *   **PREPAY** (default)
   * *   **POSTPAY**
   * 
   * @example
   * PREPAY
   */
  chargeType?: string;
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
   * Specifies whether to perform a dry run. Valid values:
   * 
   * *   **true:** performs a dry run. The system checks the required parameters, request syntax, and limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   **false**: performs a dry run and sends the request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed. This is the default value.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The subscription duration of the GA instance.
   * 
   * *   If you set **PricingCycle** to **Month**, the valid values for **Duration** are **1** to **9**.
   * *   If you set **PricingCycle** to **Year**, the valid values for **Duration** are **1** to **3**.
   * 
   * @example
   * 1
   */
  duration?: number;
  /**
   * @remarks
   * The billing cycle. Valid values:
   * 
   * *   **Month**
   * *   **Year**
   * 
   * @example
   * Month
   */
  pricingCycle?: string;
  /**
   * @remarks
   * The code of the coupon.
   * 
   * >  This parameter takes effect only for accounts registered on the international site (alibabacloud.com).
   * 
   * @example
   * 50003298014****
   */
  promotionOptionNo?: string;
  /**
   * @remarks
   * The ID of the region where the basic GA instance is deployed. Set the value to **cn-hangzhou**.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the basic GA instance belongs.
   * 
   * @example
   * rg-acfmxshhcsn****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags of the basic GA instance.
   */
  tag?: CreateBasicAcceleratorRequestTag[];
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      autoRenew: 'AutoRenew',
      autoRenewDuration: 'AutoRenewDuration',
      autoUseCoupon: 'AutoUseCoupon',
      bandwidthBillingType: 'BandwidthBillingType',
      chargeType: 'ChargeType',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      duration: 'Duration',
      pricingCycle: 'PricingCycle',
      promotionOptionNo: 'PromotionOptionNo',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      autoRenew: 'boolean',
      autoRenewDuration: 'number',
      autoUseCoupon: 'string',
      bandwidthBillingType: 'string',
      chargeType: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      duration: 'number',
      pricingCycle: 'string',
      promotionOptionNo: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': CreateBasicAcceleratorRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

