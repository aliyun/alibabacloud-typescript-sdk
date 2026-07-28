// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AllocateVpcIpv6CidrRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the IPv6 address pool. Valid values:
   * - **aliyun** (default): The system assigns an IPv6 CIDR block.
   * - **custom**: A user-defined IPv6 CIDR block.
   * 
   * @example
   * custom
   */
  addressPoolType?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The ClientToken value can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request may be different.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The IPv6 CIDR block to reserve.
   * 
   * @example
   * 2408:XXXX:0:a600::/56
   */
  ipv6CidrBlock?: string;
  /**
   * @remarks
   * The type of the IPv6 CIDR block of the VPC. Valid values:
   * 
   * - **BGP** (default): BGP (multi-ISP).
   * - **BGP_International**: BGP (multi-ISP)_International.
   * - **ChinaMobile**: China Mobile (single-ISP).
   * - **ChinaUnicom**: China Unicom (single-ISP).
   * - **ChinaTelecom**: China Telecom (single-ISP).
   * - **ChinaMobile_L2**: China Mobile (single-ISP)_L2.
   * - **ChinaUnicom_L2**: China Unicom (single-ISP)_L2.
   * - **ChinaTelecom_L2**: China Telecom (single-ISP)_L2.
   * 
   * > - If you are a user whose whitelist is activated, you can set this parameter to **ChinaTelecom** (China Telecom), **ChinaUnicom** (China Unicom), **ChinaMobile** (China Mobile), **ChinaTelecom_L2** (China L2 Telecom), **ChinaUnicom_L2** (China L2 Unicom), **ChinaMobile_L2** (China L2 Mobile), or **BGP_International** (BGP multi-ISP International).
   * > - You can reserve only one IPv6 CIDR block of each type. You can reserve the next one only after the current one is assigned to a VPC.
   * 
   * @example
   * BGP
   */
  ipv6Isp?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the VPC.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the region ID.
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

