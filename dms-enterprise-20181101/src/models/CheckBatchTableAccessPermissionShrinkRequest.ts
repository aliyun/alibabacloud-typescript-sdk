// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckBatchTableAccessPermissionShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The database ID. You can call the [ListDatabases](https://help.aliyun.com/document_detail/141873.html) operation to query the ID of a physical database and the [ListLogicDatabases](https://help.aliyun.com/document_detail/141874.html) operation to query the ID of a logical database.
   * 
   * >  The value of DatabaseId is that of DbId.
   * 
   * This parameter is required.
   * 
   * @example
   * 43153
   */
  dbId?: number;
  /**
   * @remarks
   * Specifies whether the database is a logical database. Valid values:
   * 
   * *   true: Logical database.
   * *   false: Physical database.
   * 
   * @example
   * false
   */
  logic?: boolean;
  /**
   * @remarks
   * The type of the permission to be verified.
   * 
   * Valid values:
   * 
   * *   QUERY
   * *   EXPORT
   * *   CORRECT
   * *   LOGIN
   * *   PERF
   * 
   * This parameter is required.
   * 
   * @example
   * QUERY
   */
  permissionType?: string;
  /**
   * @remarks
   * The name of the table.
   * 
   * This parameter is required.
   */
  tableNameListShrink?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * >  View Tenant ID by hovering over your profile icon in the DMS console. For more information, see the [View information about the current tenant](https://help.aliyun.com/document_detail/181330.html) section of the "Manage DMS tenants" topic.
   * 
   * @example
   * 3***
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      dbId: 'DbId',
      logic: 'Logic',
      permissionType: 'PermissionType',
      tableNameListShrink: 'TableNameList',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbId: 'number',
      logic: 'boolean',
      permissionType: 'string',
      tableNameListShrink: 'string',
      tid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

