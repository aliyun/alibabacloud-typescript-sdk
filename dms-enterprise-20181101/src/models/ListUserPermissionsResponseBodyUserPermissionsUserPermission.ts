// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListUserPermissionsResponseBodyUserPermissionsUserPermissionPermDetails } from "./ListUserPermissionsResponseBodyUserPermissionsUserPermissionPermDetails";


export class ListUserPermissionsResponseBodyUserPermissionsUserPermission extends $dara.Model {
  /**
   * @remarks
   * The alias of the instance.
   * 
   * @example
   * instance_alias
   */
  alias?: string;
  /**
   * @remarks
   * The name of the field.
   * 
   * @example
   * column_name
   */
  columnName?: string;
  /**
   * @remarks
   * The ID of the database.
   * 
   * @example
   * 1860****
   */
  dbId?: string;
  /**
   * @remarks
   * The type of the database. For more information about the valid values of this parameter, see [DbType parameter](https://www.alibabacloud.com/help/en/data-management-service/latest/dbtype-parameter).
   * 
   * @example
   * polardb
   */
  dbType?: string;
  /**
   * @remarks
   * The permissions on a specific type of objects that are granted to the user. Valid values: 
   * 
   * - DATABASE: permissions on physical databases
   * - LOGIC_DATABASE: permissions on logical databases
   * - TABLE: permissions on physical tables
   * - LOGIC_TABLE: permissions on logical tables
   * 
   * @example
   * DATABASE
   */
  dsType?: string;
  /**
   * @remarks
   * The type of the environment to which the database belongs. Valid values:
   * 
   * - product: production environment
   * - dev: development environment
   * - pre: staging environment
   * - test: test environment
   * - sit: SIT environment
   * - uat: UAT environment
   * - pet: stress testing environment
   * - stag: STAG environment
   * 
   * @example
   * dev
   */
  envType?: string;
  /**
   * @remarks
   * The endpoint that is used to connect the database.
   * 
   * @example
   * rm-bp144d5ky4l4r****
   */
  host?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * 174****
   */
  instanceId?: string;
  /**
   * @remarks
   * Indicates whether the database is a logical database. Valid values:
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
   * The details of permissions.
   */
  permDetails?: ListUserPermissionsResponseBodyUserPermissionsUserPermissionPermDetails;
  /**
   * @remarks
   * The port that is used to connect to the instance.
   * 
   * @example
   * 3306
   */
  port?: number;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * test_db
   */
  schemaName?: string;
  /**
   * @remarks
   * The name that is used to search for the database.
   * 
   * @example
   * test_db@xxx:3306
   */
  searchName?: string;
  /**
   * @remarks
   * The ID of the table.
   * 
   * @example
   * 13434
   */
  tableId?: string;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * test_table
   */
  tableName?: string;
  /**
   * @remarks
   * The ID of the user.
   * 
   * @example
   * 51****
   */
  userId?: string;
  /**
   * @remarks
   * The nickname of the user.
   * 
   * @example
   * nick_name
   */
  userNickName?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      columnName: 'ColumnName',
      dbId: 'DbId',
      dbType: 'DbType',
      dsType: 'DsType',
      envType: 'EnvType',
      host: 'Host',
      instanceId: 'InstanceId',
      logic: 'Logic',
      permDetails: 'PermDetails',
      port: 'Port',
      schemaName: 'SchemaName',
      searchName: 'SearchName',
      tableId: 'TableId',
      tableName: 'TableName',
      userId: 'UserId',
      userNickName: 'UserNickName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      columnName: 'string',
      dbId: 'string',
      dbType: 'string',
      dsType: 'string',
      envType: 'string',
      host: 'string',
      instanceId: 'string',
      logic: 'boolean',
      permDetails: ListUserPermissionsResponseBodyUserPermissionsUserPermissionPermDetails,
      port: 'number',
      schemaName: 'string',
      searchName: 'string',
      tableId: 'string',
      tableName: 'string',
      userId: 'string',
      userNickName: 'string',
    };
  }

  validate() {
    if(this.permDetails && typeof (this.permDetails as any).validate === 'function') {
      (this.permDetails as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

