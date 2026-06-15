// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyVpcAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The primary IPv4 cidr block for the VPC. You can only expand this cidr block, for example, from `192.168.0.0/24` to `192.168.0.0/16`. You cannot modify the primary cidr block if ClassicLink is enabled.
   */
  cidrBlock?: string;
  /**
   * @remarks
   * The description must be 2 to 256 characters long. It must start with a letter and cannot begin with `http://` or `https://`.
   */
  description?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the VPC\\"s region.
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * A user cidr block to add to the VPC. You can add up to three user cidr blocks. They cannot overlap with the primary cidr block, each other, or the reserved `100.64.0.0/10` cidr block.
   */
  userCidr?: string;
  /**
   * @remarks
   * The ID of the VPC to modify.
   * 
   * This parameter is required.
   */
  vpcId?: string;
  /**
   * @remarks
   * The name must be 2 to 128 characters long, start with a letter, and can contain letters, digits, underscores (_), and hyphens (-).
   */
  vpcName?: string;
  static names(): { [key: string]: string } {
    return {
      cidrBlock: 'CidrBlock',
      description: 'Description',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      userCidr: 'UserCidr',
      vpcId: 'VpcId',
      vpcName: 'VpcName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrBlock: 'string',
      description: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      userCidr: 'string',
      vpcId: 'string',
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

