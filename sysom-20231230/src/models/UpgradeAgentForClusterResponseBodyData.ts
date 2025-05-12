// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeAgentForClusterResponseBodyData extends $dara.Model {
  /**
   * @example
   * 7523e9e0ddc74d99a5236f4f4d5056e6
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

