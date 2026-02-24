// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AlertRuleTimeSpan extends $dara.Model {
  /**
   * @remarks
   * Day of the week.
   */
  dayOfWeek?: number[];
  /**
   * @remarks
   * End time, in HH:mm format.
   * 
   * @example
   * 23:00
   */
  endTime?: string;
  /**
   * @remarks
   * Default time zone is Beijing Time: +0800.
   * 
   * @example
   * +0800
   */
  gmtOffset?: string;
  /**
   * @remarks
   * Start time, in HH:mm format.
   * 
   * @example
   * 09:00
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      dayOfWeek: 'dayOfWeek',
      endTime: 'endTime',
      gmtOffset: 'gmtOffset',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dayOfWeek: { 'type': 'array', 'itemType': 'number' },
      endTime: 'string',
      gmtOffset: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dayOfWeek)) {
      $dara.Model.validateArray(this.dayOfWeek);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

