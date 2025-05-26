// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ColDetailModel extends $dara.Model {
  columnName?: string;
  createTime?: string;
  description?: string;
  distributeKey?: boolean;
  nullable?: boolean;
  partitionKey?: boolean;
  primaryKey?: boolean;
  schemaName?: string;
  tableName?: string;
  type?: string;
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

