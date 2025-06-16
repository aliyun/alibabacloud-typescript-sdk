// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AllocateEipSegmentAddressRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum bandwidth of the contiguous EIP group. Unit: Mbit/s.
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
   * You can use the client to generate a token, but you must make sure that the token is unique among different requests. **ClientToken** can contain only ASCII characters.
   * 
   * >  If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-001****
   */
  clientToken?: string;
  /**
   * @remarks
   * The subnet mask of the contiguous EIP group. Valid values:
   * 
   * *   **28**: applies for 16 contiguous EIPs in each call.
   * *   **27**: applies for 32 contiguous EIPs in each call.
   * *   **26**: applies for 64 contiguous EIPs in each call.
   * *   **25**: applies for 128 contiguous EIPs in each call.
   * *   **24**: applies for 256 contiguous EIPs in each call.
   * 
   * >  Some IP address are reserved for specific purposes. Therefore, the actual number of the contiguous EIPs may be one, three, or four less than the expected number.
   * 
   * This parameter is required.
   * 
   * @example
   * 28
   */
  eipMask?: string;
  /**
   * @remarks
   * The metering method of contiguous EIPs. Valid values:
   * 
   * *   **PayByBandwidth** (default)
   * *   **PayByTraffic**
   * 
   * @example
   * PayByBandwidth
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The line type. Valid values:
   * 
   * *   **BGP** (default): BGP (Multi-ISP) line The BGP (Multi-ISP) line is supported in all regions.
   * *   **BGP_PRO**: BGP (Multi-ISP) Pro line BGP (Multi-ISP) Pro line is supported only in the China (Hong Kong), Singapore, Japan (Tokyo), Malaysia (Kuala Lumpur), Philippines (Manila), Indonesia (Jakarta), and Thailand (Bangkok) regions.
   * 
   * For more information about the BGP (Multi-ISP) line and BGP (Multi-ISP) Pro line, see [EIP line types](https://help.aliyun.com/document_detail/32321.html).
   * 
   * If you are allowed to use single-ISP bandwidth, you can also use one of the following values:
   * 
   * *   **ChinaTelecom**
   * *   **ChinaUnicom**
   * *   **ChinaMobile**
   * *   **ChinaTelecom_L2**
   * *   **ChinaUnicom_L2**
   * *   **ChinaMobile_L2**
   * 
   * If your services are deployed in China East 1 Finance, this parameter is required and you must set the parameter to **BGP_FinanceCloud**.
   * 
   * @example
   * BGP
   */
  isp?: string;
  /**
   * @remarks
   * The network type. Set the value to **public**, which specifies the public network type.
   * 
   * @example
   * public
   */
  netmode?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region in which the contiguous EIP group resides.
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
   * rg-bp67acfmxazb4ph****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The zone of the contiguous EIP group.
   * 
   * @example
   * cn-hangzhou-a
   */
  zone?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      clientToken: 'ClientToken',
      eipMask: 'EipMask',
      internetChargeType: 'InternetChargeType',
      isp: 'Isp',
      netmode: 'Netmode',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      zone: 'Zone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'string',
      clientToken: 'string',
      eipMask: 'string',
      internetChargeType: 'string',
      isp: 'string',
      netmode: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      zone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

