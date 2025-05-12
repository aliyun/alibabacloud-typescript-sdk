// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InstallAgentForClusterResponseBodyData extends $dara.Model {
  /**
   * @example
   * 049ea0609515414b9e19c3389d7ba638
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'task_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

