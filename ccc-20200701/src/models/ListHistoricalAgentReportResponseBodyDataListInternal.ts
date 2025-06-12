// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHistoricalAgentReportResponseBodyDataListInternal extends $dara.Model {
  averageTalkTime?: number;
  callsAnswered?: number;
  callsDialed?: number;
  callsHandled?: number;
  callsOffered?: number;
  callsTalked?: number;
  maxTalkTime?: number;
  totalTalkTime?: number;
  static names(): { [key: string]: string } {
    return {
      averageTalkTime: 'AverageTalkTime',
      callsAnswered: 'CallsAnswered',
      callsDialed: 'CallsDialed',
      callsHandled: 'CallsHandled',
      callsOffered: 'CallsOffered',
      callsTalked: 'CallsTalked',
      maxTalkTime: 'MaxTalkTime',
      totalTalkTime: 'TotalTalkTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      averageTalkTime: 'number',
      callsAnswered: 'number',
      callsDialed: 'number',
      callsHandled: 'number',
      callsOffered: 'number',
      callsTalked: 'number',
      maxTalkTime: 'number',
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

