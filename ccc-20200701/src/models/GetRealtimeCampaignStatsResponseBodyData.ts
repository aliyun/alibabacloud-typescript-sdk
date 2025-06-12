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

