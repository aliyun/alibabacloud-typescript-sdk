// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitHotExpandPreCheckTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result of the task.
   * 
   * @example
   * scucess
   */
  msg?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * FE104D26-AC19-49B5-AC67-947F69*****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * 11111
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      msg: 'string',
      requestId: 'string',
      success: 'boolean',
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

