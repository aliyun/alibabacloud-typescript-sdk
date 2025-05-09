// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DataQualityEvaluationTaskInstanceTask } from "./DataQualityEvaluationTaskInstanceTask";


export class DataQualityEvaluationTaskInstance extends $dara.Model {
  /**
   * @example
   * 1710239005403
   */
  createTime?: number;
  /**
   * @example
   * 1710239005403
   */
  finishTime?: number;
  /**
   * @example
   * 10001
   */
  id?: number;
  /**
   * @example
   * Passed
   */
  status?: string;
  task?: DataQualityEvaluationTaskInstanceTask;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      finishTime: 'FinishTime',
      id: 'Id',
      status: 'Status',
      task: 'Task',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      finishTime: 'number',
      id: 'number',
      status: 'string',
      task: DataQualityEvaluationTaskInstanceTask,
    };
  }

  validate() {
    if(this.task && typeof (this.task as any).validate === 'function') {
      (this.task as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

