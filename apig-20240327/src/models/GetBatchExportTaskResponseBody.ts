// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBatchExportTaskResponseBodyDataResultFailureItems extends $dara.Model {
  /**
   * @remarks
   * API ID。
   * 
   * @example
   * api-xxx
   */
  apiId?: string;
  /**
   * @remarks
   * The API name.
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
   * api definition is invalid
   */
  errorMessage?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'apiId',
      apiName: 'apiName',
      errorMessage: 'errorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      apiName: 'string',
      errorMessage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBatchExportTaskResponseBodyDataResultSuccessItems extends $dara.Model {
  /**
   * @remarks
   * API ID。
   * 
   * @example
   * api-xxx
   */
  apiId?: string;
  /**
   * @remarks
   * The API name.
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
   * api definition is invalid
   */
  errorMessage?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'apiId',
      apiName: 'apiName',
      errorMessage: 'errorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      apiName: 'string',
      errorMessage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBatchExportTaskResponseBodyDataResult extends $dara.Model {
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
   * The list of APIs that failed to be processed.
   */
  failureItems?: GetBatchExportTaskResponseBodyDataResultFailureItems[];
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
   * The Base64-encoded ZIP file content. After the frontend decodes the content, it can directly trigger a browser download.
   * 
   * @example
   * UEsDBBQAAAA...
   */
  specContentBase64?: string;
  /**
   * @remarks
   * The list of APIs that were processed successfully.
   */
  successItems?: GetBatchExportTaskResponseBodyDataResultSuccessItems[];
  static names(): { [key: string]: string } {
    return {
      apiType: 'apiType',
      failureItems: 'failureItems',
      gatewayId: 'gatewayId',
      specContentBase64: 'specContentBase64',
      successItems: 'successItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiType: 'string',
      failureItems: { 'type': 'array', 'itemType': GetBatchExportTaskResponseBodyDataResultFailureItems },
      gatewayId: 'string',
      specContentBase64: 'string',
      successItems: { 'type': 'array', 'itemType': GetBatchExportTaskResponseBodyDataResultSuccessItems },
    };
  }

  validate() {
    if(Array.isArray(this.failureItems)) {
      $dara.Model.validateArray(this.failureItems);
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

export class GetBatchExportTaskResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The time when the task was created. Format: yyyy-MM-dd\\"T\\"HH:mm:ss\\"Z\\".
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
   * some apis export failed
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
  result?: GetBatchExportTaskResponseBodyDataResult;
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
   * BatchExport
   */
  taskType?: string;
  /**
   * @remarks
   * The total number of items.
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
      result: GetBatchExportTaskResponseBodyDataResult,
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

export class GetBatchExportTaskResponseBody extends $dara.Model {
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
  data?: GetBatchExportTaskResponseBodyData;
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
   * Id of the request
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
      data: GetBatchExportTaskResponseBodyData,
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

