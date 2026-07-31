// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ColDetailModel extends $dara.Model {
  /**
   * @remarks
   * The logical name of the column.
   * 
   * @example
   * example
   */
  columnName?: string;
  /**
   * @remarks
   * The time when the column was created. The time is displayed in UTC.
   * 
   * @example
   * 2023-01-05\\"T\\"13:17:55\\"Z\\"
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the column.
   * 
   * @example
   * description
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the column is the distribution key.
   * 
   * @example
   * false
   */
  distributeKey?: boolean;
  /**
   * @remarks
   * Indicates whether the column can be empty.
   * 
   * @example
   * false
   */
  nullable?: boolean;
  /**
   * @remarks
   * Indicates whether the column is the partition key.
   * 
   * @example
   * true
   */
  partitionKey?: boolean;
  /**
   * @remarks
   * Indicates whether the column is the primary key.
   * 
   * @example
   * true
   */
  primaryKey?: boolean;
  /**
   * @remarks
   * The logical name of the database.
   * 
   * @example
   * schemaName
   */
  schemaName?: string;
  /**
   * @remarks
   * The logical name of the table.
   * 
   * @example
   * tableName
   */
  tableName?: string;
  /**
   * @remarks
   * The data type of the column.
   * 
   * @example
   * string
   */
  type?: string;
  /**
   * @remarks
   * The time when the column was updated. The time is displayed in UTC.
   * 
   * @example
   * 2023-01-05\\"T\\"13:17:55\\"Z\\"
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      columnName: 'ColumnName',
      createTime: 'CreateTime',
      description: 'Description',
      distributeKey: 'DistributeKey',
      nullable: 'Nullable',
      partitionKey: 'PartitionKey',
      primaryKey: 'PrimaryKey',
      schemaName: 'SchemaName',
      tableName: 'TableName',
      type: 'Type',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnName: 'string',
      createTime: 'string',
      description: 'string',
      distributeKey: 'boolean',
      nullable: 'boolean',
      partitionKey: 'boolean',
      primaryKey: 'boolean',
      schemaName: 'string',
      tableName: 'string',
      type: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

