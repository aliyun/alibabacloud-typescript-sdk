// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateFileProtectEventStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the events.
   */
  id?: number[];
  /**
   * @remarks
   * The handling status of the event. Valid values:
   * 
   * *   **0**: unhandled
   * *   **1**: handled
   * *   **2**: added to the whitelist
   * 
   * @example
   * 0
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: { 'type': 'array', 'itemType': 'number' },
      status: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.id)) {
      $dara.Model.validateArray(this.id);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

