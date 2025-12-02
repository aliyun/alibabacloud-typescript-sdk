// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ColDetailModel } from "./ColDetailModel";


export class TableDetailModel extends $dara.Model {
  catalog?: string;
  columns?: ColDetailModel[];
  createTime?: string;
  createdBySource?: string;
  createdByUser?: string;
  description?: string;
  location?: string;
  owner?: string;
  parameters?: { [key: string]: string };
  schemaName?: string;
  tableName?: string;
  tableType?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      catalog: 'Catalog',
      columns: 'Columns',
      createTime: 'CreateTime',
      createdBySource: 'CreatedBySource',
      createdByUser: 'CreatedByUser',
      description: 'Description',
      location: 'Location',
      owner: 'Owner',
      parameters: 'Parameters',
      schemaName: 'SchemaName',
      tableName: 'TableName',
      tableType: 'TableType',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalog: 'string',
      columns: { 'type': 'array', 'itemType': ColDetailModel },
      createTime: 'string',
      createdBySource: 'string',
      createdByUser: 'string',
      description: 'string',
      location: 'string',
      owner: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      schemaName: 'string',
      tableName: 'string',
      tableType: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.columns)) {
      $dara.Model.validateArray(this.columns);
    }
    if(this.parameters) {
      $dara.Model.validateMap(this.parameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

