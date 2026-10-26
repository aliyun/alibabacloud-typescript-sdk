// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTableMetaResponseBodyFields extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the field is a dimension field.
   * 
   * @example
   * false
   */
  isDimensionField?: boolean;
  /**
   * @remarks
   * The meaning of the field.
   * 
   * @example
   * the gender of people
   */
  meaning?: string;
  /**
   * @remarks
   * The name of the field.
   * 
   * @example
   * gender
   */
  name?: string;
  /**
   * @remarks
   * The type of the field.
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
   * Indicates whether the data table can be deleted. If the table is referenced elsewhere, false is returned.
   * 
   * @example
   * false
   */
  canDelete?: boolean;
  /**
   * @remarks
   * The additional configurations of the data table.
   * 
   * @example
   * {"table_type":"item"}
   */
  config?: string;
  /**
   * @remarks
   * The description of the data table.
   * 
   * @example
   * this is a test table
   */
  description?: string;
  /**
   * @remarks
   * The list of fields in the table.
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
   * The time when the field was imported. The time is in ISO 8601 format and includes the time zone offset.
   * 
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  gmtImportedTime?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2021-12-15:24:33
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * The module of the data table. Valid values:
   * 
   * - ABTest: experiment data table.
   * 
   * - ExperimentTool: experiment tool table.
   * 
   * - DataDiagnosis: data diagnostics.
   * 
   * @example
   * ABTest
   */
  module?: string;
  /**
   * @remarks
   * The name of the data table.
   * 
   * @example
   * test_table
   */
  name?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 28C5E01-ABF6-5AA8-B9FC-B3BA05DECC77
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource.
   * 
   * @example
   * reso-wkgo***
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of the resource.
   * 
   * @example
   * Maxcompute
   */
  resourceType?: string;
  /**
   * @remarks
   * The URI of the resource.
   * 
   * @example
   * test
   */
  resourceUri?: string;
  /**
   * @remarks
   * The ID of the data table.
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
   * The type of the data table. Valid values:
   * 
   * - MaxCompute
   * 
   * - Hologres
   * 
   * @example
   * MaxCompute
   */
  type?: string;
  /**
   * @remarks
   * The URL of the table in Data Map if the table is a MaxCompute table. Otherwise, this field is empty.
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

