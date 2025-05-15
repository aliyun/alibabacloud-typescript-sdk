// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEvaluationScoreHistoryResponseBodyScoreHistoryTotalScoreHistory extends $dara.Model {
  /**
   * @remarks
   * The time when the score was generated. The time is in UTC.
   * 
   * @example
   * 2024-06-30T03:34:02Z
   */
  evaluationTime?: string;
  /**
   * @remarks
   * The score.
   * 
   * Valid values: 0 to 1.
   * 
   * @example
   * 0.6753
   */
  score?: number;
  static names(): { [key: string]: string } {
    return {
      evaluationTime: 'EvaluationTime',
      score: 'Score',
    };
  }

  static types(): { [key: string]: any } {
    return {
      evaluationTime: 'string',
      score: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

