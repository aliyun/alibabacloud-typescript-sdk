// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceTrendingReportResponseBodyDataOutbound extends $dara.Model {
  /**
   * @example
   * 0
   */
  callsAnswered?: number;
  /**
   * @example
   * 1604639129000
   */
  statsTime?: number;
  /**
   * @example
   * 0
   */
  totalCalls?: number;
  static names(): { [key: string]: string } {
    return {
      callsAnswered: 'CallsAnswered',
      statsTime: 'StatsTime',
      totalCalls: 'TotalCalls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callsAnswered: 'number',
      statsTime: 'number',
      totalCalls: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

