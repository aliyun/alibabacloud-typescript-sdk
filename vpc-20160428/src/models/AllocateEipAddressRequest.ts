// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AllocateEipAddressRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the resource. You can specify up to 20 tag keys. The tag key cannot be an empty string.
   * 
   * A tag key can be up to 128 characters in length. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value. Specify the value in the Tag.N.Value format. Valid values of N: 1 to 20. The tag value cannot be an empty string. The tag value can be up to 128 characters in length. It cannot start with aliyun or acs:, and cannot contain http:// or https://.
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

export class AllocateEipAddressRequest extends $dara.Model {
  /**
   * @remarks
   * The special activity ID. You do not need to configure this parameter.
   * 
   * @example
   * 123456
   */
  activityId?: number;
  /**
   * @remarks
   * Specifies whether to enable automatic payment. Valid values:
   * 
   * - **false** (default): Automatic payment is disabled. After an order is generated, go to the Order Center to complete the payment.
   * 
   * - **true**: Automatic payment is enabled. The order is automatically paid.
   * 
   * This parameter is required if **InstanceChargeType** is set to **PrePaid**. This parameter is optional if **InstanceChargeType** is set to **PostPaid**.
   * 
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The maximum bandwidth of the EIP. Unit: Mbit/s.
   * 
   * - If **InstanceChargeType** is set to **PostPaid** and **InternetChargeType** is set to **PayByBandwidth**, valid values for **Bandwidth** are **1** to **500**.
   * 
   * - If **InstanceChargeType** is set to **PostPaid** and **InternetChargeType** is set to **PayByTraffic**, valid values for **Bandwidth** are **1** to **200**.
   * 
   * - If **InstanceChargeType** is set to **PrePaid**, valid values for **Bandwidth** are **1** to **1000**.
   * 
   * Default value: **5** Mbit/s.
   * 
   * @example
   * 5
   */
  bandwidth?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. **ClientToken** can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** may be different for each API request.
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe637760
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the EIP instance.
   * 
   * The description must be 0 to 256 characters in length and cannot start with `http://` or `https://`.
   * > This parameter is not supported when you create a subscription EIP instance.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The line type. Valid values:
   * - **BGP** (default): BGP (multi-ISP) line. All regions support BGP (multi-ISP) EIPs.
   * - **BGP_PRO**: BGP (multi-ISP) Pro line. Only Hong Kong (China), Singapore, Japan (Tokyo), Malaysia (Kuala Lumpur), Philippines (Manila), Indonesia (Jakarta), and Thailand (Bangkok) regions support BGP (multi-ISP) Pro EIPs.
   * 
   * For more information about BGP (multi-ISP) and BGP (multi-ISP) Pro, see [EIP line types](https://help.aliyun.com/document_detail/32321.html).
   * 
   * - If you are a whitelist user of single-ISP bandwidth, you can also select the following types:
   *     - **ChinaTelecom**: China Telecom
   *     - **ChinaUnicom**: China Unicom
   *     - **ChinaMobile**: China Mobile
   *     - **ChinaTelecom_L2**: China Telecom L2
   *     - **ChinaUnicom_L2**: China Unicom L2
   *     - **ChinaMobile_L2**: China Mobile L2
   * - If you are a China (Hangzhou) Finance Cloud user, this parameter is required and must be set to **BGP_FinanceCloud**.
   * 
   * @example
   * BGP
   */
  ISP?: string;
  /**
   * @remarks
   * The billing method of the EIP. Valid values:
   *           
   * - **PrePaid**: subscription.
   * 
   * - **PostPaid** (default): pay-as-you-go.
   * 
   * If **InstanceChargeType** is set to **PrePaid**, **InternetChargeType** must be set to **PayByBandwidth**. If **InstanceChargeType** is set to **PostPaid**, **InternetChargeType** can be set to **PayByBandwidth** or **PayByTraffic**.
   * 
   * @example
   * PostPaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The instance ID of the EIP that you want to apply for.
   * 
   * You need to specify only one of **IpAddress** and **InstanceId**. If neither is specified, the system randomly allocates an EIP.
   * 
   * @example
   * eip-25877c70gddh****
   */
  instanceId?: string;
  /**
   * @remarks
   * The metering method of the EIP. Valid values:
   * 
   * - **PayByBandwidth** (default): pay-by-bandwidth.
   * 
   * - **PayByTraffic**: pay-by-data-transfer.
   * 
   * If **InstanceChargeType** is set to **PrePaid**, **InternetChargeType** must be set to **PayByBandwidth**.
   * 
   * If **InstanceChargeType** is set to **PostPaid**, **InternetChargeType** can be set to **PayByBandwidth** or **PayByTraffic**.
   * 
   * @example
   * PayByTraffic
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The IP address of the EIP that you want to apply for.
   * 
   * You need to specify only one of **IpAddress** and **InstanceId**. If neither is specified, the system randomly allocates an EIP.
   * 
   * @example
   * 192.0.XX.XX
   */
  ipAddress?: string;
  /**
   * @remarks
   * The name of the EIP instance.
   * 
   * The name must be 0 to 128 characters in length and cannot start with `http://` or `https://`.
   * 
   * > This parameter is not supported when you create a subscription EIP instance.
   * 
   * @example
   * EIP1
   */
  name?: string;
  /**
   * @remarks
   * The network type. The value is set to **public** (default), which indicates the public network.
   * 
   * @example
   * public
   */
  netmode?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The subscription duration.
   * 
   * If **PricingCycle** is set to **Month**, valid values for **Period** are **1** to **9**.
   * 
   * If **PricingCycle** is set to **Year**, valid values for **Period** are **1** to **5**.
   * 
   * This parameter is required if **InstanceChargeType** is set to **PrePaid**. This parameter is not required if **InstanceChargeType** is set to **PostPaid**.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The billing cycle of the subscription. Valid values:
   * - **Month** (default): billed on a monthly basis.
   * - **Year**: billed on a yearly basis.
   * 
   * This parameter is required if **InstanceChargeType** is set to **PrePaid**. This parameter is optional if **InstanceChargeType** is set to **PostPaid**.
   * 
   * @example
   * Month
   */
  pricingCycle?: string;
  /**
   * @remarks
   * The ID of the IP address pool.
   * 
   * The EIP is allocated from the specified IP address pool.
   * 
   * The IP address pool feature is not available by default. To use this feature, apply for the IP address pool privilege quota in Quota Center. For more information, see [Increase a quota in Quota Center](https://help.aliyun.com/document_detail/108213.html).
   * 
   * @example
   * pippool-2vc0kxcedhquybdsz****
   */
  publicIpAddressPoolId?: string;
  /**
   * @remarks
   * The region ID of the EIP.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the region ID.
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
   * rg-acfmxazffggds****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The security protection level.
   * 
   * - If this parameter is left empty, the default value is Anti-DDoS Basic.
   * 
   * - If this parameter is set to **AntiDDoS_Enhanced**, Anti-DDoS (Enhanced) is used.
   * 
   * You can specify at most one security protection level.
   * 
   * @example
   * AntiDDoS_Enhanced
   */
  securityProtectionTypes?: string[];
  /**
   * @remarks
   * The tags of the resource.
   */
  tag?: AllocateEipAddressRequestTag[];
  /**
   * @remarks
   * The zone of the EIP.
   * 
   * If the IP address pool specified by **PublicIpAddressPoolId** is of the CloudBox type, this parameter defaults to the zone of the IP address pool.
   * 
   * For information about how to view the business type of an IP address pool, see [ListPublicIpAddressPools](https://help.aliyun.com/document_detail/429098.html).
   * 
   * @example
   * ap-southeast-1-lzdvn-cb
   */
  zone?: string;
  static names(): { [key: string]: string } {
    return {
      activityId: 'ActivityId',
      autoPay: 'AutoPay',
      bandwidth: 'Bandwidth',
      clientToken: 'ClientToken',
      description: 'Description',
      ISP: 'ISP',
      instanceChargeType: 'InstanceChargeType',
      instanceId: 'InstanceId',
      internetChargeType: 'InternetChargeType',
      ipAddress: 'IpAddress',
      name: 'Name',
      netmode: 'Netmode',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      period: 'Period',
      pricingCycle: 'PricingCycle',
      publicIpAddressPoolId: 'PublicIpAddressPoolId',
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
      activityId: 'number',
      autoPay: 'boolean',
      bandwidth: 'string',
      clientToken: 'string',
      description: 'string',
      ISP: 'string',
      instanceChargeType: 'string',
      instanceId: 'string',
      internetChargeType: 'string',
      ipAddress: 'string',
      name: 'string',
      netmode: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      period: 'number',
      pricingCycle: 'string',
      publicIpAddressPoolId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityProtectionTypes: { 'type': 'array', 'itemType': 'string' },
      tag: { 'type': 'array', 'itemType': AllocateEipAddressRequestTag },
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

