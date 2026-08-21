// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAgentTaskRequest extends $dara.Model {
  xDebugId?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 42172120177e4b3abd6fabb3a6b5e2dd
   */
  taskId?: string;
  xSysomInvokeSource?: string;
  static names(): { [key: string]: string } {
    return {
      xDebugId: 'X-Debug-Id',
      taskId: 'task_id',
      xSysomInvokeSource: 'x-sysom-invoke-source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xDebugId: 'string',
      taskId: 'string',
      xSysomInvokeSource: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

