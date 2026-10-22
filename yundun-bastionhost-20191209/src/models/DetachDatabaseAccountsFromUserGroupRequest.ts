// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetachDatabaseAccountsFromUserGroupRequestDatabases extends $dara.Model {
  /**
   * @remarks
   * The IDs of the database accounts from which you want to remove authorization.
   */
  databaseAccountIds?: string[];
  /**
   * @remarks
   * The instance ID of the database from which you want to remove authorization.
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
   * The information about the databases from which you want to remove authorization.
   */
  databases?: DetachDatabaseAccountsFromUserGroupRequestDatabases[];
  /**
   * @remarks
   * The ID of the bastion host instance.
   * > You can call [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-7mz2v120f0y
   */
  instanceId?: string;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * 3
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
   * The ID of the user group from which you want to remove authorized databases and database accounts.
   * > You can call [ListUserGroups](https://help.aliyun.com/document_detail/204509.html) to obtain this parameter.
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
      projectId: 'ProjectId',
      regionId: 'RegionId',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databases: { 'type': 'array', 'itemType': DetachDatabaseAccountsFromUserGroupRequestDatabases },
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

