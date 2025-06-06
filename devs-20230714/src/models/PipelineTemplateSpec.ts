// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Context } from "./Context";
import { TaskExec } from "./TaskExec";


export class PipelineTemplateSpec extends $dara.Model {
  context?: Context;
  tasks?: TaskExec[];
  static names(): { [key: string]: string } {
    return {
      context: 'context',
      tasks: 'tasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      context: Context,
      tasks: { 'type': 'array', 'itemType': TaskExec },
    };
  }

  validate() {
    if(this.context && typeof (this.context as any).validate === 'function') {
      (this.context as any).validate();
    }
    if(Array.isArray(this.tasks)) {
      $dara.Model.validateArray(this.tasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

