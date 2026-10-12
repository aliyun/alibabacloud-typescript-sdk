// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBatchImportTaskResponseBodyDataResultDryRunResultsDryRunInfoExistHttpApiInfoVersionInfo extends $dara.Model {
  /**
   * @remarks
   * Indicates whether versioning is enabled.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The key in the specified header parameter when the header versioning scheme is used.
   * 
   * @example
   * my-version
   */
  headerName?: string;
  /**
   * @remarks
   * The key in the specified query parameter when the query versioning scheme is used.
   * 
   * @example
   * myVersion
   */
  queryName?: string;
  /**
   * @remarks
   * The versioning scheme.
   * 
   * @example
   * Query
   */
  scheme?: string;
  /**
   * @remarks
   * The version number.
   * 
   * @example
   * v1
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      enable: 'enable',
      headerName: 'headerName',
      queryName: 'queryName',
      scheme: 'scheme',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      headerName: 'string',
      queryName: 'string',
      scheme: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBatchImportTaskResponseBodyDataResultDryRunResultsDryRunInfoExistHttpApiInfo extends $dara.Model {
  /**
   * @remarks
   * The base path of the API.
   * 
   * @example
   * /v1
   */
  basePath?: string;
  /**
   * @remarks
   * The gateway instance ID.
   * 
   * @example
   * gw-xxx
   */
  gatewayId?: string;
  /**
   * @remarks
   * The ID of the HTTP API.
   * 
   * @example
   * api-xxx
   */
  httpApiId?: string;
  /**
   * @remarks
   * The name of the API.
   * 
   * @example
   * petstore
   */
  name?: string;
  /**
   * @remarks
   * The API type.
   * 
   * @example
   * Rest
   */
  type?: string;
  /**
   * @remarks
   * The API versioning information.
   */
  versionInfo?: GetBatchImportTaskResponseBodyDataResultDryRunResultsDryRunInfoExistHttpApiInfoVersionInfo;
  static names(): { [key: string]: string } {
    return {
      basePath: 'basePath',
      gatewayId: 'gatewayId',
      httpApiId: 'httpApiId',
      name: 'name',
      type: 'type',
      versionInfo: 'versionInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      basePath: 'string',
      gatewayId: 'string',
      httpApiId: 'string',
      name: 'string',
      type: 'string',
      versionInfo: GetBatchImportTaskResponseBodyDataResultDryRunResultsDryRunInfoExistHttpApiInfoVersionInfo,
    };
  }

  validate() {
    if(this.versionInfo && typeof (this.versionInfo as any).validate === 'function') {
      (this.versionInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBatchImportTaskResponseBodyDataResultDryRunResultsDryRunInfoFailureComponents extends $dara.Model {
  /**
   * @remarks
   * The reason why the dry run failed.
   * 
   * @example
   * invalid schema
   */
  errorMessage?: string;
  /**
   * @remarks
   * The name of the data structure.
   * 
   * @example
   * Pet
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'errorMessage',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBatchImportTaskResponseBodyDataResultDryRunResultsDryRunInfoFailureOperations extends $dara.Model {
  /**
   * @remarks
   * The reason why the dry run failed.
   * 
   * @example
   * unsupported operation
   */
  errorMessage?: string;
  /**
   * @remarks
   * The HTTP method of the REST API operation.
   * 
   * @example
   * GET
   */
  method?: string;
  /**
   * @remarks
   * The path of the REST API operation.
   * 
   * @example
   * /pets/{petId}
   */
  path?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'errorMessage',
      method: 'method',
      path: 'path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      method: 'string',
      path: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBatchImportTaskResponseBodyDataResultDryRunResultsDryRunInfoFailureRoutes extends $dara.Model {
  /**
   * @remarks
   * The reason why the dry run failed.
   * 
   * @example
   * domain not found
   */
  errorMessage?: string;
  /**
   * @remarks
   * The name of the route.
   * 
   * @example
   * route-pets
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'errorMessage',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBatchImportTaskResponseBodyDataResultDryRunResultsDryRunInfoSuccessComponents extends $dara.Model {
  /**
   * @remarks
   * The action type to be performed after the dry run.
   * 
   * @example
   * Create
   */
  action?: string;
  /**
   * @remarks
   * The name of the data structure.
   * 
   * @example
   * Pet
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'action',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBatchImportTaskResponseBodyDataResultDryRunResultsDryRunInfoSuccessOperations extends $dara.Model {
  /**
   * @remarks
   * The action type to be performed after the dry run.
   * 
   * @example
   * Create
   */
  action?: string;
  /**
   * @remarks
   * The HTTP method of the REST API operation.
   * 
   * @example
   * GET
   */
  method?: string;
  /**
   * @remarks
   * The name of the REST API operation.
   * 
   * @example
   * getPetById
   */
  name?: string;
  /**
   * @remarks
   * The path of the REST API operation.
   * 
   * @example
   * /pets/{petId}
   */
  path?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'action',
      method: 'method',
      name: 'name',
      path: 'path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      method: 'string',
      name: 'string',
      path: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBatchImportTaskResponseBodyDataResultDryRunResultsDryRunInfoSuccessRoutes extends $dara.Model {
  /**
   * @remarks
   * The action type to be performed after the dry run.
   * 
   * @example
   * Create
   */
  action?: string;
  /**
   * @remarks
   * The name of the route.
   * 
   * @example
   * route-pets
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'action',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBatchImportTaskResponseBodyDataResultDryRunResultsDryRunInfo extends $dara.Model {
  /**
   * @remarks
   * The list of dry run error messages.
   */
  errorMessages?: string[];
  /**
   * @remarks
   * The basic information about the existing HTTP API matched during import.
   */
  existHttpApiInfo?: GetBatchImportTaskResponseBodyDataResultDryRunResultsDryRunInfoExistHttpApiInfo;
  /**
   * @remarks
   * The list of data structures that failed the dry run.
   */
  failureComponents?: GetBatchImportTaskResponseBodyDataResultDryRunResultsDryRunInfoFailureComponents[];
  /**
   * @remarks
   * The list of REST API operations that failed the dry run.
   */
  failureOperations?: GetBatchImportTaskResponseBodyDataResultDryRunResultsDryRunInfoFailureOperations[];
  /**
   * @remarks
   * The list of routes that failed the dry run.
   */
  failureRoutes?: GetBatchImportTaskResponseBodyDataResultDryRunResultsDryRunInfoFailureRoutes[];
  /**
   * @remarks
   * The list of data structures that passed the dry run.
   */
  successComponents?: GetBatchImportTaskResponseBodyDataResultDryRunResultsDryRunInfoSuccessComponents[];
  /**
   * @remarks
   * The list of REST API operations that passed the dry run.
   */
  successOperations?: GetBatchImportTaskResponseBodyDataResultDryRunResultsDryRunInfoSuccessOperations[];
  /**
   * @remarks
   * The list of routes that passed the dry run.
   */
  successRoutes?: GetBatchImportTaskResponseBodyDataResultDryRunResultsDryRunInfoSuccessRoutes[];
  /**
   * @remarks
   * The list of dry run warning messages.
   */
  warningMessages?: string[];
  static names(): { [key: string]: string } {
    return {
      errorMessages: 'errorMessages',
      existHttpApiInfo: 'existHttpApiInfo',
      failureComponents: 'failureComponents',
      failureOperations: 'failureOperations',
      failureRoutes: 'failureRoutes',
      successComponents: 'successComponents',
      successOperations: 'successOperations',
      successRoutes: 'successRoutes',
      warningMessages: 'warningMessages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessages: { 'type': 'array', 'itemType': 'string' },
      existHttpApiInfo: GetBatchImportTaskResponseBodyDataResultDryRunResultsDryRunInfoExistHttpApiInfo,
      failureComponents: { 'type': 'array', 'itemType': GetBatchImportTaskResponseBodyDataResultDryRunResultsDryRunInfoFailureComponents },
      failureOperations: { 'type': 'array', 'itemType': GetBatchImportTaskResponseBodyDataResultDryRunResultsDryRunInfoFailureOperations },
      failureRoutes: { 'type': 'array', 'itemType': GetBatchImportTaskResponseBodyDataResultDryRunResultsDryRunInfoFailureRoutes },
      successComponents: { 'type': 'array', 'itemType': GetBatchImportTaskResponseBodyDataResultDryRunResultsDryRunInfoSuccessComponents },
      successOperations: { 'type': 'array', 'itemType': GetBatchImportTaskResponseBodyDataResultDryRunResultsDryRunInfoSuccessOperations },
      successRoutes: { 'type': 'array', 'itemType': GetBatchImportTaskResponseBodyDataResultDryRunResultsDryRunInfoSuccessRoutes },
      warningMessages: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.errorMessages)) {
      $dara.Model.validateArray(this.errorMessages);
    }
    if(this.existHttpApiInfo && typeof (this.existHttpApiInfo as any).validate === 'function') {
      (this.existHttpApiInfo as any).validate();
    }
    if(Array.isArray(this.failureComponents)) {
      $dara.Model.validateArray(this.failureComponents);
    }
    if(Array.isArray(this.failureOperations)) {
      $dara.Model.validateArray(this.failureOperations);
    }
    if(Array.isArray(this.failureRoutes)) {
      $dara.Model.validateArray(this.failureRoutes);
    }
    if(Array.isArray(this.successComponents)) {
      $dara.Model.validateArray(this.successComponents);
    }
    if(Array.isArray(this.successOperations)) {
      $dara.Model.validateArray(this.successOperations);
    }
    if(Array.isArray(this.successRoutes)) {
      $dara.Model.validateArray(this.successRoutes);
    }
    if(Array.isArray(this.warningMessages)) {
      $dara.Model.validateArray(this.warningMessages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBatchImportTaskResponseBodyDataResultDryRunResults extends $dara.Model {
  /**
   * @remarks
   * The API name. The value unknown is returned if the name cannot be identified.
   * 
   * @example
   * petstore
   */
  apiName?: string;
  /**
   * @remarks
   * The dry run details, including the operations, routes, components, and error or warning messages planned for creation or update in this file.
   */
  dryRunInfo?: GetBatchImportTaskResponseBodyDataResultDryRunResultsDryRunInfo;
  /**
   * @remarks
   * The dry run error message.
   * 
   * @example
   * unsupported oas version
   */
  error?: string;
  /**
   * @remarks
   * The file name.
   * 
   * @example
   * petstore.yaml
   */
  fileName?: string;
  static names(): { [key: string]: string } {
    return {
      apiName: 'apiName',
      dryRunInfo: 'dryRunInfo',
      error: 'error',
      fileName: 'fileName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiName: 'string',
      dryRunInfo: GetBatchImportTaskResponseBodyDataResultDryRunResultsDryRunInfo,
      error: 'string',
      fileName: 'string',
    };
  }

  validate() {
    if(this.dryRunInfo && typeof (this.dryRunInfo as any).validate === 'function') {
      (this.dryRunInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBatchImportTaskResponseBodyDataResultFailureItems extends $dara.Model {
  /**
   * @remarks
   * The ID of the API.
   * 
   * @example
   * api-xxx
   */
  apiId?: string;
  /**
   * @remarks
   * The API name. The value unknown is returned if the name cannot be identified.
   * 
   * @example
   * petstore
   */
  apiName?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * invalid oas format
   */
  errorMessage?: string;
  /**
   * @remarks
   * The file name.
   * 
   * @example
   * petstore.yaml
   */
  fileName?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'apiId',
      apiName: 'apiName',
      errorMessage: 'errorMessage',
      fileName: 'fileName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      apiName: 'string',
      errorMessage: 'string',
      fileName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBatchImportTaskResponseBodyDataResultImportRequestSpecOssConfig extends $dara.Model {
  /**
   * @remarks
   * The name of the OSS bucket.
   * 
   * @example
   * my-bucket
   */
  bucketName?: string;
  /**
   * @remarks
   * The object key of the specification file in the OSS bucket.
   * 
   * @example
   * imports/batch.zip
   */
  objectKey?: string;
  /**
   * @remarks
   * The region ID of the OSS bucket.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'bucketName',
      objectKey: 'objectKey',
      regionId: 'regionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      objectKey: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBatchImportTaskResponseBodyDataResultImportRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to allow overwriting existing APIs.
   */
  allowUpdate?: boolean;
  /**
   * @remarks
   * The API type.
   * 
   * @example
   * Http
   */
  apiType?: string;
  /**
   * @remarks
   * Specifies whether the request is in dry run mode. This parameter is fixed to false in the formal import request body.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The gateway instance ID.
   * 
   * @example
   * gw-xxx
   */
  gatewayId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-xxx
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The download URL of the OAS ZIP file, which is consistent with the dry run request.
   * 
   * @example
   * https://oss-cn-hangzhou.aliyuncs.com/my-bucket/imports/batch.zip
   */
  specFileUrl?: string;
  /**
   * @remarks
   * The OSS configuration of the OAS file, which is consistent with the dry run request.
   */
  specOssConfig?: GetBatchImportTaskResponseBodyDataResultImportRequestSpecOssConfig;
  /**
   * @remarks
   * The conflict merge strategy used during import.
   * 
   * @example
   * ExistFirst
   */
  strategy?: string;
  /**
   * @remarks
   * Specifies whether to import with gateway extension configurations.
   */
  withGatewayExtension?: boolean;
  static names(): { [key: string]: string } {
    return {
      allowUpdate: 'allowUpdate',
      apiType: 'apiType',
      dryRun: 'dryRun',
      gatewayId: 'gatewayId',
      resourceGroupId: 'resourceGroupId',
      specFileUrl: 'specFileUrl',
      specOssConfig: 'specOssConfig',
      strategy: 'strategy',
      withGatewayExtension: 'withGatewayExtension',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowUpdate: 'boolean',
      apiType: 'string',
      dryRun: 'boolean',
      gatewayId: 'string',
      resourceGroupId: 'string',
      specFileUrl: 'string',
      specOssConfig: GetBatchImportTaskResponseBodyDataResultImportRequestSpecOssConfig,
      strategy: 'string',
      withGatewayExtension: 'boolean',
    };
  }

  validate() {
    if(this.specOssConfig && typeof (this.specOssConfig as any).validate === 'function') {
      (this.specOssConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBatchImportTaskResponseBodyDataResultSuccessItems extends $dara.Model {
  /**
   * @remarks
   * The ID of the API.
   * 
   * @example
   * api-xxx
   */
  apiId?: string;
  /**
   * @remarks
   * The API name. The value unknown is returned if the name cannot be identified.
   * 
   * @example
   * petstore
   */
  apiName?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * invalid oas format
   */
  errorMessage?: string;
  /**
   * @remarks
   * The file name.
   * 
   * @example
   * petstore.yaml
   */
  fileName?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'apiId',
      apiName: 'apiName',
      errorMessage: 'errorMessage',
      fileName: 'fileName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      apiName: 'string',
      errorMessage: 'string',
      fileName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBatchImportTaskResponseBodyDataResult extends $dara.Model {
  /**
   * @remarks
   * The API type.
   * 
   * @example
   * Http
   */
  apiType?: string;
  /**
   * @remarks
   * Indicates whether the task is in dry run mode.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The list of dry run results.
   */
  dryRunResults?: GetBatchImportTaskResponseBodyDataResultDryRunResults[];
  /**
   * @remarks
   * The list of APIs that failed to be processed.
   */
  failureItems?: GetBatchImportTaskResponseBodyDataResultFailureItems[];
  /**
   * @remarks
   * The gateway instance ID.
   * 
   * @example
   * gw-xxx
   */
  gatewayId?: string;
  /**
   * @remarks
   * The formal import request body. This field is returned only for dry run tasks and can be resubmitted as the request body of BatchImportHttpApis. The dryRun parameter is fixed to false. Temporary specFileUrl values are still subject to URL expiration constraints.
   */
  importRequest?: GetBatchImportTaskResponseBodyDataResultImportRequest;
  /**
   * @remarks
   * The list of successfully processed APIs.
   */
  successItems?: GetBatchImportTaskResponseBodyDataResultSuccessItems[];
  static names(): { [key: string]: string } {
    return {
      apiType: 'apiType',
      dryRun: 'dryRun',
      dryRunResults: 'dryRunResults',
      failureItems: 'failureItems',
      gatewayId: 'gatewayId',
      importRequest: 'importRequest',
      successItems: 'successItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiType: 'string',
      dryRun: 'boolean',
      dryRunResults: { 'type': 'array', 'itemType': GetBatchImportTaskResponseBodyDataResultDryRunResults },
      failureItems: { 'type': 'array', 'itemType': GetBatchImportTaskResponseBodyDataResultFailureItems },
      gatewayId: 'string',
      importRequest: GetBatchImportTaskResponseBodyDataResultImportRequest,
      successItems: { 'type': 'array', 'itemType': GetBatchImportTaskResponseBodyDataResultSuccessItems },
    };
  }

  validate() {
    if(Array.isArray(this.dryRunResults)) {
      $dara.Model.validateArray(this.dryRunResults);
    }
    if(Array.isArray(this.failureItems)) {
      $dara.Model.validateArray(this.failureItems);
    }
    if(this.importRequest && typeof (this.importRequest as any).validate === 'function') {
      (this.importRequest as any).validate();
    }
    if(Array.isArray(this.successItems)) {
      $dara.Model.validateArray(this.successItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBatchImportTaskResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The time when the task was created. The time is in UTC and follows the RFC 3339 format.
   * 
   * @example
   * 2026-05-15T10:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * some apis import failed
   */
  errorMessage?: string;
  /**
   * @remarks
   * The number of processed items.
   * 
   * @example
   * 5
   */
  processedCount?: number;
  /**
   * @remarks
   * The task result details.
   */
  result?: GetBatchImportTaskResponseBodyDataResult;
  /**
   * @remarks
   * The task status. Valid values: Pending, Running, Success, PartialSuccess, and Failed.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * async-task-xxx
   */
  taskId?: string;
  /**
   * @remarks
   * The task type.
   * 
   * @example
   * BatchImport
   */
  taskType?: string;
  /**
   * @remarks
   * The total count.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      errorMessage: 'errorMessage',
      processedCount: 'processedCount',
      result: 'result',
      status: 'status',
      taskId: 'taskId',
      taskType: 'taskType',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      errorMessage: 'string',
      processedCount: 'number',
      result: GetBatchImportTaskResponseBodyDataResult,
      status: 'string',
      taskId: 'string',
      taskType: 'string',
      totalCount: 'number',
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

export class GetBatchImportTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: GetBatchImportTaskResponseBodyData;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CE534E1D-FCE4-5930-B784-E055EC1AEE6F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetBatchImportTaskResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

