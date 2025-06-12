// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentSummaryReportsSinceMidnightResponseBodyPagedAgentSummaryReportListOutbound extends $dara.Model {
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
  maxWorkTime?: string;
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
      callsAnswered: 'CallsAnswered',
      callsDialed: 'CallsDialed',
      maxDialingTime: 'MaxDialingTime',
      maxTalkTime: 'MaxTalkTime',
      maxWorkTime: 'MaxWorkTime',
      satisfactionIndex: 'SatisfactionIndex',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      totalDialingTime: 'TotalDialingTime',
      totalTalkTime: 'TotalTalkTime',
      totalWorkTime: 'TotalWorkTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answerRate: 'number',
      averageDialingTime: 'number',
      averageTalkTime: 'number',
      averageWorkTime: 'number',
      callsAnswered: 'number',
      callsDialed: 'number',
      maxDialingTime: 'number',
      maxTalkTime: 'number',
      maxWorkTime: 'string',
      satisfactionIndex: 'number',
      satisfactionSurveysOffered: 'number',
      satisfactionSurveysResponded: 'number',
      totalDialingTime: 'number',
      totalTalkTime: 'number',
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

