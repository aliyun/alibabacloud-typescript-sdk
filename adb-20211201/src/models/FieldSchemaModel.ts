// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FieldSchemaModel extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the column is auto-incremented.
   * 
   * @example
   * true
   */
  autoIncrement?: boolean;
  /**
   * @remarks
   * The original name of the column.
   * 
   * @example
   * ColumnRawName
   */
  columnRawName?: string;
  /**
   * @remarks
   * The description of the column.
   * 
   * @example
   * comment
   */
  comment?: string;
  /**
   * @remarks
   * Indicates whether FLOAT data is compressed to SHORT data.
   * 
   * @example
   * false
   */
  compressFloatUseShort?: boolean;
  /**
   * @remarks
   * The compression method of the column.
   * 
   * @example
   * compression
   */
  compression?: string;
  /**
   * @remarks
   * The time when the column was created.
   * 
   * @example
   * 2023-01-05 13:17:55
   */
  createTime?: string;
  /**
   * @remarks
   * The data type of the column.
   * 
   * @example
   * long
   */
  dataType?: string;
  /**
   * @remarks
   * The logical name of the database.
   * 
   * @example
   * databaseName
   */
  databaseName?: string;
  /**
   * @remarks
   * The default value of the column.
   * 
   * @example
   * default
   */
  defaultValue?: string;
  /**
   * @remarks
   * The delimiter of the column.
   * 
   * @example
   * delimiter
   */
  delimiter?: string;
  /**
   * @remarks
   * The encryption method of the column.
   * 
   * @example
   * encode
   */
  encode?: string;
  /**
   * @remarks
   * Indicates whether the column is the partition key.
   * 
   * @example
   * false
   */
  isPartitionKey?: boolean;
  /**
   * @remarks
   * The mapping name.
   * 
   * @example
   * mappedName
   */
  mappedName?: string;
  /**
   * @remarks
   * The name of the column.
   * 
   * @example
   * name
   */
  name?: string;
  /**
   * @remarks
   * Indicates whether the column can be empty.
   * 
   * @example
   * true
   */
  nullable?: boolean;
  /**
   * @remarks
   * The update condition of the column.
   * 
   * @example
   * onUpdate
   */
  onUpdate?: string;
  /**
   * @remarks
   * The location of the column.
   * 
   * @example
   * -1
   */
  ordinalPosition?: number;
  /**
   * @remarks
   * The physical name of the column.
   * 
   * @example
   * PhysicalColumnName
   */
  physicalColumnName?: string;
  /**
   * @remarks
   * The location of the primary key.
   * 
   * @example
   * -1
   */
  pkPosition?: number;
  /**
   * @remarks
   * The precision of the column.
   * 
   * @example
   * 1
   */
  precision?: number;
  /**
   * @remarks
   * Indicates whether the column is the primary key.
   * 
   * @example
   * true
   */
  primarykey?: boolean;
  /**
   * @remarks
   * The scale of the column.
   * 
   * @example
   * 1
   */
  scale?: number;
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
   * The token of the column.
   * 
   * @example
   * tokenizer
   */
  tokenizer?: string;
  /**
   * @remarks
   * The type of the column.
   * 
   * @example
   * long
   */
  type?: string;
  /**
   * @remarks
   * The time when the index was updated.
   * 
   * @example
   * 2023-01-05 13:17:55
   */
  updateTime?: string;
  /**
   * @remarks
   * The value type of the column.
   * 
   * @example
   * valueType
   */
  valueType?: string;
  static names(): { [key: string]: string } {
    return {
      autoIncrement: 'AutoIncrement',
      columnRawName: 'ColumnRawName',
      comment: 'Comment',
      compressFloatUseShort: 'CompressFloatUseShort',
      compression: 'Compression',
      createTime: 'CreateTime',
      dataType: 'DataType',
      databaseName: 'DatabaseName',
      defaultValue: 'DefaultValue',
      delimiter: 'Delimiter',
      encode: 'Encode',
      isPartitionKey: 'IsPartitionKey',
      mappedName: 'MappedName',
      name: 'Name',
      nullable: 'Nullable',
      onUpdate: 'OnUpdate',
      ordinalPosition: 'OrdinalPosition',
      physicalColumnName: 'PhysicalColumnName',
      pkPosition: 'PkPosition',
      precision: 'Precision',
      primarykey: 'Primarykey',
      scale: 'Scale',
      tableName: 'TableName',
      tokenizer: 'Tokenizer',
      type: 'Type',
      updateTime: 'UpdateTime',
      valueType: 'ValueType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoIncrement: 'boolean',
      columnRawName: 'string',
      comment: 'string',
      compressFloatUseShort: 'boolean',
      compression: 'string',
      createTime: 'string',
      dataType: 'string',
      databaseName: 'string',
      defaultValue: 'string',
      delimiter: 'string',
      encode: 'string',
      isPartitionKey: 'boolean',
      mappedName: 'string',
      name: 'string',
      nullable: 'boolean',
      onUpdate: 'string',
      ordinalPosition: 'number',
      physicalColumnName: 'string',
      pkPosition: 'number',
      precision: 'number',
      primarykey: 'boolean',
      scale: 'number',
      tableName: 'string',
      tokenizer: 'string',
      type: 'string',
      updateTime: 'string',
      valueType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

