// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitCustomTopicSelectionPerspectiveAnalysisTaskShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxxx_p_efm
   */
  agentKey?: string;
  documentsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 自定义观点的输入Prompt
   */
  prompt?: string;
  /**
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

