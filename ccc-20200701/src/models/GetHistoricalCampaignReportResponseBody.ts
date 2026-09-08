// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHistoricalCampaignReportResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Abandon rate, calculated as: number of abandoned calls divided by total calls.
   * 
   * @example
   * 0.10
   */
  abandonRate?: number;
  /**
   * @remarks
   * Deprecated. Refer to AbandonRate instead.
   * 
   * @example
   * 0.10
   */
  abandonedRate?: number;
  /**
   * @remarks
   * Answer rate, in %.
   * 
   * @example
   * 0.50
   */
  answerRate?: number;
  /**
   * @remarks
   * Number of abandoned calls.
   * 
   * @example
   * 5
   */
  callsAbandoned?: number;
  /**
   * @remarks
   * Number of connected calls.
   * 
   * @example
   * 50
   */
  callsConnected?: number;
  /**
   * @remarks
   * Number of calls dialed, including retries.
   * 
   * @example
   * 100
   */
  callsDialed?: number;
  /**
   * @remarks
   * Deprecated. Refer to AnswerRate instead.
   * 
   * @example
   * 0.50
   */
  connectedRate?: number;
  /**
   * @remarks
   * Agent occupancy rate, calculated as: (total talk duration + total post-processing duration) divided by total agent online duration. Total agent online duration refers to the sum of online durations of all agents in the skill group associated with this activity.
   * 
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

export class GetHistoricalCampaignReportResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * Data.
   */
  data?: GetHistoricalCampaignReportResponseBodyData;
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Response message.
   * 
   * @example
   * 无
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * E3A847C1-9800-57DF-9172-2CDDC026388D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetHistoricalCampaignReportResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

