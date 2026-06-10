// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSimQuestionRequest extends $dara.Model {
  /**
   * @remarks
   * The key for the business space. If you omit this parameter, the default business space is used. You can find the key on the business management page of your primary account.
   * 
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * The ID of the similar question.
   * 
   * This parameter is required.
   * 
   * @example
   * 1000002788
   */
  simQuestionId?: number;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      simQuestionId: 'SimQuestionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      simQuestionId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

