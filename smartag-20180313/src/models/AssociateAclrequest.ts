// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssociateACLRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the access control list.
   * 
   * This parameter is required.
   * 
   * @example
   * acl-ohlexqptfhy******
   */
  aclId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the Smart Access Gateway instance to which you want to attach the access control list.
   * 
   * This parameter is required.
   * 
   * @example
   * sag-4yr0p2xa6o3k*******
   */
  smartAGId?: string;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

