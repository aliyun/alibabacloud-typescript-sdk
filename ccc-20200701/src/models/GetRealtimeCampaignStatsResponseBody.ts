// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRealtimeCampaignStatsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Number of agents on break.
   * 
   * @example
   * 1
   */
  breakingAgents?: number;
  /**
   * @remarks
   * The number of concurrent calls per second. "Concurrent" means calls happening simultaneously.
   * 
   * @example
   * 5
   */
  caps?: number;
  /**
   * @remarks
   * Number of logged-in agents.
   * 
   * @example
   * 10
   */
  loggedInAgents?: number;
  /**
   * @remarks
   * The number of agents in outbound-only mode who are on a break.
   * 
   * @example
   * 1
   */
  outboundScenarioBreakingAgents?: number;
  /**
   * @remarks
   * The number of agents in outbound-only mode who are idle.
   * 
   * @example
   * 1
   */
  outboundScenarioReadyAgents?: number;
  /**
   * @remarks
   * Number of agents in a call under outbound-only mode.
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
   * 1
   */
  outboundScenarioWorkingAgents?: number;
  /**
   * @remarks
   * Number of idle agents.
   * 
   * @example
   * 3
   */
  readyAgents?: number;
  /**
   * @remarks
   * Number of agents in a call.
   * 
   * @example
   * 4
   */
  talkingAgents?: number;
  /**
   * @remarks
   * Total number of agents.
   * 
   * @example
   * 10
   */
  totalAgents?: number;
  /**
   * @remarks
   * Number of agents in post-processing.
   * 
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
   * @remarks
   * The response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * Data.
   */
  data?: GetRealtimeCampaignStatsResponseBodyData;
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

