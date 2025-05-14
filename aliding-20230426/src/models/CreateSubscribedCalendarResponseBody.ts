// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSubscribedCalendarResponseBody extends $dara.Model {
  /**
   * @example
   * M5MjkxNDUxQHVzZXJzLmRpbmd0YWxrLmxxxxxxx
   */
  calendarId?: string;
  /**
   * @remarks
   * requestId
   * 
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      calendarId: 'calendarId',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calendarId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

