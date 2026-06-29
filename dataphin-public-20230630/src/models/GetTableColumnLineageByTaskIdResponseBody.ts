// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTableColumnLineageByTaskIdResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Business unit ID of the input table.
   * 
   * @example
   * 123
   */
  inputBizUnitId?: number;
  /**
   * @remarks
   * GUID of the input column.
   * 
   * @example
   * odps.123.test_project.input_table.id
   */
  inputColumnId?: string;
  /**
   * @remarks
   * Input column name.
   * 
   * @example
   * id
   */
  inputColumnName?: string;
  /**
   * @remarks
   * Data source ID of the input table.
   * 
   * @example
   * 123
   */
  inputDataSourceId?: number;
  /**
   * @remarks
   * Storage type of the input table.
   * 
   * @example
   * MAX_COMPUTE
   */
  inputDataSourceType?: string;
  /**
   * @remarks
   * Database type of the input table.
   * 
   * @example
   * MAX_COMPUTE
   */
  inputDbType?: string;
  /**
   * @remarks
   * Environment of the input table: DEV or PROD.
   * 
   * @example
   * DEV
   */
  inputEnv?: string;
  /**
   * @remarks
   * Project ID of the input table.
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
   * GUID of the input table. Each asset has a unique GUID in the following format: 
   * 
   * - Logical table: dp_table.[TenantId].[BizUnitName].[TableName]
   * - Compute source physical table: [EngineType].[TenantId].[ProjectName].[TableName]
   * - Data source table: dp_ds_table.[TenantId].[DataSourceId].[SchemaName].[TableName]
   * 
   * @example
   * odps.123.test_project.order
   */
  inputTableId?: string;
  /**
   * @remarks
   * Input table name.
   * 
   * @example
   * order
   */
  inputTableName?: string;
  /**
   * @remarks
   * Input table type. Valid values:
   * - PHYSICAL_TABLE: Physical table (compute source)
   * - DIM_LOGIC_TABLE: Dimension logical table
   * - FACT_LOGIC_TABLE: Fact logical table
   * - SUM_LOGIC_TABLE: Summary logical table
   * - REAL_TIME_LOGIC_TABLE: Real-time meta table
   * - REAL_TIME_MIRROR_TABLE: Real-time mirror table
   * - PHYSICAL_VIEW: Physical view
   * - LOGICAL_VIEW: Logical view
   * - DATA_SOURCE_PHYSICAL_TABLE: Data source table
   * - DATA_SOURCE_VIEW: Data source view
   * - DATA_SOURCE_MATERIALIZED_VIEW: Data source materialized view
   * 
   * @example
   * PHYSICAL_TABLE
   */
  inputTableType?: string;
  /**
   * @remarks
   * Business unit ID of the output table.
   * 
   * @example
   * 123
   */
  outputBizUnitId?: number;
  /**
   * @remarks
   * GUID of the output column.
   * 
   * @example
   * odps.123.test_project.input_table.id
   */
  outputColumnId?: string;
  /**
   * @remarks
   * Output column name.
   * 
   * @example
   * id
   */
  outputColumnName?: string;
  /**
   * @remarks
   * Data source ID of the output table.
   * 
   * @example
   * 123
   */
  outputDataSourceId?: number;
  /**
   * @remarks
   * Storage type of the output table.
   * 
   * @example
   * MAX_COMPUTE
   */
  outputDataSourceType?: string;
  /**
   * @remarks
   * Database type of the output table.
   * 
   * @example
   * MAX_COMPUTE
   */
  outputDbType?: string;
  /**
   * @remarks
   * Environment of the output table: DEV or PROD.
   * 
   * @example
   * DEV
   */
  outputEnv?: string;
  /**
   * @remarks
   * Project ID of the output table.
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
   * GUID of the output table. Each asset has a unique GUID. For the format, see InputTableId.
   * 
   * @example
   * odps.123.test_project.order
   */
  outputTableId?: string;
  /**
   * @remarks
   * Output table name.
   * 
   * @example
   * order
   */
  outputTableName?: string;
  /**
   * @remarks
   * Output table type. For valid values, see InputTableType.
   * 
   * @example
   * PHYSICAL_TABLE
   */
  outputTableType?: string;
  /**
   * @remarks
   * Environment of the task (node) associated with the lineage: DEV or PROD.
   * 
   * @example
   * DEV
   */
  taskEnv?: string;
  /**
   * @remarks
   * Task (node) ID associated with the lineage.
   * 
   * @example
   * n_123
   */
  taskId?: string;
  /**
   * @remarks
   * Tenant ID.
   * 
   * @example
   * 12345
   */
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      inputBizUnitId: 'InputBizUnitId',
      inputColumnId: 'InputColumnId',
      inputColumnName: 'InputColumnName',
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
      outputColumnId: 'OutputColumnId',
      outputColumnName: 'OutputColumnName',
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
      inputColumnId: 'string',
      inputColumnName: 'string',
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
      outputColumnId: 'string',
      outputColumnName: 'string',
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

export class GetTableColumnLineageByTaskIdResponseBody extends $dara.Model {
  /**
   * @remarks
   * Error code. A value of OK indicates that the request was successful.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * Query results.
   */
  data?: GetTableColumnLineageByTaskIdResponseBodyData[];
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Error message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
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
      data: { 'type': 'array', 'itemType': GetTableColumnLineageByTaskIdResponseBodyData },
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

