// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTableColumnsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of a physical database: You can call the [ListDatabases](https://help.aliyun.com/document_detail/141873.html) or [SearchDatabase](https://help.aliyun.com/document_detail/141876.html) operation to obtain the physical database ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  dbId?: number;
  /**
   * @remarks
   * The table name.
   * 
   * >  You can also call the [ListTables](https://help.aliyun.com/document_detail/141878.html) operation to query the table name.
   * 
   * This parameter is required.
   * 
   * @example
   * 100g_customer
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
      dbId: 'DbId',
      tableName: 'TableName',
      tableSchemaName: 'TableSchemaName',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

