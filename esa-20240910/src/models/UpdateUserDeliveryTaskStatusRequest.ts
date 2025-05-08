// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateUserDeliveryTaskStatusRequest extends $dara.Model {
  /**
   * @remarks
   * Enables or disables the delivery task. Valid values: online and offline.
   * 
   * This parameter is required.
   * 
   * @example
   * online
   */
  method?: string;
  /**
   * @remarks
   * The name of the delivery task.
   * 
   * This parameter is required.
   * 
   * @example
   * test_project
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      method: 'Method',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      method: 'string',
      taskName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

