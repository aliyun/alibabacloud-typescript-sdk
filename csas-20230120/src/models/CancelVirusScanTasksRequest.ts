// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelVirusScanTasksRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the virus scan tasks to cancel. Specify at least one ID. Duplicate IDs are not allowed.
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

