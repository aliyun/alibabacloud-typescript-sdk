// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceTrendingReportResponseBodyDataInbound extends $dara.Model {
  /**
   * @example
   * 0
   */
  callsAbandonedInIVR?: number;
  /**
   * @example
   * 0
   */
  callsAbandonedInQueue?: number;
  /**
   * @example
   * 0
   */
  callsAbandonedInRing?: number;
  /**
   * @example
   * 0
   */
  callsHandled?: number;
  /**
   * @example
   * 0
   */
  callsQueued?: number;
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
      callsAbandonedInIVR: 'CallsAbandonedInIVR',
      callsAbandonedInQueue: 'CallsAbandonedInQueue',
      callsAbandonedInRing: 'CallsAbandonedInRing',
      callsHandled: 'CallsHandled',
      callsQueued: 'CallsQueued',
      statsTime: 'StatsTime',
      totalCalls: 'TotalCalls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callsAbandonedInIVR: 'number',
      callsAbandonedInQueue: 'number',
      callsAbandonedInRing: 'number',
      callsHandled: 'number',
      callsQueued: 'number',
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

