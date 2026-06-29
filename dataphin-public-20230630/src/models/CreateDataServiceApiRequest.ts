// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataServiceApiRequestCreateCommandDmlConfig extends $dara.Model {
  /**
   * @remarks
   * The data volume per batch. Valid values:
   * - When the data volume type is single record, this parameter cannot be set.
   * - When the data volume type is batch:
   *   - If the transaction processing mode is 1, this parameter cannot be set.
   *   - If the transaction processing mode is 2, the value ranges from 1 to 1000000.
   * 
   * @example
   * 1000
   */
  batchInputDataSize?: number;
  /**
   * @remarks
   * The data volume type. Valid values:
   * - 1: single record
   * - 2: batch.
   * 
   * @example
   * 2
   */
  dataVolumeType?: number;
  /**
   * @remarks
   * The error handling method. Valid values:
   * - 1: partial success allowed
   * - 2: all must succeed
   * 
   * Parameter rules:
   * - When the data volume type is single record, this parameter cannot be set.
   * - When the data volume type is batch, the value is 1 or 2.
   * 
   * @example
   * 1
   */
  errorHandlingType?: number;
  /**
   * @remarks
   * The maximum number of input records. Valid values:
   * - When the data volume type is single record, this parameter cannot be set.
   * - When the data volume type is batch, the value ranges from 1 to 1000000.
   * 
   * @example
   * 10000
   */
  maxInputDataSize?: number;
  /**
   * @remarks
   * The degree of parallelism. Valid values:
   * - When the data volume type is single record, this parameter cannot be set.
   * - When the data volume type is batch:
   *   - If the transaction processing mode is 1, this parameter cannot be set.
   *   - If the transaction processing mode is 2, the value ranges from 1 to 5.
   * 
   * @example
   * 1
   */
  parallelNum?: number;
  /**
   * @remarks
   * The transaction processing mode. Valid values:
   * - 0: no transaction
   * - 1: no batching
   * - 2: batch processing
   * 
   * Parameter rules:
   * - When the data volume type is single record, the transaction processing mode is 0.
   * - When the data volume type is batch:
   *   - If the error handling method is 1, the transaction processing mode is 1 or 2.
   *   - If the error handling method is 2, the transaction processing mode can only be 1.
   * 
   * @example
   * 2
   */
  transactionType?: number;
  static names(): { [key: string]: string } {
    return {
      batchInputDataSize: 'BatchInputDataSize',
      dataVolumeType: 'DataVolumeType',
      errorHandlingType: 'ErrorHandlingType',
      maxInputDataSize: 'MaxInputDataSize',
      parallelNum: 'ParallelNum',
      transactionType: 'TransactionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchInputDataSize: 'number',
      dataVolumeType: 'number',
      errorHandlingType: 'number',
      maxInputDataSize: 'number',
      parallelNum: 'number',
      transactionType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataServiceApiRequestCreateCommandScriptDetailsScriptRequestParameters extends $dara.Model {
  /**
   * @remarks
   * The default value of the input parameter for operation-type APIs. This parameter takes effect when the parameter is not required. If not specified, the value is null.
   * 
   * @example
   * test
   */
  defaultValue?: string;
  /**
   * @remarks
   * The example value.
   * 
   * @example
   * test
   */
  exampleValue?: string;
  /**
   * @remarks
   * Specifies whether the parameter is required.
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  isRequiredParameter?: boolean;
  /**
   * @remarks
   * The data type. Valid values:
   * - "STRING"
   * - "DOUBLE"
   * - "INT"
   * - "DATE"
   * - "LONG"
   * - "FLOAT"
   * - "BOOLEAN"
   * - "SHORT"
   * - "BYTE"
   * - "BIGDECIMAL"
   * - "BINARY"
   * - "ARRAY"
   * - "Array(int)"
   * - "Array(string)".
   * 
   * This parameter is required.
   * 
   * @example
   * STRING
   */
  parameterDataType?: string;
  /**
   * @remarks
   * The parameter description.
   * 
   * @example
   * 字段d
   */
  parameterDescription?: string;
  /**
   * @remarks
   * The parameter name.
   * 
   * This parameter is required.
   * 
   * @example
   * d
   */
  parameterName?: string;
  /**
   * @remarks
   * The value type of the parameter. Valid values:
   * 
   * - 1 (single value): A fixed value used for operators such as =, >=, <=, >, <, !=, and between. 
   * - 2 (multiple values): The input parameter contains multiple values separated by commas (,). Used for In and Not In operators.
   * 
   * This parameter is required.
   * 
   * @example
   * =
   */
  parameterValueType?: string;
  static names(): { [key: string]: string } {
    return {
      defaultValue: 'DefaultValue',
      exampleValue: 'ExampleValue',
      isRequiredParameter: 'IsRequiredParameter',
      parameterDataType: 'ParameterDataType',
      parameterDescription: 'ParameterDescription',
      parameterName: 'ParameterName',
      parameterValueType: 'ParameterValueType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultValue: 'string',
      exampleValue: 'string',
      isRequiredParameter: 'boolean',
      parameterDataType: 'string',
      parameterDescription: 'string',
      parameterName: 'string',
      parameterValueType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataServiceApiRequestCreateCommandScriptDetailsScriptResponseParameters extends $dara.Model {
  /**
   * @remarks
   * The example value.
   * 
   * @example
   * amazing
   */
  exampleValue?: string;
  /**
   * @remarks
   * The data type. Valid values:
   * - "STRING"
   * - "DOUBLE"
   * - "INT"
   * - "DATE"
   * - "LONG"
   * - "FLOAT"
   * - "BOOLEAN"
   * - "SHORT"
   * - "BYTE"
   * - "BIGDECIMAL"
   * - "BINARY"
   * - "ARRAY"
   * - "Array(int)"
   * - "Array(string)".
   * 
   * This parameter is required.
   * 
   * @example
   * STRING
   */
  parameterDataType?: string;
  /**
   * @remarks
   * The parameter description.
   * 
   * @example
   * 字段a
   */
  parameterDescription?: string;
  /**
   * @remarks
   * The location of the response parameter for operation-type APIs. This parameter must be set when the API is an operation-type API with batch data volume. Valid values:
   * - success: the response data of a successful operation
   * - failed: the response data of a failed operation.
   * 
   * @example
   * success
   */
  parameterLocation?: string;
  /**
   * @remarks
   * The parameter name.
   * 
   * This parameter is required.
   * 
   * @example
   * a
   */
  parameterName?: string;
  static names(): { [key: string]: string } {
    return {
      exampleValue: 'ExampleValue',
      parameterDataType: 'ParameterDataType',
      parameterDescription: 'ParameterDescription',
      parameterLocation: 'ParameterLocation',
      parameterName: 'ParameterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exampleValue: 'string',
      parameterDataType: 'string',
      parameterDescription: 'string',
      parameterLocation: 'string',
      parameterName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataServiceApiRequestCreateCommandScriptDetails extends $dara.Model {
  /**
   * @remarks
   * The ID of the datasource. This parameter is required when the API mode is direct datasource connection.
   * 
   * @example
   * 6668888888888812345L
   */
  datasourceID?: number;
  /**
   * @remarks
   * The data type on which the API is based. Valid values:
   * - 1: datasource.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  datasourceType?: number;
  /**
   * @remarks
   * Specifies whether to paginate the results. This parameter is required only when RequestType is set to List. Default value: false. Pagination is not supported in asynchronous call mode.
   * 
   * @example
   * false
   */
  isPaginated?: boolean;
  /**
   * @remarks
   * The SQL script.
   * 
   * This parameter is required.
   * 
   * @example
   * select a,b,c from table1 where d = ${d}
   */
  script?: string;
  /**
   * @remarks
   * The list of request parameters for the script API.
   */
  scriptRequestParameters?: CreateDataServiceApiRequestCreateCommandScriptDetailsScriptRequestParameters[];
  /**
   * @remarks
   * The list of response parameters for the script API.
   */
  scriptResponseParameters?: CreateDataServiceApiRequestCreateCommandScriptDetailsScriptResponseParameters[];
  /**
   * @remarks
   * The sorting priority. This parameter takes effect only when the SQL mode is basic mode. Default value: 2. Valid values:
   * 
   * - 1: SQL script 
   * - 2: OrderByList request parameter.
   * 
   * @example
   * 2
   */
  sortPriority?: number;
  /**
   * @remarks
   * The SQL mode. Valid values:
   * 
   * - 1: basic mode
   * - 2: advanced mode.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  sqlMode?: number;
  static names(): { [key: string]: string } {
    return {
      datasourceID: 'DatasourceID',
      datasourceType: 'DatasourceType',
      isPaginated: 'IsPaginated',
      script: 'Script',
      scriptRequestParameters: 'ScriptRequestParameters',
      scriptResponseParameters: 'ScriptResponseParameters',
      sortPriority: 'SortPriority',
      sqlMode: 'SqlMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasourceID: 'number',
      datasourceType: 'number',
      isPaginated: 'boolean',
      script: 'string',
      scriptRequestParameters: { 'type': 'array', 'itemType': CreateDataServiceApiRequestCreateCommandScriptDetailsScriptRequestParameters },
      scriptResponseParameters: { 'type': 'array', 'itemType': CreateDataServiceApiRequestCreateCommandScriptDetailsScriptResponseParameters },
      sortPriority: 'number',
      sqlMode: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.scriptRequestParameters)) {
      $dara.Model.validateArray(this.scriptRequestParameters);
    }
    if(Array.isArray(this.scriptResponseParameters)) {
      $dara.Model.validateArray(this.scriptResponseParameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataServiceApiRequestCreateCommand extends $dara.Model {
  /**
   * @remarks
   * The group ID of the API.
   * 
   * This parameter is required.
   * 
   * @example
   * 101
   */
  apiGroupId?: number;
  /**
   * @remarks
   * The group name of the API.
   * 
   * This parameter is required.
   * 
   * @example
   * 默认API分组
   */
  apiGroupName?: string;
  /**
   * @remarks
   * The name of the API.
   * 
   * This parameter is required.
   * 
   * @example
   * API_01
   */
  apiName?: string;
  /**
   * @remarks
   * The type of the API. Valid values:
   * 
   * - 3: datasource SQL mode.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  apiType?: number;
  /**
   * @remarks
   * The protocol. Different gateway types support different protocols. For more information, see the documentation. Valid values:
   * - 0: HTTP 
   * - 1: HTTPS.
   * 
   * This parameter is required.
   */
  bizProtocol?: number[];
  /**
   * @remarks
   * The cache timeout period, in seconds.
   * 
   * @example
   * 600
   */
  cacheTimeout?: number;
  /**
   * @remarks
   * The call mode of the API. Default value: 1. Valid values:
   * 
   * - 1: synchronous call
   * - 2: asynchronous call.
   * 
   * @example
   * 1
   */
  callMode?: number;
  /**
   * @remarks
   * The custom update frequency. This parameter is required when the update frequency is set to custom.
   * 
   * @example
   * 每天8点
   */
  customUpdateRate?: string;
  /**
   * @remarks
   * The description of the API.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The configuration of the operation-type API. This parameter is not required when creating a query-type API.
   */
  dmlConfig?: CreateDataServiceApiRequestCreateCommandDmlConfig;
  /**
   * @remarks
   * The execution timeout period for asynchronous API calls. This parameter takes effect only for asynchronous API calls and is required when the call mode is asynchronous.
   * 
   * @example
   * 30
   */
  executionTimeout?: number;
  /**
   * @remarks
   * The development mode of the API. Valid values:
   * 
   * - 0: Basic mode 
   * - 1: Dev-Prod mode.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  mode?: number;
  /**
   * @remarks
   * The ID of the data service project.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  projectId?: number;
  /**
   * @remarks
   * The request method of the API. Valid values:
   * 
   * - 0 (GET): Returns a single record. The query result is unique. 
   * - 1 (LIST): Returns multiple records.
   * - 2 (CREATE): Creates objects. Supports single or batch creation.
   * - 3 (UPDATE): Updates objects. Supports single or batch updates.
   * - 4 (DELETE): Deletes objects. Supports single or batch deletions.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  requestType?: number;
  /**
   * @remarks
   * Specifies whether to return the SQL in the result.
   * 
   * @example
   * true
   */
  returnSqlSwitch?: boolean;
  /**
   * @remarks
   * The list of row-level permission IDs.
   */
  rowPermissionIds?: number[];
  /**
   * @remarks
   * The details of the script API.
   * 
   * This parameter is required.
   */
  scriptDetails?: CreateDataServiceApiRequestCreateCommandScriptDetails;
  /**
   * @remarks
   * The timeout period, in seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 30
   */
  timeout?: number;
  /**
   * @remarks
   * The update frequency. Default value: 1. Valid values:
   * 
   * - 0: custom
   * - 1: day
   * - 2: hour
   * - 3: minute.
   * 
   * @example
   * 1
   */
  updateRate?: number;
  /**
   * @remarks
   * The version of the API.
   * 
   * This parameter is required.
   * 
   * @example
   * V1
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      apiGroupId: 'ApiGroupId',
      apiGroupName: 'ApiGroupName',
      apiName: 'ApiName',
      apiType: 'ApiType',
      bizProtocol: 'BizProtocol',
      cacheTimeout: 'CacheTimeout',
      callMode: 'CallMode',
      customUpdateRate: 'CustomUpdateRate',
      description: 'Description',
      dmlConfig: 'DmlConfig',
      executionTimeout: 'ExecutionTimeout',
      mode: 'Mode',
      projectId: 'ProjectId',
      requestType: 'RequestType',
      returnSqlSwitch: 'ReturnSqlSwitch',
      rowPermissionIds: 'RowPermissionIds',
      scriptDetails: 'ScriptDetails',
      timeout: 'Timeout',
      updateRate: 'UpdateRate',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiGroupId: 'number',
      apiGroupName: 'string',
      apiName: 'string',
      apiType: 'number',
      bizProtocol: { 'type': 'array', 'itemType': 'number' },
      cacheTimeout: 'number',
      callMode: 'number',
      customUpdateRate: 'string',
      description: 'string',
      dmlConfig: CreateDataServiceApiRequestCreateCommandDmlConfig,
      executionTimeout: 'number',
      mode: 'number',
      projectId: 'number',
      requestType: 'number',
      returnSqlSwitch: 'boolean',
      rowPermissionIds: { 'type': 'array', 'itemType': 'number' },
      scriptDetails: CreateDataServiceApiRequestCreateCommandScriptDetails,
      timeout: 'number',
      updateRate: 'number',
      version: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.bizProtocol)) {
      $dara.Model.validateArray(this.bizProtocol);
    }
    if(this.dmlConfig && typeof (this.dmlConfig as any).validate === 'function') {
      (this.dmlConfig as any).validate();
    }
    if(Array.isArray(this.rowPermissionIds)) {
      $dara.Model.validateArray(this.rowPermissionIds);
    }
    if(this.scriptDetails && typeof (this.scriptDetails as any).validate === 'function') {
      (this.scriptDetails as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataServiceApiRequest extends $dara.Model {
  /**
   * @remarks
   * The request for creating an API.
   * 
   * This parameter is required.
   */
  createCommand?: CreateDataServiceApiRequestCreateCommand;
  /**
   * @remarks
   * The tenant ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      createCommand: 'CreateCommand',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createCommand: CreateDataServiceApiRequestCreateCommand,
      opTenantId: 'number',
    };
  }

  validate() {
    if(this.createCommand && typeof (this.createCommand as any).validate === 'function') {
      (this.createCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

