// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunSearchGenerationShrinkRequest extends $dara.Model {
  agentContextShrink?: string;
  /**
   * @example
   * xxx
   */
  chatConfigShrink?: string;
  /**
   * @example
   * http://xxxx
   */
  fileUrl?: string;
  /**
   * @example
   * qwen-max-latest
   */
  modelId?: string;
  /**
   * @example
   * xxx
   */
  originalSessionId?: string;
  /**
   * @example
   * xxx
   */
  prompt?: string;
  /**
   * @example
   * 7AA2AE16-D873-5C5F-9708-15396C382EB1
   */
  taskId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-xxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      agentContextShrink: 'AgentContext',
      chatConfigShrink: 'ChatConfig',
      fileUrl: 'FileUrl',
      modelId: 'ModelId',
      originalSessionId: 'OriginalSessionId',
      prompt: 'Prompt',
      taskId: 'TaskId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentContextShrink: 'string',
      chatConfigShrink: 'string',
      fileUrl: 'string',
      modelId: 'string',
      originalSessionId: 'string',
      prompt: 'string',
      taskId: 'string',
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

