// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListEvaluationScoreHistoryResponseBodyScoreHistory } from "./ListEvaluationScoreHistoryResponseBodyScoreHistory";


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

