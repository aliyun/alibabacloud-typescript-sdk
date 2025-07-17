// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MetaCategoryTableEntity extends $dara.Model {
  catalogName?: string;
  categoryId?: number;
  databaseSearchName?: string;
  dbId?: number;
  dbType?: string;
  description?: string;
  instanceId?: number;
  schemaName?: string;
  tableName?: string;
  tableSchemaName?: string;
  static names(): { [key: string]: string } {
    return {
      catalogName: 'CatalogName',
      categoryId: 'CategoryId',
      databaseSearchName: 'DatabaseSearchName',
      dbId: 'DbId',
      dbType: 'DbType',
      description: 'Description',
      instanceId: 'InstanceId',
      schemaName: 'SchemaName',
      tableName: 'TableName',
      tableSchemaName: 'TableSchemaName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogName: 'string',
      categoryId: 'number',
      databaseSearchName: 'string',
      dbId: 'number',
      dbType: 'string',
      description: 'string',
      instanceId: 'number',
      schemaName: 'string',
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

