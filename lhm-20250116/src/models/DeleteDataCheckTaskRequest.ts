// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDataCheckTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The list of task IDs. Batch deletion is supported.
   * 
   * This parameter is required.
   */
  taskIds?: number[];
  static names(): { [key: string]: string } {
    return {
      taskIds: 'taskIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskIds: { 'type': 'array', 'itemType': 'number' },
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

