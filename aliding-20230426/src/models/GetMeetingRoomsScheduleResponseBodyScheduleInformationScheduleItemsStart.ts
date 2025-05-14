// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMeetingRoomsScheduleResponseBodyScheduleInformationScheduleItemsStart extends $dara.Model {
  /**
   * @example
   * 2020-01-02T10:15:30+08:00
   */
  dateTime?: string;
  /**
   * @example
   * Asia/Shanghai
   */
  timeZone?: string;
  static names(): { [key: string]: string } {
    return {
      dateTime: 'DateTime',
      timeZone: 'TimeZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dateTime: 'string',
      timeZone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

