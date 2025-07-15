// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImportOASTaskResponseBodyApiResultsApiResult extends $dara.Model {
  /**
   * @remarks
   * The API ID.
   * 
   * @example
   * c5a0c2900ff746b789c007545be22fb8
   */
  apiId?: string;
  /**
   * @remarks
   * The API name.
   * 
   * @example
   * GetByCreatorIdUsingGET
   */
  apiName?: string;
  /**
   * @remarks
   * The API description.
   * 
   * @example
   * release data api 411055691505041
   */
  description?: string;
  /**
   * @remarks
   * The cause of the failure if the API fails to be imported.
   * 
   * @example
   * Internal Error
   */
  errorMessage?: string;
  /**
   * @remarks
   * The API group ID.
   * 
   * @example
   * 736508d885074167ba8fbce3bc95ea0b
   */
  groupId?: string;
  /**
   * @remarks
   * The HTTP request HTTP method of the API.
   * 
   * @example
   * GET
   */
  method?: string;
  /**
   * @remarks
   * The request path of the API.
   * 
   * @example
   * /creator/getByCreatorId
   */
  path?: string;
  /**
   * @remarks
   * The execution status of the subtask. Valid values:
   * 
   * *   RUNNING
   * *   WAIT
   * *   OVER
   * *   FAIL
   * *   CANCEL
   * 
   * @example
   * WAIT
   */
  updateStatus?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      apiName: 'ApiName',
      description: 'Description',
      errorMessage: 'ErrorMessage',
      groupId: 'GroupId',
      method: 'Method',
      path: 'Path',
      updateStatus: 'UpdateStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      apiName: 'string',
      description: 'string',
      errorMessage: 'string',
      groupId: 'string',
      method: 'string',
      path: 'string',
      updateStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImportOASTaskResponseBodyApiResults extends $dara.Model {
  apiResult?: DescribeImportOASTaskResponseBodyApiResultsApiResult[];
  static names(): { [key: string]: string } {
    return {
      apiResult: 'ApiResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiResult: { 'type': 'array', 'itemType': DescribeImportOASTaskResponseBodyApiResultsApiResult },
    };
  }

  validate() {
    if(Array.isArray(this.apiResult)) {
      $dara.Model.validateArray(this.apiResult);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImportOASTaskResponseBodyModelResultsModelResult extends $dara.Model {
  /**
   * @remarks
   * The cause of the failure if the model fails to be imported.
   * 
   * @example
   * Internal Error
   */
  errorMessage?: string;
  /**
   * @remarks
   * The API group ID.
   * 
   * @example
   * 736508d885074167ba8fbce3bc95ea0b
   */
  groupId?: string;
  /**
   * @remarks
   * The ID of the imported model.
   * 
   * @example
   * 6b48d724c921415486e190c494dd6bf8
   */
  modelId?: string;
  /**
   * @remarks
   * The model name.
   * 
   * @example
   * Pet
   */
  modelName?: string;
  /**
   * @remarks
   * The execution status of the subtask. Valid values:
   * 
   * *   RUNNING
   * *   WAIT
   * *   OVER
   * *   FAIL
   * *   CANCEL
   * 
   * @example
   * FAIL
   */
  updateStatus?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      groupId: 'GroupId',
      modelId: 'ModelId',
      modelName: 'ModelName',
      updateStatus: 'UpdateStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      groupId: 'string',
      modelId: 'string',
      modelName: 'string',
      updateStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImportOASTaskResponseBodyModelResults extends $dara.Model {
  modelResult?: DescribeImportOASTaskResponseBodyModelResultsModelResult[];
  static names(): { [key: string]: string } {
    return {
      modelResult: 'ModelResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelResult: { 'type': 'array', 'itemType': DescribeImportOASTaskResponseBodyModelResultsModelResult },
    };
  }

  validate() {
    if(Array.isArray(this.modelResult)) {
      $dara.Model.validateArray(this.modelResult);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImportOASTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The execution status of the subtask. Valid values:
   * 
   * *   RUNNING
   * *   WAIT
   * *   OVER
   * *   FAIL
   * *   CANCEL
   */
  apiResults?: DescribeImportOASTaskResponseBodyApiResults;
  /**
   * @remarks
   * The execution status of the subtask. Valid values:
   * 
   * *   RUNNING
   * *   WAIT
   * *   OVER
   * *   FAIL
   * *   CANCEL
   */
  modelResults?: DescribeImportOASTaskResponseBodyModelResults;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CE5722A6-AE78-4741-A9B0-6C817D360510
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the import task. Valid values:
   * 
   * *   Running
   * *   Finished
   * 
   * @example
   * Finished
   */
  taskStatus?: string;
  static names(): { [key: string]: string } {
    return {
      apiResults: 'ApiResults',
      modelResults: 'ModelResults',
      requestId: 'RequestId',
      taskStatus: 'TaskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiResults: DescribeImportOASTaskResponseBodyApiResults,
      modelResults: DescribeImportOASTaskResponseBodyModelResults,
      requestId: 'string',
      taskStatus: 'string',
    };
  }

  validate() {
    if(this.apiResults && typeof (this.apiResults as any).validate === 'function') {
      (this.apiResults as any).validate();
    }
    if(this.modelResults && typeof (this.modelResults as any).validate === 'function') {
      (this.modelResults as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

