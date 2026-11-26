// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCommonBandwidthPackageRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the resource. You can specify up to 20 tag keys. If you specify this parameter, you cannot specify an empty string.
   * 
   * A tag key can be up to 128 characters in length. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the resource. You can specify up to 20 tag values. If you specify this parameter, you can specify an empty string.
   * 
   * A tag value can be up to 128 characters in length. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
   * 
   * @example
   * FinanceJoshua
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

export class CreateCommonBandwidthPackageRequest extends $dara.Model {
  /**
   * @remarks
   * The peak bandwidth of the Internet Shared Bandwidth instance. Unit: Mbit/s. 
   * 
   * <props="intl"><ph>Valid values: **1** to **1000**. Default value: **1**.</ph>
   * 
   * <props="china">
   * 
   * - If **InternetChargeType** is set to **PayByBandwidth**, which indicates that the billing method of the Internet Shared Bandwidth instance is pay-by-bandwidth, the valid values of **Bandwidth** are **2** to **20000**.
   * - If **InternetChargeType** is set to **PayBy95**, which indicates that the billing method of the Internet Shared Bandwidth instance is pay-by-enhanced-95th-percentile, the valid values of **Bandwidth** are **200** to **20000**.
   * - If **InternetChargeType** is set to **PayByDominantTraffic**, which indicates that the billing method of the Internet Shared Bandwidth instance is pay-by-dominant-traffic, the valid values of **Bandwidth** are **1** to **2000**.
   * 
   * Default value: **1000**.
   * 
   * This parameter is required.
   * 
   * @example
   * 1000
   */
  bandwidth?: number;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, but you must ensure that it is unique among different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request is unique.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-001****
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the Internet Shared Bandwidth instance.
   * 
   * The description must be 0 to 256 characters in length, and cannot start with `http://` or `https://`.
   * 
   * @example
   * abc
   */
  description?: string;
  /**
   * @remarks
   * The line type. Valid values:
   * - **BGP** (default): BGP (multi-ISP) line. BGP (multi-ISP) lines are supported in all regions.
   * - **BGP_PRO**: BGP (multi-ISP) Pro line. BGP (multi-ISP) Pro Internet Shared Bandwidth is supported only in the Hong Kong (China), Singapore, Japan (Tokyo), Philippines (Manila), Malaysia (Kuala Lumpur), Indonesia (Jakarta), and Thailand (Bangkok) regions.
   * 
   * If your account is added to the whitelist for single-ISP bandwidth, you can also select the following values:
   * - **ChinaTelecom**: China Telecom
   * - **ChinaUnicom**: China Unicom
   * - **ChinaMobile**: China Mobile
   * - **ChinaTelecom_L2**: China Telecom L2
   * - **ChinaUnicom_L2**: China Unicom L2
   * - **ChinaMobile_L2**: China Mobile L2
   * 
   * If you use Alibaba Finance Cloud in the China (Hangzhou) region, this parameter is required. Set the value to **BGP_FinanceCloud**.
   * 
   * @example
   * BGP
   */
  ISP?: string;
  /**
   * @remarks
   * The billing method of the Internet Shared Bandwidth instance. Valid values:
   * <props="intl">**PayByTraffic** (pay-by-data-transfer).
   * 
   * <props="china">
   * 
   * - **PayByBandwidth** (default): pay-by-bandwidth.
   * - **PayBy95**: pay-by-enhanced-95th-percentile.
   * - **PayByDominantTraffic**: pay-by-dominant-traffic.
   * 
   * @example
   * For China site: PayByBandwidth, for International site: PayByTraffic
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The name of the Internet Shared Bandwidth instance.
   * 
   * The name must be 0 to 128 characters in length, and cannot start with `http://` or `https://`.
   * 
   * @example
   * test123
   */
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The minimum bandwidth percentage of the Internet Shared Bandwidth instance. Set the value to **20**.
   * 
   * <props="china"><ph>This parameter is required when **InternetChargeType** is set to **PayBy95**.</ph>
   * >This parameter is supported only on the Alibaba Cloud China site.
   * 
   * @example
   * 20
   */
  ratio?: number;
  /**
   * @remarks
   * The region ID of the Internet Shared Bandwidth instance.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query region IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmxazdjdhd****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The security protection level.
   * 
   * - If this parameter is left empty, Anti-DDoS Basic is used by default.
   * 
   * - If this parameter is set to **AntiDDoS_Enhanced**, Anti-DDoS (Enhanced) is used.
   * 
   * <props="china"><ph>You can configure this parameter when **InternetChargeType** is set to **PayBy95**.</ph>
   * 
   * You can add up to 10 security protection levels.
   * 
   * > **[Deprecated]** This parameter is deprecated.
   * 
   * @example
   * AntiDDoS_Enhanced
   */
  securityProtectionTypes?: string[];
  /**
   * @remarks
   * The list of tags of the Internet Shared Bandwidth instance.
   */
  tag?: CreateCommonBandwidthPackageRequestTag[];
  /**
   * @remarks
   * The zone of the Internet Shared Bandwidth instance.
   * This parameter is required when you create an Internet Shared Bandwidth instance for a CloudBox.
   * 
   * @example
   * ap-southeast-1-lzdvn-cb
   */
  zone?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      clientToken: 'ClientToken',
      description: 'Description',
      ISP: 'ISP',
      internetChargeType: 'InternetChargeType',
      name: 'Name',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      ratio: 'Ratio',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityProtectionTypes: 'SecurityProtectionTypes',
      tag: 'Tag',
      zone: 'Zone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      clientToken: 'string',
      description: 'string',
      ISP: 'string',
      internetChargeType: 'string',
      name: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      ratio: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityProtectionTypes: { 'type': 'array', 'itemType': 'string' },
      tag: { 'type': 'array', 'itemType': CreateCommonBandwidthPackageRequestTag },
      zone: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.securityProtectionTypes)) {
      $dara.Model.validateArray(this.securityProtectionTypes);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

