// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSimQuestionRequest extends $dara.Model {
  /**
   * @remarks
   * The business space key. If this parameter is not specified, the default business space is accessed. You can obtain the key value on the business management page of the Alibaba Cloud account.
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

