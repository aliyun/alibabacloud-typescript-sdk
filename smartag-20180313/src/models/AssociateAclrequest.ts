// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssociateACLRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of ACL.
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
   * The ID of the region where the ACL is created.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/69813.html) operation to query the most recent region list.
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
   * The ID of the SAG instance to be associated with the ACL.
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

