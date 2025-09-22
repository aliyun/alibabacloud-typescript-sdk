// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FindGuestCredentialsRecordRequest extends $dara.Model {
  /**
   * @example
   * 34429
   */
  activityId?: string;
  /**
   * @example
   * 2023-08-07 12:00:00
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

