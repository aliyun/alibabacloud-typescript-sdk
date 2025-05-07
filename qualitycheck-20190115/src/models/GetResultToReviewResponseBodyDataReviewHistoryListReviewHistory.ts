// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetResultToReviewResponseBodyDataReviewHistoryListReviewHistoryReviewRightRule } from "./GetResultToReviewResponseBodyDataReviewHistoryListReviewHistoryReviewRightRule";


export class GetResultToReviewResponseBodyDataReviewHistoryListReviewHistory extends $dara.Model {
  comments?: string;
  /**
   * @example
   * 1
   */
  complainResult?: number;
  /**
   * @example
   * 90
   */
  oldScore?: number;
  operator?: number;
  operatorName?: string;
  reviewManagerType?: string;
  /**
   * @example
   * 1
   */
  reviewResult?: number;
  reviewRightRule?: GetResultToReviewResponseBodyDataReviewHistoryListReviewHistoryReviewRightRule;
  /**
   * @example
   * 95
   */
  score?: number;
  time?: number;
  /**
   * @example
   * 2019-10-28 15:21:00
   */
  timeStr?: string;
  /**
   * @example
   * 1
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      comments: 'Comments',
      complainResult: 'ComplainResult',
      oldScore: 'OldScore',
      operator: 'Operator',
      operatorName: 'OperatorName',
      reviewManagerType: 'ReviewManagerType',
      reviewResult: 'ReviewResult',
      reviewRightRule: 'ReviewRightRule',
      score: 'Score',
      time: 'Time',
      timeStr: 'TimeStr',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comments: 'string',
      complainResult: 'number',
      oldScore: 'number',
      operator: 'number',
      operatorName: 'string',
      reviewManagerType: 'string',
      reviewResult: 'number',
      reviewRightRule: GetResultToReviewResponseBodyDataReviewHistoryListReviewHistoryReviewRightRule,
      score: 'number',
      time: 'number',
      timeStr: 'string',
      type: 'number',
    };
  }

  validate() {
    if(this.reviewRightRule && typeof (this.reviewRightRule as any).validate === 'function') {
      (this.reviewRightRule as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

