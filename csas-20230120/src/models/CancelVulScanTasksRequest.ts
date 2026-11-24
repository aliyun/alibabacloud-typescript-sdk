// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelVulScanTasksRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the vulnerability scanning nodes to cancel. You can specify 1 to 100 unique node IDs.
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

