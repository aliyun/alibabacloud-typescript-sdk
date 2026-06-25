// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateExecutorsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The Application Group ID.
   * 
   * @example
   * 1
   */
  appGroupId?: number;
  /**
   * @remarks
   * The Application type.
   * 
   * @example
   * 1
   */
  appType?: number;
  /**
   * @remarks
   * The Kubernetes services that failed to import.
   * 
   * @example
   * [{"cluster":"xxxxx","namespace":"xxxxx","service":"xxxxx"}]
   */
  failedService?: string;
  /**
   * @remarks
   * The Worker ID.
   * 
   * @example
   * 1
   */
  workId?: number;
  /**
   * @remarks
   * The Worker type.
   * 
   * @example
   * k8s_service
   */
  workerType?: string;
  /**
   * @remarks
   * A JSON-formatted string that contains a list of Workers.
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
      workId: 'WorkId',
      workerType: 'WorkerType',
      workers: 'Workers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appGroupId: 'number',
      appType: 'number',
      failedService: 'string',
      workId: 'number',
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

export class UpdateExecutorsResponseBody extends $dara.Model {
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
   * - The returned data.
   */
  data?: UpdateExecutorsResponseBodyData;
  /**
   * @remarks
   * The returned error message.
   * 
   * @example
   * Parameter error: content is null.
   */
  message?: string;
  /**
   * @remarks
   * The Request ID.
   * 
   * @example
   * 3835AA29-2298-5434-BC53-9CC377CDFD2C
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the API call was successful.
   * 
   * - **true**: The call was successful.
   * 
   * - **false**: The call failed.
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
      data: UpdateExecutorsResponseBodyData,
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

