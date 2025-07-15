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

export class GetHistoricalCampaignReportResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  data?: GetHistoricalCampaignReportResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  message?: string;
  /**
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

