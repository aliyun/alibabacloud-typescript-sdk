// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserDeliveryTaskRequest extends $dara.Model {
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
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

