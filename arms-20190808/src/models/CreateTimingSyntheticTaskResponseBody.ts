// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTimingSyntheticTaskResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The task status. Valid values:
   * 
   * - INIT: The task is in the initial state.
   * - RELEASE: The task is being parsed.
   * - RUNNING: The task is running.
   * - STOP: The task is suspended.
   * - SYSTEM_STOP: The task is suspended by the system.
   * - CANCEL: The task is canceled.
   * - SYSTEM_CANCEL: The task is canceled by the system.
   * - DONE: The task is complete.
   * 
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @remarks
   * The ID of the synthetic monitoring task.
   * 
   * @example
   * 5308a2691f59422c8c3b7aeccec9cd3b
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
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

export class CreateTimingSyntheticTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code returned. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The struct returned.
   */
  data?: CreateTimingSyntheticTaskResponseBodyData;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 53B5874D-EBC1-5567-B787-E4B7267F5CEB
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
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: CreateTimingSyntheticTaskResponseBodyData,
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

