// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOnlineEvalTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The internal error code. This parameter is returned only when an error occurs.
   * 
   * @example
   * InvalidInputParams
   */
  code?: string;
  /**
   * @remarks
   * The error message. This parameter is returned only when an error occurs.
   * 
   * @example
   * EvaluationConfig.Answer.SpanName is required.
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 6A87228C-969A-1381-98CF-AE07AE630FA5
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the created trace evaluation task.
   * 
   * @example
   * 711ef9112343286810abbfce04e161ee
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
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

