// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GrantUserPermissionRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the database. You can call the [ListDatabases](https://help.aliyun.com/document_detail/141873.html) operation to query the ID of a physical database and the [ListLogicDatabases](https://help.aliyun.com/document_detail/141874.html) operation to query the ID of a logical database.
   * 
   * >  The value of the DatabaseId parameter is that of the DbId parameter.
   * 
   * @example
   * 1***
   */
  dbId?: string;
  /**
   * @remarks
   * The permissions on a specific type of object that you want to grant to the user. Valid values:
   * 
   * *   INSTANCE: permissions on instances
   * *   DATABASE: permissions on physical databases
   * *   LOGIC_DATABASE: permissions on logical databases
   * *   TABLE: permissions on physical tables
   * *   LOGIC_TABLE: permissions on logical tables
   * 
   * This parameter is required.
   * 
   * @example
   * DATABASE
   */
  dsType?: string;
  /**
   * @remarks
   * The time when the permissions expire.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-12-12 00:00:00
   */
  expireDate?: string;
  /**
   * @remarks
   * The ID of the instance. You must specify this parameter if you grant permissions on an instance to the user. You can call the [ListInstances](https://help.aliyun.com/document_detail/141936.html) or [GetInstance](https://help.aliyun.com/document_detail/141567.html) operation to query the ID of the instance.
   * 
   * @example
   * 174****
   */
  instanceId?: number;
  /**
   * @remarks
   * Specifies whether the database is a logical database. You must specify this parameter if you grant permissions on a database to the user. Valid values:
   * 
   * *   true: The database is a logical database.
   * *   false: The database is a physical database.
   * 
   * @example
   * false
   */
  logic?: boolean;
  /**
   * @remarks
   * The permission type. Separate multiple permission types with commas (,). Valid values:
   * 
   * *   **QUERY**: the query permissions
   * *   **EXPORT**: the export permissions
   * *   **CORRECT**: the change permissions
   * *   **LOGIN**: the logon permissions
   * *   **PERF**: the query permissions on the performance details of the instance
   * 
   * This parameter is required.
   * 
   * @example
   * QUERY
   */
  permTypes?: string;
  /**
   * @remarks
   * The ID of the table. You must specify this parameter if you grant permissions on a table to the user. You can call the [ListTables](https://help.aliyun.com/document_detail/141878.html) operation to query the table ID.
   * 
   * @example
   * 132***
   */
  tableId?: string;
  /**
   * @remarks
   * The name of the table. You must specify this parameter if you grant permissions on a table to the user.
   * 
   * @example
   * table_name
   */
  tableName?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * >  To view the ID of the tenant, move the pointer over the profile picture in the upper-right corner of the Data Management (DMS) console. For more information, see the "View information about the current tenant" section of the [Manage DMS tenants](https://help.aliyun.com/document_detail/181330.html) topic.
   * 
   * @example
   * 3***
   */
  tid?: number;
  /**
   * @remarks
   * The ID of the user. You can call the [GetUser](https://help.aliyun.com/document_detail/147098.html) or [ListUsers](https://help.aliyun.com/document_detail/141938.html) operation to query the ID of the user.
   * 
   * >  The user ID is different from the ID of your Alibaba Cloud account.
   * 
   * This parameter is required.
   * 
   * @example
   * 51****
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      dbId: 'DbId',
      dsType: 'DsType',
      expireDate: 'ExpireDate',
      instanceId: 'InstanceId',
      logic: 'Logic',
      permTypes: 'PermTypes',
      tableId: 'TableId',
      tableName: 'TableName',
      tid: 'Tid',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbId: 'string',
      dsType: 'string',
      expireDate: 'string',
      instanceId: 'number',
      logic: 'boolean',
      permTypes: 'string',
      tableId: 'string',
      tableName: 'string',
      tid: 'number',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

