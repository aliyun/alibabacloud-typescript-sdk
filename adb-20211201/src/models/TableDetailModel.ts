// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ColDetailModel } from "./ColDetailModel";


export class TableDetailModel extends $dara.Model {
  /**
   * @remarks
   * The external data source.
   * 
   * @example
   * oss
   */
  catalog?: string;
  /**
   * @remarks
   * The column information.
   */
  columns?: ColDetailModel[];
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
   * The creation source of the table.
   */
  createdBySource?: string;
  /**
   * @remarks
   * The user who created the table.
   */
  createdByUser?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * Description
   */
  description?: string;
  /**
   * @remarks
   * The storage location of the table data.
   * 
   * @example
   * oss://**************
   */
  location?: string;
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
   * The table property parameters.
   */
  parameters?: { [key: string]: string };
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
   * The logical table name.
   * 
   * @example
   * tableName
   */
  tableName?: string;
  /**
   * @remarks
   * The table type.
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

