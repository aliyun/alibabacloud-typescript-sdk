// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunSearchGenerationShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Context.
   */
  agentContextShrink?: string;
  /**
   * @remarks
   * Session configuration.
   * 
   * @example
   * xxx
   */
  chatConfigShrink?: string;
  /**
   * @remarks
   * Image URL. Used for image search and hybrid text-and-image (prompt) search generation.
   * 
   * @example
   * http://xxxx
   */
  fileUrl?: string;
  /**
   * @remarks
   * Model ID:
   * 
   * - quanmiao-max: Quanmiao-Max
   * 
   * - quanmiao-plus: Quanmiao-Plus
   * 
   * @example
   * quanmiao-max
   */
  modelId?: string;
  /**
   * @remarks
   * Original session identifier. Usually empty. When non-empty, it indicates that the current conversation is based on the referenced session. The system loads parameters and search results from that session and replaces the generated result. Use this for re-generation, changing data sources, or adding new agents.
   * 
   * @example
   * xxx
   */
  originalSessionId?: string;
  /**
   * @remarks
   * Search query.
   * 
   * @example
   * 杭州亚运会吉祥物是什么
   */
  prompt?: string;
  /**
   * @remarks
   * Unique identifier for the session task.
   * 
   * > By default, you do not need to provide a TaskId. The system generates one automatically. If you specify the same TaskId in subsequent requests, those tasks are grouped into the same conversation.
   * 
   * @example
   * 7AA2AE16-D873-5C5F-9708-15396C382EB1
   */
  taskId?: string;
  /**
   * @remarks
   * ID of the Alibaba Cloud Model Studio workspace. To learn how to obtain this ID, see [How to use workspaces](https://help.aliyun.com/document_detail/2782167.html).
   * 
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

