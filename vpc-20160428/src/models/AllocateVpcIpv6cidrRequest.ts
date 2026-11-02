// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AllocateVpcIpv6CidrRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the IPv6 address pool. Valid values:
   * - **aliyun** (default): The IPv6 CIDR block is allocated by the system.
   * - **custom**: The IPv6 CIDR block is customized by the user.
   * 
   * @example
   * custom
   */
  addressPoolType?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must ensure that it is unique among different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request may be different.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The IPv6 CIDR block to be reserved.
   * 
   * @example
   * 2408:XXXX:0:a600::/56
   */
  ipv6CidrBlock?: string;
  /**
   * @remarks
   * The ISP type of the IPv6 CIDR block for the VPC. Valid values:
   * 
   * - **BGP** (default): BGP (Multi-ISP).
   * - **BGP_International**: BGP (Multi-ISP) International.
   * - **ChinaMobile**: China Mobile (single ISP).
   * - **ChinaUnicom**: China Unicom (single ISP).
   * - **ChinaTelecom**: China Telecom (single ISP).
   * - **ChinaMobile_L2**: China Mobile (single ISP) L2.
   * - **ChinaUnicom_L2**: China Unicom (single ISP) L2.
   * - **ChinaTelecom_L2**: China Telecom (single ISP) L2.
   * 
   * > - If your account is added to the corresponding whitelist, you can set this parameter to **ChinaTelecom** (China Telecom), **ChinaUnicom** (China Unicom), **ChinaMobile** (China Mobile), **ChinaTelecom_L2** (China Telecom L2), **ChinaUnicom_L2** (China Unicom L2), **ChinaMobile_L2** (China Mobile L2), or **BGP_International** (BGP Multi-ISP International).
   * > - You can reserve only one IPv6 CIDR block of each ISP type. You can reserve the next IPv6 CIDR block only after the current one is allocated to a VPC.
   * 
   * @example
   * BGP
   */
  ipv6Isp?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the VPC is deployed.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query region IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      addressPoolType: 'AddressPoolType',
      clientToken: 'ClientToken',
      ipv6CidrBlock: 'Ipv6CidrBlock',
      ipv6Isp: 'Ipv6Isp',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressPoolType: 'string',
      clientToken: 'string',
      ipv6CidrBlock: 'string',
      ipv6Isp: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

