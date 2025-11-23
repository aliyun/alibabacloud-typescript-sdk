// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddTableToCategoryRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the associated category.
   * 
   * This parameter is required.
   * 
   * @example
   * 30000254257
   */
  categoryId?: number;
  /**
   * @remarks
   * The ID of a physical database: You can call the [ListDatabases](https://help.aliyun.com/document_detail/141873.html) or [SearchDatabase](https://help.aliyun.com/document_detail/141876.html) operation to obtain the physical database ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1930****
   */
  dbId?: number;
  /**
   * @remarks
   * The name of the table. You can call the [ListTables](https://help.aliyun.com/document_detail/141878.html) operation to query the table name.
   * 
   * This parameter is required.
   * 
   * @example
   * table_name
   */
  tableName?: string;
  /**
   * @remarks
   * The schema name of the table, which is required only for SQL Server instances.
   * 
   * @example
   * dbo
   */
  tableSchemaName?: string;
  /**
   * @remarks
   * The tenant ID. You can call the [GetUserActiveTenant](https://help.aliyun.com/document_detail/198073.html) or [ListUserTenants](https://help.aliyun.com/document_detail/198074.html) operation to obtain the tenant ID.
   * 
   * @example
   * 3***
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      dbId: 'DbId',
      tableName: 'TableName',
      tableSchemaName: 'TableSchemaName',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'number',
      dbId: 'number',
      tableName: 'string',
      tableSchemaName: 'string',
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

