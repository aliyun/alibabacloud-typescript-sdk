// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FindGuestCredentialsRecordRequest extends $dara.Model {
  activityId?: string;
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

