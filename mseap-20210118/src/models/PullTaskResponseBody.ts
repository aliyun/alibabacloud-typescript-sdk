// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PullTaskResponseBodyModule extends $dara.Model {
  bizCode?: string;
  /**
   * @example
   * 1649470201045
   */
  orderId?: string;
  /**
   * @example
   * 1
   */
  outTaskId?: string;
  principalKey?: string;
  /**
   * @example
   * {\\"result\\":\\"SUCCESS\\",\\"message\\":\\"null\\",\\"taskId\\":\\"d8800bab-88b6-4c60-9e4f-ed38dbbdd9b3\\"}
   */
  taskData?: string;
  /**
   * @example
   * 704614
   */
  taskId?: string;
  /**
   * @example
   * PATENT_QUERY
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      bizCode: 'BizCode',
      orderId: 'OrderId',
      outTaskId: 'OutTaskId',
      principalKey: 'PrincipalKey',
      taskData: 'TaskData',
      taskId: 'TaskId',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizCode: 'string',
      orderId: 'string',
      outTaskId: 'string',
      principalKey: 'string',
      taskData: 'string',
      taskId: 'string',
      taskType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PullTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * allowRetry
   * 
   * @example
   * False
   */
  allowRetry?: boolean;
  /**
   * @remarks
   * appName
   * 
   * @example
   * voldemort-aliyun-com
   */
  appName?: string;
  /**
   * @remarks
   * dynamicCode
   * 
   * @example
   * 1
   */
  dynamicCode?: string;
  /**
   * @remarks
   * dynamicMessage
   * 
   * @example
   * The specified parameter is invalid.
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * errorCode
   * 
   * @example
   * 200
   */
  errorCode?: string;
  /**
   * @remarks
   * errorMsg
   */
  errorMsg?: string;
  /**
   * @remarks
   * httpStatusCode
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  module?: PullTaskResponseBodyModule;
  /**
   * @remarks
   * requestId
   * 
   * @example
   * 9831C9A6-3423-52C2-B0E5-5AE01D92C097
   */
  requestId?: string;
  /**
   * @remarks
   * success
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      allowRetry: 'AllowRetry',
      appName: 'AppName',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      httpStatusCode: 'HttpStatusCode',
      module: 'Module',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowRetry: 'boolean',
      appName: 'string',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errorCode: 'string',
      errorMsg: 'string',
      httpStatusCode: 'number',
      module: PullTaskResponseBodyModule,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.module && typeof (this.module as any).validate === 'function') {
      (this.module as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

