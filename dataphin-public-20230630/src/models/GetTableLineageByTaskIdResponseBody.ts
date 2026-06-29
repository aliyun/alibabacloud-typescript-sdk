// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTableLineageByTaskIdResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The business unit ID of the input table.
   * 
   * @example
   * 123
   */
  inputBizUnitId?: number;
  /**
   * @remarks
   * The data source ID of the input table.
   * 
   * @example
   * 123
   */
  inputDataSourceId?: number;
  /**
   * @remarks
   * The storage type of the input table.
   * 
   * @example
   * MAX_COMPUTE
   */
  inputDataSourceType?: string;
  /**
   * @remarks
   * The data source type of the input table.
   * 
   * @example
   * MAX_COMPUTE
   */
  inputDbType?: string;
  /**
   * @remarks
   * The environment of the input table: DEV or PROD.
   * 
   * @example
   * DEV
   */
  inputEnv?: string;
  /**
   * @remarks
   * The project ID of the input table.
   * 
   * @example
   * 123
   */
  inputProjectId?: number;
  /**
   * @remarks
   * Indicates whether the input table is deleted.
   */
  inputTableDeleted?: boolean;
  /**
   * @remarks
   * The GUID of the input table. Each asset has a unique GUID in the following format:
   * 
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
   * The type of the input table. 
   * 
   * - PHYSICAL_TABLE Physical table (compute source)
   * - DIM_LOGIC_TABLE Dimension logical table
   * - FACT_LOGIC_TABLE Fact logical table
   * - SUM_LOGIC_TABLE Aggregate logical table
   * - REAL_TIME_LOGIC_TABLE Real-time meta table
   * - REAL_TIME_MIRROR_TABLE Real-time mirror table
   * - PHYSICAL_VIEW Physical view
   * - LOGICAL_VIEW Logical view
   * - DATA_SOURCE_PHYSICAL_TABLE Data source table
   * - DATA_SOURCE_VIEW Data source view
   * - DATA_SOURCE_MATERIALIZED_VIEW Data source materialized view
   * 
   * @example
   * PHYSICAL_TABLE
   */
  inputTableType?: string;
  /**
   * @remarks
   * The business unit ID of the output table.
   * 
   * @example
   * 123
   */
  outputBizUnitId?: number;
  /**
   * @remarks
   * The data source ID of the output table.
   * 
   * @example
   * 123
   */
  outputDataSourceId?: number;
  /**
   * @remarks
   * The storage type of the output table.
   * 
   * @example
   * MAX_COMPUTE
   */
  outputDataSourceType?: string;
  /**
   * @remarks
   * The data source type of the output table.
   * 
   * @example
   * MAX_COMPUTE
   */
  outputDbType?: string;
  /**
   * @remarks
   * The environment of the output table: DEV or PROD.
   * 
   * @example
   * DEV/PROD
   */
  outputEnv?: string;
  /**
   * @remarks
   * The project ID of the output table.
   * 
   * @example
   * 123
   */
  outputProjectId?: number;
  /**
   * @remarks
   * Indicates whether the output table is deleted.
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
   * The environment of the task (node) associated with the lineage: DEV or PROD.
   * 
   * @example
   * DEV
   */
  taskEnv?: string;
  /**
   * @remarks
   * The task (node) ID associated with the lineage.
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
   * The error code. OK indicates a successful request.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The query results.
   */
  data?: GetTableLineageByTaskIdResponseBodyData[];
  /**
   * @remarks
   * The HTTP status code.
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

