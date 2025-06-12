// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHistoricalSkillGroupReportResponseBodyDataListOutbound extends $dara.Model {
  /**
   * @example
   * 0
   */
  answerRate?: number;
  /**
   * @example
   * 37
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
   * 3
   */
  averageTalkTime?: number;
  /**
   * @example
   * 2
   */
  averageWorkTime?: number;
  /**
   * @example
   * 1
   */
  callsAnswered?: number;
  /**
   * @example
   * 0
   */
  callsAttendedTransferIn?: number;
  /**
   * @example
   * 0
   */
  callsAttendedTransferOut?: number;
  /**
   * @example
   * 0
   */
  callsBlindTransferIn?: number;
  /**
   * @example
   * 0
   */
  callsBlindTransferOut?: number;
  /**
   * @example
   * 6
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
   * 12
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
   * 218
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
   * 3
   */
  totalTalkTime?: number;
  /**
   * @example
   * 9
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
      callsAttendedTransferIn: 'CallsAttendedTransferIn',
      callsAttendedTransferOut: 'CallsAttendedTransferOut',
      callsBlindTransferIn: 'CallsBlindTransferIn',
      callsBlindTransferOut: 'CallsBlindTransferOut',
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
      callsAttendedTransferIn: 'number',
      callsAttendedTransferOut: 'number',
      callsBlindTransferIn: 'number',
      callsBlindTransferOut: 'number',
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

