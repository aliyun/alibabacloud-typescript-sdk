// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetLiveStreamPreloadTasksResponseBodyPreloadTasksMessagesPreloadTasksMessage extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the prefetch task is successful. Valid values:
   * 
   * *   Successfully
   * *   InternalError
   * 
   * @example
   * Successfully
   */
  description?: string;
  /**
   * @remarks
   * The streaming URL.
   */
  playUrl?: string;
  /**
   * @remarks
   * The ID of the prefetch task.
   * 
   * @example
   * yourTaskId
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      playUrl: 'PlayUrl',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      playUrl: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetLiveStreamPreloadTasksResponseBodyPreloadTasksMessages extends $dara.Model {
  preloadTasksMessage?: SetLiveStreamPreloadTasksResponseBodyPreloadTasksMessagesPreloadTasksMessage[];
  static names(): { [key: string]: string } {
    return {
      preloadTasksMessage: 'PreloadTasksMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      preloadTasksMessage: { 'type': 'array', 'itemType': SetLiveStreamPreloadTasksResponseBodyPreloadTasksMessagesPreloadTasksMessage },
    };
  }

  validate() {
    if(Array.isArray(this.preloadTasksMessage)) {
      $dara.Model.validateArray(this.preloadTasksMessage);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetLiveStreamPreloadTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of URLs for which the prefetch task configuration failed.
   * 
   * @example
   * 0
   */
  failedURL?: number;
  /**
   * @remarks
   * The details of the prefetch task.
   */
  preloadTasksMessages?: SetLiveStreamPreloadTasksResponseBodyPreloadTasksMessages;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 36E0E523-E0C6-5D95-A465-A8EA2DCBA2A5
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the prefetch task. Valid values:
   * 
   * *   Success
   * *   Failed
   * 
   * >  Success is returned only if the prefetch task is configured for all specified streaming URLs.
   * 
   * @example
   * Success
   */
  status?: string;
  /**
   * @remarks
   * The number of URLs for which the prefetch task is successfully configured.
   * 
   * @example
   * 1
   */
  successURL?: number;
  /**
   * @remarks
   * The total number of URLs.
   * 
   * @example
   * 1
   */
  totalURL?: number;
  static names(): { [key: string]: string } {
    return {
      failedURL: 'FailedURL',
      preloadTasksMessages: 'PreloadTasksMessages',
      requestId: 'RequestId',
      status: 'Status',
      successURL: 'SuccessURL',
      totalURL: 'TotalURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedURL: 'number',
      preloadTasksMessages: SetLiveStreamPreloadTasksResponseBodyPreloadTasksMessages,
      requestId: 'string',
      status: 'string',
      successURL: 'number',
      totalURL: 'number',
    };
  }

  validate() {
    if(this.preloadTasksMessages && typeof (this.preloadTasksMessages as any).validate === 'function') {
      (this.preloadTasksMessages as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

