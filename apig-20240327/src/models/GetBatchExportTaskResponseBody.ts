// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBatchExportTaskResponseBodyDataResultFailureItems extends $dara.Model {
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
   * @example
   * Http
   */
  apiType?: string;
  failureItems?: GetBatchExportTaskResponseBodyDataResultFailureItems[];
  /**
   * @example
   * gw-xxx
   */
  gatewayId?: string;
  /**
   * @example
   * UEsDBBQAAAA...
   */
  specContentBase64?: string;
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
   * @example
   * 2026-05-15T10:00:00Z
   */
  createTime?: string;
  /**
   * @example
   * some apis export failed
   */
  errorMessage?: string;
  /**
   * @example
   * 5
   */
  processedCount?: number;
  result?: GetBatchExportTaskResponseBodyDataResult;
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
   * BatchExport
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
   * @example
   * Ok
   */
  code?: string;
  data?: GetBatchExportTaskResponseBodyData;
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

