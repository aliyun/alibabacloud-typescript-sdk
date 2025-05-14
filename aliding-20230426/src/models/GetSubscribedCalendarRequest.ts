// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSubscribedCalendarRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * M5MjkxNDUxQHVzZXJzLmRpbmd0YWxrLmNv
   */
  calendarId?: string;
  static names(): { [key: string]: string } {
    return {
      calendarId: 'CalendarId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calendarId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

