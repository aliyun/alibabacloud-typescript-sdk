// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMaintenanceWindowRequest extends $dara.Model {
  /**
   * @example
   * 02:00
   */
  endTime?: string;
  /**
   * @example
   * 00:00
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

