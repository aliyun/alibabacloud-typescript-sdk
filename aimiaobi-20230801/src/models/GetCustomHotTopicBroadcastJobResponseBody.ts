// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCustomHotTopicBroadcastJobResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * 错误信息
   */
  errorMessage?: string;
  /**
   * @remarks
   * The version number of the hot topic.
   * 
   * @example
   * 热点话题版本号标识
   */
  hotTopicVersion?: string;
  /**
   * @remarks
   * The status of the task.
   * 
   * - PENDING: The task is pending.
   * 
   * - RUNNING: The task is running.
   * 
   * - SUCCESSED: The task is successful.
   * 
   * - SUSPENDED: The task is paused.
   * 
   * - FAILED: The task failed.
   * 
   * - CANCELED: The task is canceled.
   * 
   * @example
   * RUNNING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      hotTopicVersion: 'HotTopicVersion',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      hotTopicVersion: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomHotTopicBroadcastJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * NoData
   */
  code?: string;
  /**
   * @remarks
   * The business data.
   */
  data?: GetCustomHotTopicBroadcastJobResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error details.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The unique ID of the request.
   * 
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values: true and false.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetCustomHotTopicBroadcastJobResponseBodyData,
      httpStatusCode: 'number',
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

