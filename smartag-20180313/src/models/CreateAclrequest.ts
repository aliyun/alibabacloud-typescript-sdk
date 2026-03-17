// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateACLRequest extends $dara.Model {
  /**
   * @remarks
   * The type of SAG instance to be associated with the ACL. Valid values:
   * 
   * *   **acl-hardware** (default): SAG CPE instance
   * *   **acl-software**: SAG app instance
   * 
   * @example
   * acl-hardware
   */
  aclType?: string;
  /**
   * @remarks
   * The name of the ACL.
   * 
   * The name must be 2 to 128 characters in length, and can contain letters, digits, underscores (_), and hyphens (-). The name must start with a letter.
   * 
   * This parameter is required.
   * 
   * @example
   * username
   */
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where you want to create the ACL.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/69813.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      aclType: 'AclType',
      name: 'Name',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclType: 'string',
      name: 'string',
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

