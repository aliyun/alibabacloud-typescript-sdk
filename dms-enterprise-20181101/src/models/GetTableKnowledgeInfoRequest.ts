// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTableKnowledgeInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the physical database. You can call the [SearchDatabase](https://help.aliyun.com/document_detail/141876.html) operation to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 325
   */
  dbId?: number;
  /**
   * @remarks
   * The name of the table.
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
  static names(): { [key: string]: string } {
    return {
      dbId: 'DbId',
      tableName: 'TableName',
      tableSchemaName: 'TableSchemaName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbId: 'number',
      tableName: 'string',
      tableSchemaName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

