// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCreateLogoTaskResponseBodyTask extends $dara.Model {
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * 604860995
   */
  taskId?: string;
  /**
   * @remarks
   * The current status of the job:
   * 
   * - pending: Pending execution  
   * - configuring: Configuring  
   * - success: Succeeded  
   * - failed: Failed  
   * - partialFailed: Partially failed
   * 
   * @example
   * SUCCESS
   */
  taskStatus?: string;
  /**
   * @remarks
   * The URLs of the prefetched resources.
   */
  urls?: string[];
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      taskStatus: 'TaskStatus',
      urls: 'Urls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      taskStatus: 'string',
      urls: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.urls)) {
      $dara.Model.validateArray(this.urls);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCreateLogoTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code. The ErrorCode field is not returned if the request succeeds. If the request fails, the ErrorCode field is returned. For more information, see the error code list in this topic.
   * 
   * @example
   * 0
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * aliuid:1998006665794443 assumeRole not exist,serviceName:realtimelogpush.dcdnservices.aliyuncs.com
   */
  errorMsg?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 6C6B99AC-39EC-5350-874C-204128C905E6
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request succeeded.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * Job information
   */
  task?: GetCreateLogoTaskResponseBodyTask;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      success: 'Success',
      task: 'Task',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMsg: 'string',
      requestId: 'string',
      success: 'boolean',
      task: GetCreateLogoTaskResponseBodyTask,
    };
  }

  validate() {
    if(this.task && typeof (this.task as any).validate === 'function') {
      (this.task as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

