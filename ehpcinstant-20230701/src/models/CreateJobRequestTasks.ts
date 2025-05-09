// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateJobRequestTasksExecutorPolicy } from "./CreateJobRequestTasksExecutorPolicy";
import { CreateJobRequestTasksTaskSpec } from "./CreateJobRequestTasksTaskSpec";


export class CreateJobRequestTasks extends $dara.Model {
  executorPolicy?: CreateJobRequestTasksExecutorPolicy;
  /**
   * @example
   * task0
   */
  taskName?: string;
  taskSpec?: CreateJobRequestTasksTaskSpec;
  /**
   * @example
   * true
   */
  taskSustainable?: boolean;
  static names(): { [key: string]: string } {
    return {
      executorPolicy: 'ExecutorPolicy',
      taskName: 'TaskName',
      taskSpec: 'TaskSpec',
      taskSustainable: 'TaskSustainable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executorPolicy: CreateJobRequestTasksExecutorPolicy,
      taskName: 'string',
      taskSpec: CreateJobRequestTasksTaskSpec,
      taskSustainable: 'boolean',
    };
  }

  validate() {
    if(this.executorPolicy && typeof (this.executorPolicy as any).validate === 'function') {
      (this.executorPolicy as any).validate();
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

