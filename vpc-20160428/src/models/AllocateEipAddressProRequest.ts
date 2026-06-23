// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AllocateEipAddressProRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
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
   * - **false**: Disables automatic payment. You must go to the Order Center to pay for the order.
   * 
   * - **true**: Enables automatic payment. The payment is completed automatically.
   * 
   * This parameter is required only when **InstanceChargeType** is set to **PrePaid**.
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The peak bandwidth of the EIP. Unit: Mbps.
   * 
   * - If **InstanceChargeType** is **PostPaid** (pay-as-you-go) and **InternetChargeType** is **PayByBandwidth**, **Bandwidth** can be from **1** to **500**.
   * 
   * - If **InstanceChargeType** is **PostPaid** (pay-as-you-go) and **InternetChargeType** is **PayByTraffic**, **Bandwidth** can be from **1** to **200**.
   * 
   * - If **InstanceChargeType** is **PrePaid** (subscription), **Bandwidth** can be from **1** to **1000**.
   * 
   * Default value: **5**.
   * 
   * @example
   * 5
   */
  bandwidth?: string;
  /**
   * @remarks
   * A token used to ensure the idempotence of the request.
   * 
   * You must ensure that this token is unique across requests. The token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the request as the **ClientToken**. The **RequestId** differs for each API request.
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe6****
   */
  clientToken?: string;
  /**
   * @remarks
   * The line type. Valid values:
   * 
   * - **BGP** (default): BGP (Multi-ISP) line. All regions support EIPs that use BGP (Multi-ISP) lines.
   * 
   * - **BGP_PRO**: BGP (Multi-ISP) Pro line. This line type is available only in the China (Hong Kong), Singapore, Malaysia (Kuala Lumpur), Philippines (Manila), Indonesia (Jakarta), and Thailand (Bangkok) regions.
   * 
   * For more information about BGP (Multi-ISP) and BGP (Multi-ISP) Pro lines, see [EIP line types](https://help.aliyun.com/document_detail/32321.html).
   * 
   * - If your account is on the allowlist for single-ISP bandwidth, you can also select one of the following values:
   * 
   *   - **ChinaTelecom**
   * 
   *   - **ChinaUnicom**
   * 
   *   - **ChinaMobile**
   * 
   *   - **ChinaTelecom_L2**
   * 
   *   - **ChinaUnicom_L2**
   * 
   *   - **ChinaMobile_L2**
   * 
   * - For China (Hangzhou) Finance Cloud users, this parameter is required and must be set to **BGP_FinanceCloud**.
   * 
   * @example
   * BGP
   */
  ISP?: string;
  /**
   * @remarks
   * The billing method of the EIP. Valid values:
   * 
   * - **PrePaid**: subscription
   * 
   * - **PostPaid** (default): pay-as-you-go
   * 
   * If **InstanceChargeType** is set to **PrePaid**, **InternetChargeType** must be set to **PayByBandwidth**.
   * 
   * If **InstanceChargeType** is set to **PostPaid**, you can set **InternetChargeType** to **PayByBandwidth** or **PayByTraffic**.
   * 
   * @example
   * PostPaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The ID of the EIP to be allocated.
   * 
   * You can specify either **IpAddress** or **InstanceId**. If you do not specify either parameter, the system randomly allocates an EIP.
   * 
   * @example
   * eip-25877c70gddh****
   */
  instanceId?: string;
  /**
   * @remarks
   * The metering method of the EIP. Valid values:
   * 
   * - **PayByBandwidth** (default): pay-by-bandwidth
   * 
   * - **PayByTraffic**: pay-by-traffic
   * 
   * If **InstanceChargeType** is set to **PrePaid**, **InternetChargeType** must be set to **PayByBandwidth**.
   * 
   * If **InstanceChargeType** is set to **PostPaid**, you can set **InternetChargeType** to **PayByBandwidth** or **PayByTraffic**.
   * 
   * @example
   * PayByBandwidth
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The IP address of the EIP to be allocated.
   * 
   * You can specify either **IpAddress** or **InstanceId**. If you do not specify either parameter, the system randomly allocates an EIP.
   * 
   * @example
   * 192.0.XX.XX
   */
  ipAddress?: string;
  /**
   * @remarks
   * The network type. The only valid value is **public** (default), which indicates the public network.
   * 
   * @example
   * public
   */
  netmode?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The subscription period.
   * 
   * - If **PricingCycle** is **Month**, **Period** can be from **1** to **9**.
   * 
   * - If **PricingCycle** is **Year**, **Period** can be from **1** to **3**.
   * 
   * This parameter is required when **InstanceChargeType** is set to **PrePaid**.
   * 
   * If `InstanceChargeType` is set to `PostPaid`, this parameter is not required.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The billing cycle of the subscription EIP. Valid values:
   * 
   * - **Month** (default): Billed monthly.
   * 
   * - **Year**: Billed annually.
   * 
   * This parameter is required only when **InstanceChargeType** is set to **PrePaid** (subscription).
   * 
   * @example
   * Month
   */
  pricingCycle?: string;
  /**
   * @remarks
   * The ID of the IP address pool from which to allocate the EIP.
   * 
   * This feature is disabled by default. To use this feature, apply for the required permissions in Quota Center. For more information, see [Increase quotas by using Quota Center](https://help.aliyun.com/document_detail/108213.html).
   * 
   * @example
   * pippool-2vc0kxcedhquybdsz****
   */
  publicIpAddressPoolId?: string;
  /**
   * @remarks
   * The ID of the region where the EIP is to be allocated.
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
   * The ID of the resource group for the EIP.
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
   * - If you do not specify this parameter, DDoS Protection (Basic) is enabled by default.
   * 
   * - Set the value to **AntiDDoS_Enhanced** to enable DDoS Protection (Enhanced).
   */
  securityProtectionTypes?: string[];
  /**
   * @remarks
   * The tags to add to the EIP.
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

