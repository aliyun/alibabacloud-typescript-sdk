// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCampaignTrendingReportResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Number of agents on break.
   * 
   * @example
   * 0
   */
  breakAgents?: number;
  /**
   * @remarks
   * Number of agents in break status.
   * 
   * @example
   * 1
   */
  breakingAgents?: number;
  /**
   * @remarks
   * The concurrent call volume, which refers to the number of simultaneous outbound calls.
   * 
   * @example
   * 1
   */
  concurrency?: number;
  /**
   * @remarks
   * The timestamp for segmented statistics, formatted as a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1634037840000
   */
  datetime?: number;
  /**
   * @remarks
   * The number of published agents.
   * 
   * @example
   * 2
   */
  loggedInAgents?: number;
  /**
   * @remarks
   * The number of agents in outbound-only mode who are on a break.
   * 
   * @example
   * 2
   */
  outboundScenarioBreakingAgents?: number;
  /**
   * @remarks
   * Number of agents in idle status under outbound-only mode.
   * 
   * @example
   * 1
   */
  outboundScenarioReadyAgents?: number;
  /**
   * @remarks
   * The number of agents in outbound-only mode who are currently on a call.
   * 
   * @example
   * 1
   */
  outboundScenarioTalkingAgents?: number;
  /**
   * @remarks
   * Number of agents in post-processing status under outbound-only mode.
   * 
   * @example
   * 2
   */
  outboundScenarioWorkingAgents?: number;
  /**
   * @remarks
   * Number of idle agents.
   * 
   * @example
   * 2
   */
  readyAgents?: number;
  /**
   * @remarks
   * Time of the statistical data point, formatted as a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1604639129000
   */
  statsTime?: number;
  /**
   * @remarks
   * Deprecated. Refer to TalkAgents.
   * 
   * @example
   * 0
   */
  talkAgents?: number;
  /**
   * @remarks
   * The number of agents in a call.
   * 
   * @example
   * 4
   */
  talkingAgents?: number;
  /**
   * @remarks
   * Deprecated. Refer to WorkingAgents.
   * 
   * @example
   * 0
   */
  workAgents?: number;
  /**
   * @remarks
   * Number of agents in post-processing status.
   * 
   * @example
   * 0
   */
  workingAgents?: number;
  static names(): { [key: string]: string } {
    return {
      breakAgents: 'BreakAgents',
      breakingAgents: 'BreakingAgents',
      concurrency: 'Concurrency',
      datetime: 'Datetime',
      loggedInAgents: 'LoggedInAgents',
      outboundScenarioBreakingAgents: 'OutboundScenarioBreakingAgents',
      outboundScenarioReadyAgents: 'OutboundScenarioReadyAgents',
      outboundScenarioTalkingAgents: 'OutboundScenarioTalkingAgents',
      outboundScenarioWorkingAgents: 'OutboundScenarioWorkingAgents',
      readyAgents: 'ReadyAgents',
      statsTime: 'StatsTime',
      talkAgents: 'TalkAgents',
      talkingAgents: 'TalkingAgents',
      workAgents: 'WorkAgents',
      workingAgents: 'WorkingAgents',
    };
  }

  static types(): { [key: string]: any } {
    return {
      breakAgents: 'number',
      breakingAgents: 'number',
      concurrency: 'number',
      datetime: 'number',
      loggedInAgents: 'number',
      outboundScenarioBreakingAgents: 'number',
      outboundScenarioReadyAgents: 'number',
      outboundScenarioTalkingAgents: 'number',
      outboundScenarioWorkingAgents: 'number',
      readyAgents: 'number',
      statsTime: 'number',
      talkAgents: 'number',
      talkingAgents: 'number',
      workAgents: 'number',
      workingAgents: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCampaignTrendingReportResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * List of statistical data points.
   */
  data?: ListCampaignTrendingReportResponseBodyData[];
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
   * 6CCEF32F-8614-535F-A1D9-D85B8C0DC4F0
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
      data: { 'type': 'array', 'itemType': ListCampaignTrendingReportResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

