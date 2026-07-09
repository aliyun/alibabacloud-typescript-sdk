// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEvaluationTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3FE4CD1E-FF41-56BE-B590-7A021D9C1524
   */
  requestId?: string;
  /**
   * @remarks
   * The evaluation task status. After creation, the status is typically `Pending`. After asynchronous orchestration, the status may change to `Running` or `Scheduling`.
   * 
   * @example
   * Pending
   */
  status?: string;
  /**
   * @remarks
   * The evaluation task ID.
   * 
   * @example
   * eval-task-8b36f2e2b1f94f9c91ce7a4b0f6d9c25
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      status: 'status',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
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

