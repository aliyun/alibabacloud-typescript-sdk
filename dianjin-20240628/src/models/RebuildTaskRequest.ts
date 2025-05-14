// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RebuildTaskRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  taskIds?: string[];
  static names(): { [key: string]: string } {
    return {
      taskIds: 'taskIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

