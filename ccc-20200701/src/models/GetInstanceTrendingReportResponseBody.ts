// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceTrendingReportResponseBodyDataInbound extends $dara.Model {
  /**
   * @remarks
   * Number of calls abandoned in the IVR, meaning calls that were abandoned during the IVR flow after entering it.
   * 
   * @example
   * 0
   */
  callsAbandonedInIVR?: number;
  /**
   * @remarks
   * Number of calls abandoned in the queue, meaning calls that were abandoned while waiting in the skill group queue after entering it.
   * 
   * @example
   * 0
   */
  callsAbandonedInQueue?: number;
  /**
   * @remarks
   * Number of calls abandoned during ringing.
   * 
   * @example
   * 0
   */
  callsAbandonedInRing?: number;
  /**
   * @remarks
   * Number of calls answered by agents. If a single call is distributed to multiple agents, it is counted as one call.
   * 
   * @example
   * 0
   */
  callsHandled?: number;
  /**
   * @remarks
   * Number of calls that entered the queue. If a single call enters the queue multiple times, it is counted as one call.
   * 
   * @example
   * 0
   */
  callsQueued?: number;
  /**
   * @remarks
   * The start time of the segment statistics, in UNIX timestamp format, in milliseconds.
   * 
   * @example
   * 1604639129000
   */
  statsTime?: number;
  /**
   * @remarks
   * Total number of incoming calls.
   * 
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

export class GetInstanceTrendingReportResponseBodyDataOutbound extends $dara.Model {
  /**
   * @remarks
   * Number of answered outbound calls.
   * 
   * @example
   * 0
   */
  callsAnswered?: number;
  /**
   * @remarks
   * Start time of the segment, in UNIX timestamp format, in milliseconds.
   * 
   * @example
   * 1604639129000
   */
  statsTime?: number;
  /**
   * @remarks
   * Total number of outbound calls.
   * 
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

export class GetInstanceTrendingReportResponseBodyDataOverall extends $dara.Model {
  /**
   * @remarks
   * Maximum number of agents logged on simultaneously during this time range.
   * 
   * @example
   * 102
   */
  maxLoggedInAgents?: number;
  /**
   * @remarks
   * The start time of the segment statistics, in UNIX timestamp format, in milliseconds.
   * 
   * @example
   * 1604639129000
   */
  statsTime?: number;
  static names(): { [key: string]: string } {
    return {
      maxLoggedInAgents: 'MaxLoggedInAgents',
      statsTime: 'StatsTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxLoggedInAgents: 'number',
      statsTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceTrendingReportResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Inbound metrics.
   */
  inbound?: GetInstanceTrendingReportResponseBodyDataInbound[];
  /**
   * @remarks
   * Outbound metrics.
   */
  outbound?: GetInstanceTrendingReportResponseBodyDataOutbound[];
  /**
   * @remarks
   * Overall metrics.
   */
  overall?: GetInstanceTrendingReportResponseBodyDataOverall[];
  static names(): { [key: string]: string } {
    return {
      inbound: 'Inbound',
      outbound: 'Outbound',
      overall: 'Overall',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inbound: { 'type': 'array', 'itemType': GetInstanceTrendingReportResponseBodyDataInbound },
      outbound: { 'type': 'array', 'itemType': GetInstanceTrendingReportResponseBodyDataOutbound },
      overall: { 'type': 'array', 'itemType': GetInstanceTrendingReportResponseBodyDataOverall },
    };
  }

  validate() {
    if(Array.isArray(this.inbound)) {
      $dara.Model.validateArray(this.inbound);
    }
    if(Array.isArray(this.outbound)) {
      $dara.Model.validateArray(this.outbound);
    }
    if(Array.isArray(this.overall)) {
      $dara.Model.validateArray(this.overall);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceTrendingReportResponseBody extends $dara.Model {
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
  data?: GetInstanceTrendingReportResponseBodyData;
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
   * 943D8EF3-3321-471F-A104-51C96FCA94D6
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
      data: GetInstanceTrendingReportResponseBodyData,
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

