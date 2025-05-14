// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEventRequestRecurrencePattern extends $dara.Model {
  /**
   * @example
   * 1
   */
  dayOfMonth?: number;
  /**
   * @example
   * "monday"
   */
  daysOfWeek?: string;
  /**
   * @example
   * "last"
   */
  index?: string;
  /**
   * @example
   * 1
   */
  interval?: number;
  /**
   * @example
   * "daily"
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      dayOfMonth: 'dayOfMonth',
      daysOfWeek: 'daysOfWeek',
      index: 'index',
      interval: 'interval',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dayOfMonth: 'number',
      daysOfWeek: 'string',
      index: 'string',
      interval: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

