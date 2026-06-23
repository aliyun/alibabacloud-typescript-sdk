// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCommonBandwidthPackageRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the resource. You can specify up to 20 tag keys. The tag key cannot be an empty string.
   * 
   * The tag key can be up to 128 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the resource. You can specify up to 20 tag values. The tag value can be an empty string.
   * 
   * The tag value can be up to 128 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
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
   * <props="intl"><ph>Default value range: **1** to **1000**. Default value: **1**.</ph>
   * 
   * <props="china">
   * 
   * - If **InternetChargeType** is set to **PayByBandwidth**, which indicates that the billable method of the Internet Shared Bandwidth instance is pay-by-bandwidth, the default value range of **Bandwidth** is **2** to **20000**.
   * - If **InternetChargeType** is set to **PayBy95**, which indicates that the billable method of the Internet Shared Bandwidth instance is pay-by-enhanced-95th-percentile, the default value range of **Bandwidth** is **200** to **20000**.
   * - If **InternetChargeType** is set to **PayByDominantTraffic**, which indicates that the billable method of the Internet Shared Bandwidth instance is pay-by-dominant-traffic, the default value range of **Bandwidth** is **1** to **2000**.
   * 
   *  Default value: **1000**.
   * .
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
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The ClientToken value can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** may be different for each API request.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-001****
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the Internet Shared Bandwidth instance.
   * 
   * The description must be 0 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * abc
   */
  description?: string;
  /**
   * @remarks
   * The line type. Valid values:
   * - **BGP** (default): BGP (multi-ISP) lines. All regions support BGP (multi-ISP) lines.
   * - **BGP_PRO**: BGP (multi-ISP) premium lines. Currently, only the Hong Kong (China), Singapore, Japan (Tokyo), Philippines (Manila), Malaysia (Kuala Lumpur), Indonesia (Jakarta), and Thailand (Bangkok) regions support BGP (multi-ISP) premium Internet Shared Bandwidth instances.
   * 
   * If you are a single-ISP bandwidth whitelist user, you can also select the following types:
   * - **ChinaTelecom**: China Telecom
   * - **ChinaUnicom**: China Unicom
   * - **ChinaMobile**: China Mobile
   * - **ChinaTelecom_L2**: China Telecom L2
   * - **ChinaUnicom_L2**: China Unicom L2
   * - **ChinaMobile_L2**: China Mobile L2
   * 
   * If you are a Finance Cloud user in the China (Hangzhou) region, this parameter is required. Set the value to **BGP_FinanceCloud**.
   * 
   * @example
   * BGP
   */
  ISP?: string;
  /**
   * @remarks
   * The billable method of the Internet Shared Bandwidth instance. Valid values:
   * <props="intl">**PayByTraffic** (pay-by-data-transfer).
   * 
   * <props="china">
   * 
   * - **PayByBandwidth** (default): pay-by-bandwidth.
   * - **PayBy95**: pay-by-enhanced-95th-percentile.
   * - **PayByDominantTraffic**: pay-by-dominant-traffic.
   * .
   * 
   * @example
   * 中国站示例值：PayByBandwidth，国际站示例值：PayByTraffic
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The name of the Internet Shared Bandwidth instance.
   * 
   * The name must be 0 to 128 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * test123
   */
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The minimum bandwidth commitment percentage of the Internet Shared Bandwidth instance. Set the value to **20**.
   * 
   *  <props="china"><ph>This parameter is required when **InternetChargeType** is set to **PayBy95**.</ph>
   * >This parameter is supported only on the China site.
   * 
   * @example
   * 20
   */
  ratio?: number;
  /**
   * @remarks
   * The region ID of the Internet Shared Bandwidth instance.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
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
   * - If you do not set this parameter, Anti-DDoS Origin Basic is used by default.
   * 
   * - If you set this parameter to **AntiDDoS_Enhanced**, Anti-DDoS Origin Enhanced is used.
   * 
   * <props="china"><ph>You can set this parameter when **InternetChargeType** is set to **PayBy95**.</ph>
   * 
   * You can specify up to 10 security protection levels.
   * 
   * > This parameter is deprecated.
   * 
   * @example
   * AntiDDoS_Enhanced
   */
  securityProtectionTypes?: string[];
  /**
   * @remarks
   * The list of tags for the Internet Shared Bandwidth instance.
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

