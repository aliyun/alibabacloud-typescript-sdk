// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FindGuestTicketRecordRequest extends $dara.Model {
  /**
   * @example
   * 34434
   */
  activityId?: string;
  /**
   * @example
   * 2023-09-04 15:14:00
   */
  dateTimeString?: string;
  endDateTime?: string;
  startDateTime?: string;
  static names(): { [key: string]: string } {
    return {
      activityId: 'ActivityId',
      dateTimeString: 'DateTimeString',
      endDateTime: 'EndDateTime',
      startDateTime: 'StartDateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityId: 'string',
      dateTimeString: 'string',
      endDateTime: 'string',
      startDateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

