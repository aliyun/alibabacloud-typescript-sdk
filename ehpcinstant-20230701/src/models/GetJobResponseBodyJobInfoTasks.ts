// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetJobResponseBodyJobInfoTasksExecutorPolicy } from "./GetJobResponseBodyJobInfoTasksExecutorPolicy";
import { GetJobResponseBodyJobInfoTasksExecutorStatus } from "./GetJobResponseBodyJobInfoTasksExecutorStatus";
import { GetJobResponseBodyJobInfoTasksTaskSpec } from "./GetJobResponseBodyJobInfoTasksTaskSpec";


export class GetJobResponseBodyJobInfoTasks extends $dara.Model {
  executorPolicy?: GetJobResponseBodyJobInfoTasksExecutorPolicy;
  executorStatus?: GetJobResponseBodyJobInfoTasksExecutorStatus[];
  /**
   * @example
   * task0
   */
  taskName?: string;
  taskSpec?: GetJobResponseBodyJobInfoTasksTaskSpec;
  /**
   * @example
   * true
   */
  taskSustainable?: boolean;
  static names(): { [key: string]: string } {
    return {
      executorPolicy: 'ExecutorPolicy',
      executorStatus: 'ExecutorStatus',
      taskName: 'TaskName',
      taskSpec: 'TaskSpec',
      taskSustainable: 'TaskSustainable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executorPolicy: GetJobResponseBodyJobInfoTasksExecutorPolicy,
      executorStatus: { 'type': 'array', 'itemType': GetJobResponseBodyJobInfoTasksExecutorStatus },
      taskName: 'string',
      taskSpec: GetJobResponseBodyJobInfoTasksTaskSpec,
      taskSustainable: 'boolean',
    };
  }

  validate() {
    if(this.executorPolicy && typeof (this.executorPolicy as any).validate === 'function') {
      (this.executorPolicy as any).validate();
    }
    if(Array.isArray(this.executorStatus)) {
      $dara.Model.validateArray(this.executorStatus);
    }
    if(this.taskSpec && typeof (this.taskSpec as any).validate === 'function') {
      (this.taskSpec as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

