// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FieldSchemaModel extends $dara.Model {
  autoIncrement?: boolean;
  columnRawName?: string;
  comment?: string;
  compressFloatUseShort?: boolean;
  compression?: string;
  createTime?: string;
  dataType?: string;
  databaseName?: string;
  defaultValue?: string;
  delimiter?: string;
  encode?: string;
  isPartitionKey?: boolean;
  mappedName?: string;
  name?: string;
  nullable?: boolean;
  onUpdate?: string;
  ordinalPosition?: number;
  physicalColumnName?: string;
  pkPosition?: number;
  precision?: number;
  primarykey?: boolean;
  scale?: number;
  tableName?: string;
  tokenizer?: string;
  type?: string;
  updateTime?: string;
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

