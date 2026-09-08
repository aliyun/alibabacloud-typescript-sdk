// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCenBandwidthPackageRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the resource.
   * 
   * The tag key cannot be an empty string. The tag key can be up to 64 characters in length and cannot start with `aliyun` or `acs:`. The tag key cannot contain `http://` or `https://`.
   * 
   * You can specify up to 20 tag keys at a time.
   * 
   * @example
   * tagtest
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the resource.
   * 
   * The tag value cannot be empty. The tag value can be up to 128 characters in length and cannot start with aliyun or acs:. The tag value cannot contain http:// or https://.
   * 
   * Each tag key has a unique tag value. You can specify up to 20 tag values at a time.
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
   * Specifies whether to enable automatic payment for the bill of the bandwidth plan instance. Valid values:
   * 
   * - **true**: enables automatic payment.
   * 
   * - **false** (default): disables automatic payment.
   * 
   * If you set this parameter to false, go to the Order Center in the console to complete the payment after you invoke this operation. Otherwise, the instance cannot be created.
   * 
   * @example
   * false
   */
  autoPay?: boolean;
  autoRenew?: boolean;
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
   * The billing method of the bandwidth plan. Valid values: **PREPAY**, which indicates the subscription billing method.
   * 
   * @example
   * PREPAY
   */
  bandwidthPackageChargeType?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, but you must make sure that the value is unique among different requests. The token can be up to 64 ASCII characters in length.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-001****
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the bandwidth plan.
   * 
   * The description can be empty or 1 to 256 characters in length and cannot start with http:// or https://.
   * 
   * @example
   * namedesc
   */
  description?: string;
  /**
   * @remarks
   * The area to which the network instance belongs. Valid values:
   * 
   * - **China**: the Chinese mainland.
   * - **North-America**: North America.
   * - **Asia-Pacific**: Asia Pacific.
   * - **Europe**: Europe.
   * 
   * This parameter is required.
   * 
   * @example
   * China
   */
  geographicRegionAId?: string;
  /**
   * @remarks
   * The area to which the other network instance belongs. Valid values:
   * 
   * - **China**: the Chinese mainland.
   * - **North-America**: North America.
   * - **Asia-Pacific**: Asia Pacific.
   * - **Europe**: Europe.
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
   * The name can be empty or 1 to 128 characters in length and cannot start with http:// or https://.
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
   * - If **PricingCycle** is set to **Month**, valid values for **Period** are **1** to **3** and **6**.
   * - If **PricingCycle** is set to **Year**, valid values for **Period** are **1** to **3**.
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
   * - **Month** (default): billed on a monthly basis.
   * 
   * - **Year**: billed on a yearly basis.
   * 
   * @example
   * Month
   */
  pricingCycle?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The tag information.
   * 
   * You can specify up to 20 tags at a time.
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

