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

export class ListEvaluationScoreHistoryResponseBodyScoreHistory extends $dara.Model {
  /**
   * @remarks
   * The historical scores.
   */
  totalScoreHistory?: ListEvaluationScoreHistoryResponseBodyScoreHistoryTotalScoreHistory[];
  static names(): { [key: string]: string } {
    return {
      totalScoreHistory: 'TotalScoreHistory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalScoreHistory: { 'type': 'array', 'itemType': ListEvaluationScoreHistoryResponseBodyScoreHistoryTotalScoreHistory },
    };
  }

  validate() {
    if(Array.isArray(this.totalScoreHistory)) {
      $dara.Model.validateArray(this.totalScoreHistory);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEvaluationScoreHistoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AC9BD94C-D20C-4D27-88D4-89E8D75C051B
   */
  requestId?: string;
  /**
   * @remarks
   * The historical scores.
   */
  scoreHistory?: ListEvaluationScoreHistoryResponseBodyScoreHistory;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      scoreHistory: 'ScoreHistory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      scoreHistory: ListEvaluationScoreHistoryResponseBodyScoreHistory,
    };
  }

  validate() {
    if(this.scoreHistory && typeof (this.scoreHistory as any).validate === 'function') {
      (this.scoreHistory as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

