// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListEvaluationScoreHistoryResponseBodyScoreHistoryTotalScoreHistory } from "./ListEvaluationScoreHistoryResponseBodyScoreHistoryTotalScoreHistory";


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

