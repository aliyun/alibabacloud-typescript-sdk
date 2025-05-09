// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDatabaseUserPermssionsResponseBodyUserPermissionsUserPermissionPermDetails } from "./ListDatabaseUserPermssionsResponseBodyUserPermissionsUserPermissionPermDetails";


export class ListDatabaseUserPermssionsResponseBodyUserPermissionsUserPermission extends $dara.Model {
  /**
   * @remarks
   * The alias of the database instance.
   * 
   * @example
   * instance_alias
   */
  alias?: string;
  /**
   * @remarks
   * The name of a column.
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
   * 1234
   */
  dbId?: string;
  /**
   * @remarks
   * The type of the database engine.
   * 
   * @example
   * mysql
   */
  dbType?: string;
  /**
   * @remarks
   * The type of resources on which the user has permissions.
   * 
   * @example
   * DATABASE
   */
  dsType?: string;
  /**
   * @remarks
   * The type of the environment to which the database belongs.
   * 
   * @example
   * product
   */
  envType?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * 1443
   */
  instanceId?: string;
  /**
   * @remarks
   * Indicates whether the database is a logical database.
   * 
   * @example
   * false
   */
  logic?: boolean;
  /**
   * @remarks
   * The details of user permissions.
   */
  permDetails?: ListDatabaseUserPermssionsResponseBodyUserPermissionsUserPermissionPermDetails;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * xxx@xxxx:3306
   */
  schemaName?: string;
  /**
   * @remarks
   * The name that is used to search for the database.
   * 
   * @example
   * xxx
   */
  searchName?: string;
  /**
   * @remarks
   * The ID of the table.
   * 
   * @example
   * 42345
   */
  tableId?: string;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * table_name
   */
  tableName?: string;
  /**
   * @remarks
   * The ID of the user.
   * 
   * @example
   * 14324
   */
  userId?: string;
  /**
   * @remarks
   * The nickname of the user.
   * 
   * @example
   * user_nick_name
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
      instanceId: 'InstanceId',
      logic: 'Logic',
      permDetails: 'PermDetails',
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
      instanceId: 'string',
      logic: 'boolean',
      permDetails: ListDatabaseUserPermssionsResponseBodyUserPermissionsUserPermissionPermDetails,
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

