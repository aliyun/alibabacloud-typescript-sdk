// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { OpenStructMvDetailModel } from "./OpenStructMvDetailModel";


export class TableSummaryModel extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2023-01-05 13:17:55
   */
  createTime?: string;
  /**
   * @remarks
   * The creation source of the table or view.
   */
  createdBySource?: string;
  /**
   * @remarks
   * The user who created the table or view.
   */
  createdByUser?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * descrtiption
   */
  description?: string;
  /**
   * @remarks
   * The materialized view details.
   */
  mvDetailModel?: OpenStructMvDetailModel;
  /**
   * @remarks
   * The owner.
   * 
   * @example
   * abc
   */
  owner?: string;
  /**
   * @remarks
   * The SQL statement used to create the table or view.
   * 
   * @example
   * create table(a varchar)
   */
  SQL?: string;
  /**
   * @remarks
   * The logical database name.
   * 
   * @example
   * schemaName
   */
  schemaName?: string;
  /**
   * @remarks
   * The logical table name or logical view name.
   * 
   * @example
   * tableName
   */
  tableName?: string;
  /**
   * @remarks
   * The table size in bytes.
   * 
   * @example
   * 1234
   */
  tableSize?: number;
  /**
   * @remarks
   * The table or view type.
   * 
   * @example
   * PHYSICAL_SCHEMA_NAME
   */
  tableType?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2023-01-05 13:17:55
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createdBySource: 'CreatedBySource',
      createdByUser: 'CreatedByUser',
      description: 'Description',
      mvDetailModel: 'MvDetailModel',
      owner: 'Owner',
      SQL: 'SQL',
      schemaName: 'SchemaName',
      tableName: 'TableName',
      tableSize: 'TableSize',
      tableType: 'TableType',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      createdBySource: 'string',
      createdByUser: 'string',
      description: 'string',
      mvDetailModel: OpenStructMvDetailModel,
      owner: 'string',
      SQL: 'string',
      schemaName: 'string',
      tableName: 'string',
      tableSize: 'number',
      tableType: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    if(this.mvDetailModel && typeof (this.mvDetailModel as any).validate === 'function') {
      (this.mvDetailModel as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

