// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMultiModalTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The evaluation message. It is the description returned by the backend upon success, or the customer-visible error message upon failure.
   * 
   * @example
   * The image is complete and the inspection is passed
   */
  msg?: string;
  /**
   * @remarks
   * The score, ranging from 0 to 1. It is null when the evaluation fails. If the backend returns a percentage score greater than 1, it is converted to score/100 and rounded to a maximum of 4 decimal places.
   * 
   * @example
   * 1
   */
  score?: number;
  /**
   * @remarks
   * The task ID, in the format of eval-task-<32hex>. It can be used for tracing in the console or query API. It is null if the failure occurs before the task is created.
   * 
   * @example
   * eval-task-0123456789abcdef0123456789abcdef
   */
  taskId?: string;
  /**
   * @remarks
   * The task name used for this call. It is also returned upon failure if the request body has been parsed.
   * 
   * @example
   * agentloop-media-process
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      msg: 'msg',
      score: 'score',
      taskId: 'taskId',
      taskName: 'taskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      msg: 'string',
      score: 'number',
      taskId: 'string',
      taskName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

