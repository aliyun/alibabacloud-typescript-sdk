// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateStorageAnalysisTaskResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the task is created. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  createTaskSuccess?: boolean;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * unknown error
   */
  errorMessage?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 910f83f4b96df0524ddc5749f61539f8
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      createTaskSuccess: 'CreateTaskSuccess',
      errorMessage: 'ErrorMessage',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTaskSuccess: 'boolean',
      errorMessage: 'string',
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

