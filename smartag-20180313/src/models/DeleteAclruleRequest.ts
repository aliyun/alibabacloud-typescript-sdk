// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteACLRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ACL to which the ACL rule to be deleted belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * acl-xhwhyuo43l0n*****
   */
  aclId?: string;
  /**
   * @remarks
   * The ID of the ACL rule to be deleted.
   * 
   * This parameter is required.
   * 
   * @example
   * acr-c1hkd054qywiw******
   */
  acrId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region to which the ACL rule to be deleted belongs.
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
      aclId: 'AclId',
      acrId: 'AcrId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      acrId: 'string',
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

