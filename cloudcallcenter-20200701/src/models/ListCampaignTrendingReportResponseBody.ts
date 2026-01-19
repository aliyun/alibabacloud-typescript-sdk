// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCampaignTrendingReportResponseBodyData extends $dara.Model {
  breakAgents?: number;
  concurrency?: number;
  datetime?: number;
  loggedInAgents?: number;
  outboundScenarioBreakingAgents?: string;
  outboundScenarioReadyAgents?: string;
  outboundScenarioTalkingAgents?: string;
  outboundScenarioWorkingAgents?: string;
  readyAgents?: number;
  talkAgents?: number;
  workAgents?: number;
  static names(): { [key: string]: string } {
    return {
      breakAgents: 'BreakAgents',
      concurrency: 'Concurrency',
      datetime: 'Datetime',
      loggedInAgents: 'LoggedInAgents',
      outboundScenarioBreakingAgents: 'OutboundScenarioBreakingAgents',
      outboundScenarioReadyAgents: 'OutboundScenarioReadyAgents',
      outboundScenarioTalkingAgents: 'OutboundScenarioTalkingAgents',
      outboundScenarioWorkingAgents: 'OutboundScenarioWorkingAgents',
      readyAgents: 'ReadyAgents',
      talkAgents: 'TalkAgents',
      workAgents: 'WorkAgents',
    };
  }

  static types(): { [key: string]: any } {
    return {
      breakAgents: 'number',
      concurrency: 'number',
      datetime: 'number',
      loggedInAgents: 'number',
      outboundScenarioBreakingAgents: 'string',
      outboundScenarioReadyAgents: 'string',
      outboundScenarioTalkingAgents: 'string',
      outboundScenarioWorkingAgents: 'string',
      readyAgents: 'number',
      talkAgents: 'number',
      workAgents: 'number',
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
  code?: string;
  data?: ListCampaignTrendingReportResponseBodyData[];
  httpStatusCode?: number;
  message?: string;
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

