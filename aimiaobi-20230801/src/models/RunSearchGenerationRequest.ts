// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunSearchGenerationRequestAgentContext } from "./RunSearchGenerationRequestAgentContext";
import { RunSearchGenerationRequestChatConfig } from "./RunSearchGenerationRequestChatConfig";


export class RunSearchGenerationRequest extends $dara.Model {
  agentContext?: RunSearchGenerationRequestAgentContext;
  /**
   * @example
   * xxx
   */
  chatConfig?: RunSearchGenerationRequestChatConfig;
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
      agentContext: 'AgentContext',
      chatConfig: 'ChatConfig',
      modelId: 'ModelId',
      originalSessionId: 'OriginalSessionId',
      prompt: 'Prompt',
      taskId: 'TaskId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentContext: RunSearchGenerationRequestAgentContext,
      chatConfig: RunSearchGenerationRequestChatConfig,
      modelId: 'string',
      originalSessionId: 'string',
      prompt: 'string',
      taskId: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.agentContext && typeof (this.agentContext as any).validate === 'function') {
      (this.agentContext as any).validate();
    }
    if(this.chatConfig && typeof (this.chatConfig as any).validate === 'function') {
      (this.chatConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

