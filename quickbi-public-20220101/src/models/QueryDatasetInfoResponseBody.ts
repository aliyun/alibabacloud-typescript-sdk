// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDatasetInfoResponseBodyResultCubeTableListChildTables extends $dara.Model {
  /**
   * @remarks
   * The display name.
   * 
   * @example
   * 1
   */
  caption?: string;
  /**
   * @remarks
   * Specifies whether the table is a custom dataset.
   * 
   * @example
   * true
   */
  customsql?: boolean;
  /**
   * @remarks
   * The data source ID.
   * 
   * @example
   * test
   */
  datasourceId?: string;
  /**
   * @remarks
   * The data source type.
   * 
   * @example
   * test
   */
  dsType?: string;
  /**
   * @remarks
   * Specifies whether the table is the primary table.
   */
  factTable?: boolean;
  /**
   * @remarks
   * The SQL statement for the custom SQL dataset.
   * 
   * @example
   * test
   */
  sql?: string;
  /**
   * @remarks
   * The physical table name.
   * 
   * @example
   * test
   */
  tableName?: string;
  /**
   * @remarks
   * The unique ID.
   * 
   * @example
   * test
   */
  uniqueId?: string;
  static names(): { [key: string]: string } {
    return {
      caption: 'Caption',
      customsql: 'Customsql',
      datasourceId: 'DatasourceId',
      dsType: 'DsType',
      factTable: 'FactTable',
      sql: 'Sql',
      tableName: 'TableName',
      uniqueId: 'UniqueId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caption: 'string',
      customsql: 'boolean',
      datasourceId: 'string',
      dsType: 'string',
      factTable: 'boolean',
      sql: 'string',
      tableName: 'string',
      uniqueId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDatasetInfoResponseBodyResultCubeTableList extends $dara.Model {
  /**
   * @remarks
   * The display name of the table.
   * 
   * @example
   * odps_40
   */
  caption?: string;
  /**
   * @remarks
   * The actual physical tables used by the merged table.
   */
  childTables?: QueryDatasetInfoResponseBodyResultCubeTableListChildTables[];
  /**
   * @remarks
   * Specifies whether the table is a custom SQL table. Valid values:
   * 
   * - true: The table is a custom SQL table.
   * - false: The table is not a custom SQL table.
   * 
   * @example
   * false
   */
  customsql?: boolean;
  /**
   * @remarks
   * The data source ID.
   * 
   * @example
   * dfefd7f4-fc6e-42c9-b4******
   */
  datasourceId?: string;
  /**
   * @remarks
   * The data source type. Valid values:
   * 
   * - mysql
   * - odps
   * - oracle
   * - Other data source types supported by Quick BI.
   * 
   * @example
   * maxcompute
   */
  dsType?: string;
  /**
   * @remarks
   * Specifies whether the table is a data source table. Valid values:
   * 
   * - true: The table is a data source table.
   * - false: The table is a custom table.
   * 
   * @example
   * true
   */
  factTable?: boolean;
  /**
   * @remarks
   * The specific SQL statement when the table is a custom SQL table.
   * 
   * @example
   * select * from ****
   */
  sql?: string;
  /**
   * @remarks
   * The table name.
   * 
   * @example
   * viewdasb8494aab2612473cb74992159fe****
   */
  tableName?: string;
  /**
   * @remarks
   * The unique ID of the table.
   * 
   * @example
   * 7a62530b36
   */
  uniqueId?: string;
  static names(): { [key: string]: string } {
    return {
      caption: 'Caption',
      childTables: 'ChildTables',
      customsql: 'Customsql',
      datasourceId: 'DatasourceId',
      dsType: 'DsType',
      factTable: 'FactTable',
      sql: 'Sql',
      tableName: 'TableName',
      uniqueId: 'UniqueId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caption: 'string',
      childTables: { 'type': 'array', 'itemType': QueryDatasetInfoResponseBodyResultCubeTableListChildTables },
      customsql: 'boolean',
      datasourceId: 'string',
      dsType: 'string',
      factTable: 'boolean',
      sql: 'string',
      tableName: 'string',
      uniqueId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.childTables)) {
      $dara.Model.validateArray(this.childTables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDatasetInfoResponseBodyResultDimensionList extends $dara.Model {
  /**
   * @remarks
   * The display name of the dimension.
   * 
   * @example
   * city
   */
  caption?: string;
  /**
   * @remarks
   * The data type. Valid values:
   * 
   * - string: String.
   * - number: Number.
   * - datetime: Datetime.
   * 
   * @example
   * string
   */
  dataType?: string;
  /**
   * @remarks
   * The dimension type. Valid values:
   * 
   * - standard_dimension: Standard dimension.
   * - calculate_dimension: Calculated dimension.
   * - group_dimension: Grouped dimension.
   * 
   * @example
   * group_dimension
   */
  dimensionType?: string;
  /**
   * @remarks
   * The expression for the calculated dimension. This parameter is valid only for calculated dimensions.
   * 
   * @example
   * example_expression
   */
  expression?: string;
  /**
   * @remarks
   * The flattened expression for the calculated dimension.
   * 
   * @example
   * example_expression
   * 
   * **if can be null:**
   * true
   */
  expressionV2?: string;
  /**
   * @remarks
   * The actual physical field.
   * 
   * @example
   * city
   */
  factColumn?: string;
  /**
   * @remarks
   * The field description.
   * 
   * @example
   * hhhh
   */
  fieldDescription?: string;
  /**
   * @remarks
   * The granularity.
   * 
   * @example
   * example_granularity
   */
  granularity?: string;
  /**
   * @remarks
   * The unique ID of the referenced field for a grouped measure. This parameter is not null only when the measure is a grouped measure.
   * 
   * @example
   * 308f7****
   */
  refUid?: string;
  /**
   * @remarks
   * The unique ID of the table to which the dimension belongs. This corresponds to the UniqueId in CubeTypeList.
   * 
   * @example
   * 7a62530***
   */
  tableUniqueId?: string;
  /**
   * @remarks
   * The unique ID.
   * 
   * @example
   * a69774***
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      caption: 'Caption',
      dataType: 'DataType',
      dimensionType: 'DimensionType',
      expression: 'Expression',
      expressionV2: 'ExpressionV2',
      factColumn: 'FactColumn',
      fieldDescription: 'FieldDescription',
      granularity: 'Granularity',
      refUid: 'RefUid',
      tableUniqueId: 'TableUniqueId',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caption: 'string',
      dataType: 'string',
      dimensionType: 'string',
      expression: 'string',
      expressionV2: 'string',
      factColumn: 'string',
      fieldDescription: 'string',
      granularity: 'string',
      refUid: 'string',
      tableUniqueId: 'string',
      uid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDatasetInfoResponseBodyResultDirectory extends $dara.Model {
  /**
   * @remarks
   * The folder ID.
   * 
   * @example
   * a3eecab7-618d-4f9f-*****
   */
  id?: string;
  /**
   * @remarks
   * The folder name.
   * 
   * @example
   * Test folder
   */
  name?: string;
  /**
   * @remarks
   * The path of the folder ID, such as aa/bb/cc/dd.
   * 
   * @example
   * 88b680****
   */
  pathId?: string;
  /**
   * @remarks
   * The path name of the folder ID, such as Level 1 folder/Level 2 folder.
   * 
   * @example
   * Test folder
   */
  pathName?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      pathId: 'PathId',
      pathName: 'PathName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
      pathId: 'string',
      pathName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDatasetInfoResponseBodyResultMeasureList extends $dara.Model {
  /**
   * @remarks
   * The display name of the measure.
   * 
   * @example
   * profit_amt
   */
  caption?: string;
  /**
   * @remarks
   * The data type. Valid values:
   * 
   * - string: String.
   * - number: Number.
   * - datetime: Datetime.
   * 
   * @example
   * string
   */
  dataType?: string;
  /**
   * @remarks
   * The expression for the calculated measure. This parameter is valid only for calculated measures.
   * 
   * @example
   * example_expression
   */
  expression?: string;
  /**
   * @remarks
   * The flattened expression for the calculated measure.
   * 
   * @example
   * example_expression
   * 
   * **if can be null:**
   * true
   */
  expressionV2?: string;
  /**
   * @remarks
   * The actual physical field.
   * 
   * @example
   * profit_amt
   */
  factColumn?: string;
  /**
   * @remarks
   * The field description.
   * 
   * @example
   * asadsda
   */
  fieldDescription?: string;
  /**
   * @remarks
   * The metric type. Valid values:
   * 
   * - standard_measure: Standard measure.
   * - calculate_measure: Calculated measure.
   * 
   * @example
   * calculate_measure
   */
  measureType?: string;
  /**
   * @remarks
   * The unique ID of the table to which the dimension belongs. This corresponds to the UniqueId in CubeTypeList.
   * 
   * @example
   * 7a62530b36
   */
  tableUniqueId?: string;
  /**
   * @remarks
   * The unique ID of the measure.
   * 
   * @example
   * 88b680****
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      caption: 'Caption',
      dataType: 'DataType',
      expression: 'Expression',
      expressionV2: 'ExpressionV2',
      factColumn: 'FactColumn',
      fieldDescription: 'FieldDescription',
      measureType: 'MeasureType',
      tableUniqueId: 'TableUniqueId',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caption: 'string',
      dataType: 'string',
      expression: 'string',
      expressionV2: 'string',
      factColumn: 'string',
      fieldDescription: 'string',
      measureType: 'string',
      tableUniqueId: 'string',
      uid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDatasetInfoResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The list of tables used by the dataset.
   */
  cubeTableList?: QueryDatasetInfoResponseBodyResultCubeTableList[];
  /**
   * @remarks
   * Specifies whether custom SQL is used. Valid values:
   * 
   * - true: Yes.
   * - false: No.
   * 
   * @example
   * false
   */
  custimzeSql?: boolean;
  /**
   * @remarks
   * The unique ID of the dataset.
   * 
   * @example
   * a201c85c-******
   */
  datasetId?: string;
  /**
   * @remarks
   * The dataset name.
   * 
   * @example
   * opds_40
   */
  datasetName?: string;
  /**
   * @remarks
   * The list of all dimensions in the dataset.
   */
  dimensionList?: QueryDatasetInfoResponseBodyResultDimensionList[];
  /**
   * @remarks
   * The folder information of the dataset.
   */
  directory?: QueryDatasetInfoResponseBodyResultDirectory;
  /**
   * @remarks
   * The unique ID of the data source.
   * 
   * @example
   * a201c85c-******
   */
  dsId?: string;
  /**
   * @remarks
   * The data source name.
   * 
   * @example
   * odps
   */
  dsName?: string;
  /**
   * @remarks
   * The data source type. Valid values:
   * 
   * - mysql
   * - odps
   * - oracle
   * - Other data source types supported by Quick BI.
   * 
   * @example
   * odps
   */
  dsType?: string;
  /**
   * @remarks
   * The time when the dataset was created.
   * 
   * @example
   * 1629450382000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the dataset was last modified.
   * 
   * @example
   * 1629450382000
   */
  gmtModify?: string;
  /**
   * @remarks
   * The list of all measures in the dataset.
   */
  measureList?: QueryDatasetInfoResponseBodyResultMeasureList[];
  /**
   * @remarks
   * Specifies whether extract acceleration is enabled. Valid values:
   * 
   * - true: Enabled.
   * - false: Disabled.
   * 
   * @example
   * false
   */
  openOfflineAcceleration?: boolean;
  /**
   * @remarks
   * The user ID of the dataset owner in Quick BI.
   * 
   * @example
   * b8494aab26124*****
   */
  ownerId?: string;
  /**
   * @remarks
   * The name of the dataset owner.
   * 
   * @example
   * Dawa
   */
  ownerName?: string;
  /**
   * @remarks
   * Specifies whether row-level permissions are enabled. Valid values:
   * 
   * - true: Enabled.
   * - false: Disabled.
   * 
   * @example
   * false
   */
  rowLevel?: boolean;
  /**
   * @remarks
   * The unique ID of the workspace to which the dataset belongs.
   * 
   * @example
   * 420abef4-a79b-4289-b12****
   */
  workspaceId?: string;
  /**
   * @remarks
   * The name of the workspace to which the dataset belongs.
   * 
   * @example
   * Test workspace
   */
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      cubeTableList: 'CubeTableList',
      custimzeSql: 'CustimzeSql',
      datasetId: 'DatasetId',
      datasetName: 'DatasetName',
      dimensionList: 'DimensionList',
      directory: 'Directory',
      dsId: 'DsId',
      dsName: 'DsName',
      dsType: 'DsType',
      gmtCreate: 'GmtCreate',
      gmtModify: 'GmtModify',
      measureList: 'MeasureList',
      openOfflineAcceleration: 'OpenOfflineAcceleration',
      ownerId: 'OwnerId',
      ownerName: 'OwnerName',
      rowLevel: 'RowLevel',
      workspaceId: 'WorkspaceId',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cubeTableList: { 'type': 'array', 'itemType': QueryDatasetInfoResponseBodyResultCubeTableList },
      custimzeSql: 'boolean',
      datasetId: 'string',
      datasetName: 'string',
      dimensionList: { 'type': 'array', 'itemType': QueryDatasetInfoResponseBodyResultDimensionList },
      directory: QueryDatasetInfoResponseBodyResultDirectory,
      dsId: 'string',
      dsName: 'string',
      dsType: 'string',
      gmtCreate: 'string',
      gmtModify: 'string',
      measureList: { 'type': 'array', 'itemType': QueryDatasetInfoResponseBodyResultMeasureList },
      openOfflineAcceleration: 'boolean',
      ownerId: 'string',
      ownerName: 'string',
      rowLevel: 'boolean',
      workspaceId: 'string',
      workspaceName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.cubeTableList)) {
      $dara.Model.validateArray(this.cubeTableList);
    }
    if(Array.isArray(this.dimensionList)) {
      $dara.Model.validateArray(this.dimensionList);
    }
    if(this.directory && typeof (this.directory as any).validate === 'function') {
      (this.directory as any).validate();
    }
    if(Array.isArray(this.measureList)) {
      $dara.Model.validateArray(this.measureList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDatasetInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * a4d1a221d-41za1-****
   */
  requestId?: string;
  /**
   * @remarks
   * The dataset information.
   */
  result?: QueryDatasetInfoResponseBodyResult;
  /**
   * @remarks
   * Specifies whether the request is successful. Valid values:
   * 
   * - true: The request is successful.
   * - false: The request fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: QueryDatasetInfoResponseBodyResult,
      success: 'boolean',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

