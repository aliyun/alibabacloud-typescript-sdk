// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHistoricalAgentReportResponseBodyDataListBack2Back extends $dara.Model {
  agentHandleRate?: string;
  answerRate?: string;
  averageCustomerRingTime?: string;
  averageRingTime?: string;
  averageTalkTime?: string;
  callsAgentHandled?: string;
  callsAnswered?: string;
  callsCustomerAnswered?: string;
  callsDialed?: string;
  customerAnswerRate?: string;
  maxCustomerRingTime?: string;
  maxRingTime?: string;
  maxTalkTime?: string;
  totalCustomerRingTime?: string;
  totalRingTime?: string;
  totalTalkTime?: string;
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
      agentHandleRate: 'string',
      answerRate: 'string',
      averageCustomerRingTime: 'string',
      averageRingTime: 'string',
      averageTalkTime: 'string',
      callsAgentHandled: 'string',
      callsAnswered: 'string',
      callsCustomerAnswered: 'string',
      callsDialed: 'string',
      customerAnswerRate: 'string',
      maxCustomerRingTime: 'string',
      maxRingTime: 'string',
      maxTalkTime: 'string',
      totalCustomerRingTime: 'string',
      totalRingTime: 'string',
      totalTalkTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

