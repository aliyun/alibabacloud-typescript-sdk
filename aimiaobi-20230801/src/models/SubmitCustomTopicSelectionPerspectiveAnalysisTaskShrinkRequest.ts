// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitCustomTopicSelectionPerspectiveAnalysisTaskShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the workspace. For more information, see [AgentKey](https://help.aliyun.com/document_detail/2587494.html).
   * 
   * This parameter is required.
   * 
   * @example
   * xxxxx_p_efm
   */
  agentKey?: string;
  /**
   * @remarks
   * The list of documents to be analyzed.
   */
  documentsShrink?: string;
  /**
   * @remarks
   * The input prompt for custom perspectives.
   * 
   * This parameter is required.
   * 
   * @example
   * 自定义观点的输入Prompt
   */
  prompt?: string;
  /**
   * @remarks
   * The name of the topic to be analyzed.
   * 
   * @example
   * 待分析的主题名（documents与topic二者至少传一个）
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      documentsShrink: 'Documents',
      prompt: 'Prompt',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      documentsShrink: 'string',
      prompt: 'string',
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

