// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AllocateEipSegmentAddressRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum bandwidth of the EIP. Unit: Mbit/s.
   * 
   * - If **InternetChargeType** is set to **PayByBandwidth**, valid values of **Bandwidth** are **1** to **500**.
   * 
   * - If **InternetChargeType** is set to **PayByTraffic**, valid values of **Bandwidth** are **1** to **200**.
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
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The **ClientToken** value can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** may be different for each API request.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-001****
   */
  clientToken?: string;
  /**
   * @remarks
   * The subnet mask of the contiguous EIPs. Valid values:
   * 
   * - **28**: The system allocates 16 contiguous EIPs per call.
   * 
   * - **27**: The system allocates 32 contiguous EIPs per call.
   * 
   * - **26**: The system allocates 64 contiguous EIPs per call.
   * 
   * - **25**: The system allocates 128 contiguous EIPs per call.
   * 
   * - **24**: The system allocates 256 contiguous EIPs per call.
   * 
   * > Due to IP address reservation, the actual number of contiguous EIPs may be 1, 3, or 4 fewer than expected.
   * 
   * This parameter is required.
   * 
   * @example
   * 28
   */
  eipMask?: string;
  /**
   * @remarks
   * The billable methods of the contiguous EIPs. Valid values:
   * 
   * - **PayByBandwidth** (default): pay-by-bandwidth.
   * 
   * - **PayByTraffic**: pay-by-data-transfer.
   * 
   * @example
   * PayByBandwidth
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The line type. Valid values:
   * 
   * - **BGP** (default): BGP (multi-ISP) line. All regions support BGP (multi-ISP) EIPs.
   * - **BGP_PRO**: BGP (multi-ISP) premium line. Only Hong Kong (China), Singapore, Tokyo (Japan), Kuala Lumpur (Malaysia), Manila (Philippines), Jakarta (Indonesia), and Bangkok (Thailand) regions support BGP (multi-ISP) premium EIPs.
   * 
   * For more information about BGP (multi-ISP) lines and BGP (multi-ISP) premium lines, see [EIP line types](https://help.aliyun.com/document_detail/32321.html).
   * 
   * If you are a whitelist user of single-ISP bandwidth, you can also select the following types:
   * - **ChinaTelecom**: China Telecom
   * - **ChinaUnicom**: China Unicom
   * - **ChinaMobile**: China Mobile
   * - **ChinaTelecom_L2**: China Telecom L2
   * - **ChinaUnicom_L2**: China Unicom L2
   * - **ChinaMobile_L2**: China Mobile L2
   * 
   * If you are an Alibaba Finance Cloud user, this parameter is required. Set the value to **BGP_FinanceCloud**.
   * 
   * @example
   * BGP
   */
  isp?: string;
  /**
   * @remarks
   * The network type. Set the value to **public**, which specifies the public network.
   * 
   * @example
   * public
   */
  netmode?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the contiguous EIPs.
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

