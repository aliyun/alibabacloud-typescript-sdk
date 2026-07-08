// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitDocClusterTaskShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the workspace. For more information, see [AgentKey](https://help.aliyun.com/document_detail/2587494.html).
   * 
   * This parameter is required.
   * 
   * @example
   * xxxxx_p_efm
   */
  agentKey?: string;
  /**
   * @remarks
   * A list of documents.
   * 
   * This parameter is required.
   */
  documentsShrink?: string;
  /**
   * @remarks
   * The character limit for the generated cluster summary.
   * 
   * @example
   * 49
   */
  summaryLength?: number;
  /**
   * @remarks
   * The character limit for the generated cluster title.
   * 
   * @example
   * 69
   */
  titleLength?: number;
  /**
   * @remarks
   * The maximum number of clusters.
   * 
   * @example
   * 15
   */
  topicCount?: number;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      documentsShrink: 'Documents',
      summaryLength: 'SummaryLength',
      titleLength: 'TitleLength',
      topicCount: 'TopicCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      documentsShrink: 'string',
      summaryLength: 'number',
      titleLength: 'number',
      topicCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

