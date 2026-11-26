// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHttpEventConfigResponseBodyDataEventConfig extends $dara.Model {
  /**
   * @example
   * true
   */
  complaintHandledEvent?: boolean;
  /**
   * @example
   * true
   */
  fileReviewedEvent?: boolean;
  /**
   * @example
   * true
   */
  syncTaskCompleteEvent?: boolean;
  /**
   * @example
   * true
   */
  taskCompleteEvent?: boolean;
  static names(): { [key: string]: string } {
    return {
      complaintHandledEvent: 'ComplaintHandledEvent',
      fileReviewedEvent: 'FileReviewedEvent',
      syncTaskCompleteEvent: 'SyncTaskCompleteEvent',
      taskCompleteEvent: 'TaskCompleteEvent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complaintHandledEvent: 'boolean',
      fileReviewedEvent: 'boolean',
      syncTaskCompleteEvent: 'boolean',
      taskCompleteEvent: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHttpEventConfigResponseBodyData extends $dara.Model {
  /**
   * @example
   * http://123213.com
   */
  callbackUrl?: string;
  /**
   * @example
   * "eventConfig": { "taskCompleteEvent":true}
   */
  eventConfig?: GetHttpEventConfigResponseBodyDataEventConfig;
  /**
   * @example
   * GET
   */
  httpMethod?: string;
  /**
   * @example
   * true
   */
  switchFlag?: boolean;
  static names(): { [key: string]: string } {
    return {
      callbackUrl: 'CallbackUrl',
      eventConfig: 'EventConfig',
      httpMethod: 'HttpMethod',
      switchFlag: 'SwitchFlag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callbackUrl: 'string',
      eventConfig: GetHttpEventConfigResponseBodyDataEventConfig,
      httpMethod: 'string',
      switchFlag: 'boolean',
    };
  }

  validate() {
    if(this.eventConfig && typeof (this.eventConfig as any).validate === 'function') {
      (this.eventConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHttpEventConfigResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: GetHttpEventConfigResponseBodyData;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 9987D326-83D9-4A42-B9A5-0B27F9B40539
   */
  requestId?: string;
  /**
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
      code: 'string',
      data: GetHttpEventConfigResponseBodyData,
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

