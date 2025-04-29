// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightSearchListResponseBodyModuleFlightListFlightRuleListSignRuleInfo extends $dara.Model {
  content?: string;
  /**
   * @example
   * 100
   */
  cost?: number;
  /**
   * @example
   * 10
   */
  costPercent?: number;
  /**
   * @example
   * 1675036500000
   */
  timeStamp?: number;
  /**
   * @example
   * demo
   */
  timeType?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      cost: 'cost',
      costPercent: 'cost_percent',
      timeStamp: 'time_stamp',
      timeType: 'time_type',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      cost: 'number',
      costPercent: 'number',
      timeStamp: 'number',
      timeType: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

