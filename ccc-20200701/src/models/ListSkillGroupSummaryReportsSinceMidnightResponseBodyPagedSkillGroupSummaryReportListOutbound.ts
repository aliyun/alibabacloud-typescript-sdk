// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSkillGroupSummaryReportsSinceMidnightResponseBodyPagedSkillGroupSummaryReportListOutbound extends $dara.Model {
  /**
   * @example
   * 0
   */
  answerRate?: number;
  /**
   * @example
   * 0
   */
  averageDialingTime?: number;
  /**
   * @example
   * 0
   */
  averageTalkTime?: number;
  /**
   * @example
   * 0
   */
  averageWorkTime?: number;
  callsAbandoned?: number;
  callsAgentHandled?: number;
  /**
   * @example
   * 0
   */
  callsAnswered?: number;
  /**
   * @example
   * 0
   */
  callsDialed?: number;
  callsOffered?: number;
  callsQueuingCancelled?: number;
  callsQueuingFailed?: number;
  callsQueuingFailure?: number;
  callsQueuingOverflow?: number;
  callsQueuingRerouted?: number;
  callsQueuingTimeout?: number;
  /**
   * @example
   * 0
   */
  callsServiceLevel30?: string;
  callsServiceLevel30V2?: number;
  /**
   * @example
   * 0
   */
  maxDialingTime?: number;
  /**
   * @example
   * 0
   */
  maxTalkTime?: number;
  /**
   * @example
   * 0
   */
  maxWorkTime?: number;
  /**
   * @example
   * 0
   */
  satisfactionIndex?: number;
  /**
   * @example
   * 0
   */
  satisfactionSurveysOffered?: number;
  /**
   * @example
   * 0
   */
  satisfactionSurveysResponded?: number;
  /**
   * @example
   * 0
   */
  totalDialingTime?: number;
  /**
   * @example
   * 0
   */
  totalTalkTime?: number;
  totalWaitTime?: number;
  /**
   * @example
   * 0
   */
  totalWorkTime?: number;
  static names(): { [key: string]: string } {
    return {
      answerRate: 'AnswerRate',
      averageDialingTime: 'AverageDialingTime',
      averageTalkTime: 'AverageTalkTime',
      averageWorkTime: 'AverageWorkTime',
      callsAbandoned: 'CallsAbandoned',
      callsAgentHandled: 'CallsAgentHandled',
      callsAnswered: 'CallsAnswered',
      callsDialed: 'CallsDialed',
      callsOffered: 'CallsOffered',
      callsQueuingCancelled: 'CallsQueuingCancelled',
      callsQueuingFailed: 'CallsQueuingFailed',
      callsQueuingFailure: 'CallsQueuingFailure',
      callsQueuingOverflow: 'CallsQueuingOverflow',
      callsQueuingRerouted: 'CallsQueuingRerouted',
      callsQueuingTimeout: 'CallsQueuingTimeout',
      callsServiceLevel30: 'CallsServiceLevel30',
      callsServiceLevel30V2: 'CallsServiceLevel30V2',
      maxDialingTime: 'MaxDialingTime',
      maxTalkTime: 'MaxTalkTime',
      maxWorkTime: 'MaxWorkTime',
      satisfactionIndex: 'SatisfactionIndex',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      totalDialingTime: 'TotalDialingTime',
      totalTalkTime: 'TotalTalkTime',
      totalWaitTime: 'TotalWaitTime',
      totalWorkTime: 'TotalWorkTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answerRate: 'number',
      averageDialingTime: 'number',
      averageTalkTime: 'number',
      averageWorkTime: 'number',
      callsAbandoned: 'number',
      callsAgentHandled: 'number',
      callsAnswered: 'number',
      callsDialed: 'number',
      callsOffered: 'number',
      callsQueuingCancelled: 'number',
      callsQueuingFailed: 'number',
      callsQueuingFailure: 'number',
      callsQueuingOverflow: 'number',
      callsQueuingRerouted: 'number',
      callsQueuingTimeout: 'number',
      callsServiceLevel30: 'string',
      callsServiceLevel30V2: 'number',
      maxDialingTime: 'number',
      maxTalkTime: 'number',
      maxWorkTime: 'number',
      satisfactionIndex: 'number',
      satisfactionSurveysOffered: 'number',
      satisfactionSurveysResponded: 'number',
      totalDialingTime: 'number',
      totalTalkTime: 'number',
      totalWaitTime: 'number',
      totalWorkTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

