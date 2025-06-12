// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHistoricalAgentSkillGroupReportResponseBodyDataListBack2Back extends $dara.Model {
  /**
   * @example
   * 0.5
   */
  agentAnswerRate?: number;
  agentHandleRate?: number;
  /**
   * @example
   * 0.6
   */
  answerRate?: number;
  /**
   * @example
   * 100
   */
  averageCustomerRingTime?: number;
  /**
   * @example
   * 100
   */
  averageRingTime?: number;
  /**
   * @example
   * 100
   */
  averageTalkTime?: number;
  callsAgentHandled?: number;
  /**
   * @example
   * 100
   */
  callsAnswered?: number;
  callsCustomerAnswered?: number;
  /**
   * @example
   * 100
   */
  callsCustomerHandled?: number;
  /**
   * @example
   * 100
   */
  callsDialed?: number;
  customerAnswerRate?: number;
  /**
   * @example
   * 0.5
   */
  customerHandleRate?: number;
  /**
   * @example
   * 100
   */
  maxCustomerRingTime?: number;
  /**
   * @example
   * 100
   */
  maxRingTime?: number;
  /**
   * @example
   * 100
   */
  maxTalkTime?: number;
  /**
   * @example
   * 100
   */
  totalCustomerRingTime?: number;
  /**
   * @example
   * 100
   */
  totalRingTime?: number;
  /**
   * @example
   * 100
   */
  totalTalkTime?: number;
  static names(): { [key: string]: string } {
    return {
      agentAnswerRate: 'AgentAnswerRate',
      agentHandleRate: 'AgentHandleRate',
      answerRate: 'AnswerRate',
      averageCustomerRingTime: 'AverageCustomerRingTime',
      averageRingTime: 'AverageRingTime',
      averageTalkTime: 'AverageTalkTime',
      callsAgentHandled: 'CallsAgentHandled',
      callsAnswered: 'CallsAnswered',
      callsCustomerAnswered: 'CallsCustomerAnswered',
      callsCustomerHandled: 'CallsCustomerHandled',
      callsDialed: 'CallsDialed',
      customerAnswerRate: 'CustomerAnswerRate',
      customerHandleRate: 'CustomerHandleRate',
      maxCustomerRingTime: 'MaxCustomerRingTime',
      maxRingTime: 'MaxRingTime',
      maxTalkTime: 'MaxTalkTime',
      totalCustomerRingTime: 'TotalCustomerRingTime',
      totalRingTime: 'TotalRingTime',
      totalTalkTime: 'TotalTalkTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentAnswerRate: 'number',
      agentHandleRate: 'number',
      answerRate: 'number',
      averageCustomerRingTime: 'number',
      averageRingTime: 'number',
      averageTalkTime: 'number',
      callsAgentHandled: 'number',
      callsAnswered: 'number',
      callsCustomerAnswered: 'number',
      callsCustomerHandled: 'number',
      callsDialed: 'number',
      customerAnswerRate: 'number',
      customerHandleRate: 'number',
      maxCustomerRingTime: 'number',
      maxRingTime: 'number',
      maxTalkTime: 'number',
      totalCustomerRingTime: 'number',
      totalRingTime: 'number',
      totalTalkTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

