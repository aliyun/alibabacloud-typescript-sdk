// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetachDatabaseAccountsFromUserGroupRequestDatabases extends $dara.Model {
  /**
   * @remarks
   * An array that consists of database account IDs.
   */
  databaseAccountIds?: string[];
  /**
   * @remarks
   * The ID of the database on which the permissions are to be revoked.
   * 
   * @example
   * 4
   */
  databaseId?: string;
  static names(): { [key: string]: string } {
    return {
      databaseAccountIds: 'DatabaseAccountIds',
      databaseId: 'DatabaseId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseAccountIds: { 'type': 'array', 'itemType': 'string' },
      databaseId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.databaseAccountIds)) {
      $dara.Model.validateArray(this.databaseAccountIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachDatabaseAccountsFromUserGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The information about the database.
   */
  databases?: DetachDatabaseAccountsFromUserGroupRequestDatabases[];
  /**
   * @remarks
   * The bastion host ID.
   * 
   * > You can call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to query the bastion host ID.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-7mz2v120f0y
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID of the bastion host.
   * 
   * > For more information about the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the user group from which you want to revoke permissions on databases and database accounts.
   * 
   * > You can call the [ListUserGroups](https://help.aliyun.com/document_detail/204509.html) operation to query the ID of the user group.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      databases: 'Databases',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databases: { 'type': 'array', 'itemType': DetachDatabaseAccountsFromUserGroupRequestDatabases },
      instanceId: 'string',
      regionId: 'string',
      userGroupId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.databases)) {
      $dara.Model.validateArray(this.databases);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

