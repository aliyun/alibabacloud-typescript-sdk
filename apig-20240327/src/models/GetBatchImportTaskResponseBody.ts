// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBatchImportTaskResponseBodyDataResultDryRunResultsDryRunInfoExistHttpApiInfoVersionInfo extends $dara.Model {
  /**
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @example
   * my-version
   */
  headerName?: string;
  /**
   * @example
   * myVersion
   */
  queryName?: string;
  /**
   * @example
   * Query
   */
  scheme?: string;
  /**
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
   * @example
   * /v1
   */
  basePath?: string;
  /**
   * @example
   * gw-xxx
   */
  gatewayId?: string;
  /**
   * @example
   * api-xxx
   */
  httpApiId?: string;
  /**
   * @example
   * petstore
   */
  name?: string;
  /**
   * @example
   * Rest
   */
  type?: string;
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
   * @example
   * invalid schema
   */
  errorMessage?: string;
  /**
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
   * @example
   * unsupported operation
   */
  errorMessage?: string;
  /**
   * @example
   * GET
   */
  method?: string;
  /**
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
   * @example
   * domain not found
   */
  errorMessage?: string;
  /**
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
   * @example
   * Create
   */
  action?: string;
  /**
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
   * @example
   * Create
   */
  action?: string;
  /**
   * @example
   * GET
   */
  method?: string;
  /**
   * @example
   * getPetById
   */
  name?: string;
  /**
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
   * @example
   * Create
   */
  action?: string;
  /**
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
  errorMessages?: string[];
  existHttpApiInfo?: GetBatchImportTaskResponseBodyDataResultDryRunResultsDryRunInfoExistHttpApiInfo;
  failureComponents?: GetBatchImportTaskResponseBodyDataResultDryRunResultsDryRunInfoFailureComponents[];
  failureOperations?: GetBatchImportTaskResponseBodyDataResultDryRunResultsDryRunInfoFailureOperations[];
  failureRoutes?: GetBatchImportTaskResponseBodyDataResultDryRunResultsDryRunInfoFailureRoutes[];
  successComponents?: GetBatchImportTaskResponseBodyDataResultDryRunResultsDryRunInfoSuccessComponents[];
  successOperations?: GetBatchImportTaskResponseBodyDataResultDryRunResultsDryRunInfoSuccessOperations[];
  successRoutes?: GetBatchImportTaskResponseBodyDataResultDryRunResultsDryRunInfoSuccessRoutes[];
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
   * @example
   * petstore
   */
  apiName?: string;
  dryRunInfo?: GetBatchImportTaskResponseBodyDataResultDryRunResultsDryRunInfo;
  /**
   * @example
   * unsupported oas version
   */
  error?: string;
  /**
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
   * @example
   * api-xxx
   */
  apiId?: string;
  /**
   * @example
   * petstore
   */
  apiName?: string;
  /**
   * @example
   * invalid oas format
   */
  errorMessage?: string;
  /**
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
   * @example
   * my-bucket
   */
  bucketName?: string;
  /**
   * @example
   * imports/batch.zip
   */
  objectKey?: string;
  /**
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
  allowUpdate?: boolean;
  /**
   * @example
   * Http
   */
  apiType?: string;
  /**
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @example
   * gw-xxx
   */
  gatewayId?: string;
  /**
   * @example
   * rg-xxx
   */
  resourceGroupId?: string;
  /**
   * @example
   * https://oss-cn-hangzhou.aliyuncs.com/my-bucket/imports/batch.zip
   */
  specFileUrl?: string;
  specOssConfig?: GetBatchImportTaskResponseBodyDataResultImportRequestSpecOssConfig;
  /**
   * @example
   * ExistFirst
   */
  strategy?: string;
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
   * @example
   * api-xxx
   */
  apiId?: string;
  /**
   * @example
   * petstore
   */
  apiName?: string;
  /**
   * @example
   * invalid oas format
   */
  errorMessage?: string;
  /**
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
   * @example
   * Http
   */
  apiType?: string;
  /**
   * @example
   * true
   */
  dryRun?: boolean;
  dryRunResults?: GetBatchImportTaskResponseBodyDataResultDryRunResults[];
  failureItems?: GetBatchImportTaskResponseBodyDataResultFailureItems[];
  /**
   * @example
   * gw-xxx
   */
  gatewayId?: string;
  importRequest?: GetBatchImportTaskResponseBodyDataResultImportRequest;
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
   * @example
   * 2026-05-15T10:00:00Z
   */
  createTime?: string;
  /**
   * @example
   * some apis import failed
   */
  errorMessage?: string;
  /**
   * @example
   * 5
   */
  processedCount?: number;
  result?: GetBatchImportTaskResponseBodyDataResult;
  /**
   * @example
   * Running
   */
  status?: string;
  /**
   * @example
   * async-task-xxx
   */
  taskId?: string;
  /**
   * @example
   * BatchImport
   */
  taskType?: string;
  /**
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
   * @example
   * Ok
   */
  code?: string;
  data?: GetBatchImportTaskResponseBodyData;
  /**
   * @example
   * success
   */
  message?: string;
  /**
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

