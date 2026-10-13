// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMmsAsyncTaskResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The creation time. The time is in the YYYY-MM-DD HH:mm:ss format.
   * 
   * @example
   * 2024-12-17 15:44:00
   */
  createTime?: string;
  /**
   * @remarks
   * The end time of the execution. The time is in the YYYY-MM-DD HH:mm:ss format.
   * 
   * @example
   * 2024-12-17 17:44:17
   */
  endTime?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * null
   */
  errorMsg?: string;
  /**
   * @remarks
   * The ID of the asynchronous task.
   * 
   * @example
   * 2523
   */
  id?: number;
  /**
   * @remarks
   * The ID of the object associated with the asynchronous task.
   * 
   * @example
   * 232
   */
  objectId?: number;
  /**
   * @remarks
   * The execution progress.
   * 
   * @example
   * 0
   */
  progress?: number;
  /**
   * @remarks
   * The execution result.
   * 
   * @example
   * null
   */
  result?: string;
  /**
   * @remarks
   * Indicates whether the task is running.
   * 
   * @example
   * false
   */
  running?: boolean;
  /**
   * @remarks
   * The ID of the data source.
   * 
   * @example
   * 2000017
   */
  sourceId?: number;
  /**
   * @remarks
   * The start time of the execution. The time is in the YYYY-MM-DD HH:mm:ss format.
   * 
   * @example
   * 2024-12-17 15:44:17
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the asynchronous task.
   * 
   * @example
   * DONE
   */
  status?: string;
  /**
   * @remarks
   * The type of the asynchronous task.
   * 
   * @example
   * TASK_CREATE
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      endTime: 'endTime',
      errorMsg: 'errorMsg',
      id: 'id',
      objectId: 'objectId',
      progress: 'progress',
      result: 'result',
      running: 'running',
      sourceId: 'sourceId',
      startTime: 'startTime',
      status: 'status',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      endTime: 'string',
      errorMsg: 'string',
      id: 'number',
      objectId: 'number',
      progress: 'number',
      result: 'string',
      running: 'boolean',
      sourceId: 'number',
      startTime: 'string',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMmsAsyncTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The asynchronous task object.
   */
  data?: GetMmsAsyncTaskResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 688003E1-D1B4-5468-957E-2FFB3AC8D79B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetMmsAsyncTaskResponseBodyData,
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

