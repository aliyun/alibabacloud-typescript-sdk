// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnassociateVpcCidrBlockRequest extends $dara.Model {
  /**
   * @remarks
   * The secondary IPv6 CIDR block to delete.
   * 
   * > You must specify one of the **Ipv6CidrBlock** parameter and the **SecondaryCidrBlock** parameter, but you cannot specify both.
   * 
   * @example
   * 2408:XXXX:0:6a::/56
   */
  IPv6CidrBlock?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the VPC from which you want to delete a secondary CIDR block. 
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ch-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The secondary IPv4 CIDR block to delete.
   * 
   * > You must specify one of the **SecondaryCidrBlock** parameter and the **Ipv6CidrBlock** parameter, but you cannot specify both.
   * 
   * @example
   * 192.168.0.0/16
   */
  secondaryCidrBlock?: string;
  /**
   * @remarks
   * The ID of the VPC from which you want to delete a secondary CIDR block.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-o6wrloqsdqc9io3mg****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      IPv6CidrBlock: 'IPv6CidrBlock',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      secondaryCidrBlock: 'SecondaryCidrBlock',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      IPv6CidrBlock: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      secondaryCidrBlock: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

