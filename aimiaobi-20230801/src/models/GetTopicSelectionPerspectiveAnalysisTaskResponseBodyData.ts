// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataFreshViewPointsResult } from "./GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataFreshViewPointsResult";
import { GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataHotViewPointsResult } from "./GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataHotViewPointsResult";
import { GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataTimedViewPointsResult } from "./GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataTimedViewPointsResult";
import { GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataTopicSummaryResult } from "./GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataTopicSummaryResult";
import { GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataWebReviewPointsResult } from "./GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataWebReviewPointsResult";


export class GetTopicSelectionPerspectiveAnalysisTaskResponseBodyData extends $dara.Model {
  /**
   * @example
   * 错误信息
   */
  errorMessage?: string;
  freshViewPointsResult?: GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataFreshViewPointsResult;
  hotViewPointsResult?: GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataHotViewPointsResult;
  /**
   * @example
   * SUSPENDED
   */
  status?: string;
  timedViewPointsResult?: GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataTimedViewPointsResult;
  /**
   * @example
   * 热点主题事件
   */
  topic?: string;
  topicSummaryResult?: GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataTopicSummaryResult;
  webReviewPointsResult?: GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataWebReviewPointsResult;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      freshViewPointsResult: 'FreshViewPointsResult',
      hotViewPointsResult: 'HotViewPointsResult',
      status: 'Status',
      timedViewPointsResult: 'TimedViewPointsResult',
      topic: 'Topic',
      topicSummaryResult: 'TopicSummaryResult',
      webReviewPointsResult: 'WebReviewPointsResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      freshViewPointsResult: GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataFreshViewPointsResult,
      hotViewPointsResult: GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataHotViewPointsResult,
      status: 'string',
      timedViewPointsResult: GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataTimedViewPointsResult,
      topic: 'string',
      topicSummaryResult: GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataTopicSummaryResult,
      webReviewPointsResult: GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataWebReviewPointsResult,
    };
  }

  validate() {
    if(this.freshViewPointsResult && typeof (this.freshViewPointsResult as any).validate === 'function') {
      (this.freshViewPointsResult as any).validate();
    }
    if(this.hotViewPointsResult && typeof (this.hotViewPointsResult as any).validate === 'function') {
      (this.hotViewPointsResult as any).validate();
    }
    if(this.timedViewPointsResult && typeof (this.timedViewPointsResult as any).validate === 'function') {
      (this.timedViewPointsResult as any).validate();
    }
    if(this.topicSummaryResult && typeof (this.topicSummaryResult as any).validate === 'function') {
      (this.topicSummaryResult as any).validate();
    }
    if(this.webReviewPointsResult && typeof (this.webReviewPointsResult as any).validate === 'function') {
      (this.webReviewPointsResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

