// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunCustomHotTopicAnalysisRequest extends $dara.Model {
  /**
   * @example
   * 模型反问
   */
  askUser?: string;
  /**
   * @example
   * false
   */
  forceAnalysisExistsTopic?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 用户输入Prompt
   */
  prompt?: string;
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
   * @example
   * 用户针对模型反问的输入
   */
  userBack?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      askUser: 'AskUser',
      forceAnalysisExistsTopic: 'ForceAnalysisExistsTopic',
      prompt: 'Prompt',
      sessionId: 'SessionId',
      taskId: 'TaskId',
      userBack: 'UserBack',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      askUser: 'string',
      forceAnalysisExistsTopic: 'boolean',
      prompt: 'string',
      sessionId: 'string',
      taskId: 'string',
      userBack: 'string',
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

