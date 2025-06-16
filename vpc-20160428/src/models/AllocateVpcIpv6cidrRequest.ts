// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AllocateVpcIpv6CidrRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the IPv6 address pool. Valid values:
   * 
   * - **aliyun** (default): IPv6 CIDR block is allocated by the system.
   * 
   * - **custom**: custom IPv6 CIDR block.
   * 
   * @example
   * custom
   */
  addressPoolType?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * >  If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The IPv6 CIDR block that you want to reserve.
   * 
   * @example
   * 2408:XXXX:0:a600::/56
   */
  ipv6CidrBlock?: string;
  /**
   * @remarks
   * The type of IPv6 CIDR block. Valid values:
   * 
   * *   **BGP** (default): BGP (Multi-ISP)
   * *   **BGP_International**: BGP (Multi-ISP) International
   * *   **ChinaMobile**: China Mobile (Single-ISP)
   * *   **ChinaUnicom**: China Unicom (Single-ISP)
   * *   **ChinaTelecom**: China Telecom (Single-ISP)
   * *   **ChinaMobile_L2**: China Mobile (Single-ISP)_L2
   * *   **ChinaUnicom_L2**: China Unicom (Single-ISP)_L2
   * *   **ChinaTelecom_L2**: China Telecom (Single-ISP)_L2
   * > *   If your account is included in the whitelist, you can set this parameter to one of the following values: **ChinaTelecom**, **ChinaUnicom**, **ChinaMobile**, **ChinaTelecom_L2**, **ChinaUnicom_L2**, **ChinaMobile_L2**, and **BGP_International**.
   * > *   You can reserve only one IPv6 CIDR block of each type. You can reserve another IPv6 CIDR block only after the existing one is allocated to a VPC.
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
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
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

