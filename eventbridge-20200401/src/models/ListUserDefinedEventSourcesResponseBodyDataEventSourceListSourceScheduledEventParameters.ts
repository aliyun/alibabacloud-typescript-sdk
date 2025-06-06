// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserDefinedEventSourcesResponseBodyDataEventSourceListSourceScheduledEventParameters extends $dara.Model {
  /**
   * @remarks
   * The cron expression.
   * 
   * @example
   * 0 1 * * * *
   */
  schedule?: string;
  /**
   * @remarks
   * The time zone in which the cron expression is executed.
   * 
   * @example
   * GMT+0:00
   */
  timeZone?: string;
  /**
   * @remarks
   * The JSON string.
   * 
   * @example
   * {"a": "b"}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      schedule: 'Schedule',
      timeZone: 'TimeZone',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      schedule: 'string',
      timeZone: 'string',
      userData: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

