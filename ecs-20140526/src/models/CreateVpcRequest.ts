// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVpcRequest extends $dara.Model {
  cidrBlock?: string;
  clientToken?: string;
  description?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  userCidr?: string;
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

