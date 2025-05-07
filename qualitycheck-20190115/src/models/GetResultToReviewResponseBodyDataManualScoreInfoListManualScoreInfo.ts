// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetResultToReviewResponseBodyDataManualScoreInfoListManualScoreInfoComplainHistories } from "./GetResultToReviewResponseBodyDataManualScoreInfoListManualScoreInfoComplainHistories";


export class GetResultToReviewResponseBodyDataManualScoreInfoListManualScoreInfo extends $dara.Model {
  complainHistories?: GetResultToReviewResponseBodyDataManualScoreInfoListManualScoreInfoComplainHistories;
  /**
   * @example
   * true
   */
  complainable?: boolean;
  /**
   * @example
   * xxx
   */
  scoreId?: number;
  /**
   * @example
   * -10
   */
  scoreNum?: number;
  /**
   * @example
   * xxx
   */
  scoreSubId?: number;
  scoreSubName?: string;
  static names(): { [key: string]: string } {
    return {
      complainHistories: 'ComplainHistories',
      complainable: 'Complainable',
      scoreId: 'ScoreId',
      scoreNum: 'ScoreNum',
      scoreSubId: 'ScoreSubId',
      scoreSubName: 'ScoreSubName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complainHistories: GetResultToReviewResponseBodyDataManualScoreInfoListManualScoreInfoComplainHistories,
      complainable: 'boolean',
      scoreId: 'number',
      scoreNum: 'number',
      scoreSubId: 'number',
      scoreSubName: 'string',
    };
  }

  validate() {
    if(this.complainHistories && typeof (this.complainHistories as any).validate === 'function') {
      (this.complainHistories as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

