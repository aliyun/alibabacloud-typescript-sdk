// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCenBandwidthPackageRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * The tag key cannot be an empty string. The tag key can be up to 64 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * You can specify up to 20 tag keys.
   * 
   * @example
   * tagtest
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * The tag value can be an empty string or a string of up to 128 characters. It cannot start with `aliyun` or `acs:` and cannot contain `http://` or `https://`.
   * 
   * Each tag key corresponds to a tag value. You can specify up to 20 tag values.
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
   * Specifies whether to enable automatic payment. Valid values:
   * 
   * - **true**: yes.
   * 
   * - **false** (default): no.
   * 
   * If you disable automatic payment, you must go to the Order Hub in the console to complete the payment after you call this operation. Otherwise, the instance cannot be created.
   * 
   * @example
   * false
   */
  autoPay?: boolean;
  autoRenew?: boolean;
  autoRenewDuration?: number;
  /**
   * @remarks
   * The maximum bandwidth of the bandwidth plan. Unit: Mbps. Valid values: **2** to **10000**.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  bandwidth?: number;
  /**
   * @remarks
   * The billing method of the bandwidth plan. Set the value to **PREPAY**. This value specifies the subscription billing method.
   * 
   * @example
   * PREPAY
   */
  bandwidthPackageChargeType?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * Make sure that the client token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-001****
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the bandwidth plan.
   * 
   * The description can be empty or 1 to 256 characters in length. It cannot start with http\\:// or https\\://.
   * 
   * @example
   * namedesc
   */
  description?: string;
  /**
   * @remarks
   * The area where the network instance is deployed. Valid values:
   * 
   * - **China**: the Chinese mainland.
   * 
   * - **North-America**: North America.
   * 
   * - **Asia-Pacific**: Asia-Pacific.
   * 
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
   * The other area where the network instance is deployed. Valid values:
   * 
   * - **China**: the Chinese mainland.
   * 
   * - **North-America**: North America.
   * 
   * - **Asia-Pacific**: Asia-Pacific.
   * 
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
   * The name can be empty or 1 to 128 characters in length. It cannot start with http\\:// or https\\://.
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
   * - If you set **PricingCycle** to **Month**, valid values for **Period** are **1** to **3** and **6**.
   * 
   * - If you set **PricingCycle** to **Year**, valid values for **Period** are **1** to **3**.
   * 
   * > This parameter is required if you set **BandwidthPackageChargeType** to **PREPAY**.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The billing cycle of the bandwidth plan. Valid values:
   * 
   * - **Month** (default): The bandwidth plan is billed by month.
   * 
   * - **Year**: The bandwidth plan is billed by year.
   * 
   * @example
   * Month
   */
  pricingCycle?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The tags.
   * 
   * You can specify up to 20 tags.
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

