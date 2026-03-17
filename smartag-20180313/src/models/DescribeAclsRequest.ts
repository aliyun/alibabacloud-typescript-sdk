// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeACLsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ACL.
   * 
   * *   If you want to query multiple ACLs at the same time, separate the ACL IDs with commas (,).
   * *   If you do not set this parameter, all ACLs in the specified region are queried.
   * 
   * @example
   * acl-xhwhyuo43l*******
   */
  aclIds?: string;
  /**
   * @remarks
   * The type of the SAG instance associated with the ACL. Valid values:
   * 
   * *   **acl-hardware**: SAG CPE instance
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
   * The name must be 2 to 100 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). It must start with a letter.
   * 
   * @example
   * test
   */
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The number of the page to return. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Maximum value: **50**. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the region where the ACL is deployed.
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
      aclIds: 'AclIds',
      aclType: 'AclType',
      name: 'Name',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclIds: 'string',
      aclType: 'string',
      name: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
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

