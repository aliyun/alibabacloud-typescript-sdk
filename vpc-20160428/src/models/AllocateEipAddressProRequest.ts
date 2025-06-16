// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AllocateEipAddressProRequestTag } from "./AllocateEipAddressProRequestTag";


export class AllocateEipAddressProRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic payment. Default value: true. Valid values:
   * 
   * *   **false**: Automatic payment is disabled. After an order is generated, you must go to the Order Center to complete the payment.
   * *   **true**: Automatic payment is enabled. After an order is generated, the payment is automatically completed.
   * 
   * This parameter is required if **InstanceChargeType** is set to **PrePaid**. This parameter is optional if **InstanceChargeType** is set to **PostPaid**.
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The maximum bandwidth of the specified EIP. Unit: Mbit/s.
   * 
   * *   When **InstanceChargeType** is set to **PostPaid** and **InternetChargeType** is set to **PayByBandwidth**, valid values for **Bandwidth** are **1** to **500**.
   * *   When **InstanceChargeType** is set to **PostPaid** and **InternetChargeType** is set to **PayByTraffic**, valid values for **Bandwidth** are **1** to **200**.
   * *   When **InstanceChargeType** is set to **PrePaid**, valid values for **Bandwidth** are **1** to **1000**.
   * 
   * Default value: **5** Mbit /s.
   * 
   * @example
   * 5
   */
  bandwidth?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate a token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * >  If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe6****
   */
  clientToken?: string;
  /**
   * @remarks
   * The line type. Valid values:
   * 
   * *   **BGP** (default): BGP (Multi-ISP) line The BGP (Multi-ISP) line is supported in all regions.
   * *   **BGP_PRO**: BGP (Multi-ISP) Pro line The BGP (Multi-ISP) Pro line is supported in the China (Hong Kong), Singapore, Malaysia (Kuala Lumpur), Philippines (Manila), Indonesia (Jakarta), and Thailand (Bangkok) regions.
   * 
   * For more information about the BGP (Multi-ISP) line and BGP (Multi-ISP) Pro line, see the "Line types" section of [What is EIP?](https://help.aliyun.com/document_detail/32321.html)
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
   * *   If your services are deployed in China East 1 Finance, this parameter is required and you must set the parameter to **BGP_FinanceCloud**.
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
   * Set the value of **InternetChargeType** to **PayByBandwidth** if **InstanceChargeType** is set to **PrePaid**.
   * 
   * Valid values when **InstanceChargeType** is set to **PostPaid**: **PayByBandwidth** or **PayByTraffic**.
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
   * *   **PayByBandwidth** (default): pay-by-bandwidth.
   * *   **PayByTraffic**: pay-by-data-transfer.
   * 
   * When **InstanceChargeType** is set to **PrePaid**, you must set **InternetChargeType** to **PayByBandwidth**.
   * 
   * When **InstanceChargeType** is set to **PostPaid**, set **InternetChargeType** to **PayByBandwidth** or **PayByTraffic**.
   * 
   * @example
   * PayByBandwidth
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The IP address of the EIP.
   * 
   * Specify **IpAddress** or **InstanceId**. If you leave both parameters empty, the system randomly allocates an EIP.
   * 
   * @example
   * 192.0.XX.XX
   */
  ipAddress?: string;
  /**
   * @remarks
   * The network type. By default, this value is set to **public**, which specifies the public network type.
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
   * *   Valid values when **PricingCycle** is set to **Month**: **1 to 9**.****
   * *   Valid values when **PricingCycle** is set to **Year**: **1 to 3**.****
   * 
   * This parameter is required if **InstanceChargeType** is set to **PrePaid**.
   * 
   * Leave this parameter empty if **InstanceChargeType** is set to **PostPaid**.
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
   * The EIP is allocated from the IP address pool.
   * 
   * By default, you cannot use the IP address pool. To use this feature, apply for the privilege in the Quota Center console. For more information, see the "Request a quota increase in the Quota Center console" section of [Manage EIP quotas](https://help.aliyun.com/document_detail/108213.html).
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
   * The ID of the resource group to which the EIP belongs.
   * 
   * @example
   * rg-resourcegroup****
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
   * You can configure Anti-DDoS editions for up to 10 EIPs.
   */
  securityProtectionTypes?: string[];
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

