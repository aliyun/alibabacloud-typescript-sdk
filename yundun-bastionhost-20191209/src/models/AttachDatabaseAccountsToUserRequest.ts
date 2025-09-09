// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachDatabaseAccountsToUserRequestDatabases extends $dara.Model {
  /**
   * @remarks
   * An array that consists of database account IDs.
   */
  databaseAccountIds?: string[];
  /**
   * @remarks
   * The ID of the database that you want to authorize the user to manage.
   * 
   * @example
   * 22
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

export class AttachDatabaseAccountsToUserRequest extends $dara.Model {
  /**
   * @remarks
   * An array that consists of database objects.
   * 
   * >  You can specify up to 10 databases and 10 database accounts. The database accounts are not required. If you do not specify a database account, the user is authorized to manage only the databases.
   */
  databases?: AttachDatabaseAccountsToUserRequestDatabases[];
  /**
   * @remarks
   * The ID of the bastion host whose user you want to grant permissions.
   * 
   * >  You can call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to query the ID of the bastion host.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-wwo36qbv601
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID of the bastion host.
   * 
   * >  For more information about the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the user to be authorized.
   * 
   * >  You can call the [ListUsers](https://help.aliyun.com/document_detail/204522.html) operation to query the user ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      databases: 'Databases',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databases: { 'type': 'array', 'itemType': AttachDatabaseAccountsToUserRequestDatabases },
      instanceId: 'string',
      regionId: 'string',
      userId: 'string',
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

