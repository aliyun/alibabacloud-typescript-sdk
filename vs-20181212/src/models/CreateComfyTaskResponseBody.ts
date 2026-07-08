// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateComfyTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. A value of 0 indicates a successful request. For a list of other values, see Error Codes.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The returned message. It provides more details about the request status.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the asynchronous task. You can use this ID to query the task status on the Task Query tab in the Intelligent Media Management console.
   * 
   * @example
   * 6c8234f4-d1e1-4cea-b08b-7926fbdea144
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
      code: 'number',
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

