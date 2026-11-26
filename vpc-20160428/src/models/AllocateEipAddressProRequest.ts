// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AllocateEipAddressProRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the resource. You can specify up to 20 tag keys. If specified, the value cannot be an empty string.
   * 
   * A tag key can be up to 128 characters in length. It cannot start with aliyun or acs:, and cannot contain http:// or https://.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the resource. You can specify up to 20 tag values. The tag value can be an empty string.
   * 
   * A tag value can be up to 128 characters in length. It must start with a letter or a Chinese character, and can contain digits, periods (.), underscores (_), and hyphens (-). It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
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

export class AllocateEipAddressProRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic payment. Valid values:
   * 
   * - **false**: Automatic payment is disabled. After an order is generated, you must go to the Billing Management console to complete the payment.
   * 
   * - **true**: Automatic payment is enabled. The order is automatically paid.
   * 
   * This parameter is required if **InstanceChargeType** is set to **PrePaid**. If **InstanceChargeType** is set to **PostPaid**, you can leave this parameter empty.
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The maximum bandwidth of the specified EIP. Unit: Mbit/s.
   * 
   * - If **InstanceChargeType** is set to **PostPaid** and **InternetChargeType** is set to **PayByBandwidth**, valid values for **Bandwidth** are **1** to **500**.
   * 
   * - If **InstanceChargeType** is set to **PostPaid** and **InternetChargeType** is set to **PayByTraffic**, valid values for **Bandwidth** are **1** to **200**.
   * 
   * - If **InstanceChargeType** is set to **PrePaid**, valid values for **Bandwidth** are **1** to **1000**.
   * 
   * Default value: **5**.
   * 
   * @example
   * 5
   */
  bandwidth?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, but you must ensure that it is unique among different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request is unique.
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe6****
   */
  clientToken?: string;
  /**
   * @remarks
   * The line type. Valid values:
   * 
   * - **BGP** (default): BGP (multi-ISP) line. BGP (multi-ISP) EIPs are supported in all regions.
   * - **BGP_PRO**: BGP (multi-ISP) Pro line. BGP (multi-ISP) Pro EIPs are supported only in the Hong Kong (China), Japan (Tokyo), Singapore, Malaysia (Kuala Lumpur), Philippines (Manila), Indonesia (Jakarta), and Thailand (Bangkok) regions.
   * 
   * For more information about BGP (multi-ISP) and BGP (multi-ISP) Pro lines, see [EIP line types](https://help.aliyun.com/document_detail/32321.html).
   * 
   * - If you are a single-ISP bandwidth whitelist user, you can also select the following types:
   *     - **ChinaTelecom**: China Telecom
   *     - **ChinaUnicom**: China Unicom
   *     - **ChinaMobile**: China Mobile shift
   *     - **ChinaTelecom_L2**: China Telecom L2
   *     - **ChinaUnicom_L2**: China Unicom L2
   *     - **ChinaMobile_L2**: China Mobile L2 shift
   * - If you are an Alibaba Finance Cloud user in the China (Hangzhou) region, this parameter is required. Set the value to **BGP_FinanceCloud**.
   * 
   * @example
   * BGP
   */
  ISP?: string;
  /**
   * @remarks
   * The Billable methods of the specified EIP. Valid values:
   *           
   * - **PrePaid**: subscription.
   * 
   * - **PostPaid** (default): pay-as-you-go billing method.
   * 
   * If **InstanceChargeType** is set to **PrePaid**, **InternetChargeType** must be set to **PayByBandwidth**.
   * 
   * If **InstanceChargeType** is set to **PostPaid**, **InternetChargeType** can be set to **PayByBandwidth** or **PayByTraffic**.
   * 
   * @example
   * PostPaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The instance ID of the specified EIP.
   * 
   * You only need to specify one of the **IpAddress** and **InstanceId** parameters. If neither parameter is specified, the system randomly allocates an EIP.
   * 
   * @example
   * eip-25877c70gddh****
   */
  instanceId?: string;
  /**
   * @remarks
   * The metering method of the specified EIP. Valid values:
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
   * PayByBandwidth
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The IP address of the specified EIP.
   * 
   * You must specify either **IpAddress** or **InstanceId**. If neither is specified, the system randomly allocates an EIP.
   * 
   * @example
   * 192.0.XX.XX
   */
  ipAddress?: string;
  /**
   * @remarks
   * The network type. Set the value to **public** (default), which indicates the Internet.
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
   * - If **PricingCycle** is set to **Month**, valid values for **Period** are **1** to **9**.
   * 
   * - If **PricingCycle** is set to **Year**, valid values for **Period** are **1** to **3**.
   * 
   * This parameter is required if **InstanceChargeType** is set to **PrePaid**.
   * 
   * Do not specify this parameter if **InstanceChargeType** is set to **PostPaid**.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The billing cycle of the subscription. Valid values:
   * 
   * - **Month** (default): monthly billing.
   * 
   * - **Year**: yearly billing.
   * 
   * This parameter is required if **InstanceChargeType** is set to **PrePaid**. If **InstanceChargeType** is set to **PostPaid**, you can leave this parameter empty.
   * 
   * @example
   * Month
   */
  pricingCycle?: string;
  /**
   * @remarks
   * The ID of the IP address pool.
   * 
   * The EIP is allocated from this IP address pool.
   * 
   * The IP address pool feature is disabled by default. To use this feature, contact your account manager.
   * 
   * @example
   * pippool-2vc0kxcedhquybdsz****
   */
  publicIpAddressPoolId?: string;
  /**
   * @remarks
   * The region ID of the specified EIP.
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
   * The ID of the resource group to which the specified EIP belongs.
   * 
   * @example
   * rg-resourcegroup****
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
   */
  securityProtectionTypes?: string[];
  /**
   * @remarks
   * The tag information.
   * 
   * You can specify up to 20 tags at a time.
   */
  tag?: AllocateEipAddressProRequestTag[];
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      bandwidth: 'Bandwidth',
      clientToken: 'ClientToken',
      ISP: 'ISP',
      instanceChargeType: 'InstanceChargeType',
      instanceId: 'InstanceId',
      internetChargeType: 'InternetChargeType',
      ipAddress: 'IpAddress',
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
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      bandwidth: 'string',
      clientToken: 'string',
      ISP: 'string',
      instanceChargeType: 'string',
      instanceId: 'string',
      internetChargeType: 'string',
      ipAddress: 'string',
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
      tag: { 'type': 'array', 'itemType': AllocateEipAddressProRequestTag },
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

