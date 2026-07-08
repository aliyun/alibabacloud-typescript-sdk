// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitDeepWriteTaskShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The agent orchestration options.
   */
  agentOrchestrationShrink?: string;
  /**
   * @remarks
   * A list of attachments.
   */
  filesShrink?: string;
  /**
   * @remarks
   * The user\\"s question.
   * 
   * This parameter is required.
   * 
   * @example
   * 北京2025年新能源汽车发展趋势
   * 
   * **if can be null:**
   * false
   */
  input?: string;
  /**
   * @remarks
   * The instructions.
   * 
   * @example
   * 请根据北京新能源汽车在汽车品牌、新车发布、能源等方面进行分析
   */
  instructions?: string;
  /**
   * @remarks
   * [The workspace ID.](https://help.aliyun.com/document_detail/2782167.html)
   * 
   * @example
   * llm-1setzb9xb8m11vrc
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      agentOrchestrationShrink: 'AgentOrchestration',
      filesShrink: 'Files',
      input: 'Input',
      instructions: 'Instructions',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentOrchestrationShrink: 'string',
      filesShrink: 'string',
      input: 'string',
      instructions: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

