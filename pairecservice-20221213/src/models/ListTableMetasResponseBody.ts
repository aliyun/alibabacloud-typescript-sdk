// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTableMetasResponseBodyTableMetasFields extends $dara.Model {
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

export class ListTableMetasResponseBodyTableMetas extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the data table can be deleted. The value is false if the table is referenced elsewhere.
   * 
   * @example
   * true
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
  fields?: ListTableMetasResponseBodyTableMetasFields[];
  /**
   * @remarks
   * The creation time. The format is YYYY-MM-DD HH:mm:ss.
   * 
   * @example
   * 2021-12-12 12:24:33
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The time when the fields were imported.
   * 
   * @example
   * imprecation
   */
  gmtImportedTime?: string;
  /**
   * @remarks
   * The update time. The format is YYYY-MM-DD HH:mm:ss.
   * 
   * @example
   * 2021-12-12 12:24:33
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * The module of the data table.
   * 
   * - ABTest: Experiment data tables
   * 
   * - ExperimentTool: Experiment tool tables
   * 
   * - DataDiagnosis: Data diagnosis
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
   * The resource ID.
   * 
   * @example
   * reso-2s416t***
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * Maxcompute
   */
  resourceType?: string;
  /**
   * @remarks
   * The resource URI.
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
   * The type of the data table.
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
   * The URL of the table in DataWorks Data Map. This parameter is returned only if the table is a MaxCompute table.
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
      fields: { 'type': 'array', 'itemType': ListTableMetasResponseBodyTableMetasFields },
      gmtCreateTime: 'string',
      gmtImportedTime: 'string',
      gmtModifiedTime: 'string',
      module: 'string',
      name: 'string',
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

export class ListTableMetasResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 728C5E01-ABF6-5AA8-B9FC-B3BA05DECC77
   */
  requestId?: string;
  /**
   * @remarks
   * The list of data tables.
   */
  tableMetas?: ListTableMetasResponseBodyTableMetas[];
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tableMetas: 'TableMetas',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tableMetas: { 'type': 'array', 'itemType': ListTableMetasResponseBodyTableMetas },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.tableMetas)) {
      $dara.Model.validateArray(this.tableMetas);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

