// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTableMetaResponseBodyFields extends $dara.Model {
  /**
   * @remarks
   * Whether the field is a dimension field.
   * 
   * @example
   * false
   */
  isDimensionField?: boolean;
  /**
   * @remarks
   * The field meaning.
   * 
   * @example
   * the gender of people
   */
  meaning?: string;
  /**
   * @remarks
   * The field name.
   * 
   * @example
   * gender
   */
  name?: string;
  /**
   * @remarks
   * The field type.
   * 
   * @example
   * BIGINT
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      isDimensionField: 'IsDimensionField',
      meaning: 'Meaning',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isDimensionField: 'boolean',
      meaning: 'string',
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableMetaResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the table can be deleted. The value is `false` if other resources reference the table.
   * 
   * @example
   * false
   */
  canDelete?: boolean;
  /**
   * @remarks
   * Additional configurations for the table, provided as a JSON string.
   * 
   * @example
   * {"table_type":"item"}
   */
  config?: string;
  /**
   * @remarks
   * The table description.
   * 
   * @example
   * this is a test table
   */
  description?: string;
  /**
   * @remarks
   * The fields in the table.
   */
  fields?: GetTableMetaResponseBodyFields[];
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2021-12-15:24:33
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The import time.
   * 
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  gmtImportedTime?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 2021-12-15:24:33
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * The table module. Valid values:
   * 
   * - `ABTest`: An A/B testing data table.
   * 
   * - `ExperimentTool`: An experiment tool table.
   * 
   * - `DataDiagnosis`: A table for data diagnosis.
   * 
   * @example
   * ABTest
   */
  module?: string;
  /**
   * @remarks
   * The table name.
   * 
   * @example
   * test_table
   */
  name?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 28C5E01-ABF6-5AA8-B9FC-B3BA05DECC77
   */
  requestId?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * reso-wkgo***
   */
  resourceId?: string;
  /**
   * @example
   * Maxcompute
   */
  resourceType?: string;
  /**
   * @example
   * test
   */
  resourceUri?: string;
  /**
   * @remarks
   * The table ID.
   * 
   * @example
   * 3
   */
  tableMetaId?: string;
  /**
   * @remarks
   * The name of the table in the database.
   * 
   * @example
   * table_mysql
   */
  tableName?: string;
  /**
   * @remarks
   * The table type. Valid values:
   * 
   * - `MaxCompute`
   * 
   * - `Hologres`
   * 
   * @example
   * MaxCompute
   */
  type?: string;
  /**
   * @remarks
   * The URL of the table in Data Map. This parameter is returned only for MaxCompute tables.
   * 
   * @example
   * https://dmc-xxx.com/dm/table/xxx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      canDelete: 'CanDelete',
      config: 'Config',
      description: 'Description',
      fields: 'Fields',
      gmtCreateTime: 'GmtCreateTime',
      gmtImportedTime: 'GmtImportedTime',
      gmtModifiedTime: 'GmtModifiedTime',
      module: 'Module',
      name: 'Name',
      requestId: 'RequestId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      resourceUri: 'ResourceUri',
      tableMetaId: 'TableMetaId',
      tableName: 'TableName',
      type: 'Type',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canDelete: 'boolean',
      config: 'string',
      description: 'string',
      fields: { 'type': 'array', 'itemType': GetTableMetaResponseBodyFields },
      gmtCreateTime: 'string',
      gmtImportedTime: 'string',
      gmtModifiedTime: 'string',
      module: 'string',
      name: 'string',
      requestId: 'string',
      resourceId: 'string',
      resourceType: 'string',
      resourceUri: 'string',
      tableMetaId: 'string',
      tableName: 'string',
      type: 'string',
      url: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fields)) {
      $dara.Model.validateArray(this.fields);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

