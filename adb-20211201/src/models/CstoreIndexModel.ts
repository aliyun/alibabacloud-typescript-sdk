// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FieldSchemaModel } from "./FieldSchemaModel";


export class CstoreIndexModel extends $dara.Model {
  columnOrds?: string[];
  createTime?: string;
  databaseName?: string;
  indexColumns?: FieldSchemaModel[];
  indexName?: string;
  indexType?: string;
  options?: { [key: string]: string };
  physicalTableName?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      columnOrds: 'ColumnOrds',
      createTime: 'CreateTime',
      databaseName: 'DatabaseName',
      indexColumns: 'IndexColumns',
      indexName: 'IndexName',
      indexType: 'IndexType',
      options: 'Options',
      physicalTableName: 'PhysicalTableName',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnOrds: { 'type': 'array', 'itemType': 'string' },
      createTime: 'string',
      databaseName: 'string',
      indexColumns: { 'type': 'array', 'itemType': FieldSchemaModel },
      indexName: 'string',
      indexType: 'string',
      options: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      physicalTableName: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.columnOrds)) {
      $dara.Model.validateArray(this.columnOrds);
    }
    if(Array.isArray(this.indexColumns)) {
      $dara.Model.validateArray(this.indexColumns);
    }
    if(this.options) {
      $dara.Model.validateMap(this.options);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

