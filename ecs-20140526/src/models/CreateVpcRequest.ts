// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVpcRequest extends $dara.Model {
  /**
   * @remarks
   * The IPv4 CIDR block of the VPC. You can use one of the following standard IPv4 CIDR blocks or their subnets:
   * 
   * - `10.0.0.0/8`
   * - `172.16.0.0/12`
   * - `192.168.0.0/16`
   */
  cidrBlock?: string;
  /**
   * @remarks
   * A client-generated token that ensures the idempotence of the request. The token must be unique across requests, contain only ASCII characters, and not exceed 64 characters. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   */
  clientToken?: string;
  /**
   * @remarks
   * The VPC description. The description must be 2 to 256 characters long and cannot start with `http://` or `https://`.
   */
  description?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the VPC will be created. You can call the `DescribeRegions` operation to query the latest list of regions.
   * 
   * This parameter is required.
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The user CIDR block. You can specify a user CIDR block as an alternative to the standard CIDR blocks. This lets you use a private IP address range other than `10.0.0.0/8`, `172.16.0.0/12`, or `192.168.0.0/16` as the CIDR block for the VPC.
   */
  userCidr?: string;
  /**
   * @remarks
   * The VPC name. It must be 2 to 128 characters long, start with a letter, and contain only letters, digits, underscores (_), and hyphens (-).
   */
  vpcName?: string;
  static names(): { [key: string]: string } {
    return {
      cidrBlock: 'CidrBlock',
      clientToken: 'ClientToken',
      description: 'Description',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      userCidr: 'UserCidr',
      vpcName: 'VpcName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrBlock: 'string',
      clientToken: 'string',
      description: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      userCidr: 'string',
      vpcName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

