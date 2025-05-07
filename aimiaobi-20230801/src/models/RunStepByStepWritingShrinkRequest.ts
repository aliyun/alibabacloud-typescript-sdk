// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunStepByStepWritingShrinkRequest extends $dara.Model {
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  originSessionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 提示词
   */
  prompt?: string;
  referenceDataShrink?: string;
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  sessionId?: string;
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  taskId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxx
   */
  workspaceId?: string;
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

