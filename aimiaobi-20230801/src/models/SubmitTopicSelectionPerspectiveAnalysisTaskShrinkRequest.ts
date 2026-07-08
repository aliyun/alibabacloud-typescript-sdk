// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitTopicSelectionPerspectiveAnalysisTaskShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the workspace: [AgentKey](https://help.aliyun.com/document_detail/2587494.html)
   * 
   * This parameter is required.
   * 
   * @example
   * xxxxx_p_efm
   */
  agentKey?: string;
  /**
   * @remarks
   * The list of documents to be analyzed. (Provide at least one of documents or topic)
   */
  documentsShrink?: string;
  /**
   * @remarks
   * The topic selection perspective tasks to be analyzed. By default, this parameter is empty, which means all tasks are analyzed. (TopicSummary: Topic event summary, HotViewPoints: Hot topic selection perspectives, TimedViewPoints: Timeliness topic selection perspectives, WebReviewPoints: Online review topic selection perspectives, FreshViewPoints: Novel topic selection perspectives)
   * 
   * @example
   * TimedViewPoints
   */
  perspectiveTypesShrink?: string;
  /**
   * @remarks
   * The name of the topic to be analyzed. (Provide at least one of documents or topic)
   * 
   * @example
   * 待分析的主题名（documents与topic二者至少传一个）
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      documentsShrink: 'Documents',
      perspectiveTypesShrink: 'PerspectiveTypes',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      documentsShrink: 'string',
      perspectiveTypesShrink: 'string',
      topic: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

