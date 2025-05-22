// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoComplainHistories } from "./GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoComplainHistories";
import { GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoList } from "./GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoList";
import { GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoReviewInfo } from "./GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoReviewInfo";


export class GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfo extends $dara.Model {
  /**
   * @example
   * 1
   */
  autoReview?: number;
  complainHistories?: GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoComplainHistories;
  /**
   * @example
   * true
   */
  complainable?: boolean;
  conditionHitInfoList?: GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoList;
  machineHitResult?: number;
  reviewHitResult?: number;
  reviewInfo?: GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoReviewInfo;
  /**
   * @example
   * 451
   */
  rid?: number;
  ruleName?: string;
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
  /**
   * @example
   * xxx
   */
  scoreSubName?: string;
  static names(): { [key: string]: string } {
    return {
      autoReview: 'AutoReview',
      complainHistories: 'ComplainHistories',
      complainable: 'Complainable',
      conditionHitInfoList: 'ConditionHitInfoList',
      machineHitResult: 'MachineHitResult',
      reviewHitResult: 'ReviewHitResult',
      reviewInfo: 'ReviewInfo',
      rid: 'Rid',
      ruleName: 'RuleName',
      scoreId: 'ScoreId',
      scoreNum: 'ScoreNum',
      scoreSubId: 'ScoreSubId',
      scoreSubName: 'ScoreSubName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoReview: 'number',
      complainHistories: GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoComplainHistories,
      complainable: 'boolean',
      conditionHitInfoList: GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoList,
      machineHitResult: 'number',
      reviewHitResult: 'number',
      reviewInfo: GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoReviewInfo,
      rid: 'number',
      ruleName: 'string',
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
    if(this.conditionHitInfoList && typeof (this.conditionHitInfoList as any).validate === 'function') {
      (this.conditionHitInfoList as any).validate();
    }
    if(this.reviewInfo && typeof (this.reviewInfo as any).validate === 'function') {
      (this.reviewInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

