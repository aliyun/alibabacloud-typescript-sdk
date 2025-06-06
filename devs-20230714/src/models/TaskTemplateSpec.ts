// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Context } from "./Context";
import { Condition } from "./Condition";
import { TaskWorker } from "./TaskWorker";


export class TaskTemplateSpec extends $dara.Model {
  context?: Context;
  /**
   * @example
   * build&deploy.
   */
  description?: string;
  executeCondition?: Condition;
  worker?: TaskWorker;
  static names(): { [key: string]: string } {
    return {
      context: 'context',
      description: 'description',
      executeCondition: 'executeCondition',
      worker: 'worker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      context: Context,
      description: 'string',
      executeCondition: Condition,
      worker: TaskWorker,
    };
  }

  validate() {
    if(this.context && typeof (this.context as any).validate === 'function') {
      (this.context as any).validate();
    }
    if(this.executeCondition && typeof (this.executeCondition as any).validate === 'function') {
      (this.executeCondition as any).validate();
    }
    if(this.worker && typeof (this.worker as any).validate === 'function') {
      (this.worker as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

