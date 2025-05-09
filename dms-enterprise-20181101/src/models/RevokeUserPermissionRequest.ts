// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RevokeUserPermissionRequest extends $dara.Model {
  /**
   * @remarks
   * The database ID. The database can be a physical database or a logical database.
   * 
   * *   To query the ID of a physical database, call the [ListDatabases](https://help.aliyun.com/document_detail/141873.html) or [SearchDatabase](https://help.aliyun.com/document_detail/141876.html) operation.
   * *   To query the ID of a logical database, call the [ListLogicDatabases](https://help.aliyun.com/document_detail/141874.html) or [SearchDatabase](https://help.aliyun.com/document_detail/141876.html) operation.
   * 
   * @example
   * 1860****
   */
  dbId?: string;
  /**
   * @remarks
   * The type of the object on which you want to revoke permissions from a user. Valid values:
   * 
   * *   **INSTANCE**: instances.
   * *   **DATABASE**: physical databases.
   * *   **LOGIC_DATABASE**: logical databases.
   * *   **TABLE**: physical tables.
   * *   **LOGIC_TABLE**: logical tables.
   * 
   * This parameter is required.
   * 
   * @example
   * DATABASE
   */
  dsType?: string;
  /**
   * @remarks
   * The database instance ID. You must specify this parameter if you revoke a permission from the database instance. You can call the [ListInstances](https://help.aliyun.com/document_detail/141936.html) or [GetInstance](https://help.aliyun.com/document_detail/141567.html) operation to query the ID of the database instance.
   * 
   * @example
   * 174****
   */
  instanceId?: number;
  /**
   * @remarks
   * Specifies whether the database is a logical database. Valid values:
   * 
   * *   **true**: The database is a logical database.
   * *   **false**: The database is a physical database.
   * 
   * > 
   * 
   * *   If the database is a logical database, set this parameter to **true**.
   * 
   * *   If the database is a physical database, set this parameter to **false**.
   * 
   * @example
   * false
   */
  logic?: boolean;
  /**
   * @remarks
   * The type of the permissions. Valid values:
   * 
   * *   **QUERY**: query permissions.
   * *   **EXPORT**: export permissions.
   * *   **CORRECT**: change permissions.
   * *   **LOGIN**: logon permissions.
   * *   **PERF**: query permissions on the performance details of an instance.
   * 
   * This parameter is required.
   * 
   * @example
   * CORRECT
   */
  permTypes?: string;
  /**
   * @remarks
   * The table ID. You must specify this parameter if you revoke a permission from the table. You can call the [ListTables](https://help.aliyun.com/document_detail/141878.html) operation to query the table ID.
   * 
   * @example
   * 13****
   */
  tableId?: string;
  /**
   * @remarks
   * The name of the table. You can call the [ListTables](https://help.aliyun.com/document_detail/141878.html) operation to query the table name.
   * 
   * @example
   * table_name
   */
  tableName?: string;
  /**
   * @remarks
   * The tenant ID. You can call the [GetUserActiveTenant](https://help.aliyun.com/document_detail/198073.html) operation to query the tenant ID.
   * 
   * @example
   * 3***
   */
  tid?: number;
  /**
   * @remarks
   * The permission ID. You can call the [ListUserPermission](https://help.aliyun.com/document_detail/146957.html) operation to query the permission ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 774****
   */
  userAccessId?: string;
  /**
   * @remarks
   * The user ID. You can call the [ListUsers](https://help.aliyun.com/document_detail/141938.html) or [GetUser](https://help.aliyun.com/document_detail/147098.html) operation to query the ID of the user.
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
      instanceId: 'InstanceId',
      logic: 'Logic',
      permTypes: 'PermTypes',
      tableId: 'TableId',
      tableName: 'TableName',
      tid: 'Tid',
      userAccessId: 'UserAccessId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbId: 'string',
      dsType: 'string',
      instanceId: 'number',
      logic: 'boolean',
      permTypes: 'string',
      tableId: 'string',
      tableName: 'string',
      tid: 'number',
      userAccessId: 'string',
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

