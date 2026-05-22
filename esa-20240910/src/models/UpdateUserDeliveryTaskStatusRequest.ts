// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateUserDeliveryTaskStatusRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  method?: string;
  /**
   * @remarks
   * This parameter is required.
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

