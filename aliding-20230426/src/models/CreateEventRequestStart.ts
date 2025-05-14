// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEventRequestStart extends $dara.Model {
  /**
   * @example
   * "2021-09-20"
   */
  date?: string;
  /**
   * @example
   * "2021-09-20T10:15:30+08:00"
   */
  dateTime?: string;
  /**
   * @example
   * "Asia/Shanghai"
   */
  timeZone?: string;
  static names(): { [key: string]: string } {
    return {
      date: 'date',
      dateTime: 'dateTime',
      timeZone: 'timeZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
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

