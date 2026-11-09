// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitAgentJobRequest extends $dara.Model {
  /**
   * @remarks
   * The large language model (LLM) used to execute the agent task.
   * 
   * @example
   * qwen3.7-plus
   */
  model?: string;
  /**
   * @remarks
   * The callback URL. Currently, only HTTP and HTTPS addresses are supported.
   * 
   * @example
   * https://api.ai-x.vip/callback
   */
  notifyUrl?: string;
  /**
   * @remarks
   * The prompt. Defined by the business as needed.
   * 
   * This parameter is required.
   * 
   * @example
   * Compare the battle records of Yue Jin and Guan Yu in real history to determine who was stronger
   */
  prompt?: string;
  /**
   * @remarks
   * The skill identifier, provided by the skill provider.
   * 
   * @example
   * wf://xxx
   */
  skill?: string;
  /**
   * @remarks
   * The custom user data. This value is returned as-is in the callback.
   * 
   * @example
   * {“x”: 1}
   */
  userData?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * ws_1151222932383236
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      model: 'Model',
      notifyUrl: 'NotifyUrl',
      prompt: 'Prompt',
      skill: 'Skill',
      userData: 'UserData',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      model: 'string',
      notifyUrl: 'string',
      prompt: 'string',
      skill: 'string',
      userData: 'string',
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

