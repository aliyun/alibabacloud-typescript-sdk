// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFreeUserEventCountResponseBodyEvent extends $dara.Model {
  /**
   * @remarks
   * The number of high-risk events.
   * 
   * @example
   * 1
   */
  eventHigh?: number;
  /**
   * @remarks
   * The number of low-risk events.
   * 
   * @example
   * 12
   */
  eventLow?: number;
  /**
   * @remarks
   * The number of medium-risk events.
   * 
   * @example
   * 3
   */
  eventMedium?: number;
  /**
   * @remarks
   * The total number of security events.
   * 
   * @example
   * 16
   */
  eventTotal?: number;
  static names(): { [key: string]: string } {
    return {
      eventHigh: 'EventHigh',
      eventLow: 'EventLow',
      eventMedium: 'EventMedium',
      eventTotal: 'EventTotal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventHigh: 'number',
      eventLow: 'number',
      eventMedium: 'number',
      eventTotal: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

