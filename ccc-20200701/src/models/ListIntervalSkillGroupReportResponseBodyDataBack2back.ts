// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIntervalSkillGroupReportResponseBodyDataBack2Back extends $dara.Model {
  agentHandleRate?: number;
  answerRate?: string;
  averageCustomerRingTime?: number;
  averageRingTime?: number;
  averageTalkTime?: string;
  callsAgentHandled?: number;
  callsAnswered?: number;
  callsCustomerAnswered?: number;
  callsDialed?: number;
  customerAnswerRate?: number;
  maxCustomerRingTime?: number;
  maxRingTime?: number;
  maxTalkTime?: string;
  totalCustomerRingTime?: number;
  totalRingTime?: number;
  totalTalkTime?: number;
  static names(): { [key: string]: string } {
    return {
      agentHandleRate: 'AgentHandleRate',
      answerRate: 'AnswerRate',
      averageCustomerRingTime: 'AverageCustomerRingTime',
      averageRingTime: 'AverageRingTime',
      averageTalkTime: 'AverageTalkTime',
      callsAgentHandled: 'CallsAgentHandled',
      callsAnswered: 'CallsAnswered',
      callsCustomerAnswered: 'CallsCustomerAnswered',
      callsDialed: 'CallsDialed',
      customerAnswerRate: 'CustomerAnswerRate',
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
      agentHandleRate: 'number',
      answerRate: 'string',
      averageCustomerRingTime: 'number',
      averageRingTime: 'number',
      averageTalkTime: 'string',
      callsAgentHandled: 'number',
      callsAnswered: 'number',
      callsCustomerAnswered: 'number',
      callsDialed: 'number',
      customerAnswerRate: 'number',
      maxCustomerRingTime: 'number',
      maxRingTime: 'number',
      maxTalkTime: 'string',
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

