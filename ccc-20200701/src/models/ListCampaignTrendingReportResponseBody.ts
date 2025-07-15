// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCampaignTrendingReportResponseBodyData extends $dara.Model {
  /**
   * @example
   * 0
   */
  breakAgents?: number;
  breakingAgents?: number;
  /**
   * @example
   * 1
   */
  concurrency?: number;
  /**
   * @example
   * 1634037840000
   */
  datetime?: number;
  /**
   * @example
   * 2
   */
  loggedInAgents?: number;
  outboundScenarioBreakingAgents?: number;
  outboundScenarioReadyAgents?: number;
  outboundScenarioTalkingAgents?: number;
  outboundScenarioWorkingAgents?: number;
  /**
   * @example
   * 2
   */
  readyAgents?: number;
  statsTime?: number;
  /**
   * @example
   * 0
   */
  talkAgents?: number;
  talkingAgents?: number;
  /**
   * @example
   * 0
   */
  workAgents?: number;
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
   * @example
   * OK
   */
  code?: string;
  data?: ListCampaignTrendingReportResponseBodyData[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  message?: string;
  /**
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

