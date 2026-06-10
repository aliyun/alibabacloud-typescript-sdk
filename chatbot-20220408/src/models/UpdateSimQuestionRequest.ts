// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSimQuestionRequest extends $dara.Model {
  /**
   * @remarks
   * The key of the workspace. If you do not specify this parameter, the default workspace is used. You can find the key on the Business Management page of your master account.
   * 
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * The ID of the similar question that you want to update.
   * 
   * This parameter is required.
   * 
   * @example
   * 1000002788
   */
  simQuestionId?: number;
  /**
   * @remarks
   * The new title of the similar question. The title can be up to 120 characters long.
   * 
   * This parameter is required.
   * 
   * @example
   * 测试相似问标题
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      simQuestionId: 'SimQuestionId',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      simQuestionId: 'number',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

