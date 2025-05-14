// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetProcessDefinitionResponseBodyTasksActivity } from "./GetProcessDefinitionResponseBodyTasksActivity";


export class GetProcessDefinitionResponseBodyTasks extends $dara.Model {
  /**
   * @example
   * manager123
   */
  actionerId?: string;
  activity?: GetProcessDefinitionResponseBodyTasksActivity;
  /**
   * @example
   * running
   */
  status?: string;
  /**
   * @example
   * 792
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      actionerId: 'ActionerId',
      activity: 'Activity',
      status: 'Status',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionerId: 'string',
      activity: GetProcessDefinitionResponseBodyTasksActivity,
      status: 'string',
      taskId: 'number',
    };
  }

  validate() {
    if(this.activity && typeof (this.activity as any).validate === 'function') {
      (this.activity as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

