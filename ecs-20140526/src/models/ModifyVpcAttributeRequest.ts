// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyVpcAttributeRequest extends $dara.Model {
  cidrBlock?: string;
  description?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  userCidr?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  vpcId?: string;
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

