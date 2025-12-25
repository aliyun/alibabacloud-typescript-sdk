// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCalendarRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * workday
   */
  calendarName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxljob-b6ec1xxxx
   */
  clusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2024
   */
  year?: number;
  static names(): { [key: string]: string } {
    return {
      calendarName: 'CalendarName',
      clusterId: 'ClusterId',
      year: 'Year',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calendarName: 'string',
      clusterId: 'string',
      year: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

