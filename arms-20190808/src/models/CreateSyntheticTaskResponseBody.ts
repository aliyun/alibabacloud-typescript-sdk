// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSyntheticTaskResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the synthetic monitoring task.
   * 
   * @example
   * 1234
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSyntheticTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code returned.
   * 
   * *   1001: The request was successful.
   * *   1002: The request failed.
   * *   1003: Parameter errors occurred.
   * *   1004: Authentication failed.
   * *   1006: The task does not exist.
   * *   1099: Internal errors occurred.
   * 
   * @example
   * 1001
   */
  code?: string;
  /**
   * @remarks
   * The information about the synthetic monitoring task.
   */
  data?: CreateSyntheticTaskResponseBodyData;
  /**
   * @remarks
   * The message that is returned when the task failed to be created.
   * 
   * @example
   * null
   */
  msg?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A5EC8221-08F2-4C95-9AF1-49FD998C****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateSyntheticTaskResponseBodyData,
      msg: 'string',
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

