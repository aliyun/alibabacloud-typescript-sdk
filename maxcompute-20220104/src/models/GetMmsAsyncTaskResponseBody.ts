// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMmsAsyncTaskResponseBodyData extends $dara.Model {
  /**
   * @example
   * 2024-12-17 15:44:00
   */
  createTime?: string;
  /**
   * @example
   * 2024-12-17 17:44:17
   */
  endTime?: string;
  /**
   * @example
   * null
   */
  errorMsg?: string;
  /**
   * @example
   * 2523
   */
  id?: number;
  /**
   * @example
   * 232
   */
  objectId?: number;
  /**
   * @example
   * 0
   */
  progress?: number;
  /**
   * @example
   * null
   */
  result?: string;
  /**
   * @example
   * false
   */
  running?: boolean;
  /**
   * @example
   * 2000017
   */
  sourceId?: number;
  /**
   * @example
   * 2024-12-17 15:44:17
   */
  startTime?: string;
  /**
   * @example
   * DONE
   */
  status?: string;
  /**
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
  data?: GetMmsAsyncTaskResponseBodyData;
  /**
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

