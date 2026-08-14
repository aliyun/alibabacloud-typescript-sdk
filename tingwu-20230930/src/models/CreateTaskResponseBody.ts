// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTaskResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The stream ingestion URL. Push audio streams to this URL for real-time transcription.
   * 
   * @example
   * wss://tingwu-realtime-cn-beijing.aliyuncs.com/api/ws/v1?mc=****
   */
  meetingJoinUrl?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * c5394c6ee0fb474899d42215a3925c7e
   */
  taskId?: string;
  /**
   * @remarks
   * The custom identifier specified during task creation.
   * 
   * @example
   * task_tingwu_123
   */
  taskKey?: string;
  /**
   * @remarks
   * The task status.
   * 
   * @example
   * ONGOING
   */
  taskStatus?: string;
  static names(): { [key: string]: string } {
    return {
      meetingJoinUrl: 'MeetingJoinUrl',
      taskId: 'TaskId',
      taskKey: 'TaskKey',
      taskStatus: 'TaskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      meetingJoinUrl: 'string',
      taskId: 'string',
      taskKey: 'string',
      taskStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * 0
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: CreateTaskResponseBodyData;
  /**
   * @remarks
   * The status message.
   * 
   * @example
   * Success.
   */
  message?: string;
  /**
   * @remarks
   * The request ID, used for troubleshooting only.
   * 
   * @example
   * 35124E1C-AE99-5D6C-A52E-BD689D8D****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateTaskResponseBodyData,
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

