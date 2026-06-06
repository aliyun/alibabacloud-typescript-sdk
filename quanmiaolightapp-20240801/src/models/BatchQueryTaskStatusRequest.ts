// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchQueryTaskStatusRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * EssayCorrectionTask
   */
  taskCode?: string;
  /**
   * @example
   * ["xxxx1","xxxx2"]
   */
  taskIds?: string[];
  static names(): { [key: string]: string } {
    return {
      taskCode: 'taskCode',
      taskIds: 'taskIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskCode: 'string',
      taskIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.taskIds)) {
      $dara.Model.validateArray(this.taskIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

