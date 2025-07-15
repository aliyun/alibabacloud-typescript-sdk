// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRealtimeCampaignStatsResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1
   */
  breakingAgents?: number;
  /**
   * @example
   * 5
   */
  caps?: number;
  /**
   * @example
   * 10
   */
  loggedInAgents?: number;
  outboundScenarioBreakingAgents?: number;
  outboundScenarioReadyAgents?: number;
  outboundScenarioTalkingAgents?: number;
  outboundScenarioWorkingAgents?: number;
  /**
   * @example
   * 3
   */
  readyAgents?: number;
  /**
   * @example
   * 4
   */
  talkingAgents?: number;
  /**
   * @example
   * 10
   */
  totalAgents?: number;
  /**
   * @example
   * 2
   */
  workingAgents?: number;
  static names(): { [key: string]: string } {
    return {
      breakingAgents: 'BreakingAgents',
      caps: 'Caps',
      loggedInAgents: 'LoggedInAgents',
      outboundScenarioBreakingAgents: 'OutboundScenarioBreakingAgents',
      outboundScenarioReadyAgents: 'OutboundScenarioReadyAgents',
      outboundScenarioTalkingAgents: 'OutboundScenarioTalkingAgents',
      outboundScenarioWorkingAgents: 'OutboundScenarioWorkingAgents',
      readyAgents: 'ReadyAgents',
      talkingAgents: 'TalkingAgents',
      totalAgents: 'TotalAgents',
      workingAgents: 'WorkingAgents',
    };
  }

  static types(): { [key: string]: any } {
    return {
      breakingAgents: 'number',
      caps: 'number',
      loggedInAgents: 'number',
      outboundScenarioBreakingAgents: 'number',
      outboundScenarioReadyAgents: 'number',
      outboundScenarioTalkingAgents: 'number',
      outboundScenarioWorkingAgents: 'number',
      readyAgents: 'number',
      talkingAgents: 'number',
      totalAgents: 'number',
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

export class GetRealtimeCampaignStatsResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  data?: GetRealtimeCampaignStatsResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  message?: string;
  /**
   * @example
   * 42970829-E2C8-515A-8F42-5A6B59F852A7
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
      data: GetRealtimeCampaignStatsResponseBodyData,
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

