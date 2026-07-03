// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeACLsRequest extends $dara.Model {
  /**
   * @remarks
   * The access control instance ID.
   * 
   * - To query multiple access control instances simultaneously, separate multiple instance IDs with commas (,).
   * - If this parameter is not specified, information about all access control instances in the current region is queried.
   * 
   * @example
   * acl-xhwhyuo43l*******
   */
  aclIds?: string;
  /**
   * @remarks
   * The type of Smart Access Gateway (SAG) instance that the access control instance can be associated with. Valid values:
   * 
   * - **acl-hardware**: SAG hardware instance.
   * - **acl-software**: SAG app instance.
   * 
   * @example
   * acl-hardware
   */
  aclType?: string;
  /**
   * @remarks
   * The name of the access control instance.
   * 
   * The name must be 2 to 100 characters in length and must start with an uppercase letter, lowercase letter, or Chinese character. The name can contain digits, underscores (_), periods (.), and hyphens (-).
   * 
   * @example
   * test
   */
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page for a paginated query. Maximum value: **50**. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the access control instance.
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

