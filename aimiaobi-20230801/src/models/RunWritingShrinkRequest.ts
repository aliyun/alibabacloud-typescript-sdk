// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunWritingShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the original conversation to use for regeneration.
   * 
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  originSessionId?: string;
  /**
   * @remarks
   * The prompt.
   * 
   * This parameter is required.
   * 
   * @example
   * 提示词
   */
  prompt?: string;
  /**
   * @remarks
   * The reference article data for writing.
   */
  referenceDataShrink?: string;
  /**
   * @remarks
   * The ID of a single-turn conversation.
   * 
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  sessionId?: string;
  /**
   * @remarks
   * The ID of the task. You can reuse the same task ID in a multi-turn conversation.
   * 
   * > You do not need to specify TaskId. The system generates one automatically. If you use the same TaskId for multiple tasks, they are grouped into a single conversation.
   * 
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  taskId?: string;
  /**
   * @remarks
   * The unique ID of the Alibaba Cloud Model Studio workspace. For more information, see [Get a Workspace ID](https://help.aliyun.com/document_detail/2782167.html).
   * 
   * This parameter is required.
   * 
   * @example
   * xxxx
   */
  workspaceId?: string;
  /**
   * @remarks
   * The writing configuration.
   */
  writingConfigShrink?: string;
  static names(): { [key: string]: string } {
    return {
      originSessionId: 'OriginSessionId',
      prompt: 'Prompt',
      referenceDataShrink: 'ReferenceData',
      sessionId: 'SessionId',
      taskId: 'TaskId',
      workspaceId: 'WorkspaceId',
      writingConfigShrink: 'WritingConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      originSessionId: 'string',
      prompt: 'string',
      referenceDataShrink: 'string',
      sessionId: 'string',
      taskId: 'string',
      workspaceId: 'string',
      writingConfigShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

