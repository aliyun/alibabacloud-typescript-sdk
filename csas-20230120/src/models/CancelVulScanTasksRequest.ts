// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelVulScanTasksRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the vulnerability scanning tasks to cancel. The collection must contain at least 1 and at most 100 IDs. Duplicate IDs are not allowed.
   * 
   * This parameter is required.
   */
  taskIds?: string[];
  static names(): { [key: string]: string } {
    return {
      taskIds: 'TaskIds',
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

