// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EditTaskResponseBodyModel extends $dara.Model {
  /**
   * @remarks
   * 任务ID
   * 
   * @example
   * 92
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

