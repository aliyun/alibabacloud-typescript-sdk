// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Context } from "./Context";
import { RunAfter } from "./RunAfter";


export class TaskExec extends $dara.Model {
  context?: Context;
  /**
   * @example
   * task-1
   */
  name?: string;
  runAfters?: RunAfter[];
  /**
   * @example
   * serverless-runner
   */
  taskTemplate?: string;
  static names(): { [key: string]: string } {
    return {
      context: 'context',
      name: 'name',
      runAfters: 'runAfters',
      taskTemplate: 'taskTemplate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      context: Context,
      name: 'string',
      runAfters: { 'type': 'array', 'itemType': RunAfter },
      taskTemplate: 'string',
    };
  }

  validate() {
    if(this.context && typeof (this.context as any).validate === 'function') {
      (this.context as any).validate();
    }
    if(Array.isArray(this.runAfters)) {
      $dara.Model.validateArray(this.runAfters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

