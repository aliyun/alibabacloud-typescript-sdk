// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIntervalInstanceReportResponseBodyDataOutbound extends $dara.Model {
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
  averageHoldTime?: number;
  /**
   * @example
   * 0
   */
  averageRingTime?: number;
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
  callsAttendedTransferred?: number;
  /**
   * @example
   * 0
   */
  callsBlindTransferred?: number;
  /**
   * @example
   * 0
   */
  callsDialed?: number;
  /**
   * @example
   * 0
   */
  callsHold?: number;
  /**
   * @example
   * 0
   */
  callsRinged?: number;
  /**
   * @example
   * 0
   */
  maxDialingTime?: number;
  /**
   * @example
   * 0
   */
  maxHoldTime?: number;
  /**
   * @example
   * 0
   */
  maxRingTime?: number;
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
  satisfactionRate?: number;
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
  totalHoldTime?: number;
  /**
   * @example
   * 0
   */
  totalRingTime?: number;
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
      averageHoldTime: 'AverageHoldTime',
      averageRingTime: 'AverageRingTime',
      averageTalkTime: 'AverageTalkTime',
      averageWorkTime: 'AverageWorkTime',
      callsAnswered: 'CallsAnswered',
      callsAttendedTransferred: 'CallsAttendedTransferred',
      callsBlindTransferred: 'CallsBlindTransferred',
      callsDialed: 'CallsDialed',
      callsHold: 'CallsHold',
      callsRinged: 'CallsRinged',
      maxDialingTime: 'MaxDialingTime',
      maxHoldTime: 'MaxHoldTime',
      maxRingTime: 'MaxRingTime',
      maxTalkTime: 'MaxTalkTime',
      maxWorkTime: 'MaxWorkTime',
      satisfactionIndex: 'SatisfactionIndex',
      satisfactionRate: 'SatisfactionRate',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      totalDialingTime: 'TotalDialingTime',
      totalHoldTime: 'TotalHoldTime',
      totalRingTime: 'TotalRingTime',
      totalTalkTime: 'TotalTalkTime',
      totalWorkTime: 'TotalWorkTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answerRate: 'number',
      averageDialingTime: 'number',
      averageHoldTime: 'number',
      averageRingTime: 'number',
      averageTalkTime: 'number',
      averageWorkTime: 'number',
      callsAnswered: 'number',
      callsAttendedTransferred: 'number',
      callsBlindTransferred: 'number',
      callsDialed: 'number',
      callsHold: 'number',
      callsRinged: 'number',
      maxDialingTime: 'number',
      maxHoldTime: 'number',
      maxRingTime: 'number',
      maxTalkTime: 'number',
      maxWorkTime: 'number',
      satisfactionIndex: 'number',
      satisfactionRate: 'number',
      satisfactionSurveysOffered: 'number',
      satisfactionSurveysResponded: 'number',
      totalDialingTime: 'number',
      totalHoldTime: 'number',
      totalRingTime: 'number',
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

