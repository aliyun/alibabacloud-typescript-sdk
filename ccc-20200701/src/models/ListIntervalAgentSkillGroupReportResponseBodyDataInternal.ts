// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIntervalAgentSkillGroupReportResponseBodyDataInternal extends $dara.Model {
  /**
   * @example
   * 100
   */
  averageTalkTime?: number;
  /**
   * @example
   * 100
   */
  callsAnswered?: number;
  /**
   * @example
   * 100
   */
  callsDialed?: number;
  /**
   * @example
   * 100
   */
  callsHandled?: number;
  /**
   * @example
   * 100
   */
  callsOffered?: number;
  /**
   * @example
   * 100
   */
  callsTalk?: number;
  callsTalked?: number;
  /**
   * @example
   * 100
   */
  maxTalkTime?: number;
  /**
   * @example
   * 100
   */
  totalTalkTime?: number;
  static names(): { [key: string]: string } {
    return {
      averageTalkTime: 'AverageTalkTime',
      callsAnswered: 'CallsAnswered',
      callsDialed: 'CallsDialed',
      callsHandled: 'CallsHandled',
      callsOffered: 'CallsOffered',
      callsTalk: 'CallsTalk',
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
      callsTalk: 'number',
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

