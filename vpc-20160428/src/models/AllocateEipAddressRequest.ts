// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AllocateEipAddressRequestTag } from "./AllocateEipAddressRequestTag";


export class AllocateEipAddressRequest extends $dara.Model {
  /**
   * @remarks
   * The promotion code. This parameter is not required.
   * 
   * @example
   * 123456
   */
  activityId?: number;
  /**
   * @remarks
   * Specifies whether to enable automatic payment. Valid values:
   * 
   * *   **false** (default): The automatic payment is disabled. If you select this option, you must go to the Order Center to complete the payment after an order is generated.
   * *   **true**: The automatic payment is enabled. Payments are automatically complete after an order is generated.
   * 
   * If **InstanceChargeType** is set to **PrePaid**, this parameter is required. If **InstanceChargeType** is set to **PostPaid**, this parameter is not required.
   * 
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The maximum bandwidth of the EIP. Unit: Mbit/s.
   * 
   * *   Valid values when **InstanceChargeType** is set to **PostPaid** and **InternetChargeType** is set to **PayByBandwidth**: **1** to **500**.****
   * *   Valid values when **InstanceChargeType** is set to **PostPaid** and **InternetChargeType** is set to **PayByTraffic**: **1** to **200**.****
   * *   Valid values when **InstanceChargeType** is set to **PrePaid**: **1** to **1000**.****
   * 
   * Default value: **5**. Unit: Mbit/s.
   * 
   * @example
   * 5
   */
  bandwidth?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate a token, but you must make sure that the token is unique among different requests. The **client token** can contain only ASCII characters.
   * 
   * >  If you do not specify this parameter, the system automatically uses the value of **RequestId** as the **client token**. The value of **RequestId** is different for each API request.
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe637760
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the EIP.
   * 
   * The description must be 2 to 256 characters in length. The description must start with a letter but cannot start with `http://` or `https://`.
   * 
   * >  You cannot specify this parameter if you create a subscription EIP.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The line type. Valid values:
   * 
   * *   **BGP** (default): BGP (Multi-ISP) All regions support BGP (Multi-ISP) EIPs.
   * *   **BGP_PRO**: BGP (Multi-ISP) Pro Only the following regions support BGP (Multi-ISP) Pro lines: China (Hong Kong), Singapore, Japan (Tokyo), Malaysia (Kuala Lumpur), Philippines (Manila), Indonesia (Jakarta), and Thailand (Bangkok).
   * 
   * For more information about BGP (Multi-ISP) and BGP (Multi-ISP) Pro, see the "Line types" section of [What is EIP?](https://help.aliyun.com/document_detail/32321.html)
   * 
   * *   If you are allowed to use single-ISP bandwidth, you can also choose one of the following values:
   * 
   *     *   **ChinaTelecom**
   *     *   **ChinaUnicom**
   *     *   **ChinaMobile**
   *     *   **ChinaTelecom_L2**
   *     *   **ChinaUnicom_L2**
   *     *   **ChinaMobile_L2**
   * 
   * *   If your services are deployed in China East 1 Finance, this parameter is required and you must set the value to **BGP_FinanceCloud**.
   * 
   * @example
   * BGP
   */
  ISP?: string;
  /**
   * @remarks
   * The billing method of the EIP. Valid values:
   * 
   * *   **PrePaid**: subscription
   * *   **PostPaid** (default): pay-as-you-go
   * 
   * If **InstanceChargeType** is set to **PrePaid**, set **InternetChargeType** to **PayByBandwidth**. If **InstanceChargeType** is set to **PostPaid**, set **InternetChargeType** to **PayByBandwidth** or **PayByTraffic**.
   * 
   * @example
   * PostPaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The EIP ID.
   * 
   * Specify **IpAddress** or **InstanceId**. If you leave both parameters empty, the system randomly allocates an EIP.
   * 
   * @example
   * eip-25877c70gddh****
   */
  instanceId?: string;
  /**
   * @remarks
   * The metering method of the EIP. Valid values:
   * 
   * *   **PayByBandwidth** (default): pay-by-bandwidth
   * *   **PayByTraffic**: pay-by-data-transfer
   * 
   * When **InstanceChargeType** is set to **PrePaid**, set **InternetChargeType** to **PayByBandwidth**.
   * 
   * When **InstanceChargeType** is set to **PostPaid**, set **InternetChargeType** to **PayByBandwidth** or **PayByTraffic**.
   * 
   * @example
   * PayByTraffic
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The IP address of the EIP that you want to request.
   * 
   * Specify **IpAddress** or **InstanceId**. If you leave both parameters empty, the system randomly allocates an EIP.
   * 
   * @example
   * 192.0.XX.XX
   */
  ipAddress?: string;
  /**
   * @remarks
   * The EIP name.
   * 
   * The name must be 1 to 128 characters in length and start with a letter, and can contain letters, digits, periods (.), underscores (_), and hyphens (-).
   * 
   * >  You cannot specify this parameter if you create a subscription EIP.
   * 
   * @example
   * EIP1
   */
  name?: string;
  /**
   * @remarks
   * The network type. Default value: **public**.
   * 
   * @example
   * public
   */
  netmode?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The subscription duration of the EIP.
   * 
   * Valid values when **PricingCycle** is set to **Month**: **1** to **9**.****
   * 
   * Valid values when **PricingCycle** is set to **Year**: **1** to **5**.****
   * 
   * This parameter must be specified when **InstanceChargeType** is set to **PrePaid**. This parameter is optional when **InstanceChargeType** is set to **PostPaid**.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The billing cycle of the subscription EIP. Valid values:
   * 
   * *   **Month** (default)
   * *   **Year**
   * 
   * If **InstanceChargeType** is set to **PrePaid**, this parameter is required. If **InstanceChargeType** is set to **PostPaid**, this parameter is not required.
   * 
   * @example
   * Month
   */
  pricingCycle?: string;
  /**
   * @remarks
   * The ID of the IP address pool.
   * 
   * The EIP is allocated from the IP address pool.
   * 
   * By default, the IP address pool feature is unavailable. To use the IP address pool, apply for the privilege in the Quota Center console. For more information, see the "Request a quota increase in the Quota Center console" section in [Manage EIP quotas](https://help.aliyun.com/document_detail/108213.html).
   * 
   * @example
   * pippool-2vc0kxcedhquybdsz****
   */
  publicIpAddressPoolId?: string;
  /**
   * @remarks
   * The ID of the region to which the EIP belongs.
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
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmxazffggds****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The editions of Anti-DDoS.
   * 
   * *   If you do not specify this parameter, Anti-DDoS Origin Basic is used.
   * *   If you set the parameter to **AntiDDoS_Enhanced**, Anti-DDoS Pro/Premium is used.
   * 
   * You can specify up to 10 editions of Anti-DDoS.
   * 
   * @example
   * AntiDDoS_Enhanced
   */
  securityProtectionTypes?: string[];
  tag?: AllocateEipAddressRequestTag[];
  /**
   * @remarks
   * The zone of the EIP.
   * 
   * When the service type of the IP address pool specified by **PublicIpAddressPoolId** is CloudBox, the default value is the zone of the IP address pool.
   * 
   * For more information, see [ListPublicIpAddressPools](https://help.aliyun.com/document_detail/429433.html).
   * 
   * @example
   * cn-hangzhou-a
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

