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

export class GetInstanceTrendingReportResponseBodyDataOverall extends $dara.Model {
  maxLoggedInAgents?: number;
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
  inbound?: GetInstanceTrendingReportResponseBodyDataInbound[];
  outbound?: GetInstanceTrendingReportResponseBodyDataOutbound[];
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
   * @example
   * OK
   */
  code?: string;
  data?: GetInstanceTrendingReportResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  message?: string;
  /**
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

