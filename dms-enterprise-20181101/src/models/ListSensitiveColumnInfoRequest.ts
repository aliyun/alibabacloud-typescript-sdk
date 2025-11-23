// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSensitiveColumnInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the sensitive field. You can call the [ListSensitiveColumns](https://help.aliyun.com/document_detail/188103.html) operation to query the name of the sensitive field.
   * 
   * > You can also call the [ListColumns](https://help.aliyun.com/document_detail/141870.html) operation to query the name of the sensitive field.
   * 
   * @example
   * test_column
   */
  columnName?: string;
  /**
   * @remarks
   * The ID of the instance. You can call the [ListInstances](https://help.aliyun.com/document_detail/141936.html) or [GetInstance](https://help.aliyun.com/document_detail/141567.html) operation to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 183****
   */
  instanceId?: number;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The database name. You can also call the [SearchDatabase](https://help.aliyun.com/document_detail/141876.html) operation to query the name of the database.
   * 
   * > You can also call the [ListDatabases](https://help.aliyun.com/document_detail/141873.html) operation to query the value of the SchemaName parameter of a physical database, or the [ListLogicDatabases](https://help.aliyun.com/document_detail/141874.html) operation to query the value of the SchemaName parameter of a logical database.
   * 
   * @example
   * test_schema
   */
  schemaName?: string;
  /**
   * @remarks
   * The name of the table. You can call the [ListSensitiveColumns](https://help.aliyun.com/document_detail/188103.html) operation to query the table name.
   * 
   * > You can also call the [ListTables](https://help.aliyun.com/document_detail/141878.html) operation to query the table name.
   * 
   * @example
   * test_table
   */
  tableName?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * > To view the ID of the tenant, go to the DMS console and move the pointer over the profile picture in the upper-right corner. For more information, see the [View information about the current tenant](https://help.aliyun.com/document_detail/181330.html) section of the "Manage DMS tenants" topic.
   * 
   * @example
   * 3***
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      columnName: 'ColumnName',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      schemaName: 'SchemaName',
      tableName: 'TableName',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnName: 'string',
      instanceId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      schemaName: 'string',
      tableName: 'string',
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

