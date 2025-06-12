// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIntervalAgentSkillGroupReportResponseBodyDataOutbound extends $dara.Model {
  /**
   * @example
   * 0.5
   */
  answerRate?: number;
  /**
   * @example
   * 100
   */
  averageDialingTime?: number;
  /**
   * @example
   * 100
   */
  averageHoldTime?: number;
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
  /**
   * @example
   * 100
   */
  averageWorkTime?: number;
  /**
   * @example
   * 100
   */
  callsAnswered?: number;
  /**
   * @example
   * 100
   */
  callsAttendedTransferIn?: number;
  /**
   * @example
   * 100
   */
  callsAttendedTransferOut?: number;
  /**
   * @example
   * 100
   */
  callsBlindTransferIn?: number;
  /**
   * @example
   * 100
   */
  callsBlindTransferOut?: number;
  /**
   * @example
   * 100
   */
  callsDialed?: number;
  /**
   * @example
   * 100
   */
  callsHold?: number;
  /**
   * @example
   * 100
   */
  callsRinged?: number;
  /**
   * @example
   * 100
   */
  maxDialingTime?: number;
  /**
   * @example
   * 100
   */
  maxHoldTime?: number;
  /**
   * @example
   * 100
   */
  maxRingTime?: number;
  /**
   * @example
   * 0
   */
  maxTalkTime?: number;
  /**
   * @example
   * 100
   */
  maxWorkTime?: number;
  /**
   * @example
   * 100
   */
  satisfactionIndex?: number;
  /**
   * @example
   * 100
   */
  satisfactionRate?: number;
  /**
   * @example
   * 100
   */
  satisfactionSurveysOffered?: number;
  /**
   * @example
   * 100
   */
  satisfactionSurveysResponded?: number;
  /**
   * @example
   * 100
   */
  totalDialingTime?: number;
  /**
   * @example
   * 100
   */
  totalHoldTime?: number;
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
  /**
   * @example
   * 100
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

