// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunCustomHotTopicAnalysisRequest extends $dara.Model {
  /**
   * @remarks
   * The follow-up question from the model.
   * 
   * @example
   * 模型反问
   */
  askUser?: string;
  /**
   * @remarks
   * Specifies whether to forcibly analyze a duplicate topic and overwrite the existing analysis.
   * 
   * @example
   * false
   */
  forceAnalysisExistsTopic?: boolean;
  /**
   * @remarks
   * The user\\"s input prompt.
   * 
   * This parameter is required.
   * 
   * @example
   * 用户输入Prompt
   */
  prompt?: string;
  /**
   * @remarks
   * The unique ID for each request.
   * 
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  sessionId?: string;
  /**
   * @remarks
   * The unique ID for the entire conversation task.
   * 
   * > By default, you do not need to specify TaskId. The system automatically generates one. If you specify the same TaskId for subsequent tasks, the tasks are considered part of the same conversation group.
   * 
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  taskId?: string;
  /**
   * @remarks
   * The user\\"s input in response to the model\\"s follow-up question.
   * 
   * @example
   * 用户针对模型反问的输入
   */
  userBack?: string;
  /**
   * @remarks
   * The unique ID of the Alibaba Cloud Model Studio workspace. For more information, see [Obtain a Workspace ID](https://help.aliyun.com/document_detail/2782167.html).
   * 
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

