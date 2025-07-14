// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDatasetInfoResponseBodyResultCubeTableList extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the data source table is valid. Valid values:
   * 
   * *   true: data source table
   * *   false: custom table
   * 
   * @example
   * odps_40
   */
  caption?: string;
  /**
   * @remarks
   * The display name of the table.
   * 
   * @example
   * false
   */
  customsql?: boolean;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * dfefd7f4-fc6e-42c9-b4******
   */
  datasourceId?: string;
  /**
   * @remarks
   * The ID of the data source.
   * 
   * @example
   * maxcompute
   */
  dsType?: string;
  /**
   * @remarks
   * The unique ID of the table.
   * 
   * @example
   * true
   */
  factTable?: boolean;
  /**
   * @remarks
   * Indicates whether the table is a custom SQL table. Valid values:
   * 
   * *   true: custom SQL table
   * *   false: non-custom SQL table
   * 
   * @example
   * select * from ****
   */
  sql?: string;
  /**
   * @remarks
   * The list of tables used by the dataset.
   * 
   * @example
   * viewdasb8494aab2612473cb74992159fe****
   */
  tableName?: string;
  /**
   * @remarks
   * The type of the data source. Valid values:
   * 
   * *   mysql
   * *   odps
   * *   oracle
   * *   ... and other data source types supported by Quick BI
   * 
   * @example
   * 7a62530b36
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

export class QueryDatasetInfoResponseBodyResultDimensionList extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the field that is referenced by the group measure. Non-NULL if and only if the metric is a grouping metric.
   * 
   * @example
   * city
   */
  caption?: string;
  /**
   * @remarks
   * A list of all dimensions in the dataset.
   * 
   * @example
   * string
   */
  dataType?: string;
  /**
   * @remarks
   * The actual physical field.
   * 
   * @example
   * group_dimension
   */
  dimensionType?: string;
  /**
   * @remarks
   * Data type; value:
   * 
   * *   string: character
   * *   number: a number
   * *   datetime: time
   * 
   * @example
   * example_expression
   */
  expression?: string;
  /**
   * @remarks
   * Expression for the flattened calculation dimensions.
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
   * Expression for a calculated dimension; valid only for calculated dimensions.
   * 
   * @example
   * city
   */
  factColumn?: string;
  /**
   * @remarks
   * The description of the field.
   * 
   * @example
   * hhhh
   */
  fieldDescription?: string;
  /**
   * @remarks
   * The type of the dimension. Valid values:
   * 
   * *   standard_dimension: General Dimension
   * *   calculate_dimension: calculating dimensions
   * *   group_dimension: grouping dimensions
   * 
   * @example
   * example_granularity
   */
  granularity?: string;
  /**
   * @remarks
   * The granularity.
   * 
   * @example
   * 308f7****
   */
  refUid?: string;
  /**
   * @remarks
   * The ARN.
   * 
   * @example
   * 7a62530***
   */
  tableUniqueId?: string;
  /**
   * @remarks
   * The display name of the dimension.
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
   * Test directory
   * 
   * @example
   * a3eecab7-618d-4f9f-*****
   */
  id?: string;
  /**
   * @remarks
   * Test directory
   * 
   * @example
   * The name of the directory.
   */
  name?: string;
  /**
   * @remarks
   * The information about the directory to which the dataset belongs.
   * 
   * @example
   * 88b680****
   */
  pathId?: string;
  /**
   * @remarks
   * The path of the directory ID, for example, aa/bb/cc/dd.
   * 
   * @example
   * The path name of the directory ID, for example, one-level directory /two-level directory.
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
   * The actual physical field.
   * 
   * @example
   * profit_amt
   */
  caption?: string;
  /**
   * @remarks
   * A list of all measures for the dataset.
   * 
   * @example
   * string
   */
  dataType?: string;
  /**
   * @remarks
   * Data type; value:
   * 
   * *   string: character
   * *   number: a number
   * *   datetime: time
   * 
   * @example
   * example_expression
   */
  expression?: string;
  /**
   * @remarks
   * Expression for flattened computation metrics.
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
   * The type of the measure. Valid values:
   * 
   * *   standard_measure: General Metrics
   * *   calculate_measure: Calculating Measures
   * 
   * @example
   * profit_amt
   */
  factColumn?: string;
  /**
   * @remarks
   * The description of the field.
   * 
   * @example
   * asadsda
   */
  fieldDescription?: string;
  /**
   * @remarks
   * An expression that calculates a measure; valid only for calculated measures.
   * 
   * @example
   * calculate_measure
   */
  measureType?: string;
  /**
   * @remarks
   * The display name of the metric.
   * 
   * @example
   * 7a62530b36
   */
  tableUniqueId?: string;
  /**
   * @remarks
   * The unique ID of the table to which the table belongs, which corresponds to the UniqueId of the CubeTypeList.
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
   * The unique ID of the dataset.
   */
  cubeTableList?: QueryDatasetInfoResponseBodyResultCubeTableList[];
  /**
   * @remarks
   * The unique ID of the workspace to which the dataset belongs.
   * 
   * @example
   * false
   */
  custimzeSql?: boolean;
  /**
   * @remarks
   * The type of the data source. Valid values:
   * 
   * *   mysql
   * *   odps
   * *   oracle
   * *   ... Data source types supported by Quick BI such as
   * 
   * @example
   * a201c85c-******
   */
  datasetId?: string;
  /**
   * @remarks
   * The user ID of the dataset owner in the Quick BI.
   * 
   * @example
   * opds_40
   */
  datasetName?: string;
  /**
   * @remarks
   * A list of all dimensions in the dataset.
   */
  dimensionList?: QueryDatasetInfoResponseBodyResultDimensionList[];
  /**
   * @remarks
   * The unique ID of the metric.
   */
  directory?: QueryDatasetInfoResponseBodyResultDirectory;
  /**
   * @remarks
   * The name of the data source.
   * 
   * @example
   * a201c85c-******
   */
  dsId?: string;
  /**
   * @remarks
   * The time when the dataset was last modified.
   * 
   * @example
   * odps
   */
  dsName?: string;
  /**
   * @remarks
   * The point in time when the training dataset was created.
   * 
   * @example
   * odps
   */
  dsType?: string;
  /**
   * @remarks
   * Indicates whether to customize SQL statements. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * 1629450382000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The information about the dataset.
   * 
   * @example
   * 1629450382000
   */
  gmtModify?: string;
  /**
   * @remarks
   * A list of all measures for the dataset.
   */
  measureList?: QueryDatasetInfoResponseBodyResultMeasureList[];
  /**
   * @remarks
   * Whether to enable extraction acceleration. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  openOfflineAcceleration?: boolean;
  /**
   * @remarks
   * Test Space
   * 
   * @example
   * b8494aab26124*****
   */
  ownerId?: string;
  /**
   * @remarks
   * The unique ID of the data source.
   * 
   * @example
   * The name of the dataset owner.
   */
  ownerName?: string;
  /**
   * @remarks
   * The name of the training dataset.
   * 
   * @example
   * false
   */
  rowLevel?: boolean;
  /**
   * @remarks
   * Whether row-level permissions are enabled. Valid values:
   * 
   * *   true: The VIP Netty channel is enabled.
   * *   false: The VIP Netty channel is disabled.
   * 
   * @example
   * 420abef4-a79b-4289-b12****
   */
  workspaceId?: string;
  /**
   * @remarks
   * Big Baby
   * 
   * @example
   * The name of the workspace in which the dataset resides.
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
   * Whether the operation is successfully returned. Valid values:
   * 
   * *   true: The call is successful.
   * *   false: The call fails.
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
   * The unique ID of the dataset.
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

