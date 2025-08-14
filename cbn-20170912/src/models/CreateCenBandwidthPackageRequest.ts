// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCenBandwidthPackageRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * The tag keys cannot be an empty string. The tag key can be up to 64 characters in length, and cannot start with `acs:` or `aliyun`. It cannot contain `http://` or `https://`.
   * 
   * You can specify at most 20 tag keys.
   * 
   * @example
   * tagtest
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * The tag value can be 0 to 128 characters in length, and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * Each tag key must have a unique tag value. You can specify at most 20 tag values in each call.
   * 
   * @example
   * tagtest
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

export class CreateCenBandwidthPackageRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically complete the payment of the bandwidth plan. Valid values:
   * 
   * *   **true**: yes
   * *   **false** (default): no
   * 
   * If you set the parameter to false, go to Billing Management to complete the payment after you call this operation. The instance is created only after you complete the payment.
   * 
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the auto-renewal feature. Valid values:
   * 
   * *   **true**: enables auto-renewal.
   * *   **false** (default): disables auto-renewal.
   * 
   * > Only subscription bandwidth plans support auto-renewal.
   * 
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The auto-renewal duration. Unit: months. Valid values: **0** to **2147483647**. Default value: **1**.
   * 
   * @example
   * 1
   */
  autoRenewDuration?: number;
  /**
   * @remarks
   * The maximum bandwidth value of the bandwidth plan. Unit: Mbit/s. Valid values: **2** to **10000**.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  bandwidth?: number;
  /**
   * @remarks
   * The billing method of the bandwidth plan. Set the value to **PREPAY**, which indicates that the billing method is pay-as-you-go.
   * 
   * @example
   * PREPAY
   */
  bandwidthPackageChargeType?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-001****
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the bandwidth plan.
   * 
   * @example
   * namedesc
   */
  description?: string;
  /**
   * @remarks
   * The area where the network instance is deployed. Valid values:
   * 
   * *   **China**: Chinese mainland
   * *   **North-America**: North America
   * *   **Asia-Pacific**: Asia Pacific
   * *   **Europe**: Europe
   * 
   * This parameter is required.
   * 
   * @example
   * China
   */
  geographicRegionAId?: string;
  /**
   * @remarks
   * The area where the other network instance is deployed. Valid values: Valid values:
   * 
   * *   **China**: Chinese mainland
   * *   **North-America**: North America
   * *   **Asia-Pacific**: Asia Pacific
   * *   **Europe**: Europe
   * 
   * This parameter is required.
   * 
   * @example
   * China
   */
  geographicRegionBId?: string;
  /**
   * @remarks
   * The name of the bandwidth plan.
   * 
   * The name must be 2 to 128 characters in length, and can contain letters, digits, underscores (_), and hyphens (-). The name must start with a letter and cannot start with `http://` or `https://`.
   * 
   * @example
   * nametest
   */
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The subscription duration of the bandwidth plan. Default value: 1.
   * 
   * *   If **PricingCycle** is set to **Month**, set **Period** to a value from **1** to **3** or **6**.
   * *   If **PricingCycle** is set to **Year**, set **Period** to a value from **1** to **3**.
   * 
   * > This parameter is required when **BandwidthPackageChargeType** is set to **PREPAY**.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The billing cycle of the bandwidth plan. Valid values:
   * 
   * *   **Month** (default): billed on a monthly basis.
   * *   **Year**: billed on an annual basis.
   * 
   * @example
   * Month
   */
  pricingCycle?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The information about the tags.
   * 
   * You can specify at most 20 tags in each call.
   */
  tag?: CreateCenBandwidthPackageRequestTag[];
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      autoRenew: 'AutoRenew',
      autoRenewDuration: 'AutoRenewDuration',
      bandwidth: 'Bandwidth',
      bandwidthPackageChargeType: 'BandwidthPackageChargeType',
      clientToken: 'ClientToken',
      description: 'Description',
      geographicRegionAId: 'GeographicRegionAId',
      geographicRegionBId: 'GeographicRegionBId',
      name: 'Name',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      period: 'Period',
      pricingCycle: 'PricingCycle',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      autoRenew: 'boolean',
      autoRenewDuration: 'number',
      bandwidth: 'number',
      bandwidthPackageChargeType: 'string',
      clientToken: 'string',
      description: 'string',
      geographicRegionAId: 'string',
      geographicRegionBId: 'string',
      name: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      period: 'number',
      pricingCycle: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tag: { 'type': 'array', 'itemType': CreateCenBandwidthPackageRequestTag },
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

