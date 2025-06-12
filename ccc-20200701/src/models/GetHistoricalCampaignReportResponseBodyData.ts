// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHistoricalCampaignReportResponseBodyData extends $dara.Model {
  abandonRate?: number;
  /**
   * @example
   * 0.10
   */
  abandonedRate?: number;
  answerRate?: number;
  /**
   * @example
   * 5
   */
  callsAbandoned?: number;
  /**
   * @example
   * 50
   */
  callsConnected?: number;
  /**
   * @example
   * 100
   */
  callsDialed?: number;
  /**
   * @example
   * 0.50
   */
  connectedRate?: number;
  /**
   * @example
   * 0.50
   */
  occupancyRate?: number;
  static names(): { [key: string]: string } {
    return {
      abandonRate: 'AbandonRate',
      abandonedRate: 'AbandonedRate',
      answerRate: 'AnswerRate',
      callsAbandoned: 'CallsAbandoned',
      callsConnected: 'CallsConnected',
      callsDialed: 'CallsDialed',
      connectedRate: 'ConnectedRate',
      occupancyRate: 'OccupancyRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abandonRate: 'number',
      abandonedRate: 'number',
      answerRate: 'number',
      callsAbandoned: 'number',
      callsConnected: 'number',
      callsDialed: 'number',
      connectedRate: 'number',
      occupancyRate: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

