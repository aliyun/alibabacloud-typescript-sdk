// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachDatabaseAccountsToUserGroupRequestDatabases extends $dara.Model {
  /**
   * @remarks
   * The array of database account IDs.
   */
  databaseAccountIds?: string[];
  /**
   * @remarks
   * The ID of the database instance to authorize.
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
   * The array of database objects.
   * >A maximum of 10 databases and 10 database accounts are supported. You can leave the database accounts unspecified. If no accounts are specified, permissions are granted at the database level.
   */
  databases?: AttachDatabaseAccountsToUserGroupRequestDatabases[];
  /**
   * @remarks
   * The instance ID of the bastion host.
   * > You can invoke the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to query this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-zvp282aly06
   */
  instanceId?: string;
  /**
   * @remarks
   * The project ID.
   */
  projectId?: number;
  /**
   * @remarks
   * The region ID of the bastion host.
   * > For the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the user group to which you want to grant permissions.
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
      projectId: 'ProjectId',
      regionId: 'RegionId',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databases: { 'type': 'array', 'itemType': AttachDatabaseAccountsToUserGroupRequestDatabases },
      instanceId: 'string',
      projectId: 'number',
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

