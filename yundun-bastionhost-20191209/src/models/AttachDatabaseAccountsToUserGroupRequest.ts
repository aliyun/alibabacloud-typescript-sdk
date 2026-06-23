// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachDatabaseAccountsToUserGroupRequestDatabases extends $dara.Model {
  /**
   * @remarks
   * An array of database account IDs.
   */
  databaseAccountIds?: string[];
  /**
   * @remarks
   * The ID of the database instance on which you want to grant permissions.
   * 
   * @example
   * 58
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

export class AttachDatabaseAccountsToUserGroupRequest extends $dara.Model {
  /**
   * @remarks
   * An array of database objects.
   * 
   * > You can specify up to 10 databases and 10 database accounts. If you do not specify any database accounts, permissions are granted on the entire database.
   */
  databases?: AttachDatabaseAccountsToUserGroupRequestDatabases[];
  /**
   * @remarks
   * The ID of the Bastionhost instance.
   * 
   * > Call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to obtain the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-zvp282aly06
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID of the Bastionhost instance.
   * 
   * > For more information about the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the user group to which to grant the permissions.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
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
      databases: { 'type': 'array', 'itemType': AttachDatabaseAccountsToUserGroupRequestDatabases },
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

