// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTableLineageByTaskIdResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the business unit to which the input table belongs.
   * 
   * @example
   * 123
   */
  inputBizUnitId?: number;
  /**
   * @remarks
   * The ID of the data source to which the input table belongs.
   * 
   * @example
   * 123
   */
  inputDataSourceId?: number;
  /**
   * @remarks
   * The storage format of the input table.
   * 
   * @example
   * MAX_COMPUTE
   */
  inputDataSourceType?: string;
  /**
   * @remarks
   * The type of the input data source.
   * 
   * @example
   * MAX_COMPUTE
   */
  inputDbType?: string;
  /**
   * @remarks
   * The environment to which the input table belongs. Valid values: DEV and PROD.
   * 
   * @example
   * DEV
   */
  inputEnv?: string;
  /**
   * @remarks
   * The ID of the project to which the input table belongs.
   * 
   * @example
   * 123
   */
  inputProjectId?: number;
  /**
   * @remarks
   * Indicates whether the input table has been deleted.
   */
  inputTableDeleted?: boolean;
  /**
   * @remarks
   * The GUID of the input table. Each asset has a unique GUID in the following format:
   * - Logical table: dp_table.[TenantId].[BusinessUnitName].[TableName]
   * - Compute source physical table: [EngineType].[TenantId].[ProjectName].[TableName]
   * - Data source table: dp_ds_table.[TenantId].[DataSourceId].[SchemaName].[TableName]
   * 
   * @example
   * odps.123.test_project.order
   */
  inputTableId?: string;
  /**
   * @remarks
   * The name of the input table.
   * 
   * @example
   * order
   */
  inputTableName?: string;
  /**
   * @remarks
   * The type of the input table. Valid values: 
   * 
   * - PHYSICAL_TABLE: physical table (compute source).
   * - DIM_LOGIC_TABLE: logical dimension table.
   * - FACT_LOGIC_TABLE: fact logical table.
   * - SUM_LOGIC_TABLE: aggregate logical table.
   * - REAL_TIME_LOGIC_TABLE: real-time meta table.
   * - REAL_TIME_MIRROR_TABLE: real-time mirror table.
   * - PHYSICAL_VIEW: physical view.
   * - LOGICAL_VIEW: logical view.
   * - DATA_SOURCE_PHYSICAL_TABLE: data source table.
   * - DATA_SOURCE_VIEW: data source view.
   * - DATA_SOURCE_MATERIALIZED_VIEW: data source materialized view.
   * 
   * @example
   * PHYSICAL_TABLE
   */
  inputTableType?: string;
  /**
   * @remarks
   * The ID of the business unit to which the output table belongs.
   * 
   * @example
   * 123
   */
  outputBizUnitId?: number;
  /**
   * @remarks
   * The ID of the data source to which the output table belongs.
   * 
   * @example
   * 123
   */
  outputDataSourceId?: number;
  /**
   * @remarks
   * The storage format of the output table.
   * 
   * @example
   * MAX_COMPUTE
   */
  outputDataSourceType?: string;
  /**
   * @remarks
   * The type of the output data source.
   * 
   * @example
   * MAX_COMPUTE
   */
  outputDbType?: string;
  /**
   * @remarks
   * The environment to which the output table belongs. Valid values: DEV and PROD.
   * 
   * @example
   * DEV/PROD
   */
  outputEnv?: string;
  /**
   * @remarks
   * The ID of the project to which the output table belongs.
   * 
   * @example
   * 123
   */
  outputProjectId?: number;
  /**
   * @remarks
   * Indicates whether the output table has been deleted.
   */
  outputTableDeleted?: boolean;
  /**
   * @remarks
   * The GUID of the output table. Each asset has a unique GUID. For the format, see InputTableId.
   * 
   * @example
   * odps.123.test_project.order
   */
  outputTableId?: string;
  /**
   * @remarks
   * The name of the output table.
   * 
   * @example
   * order
   */
  outputTableName?: string;
  /**
   * @remarks
   * The type of the output table. For valid values, see InputTableType.
   * 
   * @example
   * PHYSICAL_TABLE
   */
  outputTableType?: string;
  /**
   * @remarks
   * The environment of the node associated with the lineage. Valid values: DEV and PROD.
   * 
   * @example
   * DEV
   */
  taskEnv?: string;
  /**
   * @remarks
   * The ID of the node associated with the lineage.
   * 
   * @example
   * n_123
   */
  taskId?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 12345
   */
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      inputBizUnitId: 'InputBizUnitId',
      inputDataSourceId: 'InputDataSourceId',
      inputDataSourceType: 'InputDataSourceType',
      inputDbType: 'InputDbType',
      inputEnv: 'InputEnv',
      inputProjectId: 'InputProjectId',
      inputTableDeleted: 'InputTableDeleted',
      inputTableId: 'InputTableId',
      inputTableName: 'InputTableName',
      inputTableType: 'InputTableType',
      outputBizUnitId: 'OutputBizUnitId',
      outputDataSourceId: 'OutputDataSourceId',
      outputDataSourceType: 'OutputDataSourceType',
      outputDbType: 'OutputDbType',
      outputEnv: 'OutputEnv',
      outputProjectId: 'OutputProjectId',
      outputTableDeleted: 'OutputTableDeleted',
      outputTableId: 'OutputTableId',
      outputTableName: 'OutputTableName',
      outputTableType: 'OutputTableType',
      taskEnv: 'TaskEnv',
      taskId: 'TaskId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputBizUnitId: 'number',
      inputDataSourceId: 'number',
      inputDataSourceType: 'string',
      inputDbType: 'string',
      inputEnv: 'string',
      inputProjectId: 'number',
      inputTableDeleted: 'boolean',
      inputTableId: 'string',
      inputTableName: 'string',
      inputTableType: 'string',
      outputBizUnitId: 'number',
      outputDataSourceId: 'number',
      outputDataSourceType: 'string',
      outputDbType: 'string',
      outputEnv: 'string',
      outputProjectId: 'number',
      outputTableDeleted: 'boolean',
      outputTableId: 'string',
      outputTableName: 'string',
      outputTableType: 'string',
      taskEnv: 'string',
      taskId: 'string',
      tenantId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableLineageByTaskIdResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code. A value of OK indicates that the request was successful.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The query result.
   */
  data?: GetTableLineageByTaskIdResponseBodyData[];
  /**
   * @remarks
   * The HTTP status code returned by the backend.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetTableLineageByTaskIdResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

