// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FieldSchemaModel } from "./FieldSchemaModel";


export class CstoreIndexModel extends $dara.Model {
  /**
   * @remarks
   * The order of index columns.
   */
  columnOrds?: string[];
  /**
   * @remarks
   * The time when the index was created.
   * 
   * @example
   * 2023-01-05 13:17:55
   */
  createTime?: string;
  /**
   * @remarks
   * The logical name of the database.
   * 
   * @example
   * exampleDatabase
   */
  databaseName?: string;
  /**
   * @remarks
   * The index columns.
   */
  indexColumns?: FieldSchemaModel[];
  /**
   * @remarks
   * The name of the index.
   * 
   * @example
   * indexName
   */
  indexName?: string;
  /**
   * @remarks
   * The type of the index.
   * 
   * @example
   * NORMAL
   */
  indexType?: string;
  /**
   * @remarks
   * The properties.
   */
  options?: { [key: string]: string };
  /**
   * @remarks
   * The physical name of the table.
   * 
   * @example
   * physicalDatabase
   */
  physicalTableName?: string;
  /**
   * @remarks
   * The time when the index was updated.
   * 
   * @example
   * 2023-01-05 13:17:55
   */
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

