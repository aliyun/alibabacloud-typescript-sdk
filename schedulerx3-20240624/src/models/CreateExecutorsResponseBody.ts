// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateExecutorsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The App Group ID.
   * 
   * @example
   * test-app
   */
  appGroupId?: number;
  /**
   * @remarks
   * The application type.
   * 
   * @example
   * 1
   */
  appType?: number;
  /**
   * @remarks
   * A list of Kubernetes Services that failed to import.
   * 
   * @example
   * [{"cluster":"xxxxx","namespace":"xxxxx","service":"xxxxx"}]
   */
  failedService?: string;
  /**
   * @remarks
   * The ID of the worker. You can obtain this ID by calling the [ListWorkerResource](https://help.aliyun.com/document_detail/2712224.html) operation.
   * 
   * @example
   * ins-95mfvqrtg6fkijt1uko000
   */
  workerId?: number;
  /**
   * @remarks
   * The worker type.
   * 
   * @example
   * k8s_service
   */
  workerType?: string;
  /**
   * @remarks
   * A JSON string that represents the list of imported workers.
   * 
   * @example
   * [{"cluster":"xxxxx","namespace":"xxxxx","service":"xxxxx"}]
   */
  workers?: string;
  static names(): { [key: string]: string } {
    return {
      appGroupId: 'AppGroupId',
      appType: 'AppType',
      failedService: 'FailedService',
      workerId: 'WorkerId',
      workerType: 'WorkerType',
      workers: 'Workers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appGroupId: 'number',
      appType: 'number',
      failedService: 'string',
      workerId: 'number',
      workerType: 'string',
      workers: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateExecutorsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned data.
   */
  data?: CreateExecutorsResponseBodyData;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * Parameter error: content is null.
   */
  message?: string;
  /**
   * @remarks
   * The unique ID of the request.
   * 
   * @example
   * F131C3E0-3FAA-5FA4-A6F3-E974D69EF3C5
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request succeeded.
   * 
   * - true: The request succeeded.
   * 
   * - false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: CreateExecutorsResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

