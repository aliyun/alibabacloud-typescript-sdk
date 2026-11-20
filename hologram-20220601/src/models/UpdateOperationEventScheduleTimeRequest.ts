// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateOperationEventScheduleTimeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the event.
   * 
   * This parameter is required.
   * 
   * @example
   * 2034449120420339713
   */
  id?: string;
  /**
   * @remarks
   * The scheduled execution time. The format is YYYY-MM-DD HH:mm:ss, and the time zone is UTC+8.
   * 
   * This parameter is required.
   * 
   * @example
   * 2024-08-23 14:55:00
   */
  scheduleTime?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      scheduleTime: 'scheduleTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      scheduleTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

