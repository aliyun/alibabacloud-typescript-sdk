// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMaintenanceWindowRequest extends $dara.Model {
  /**
   * @remarks
   * The end time in the HH:mm format (24-hour clock).
   * 
   * @example
   * 02:00
   */
  endTime?: string;
  /**
   * @remarks
   * The start time in the HH:mm format (24-hour clock).
   * 
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

