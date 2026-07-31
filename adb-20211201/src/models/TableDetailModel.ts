// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ColDetailModel } from "./ColDetailModel";


export class TableDetailModel extends $dara.Model {
  /**
   * @remarks
   * External data source.
   * 
   * @example
   * oss
   */
  catalog?: string;
  /**
   * @remarks
   * Column information.
   */
  columns?: ColDetailModel[];
  /**
   * @remarks
   * Creation time.
   * 
   * @example
   * 2023-01-05 13:17:55
   */
  createTime?: string;
  createdBySource?: string;
  createdByUser?: string;
  /**
   * @remarks
   * Description.
   * 
   * @example
   * Description
   */
  description?: string;
  location?: string;
  /**
   * @remarks
   * Owner.
   * 
   * @example
   * abc
   */
  owner?: string;
  parameters?: { [key: string]: string };
  /**
   * @remarks
   * Logical database name.
   * 
   * @example
   * schemaName
   */
  schemaName?: string;
  /**
   * @remarks
   * Logical table name.
   * 
   * @example
   * tableName
   */
  tableName?: string;
  /**
   * @remarks
   * Table type.
   * 
   * @example
   * PHYSICAL_SCHEMA_NAME
   */
  tableType?: string;
  /**
   * @remarks
   * Update time.
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

