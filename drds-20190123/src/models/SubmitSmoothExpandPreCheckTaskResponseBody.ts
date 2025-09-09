// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitSmoothExpandPreCheckTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the precheck task was submitted.
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
   * DSSDF-SEWE-23ERW
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
   * 2321
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

