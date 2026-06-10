// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSimQuestionRequest extends $dara.Model {
  /**
   * @remarks
   * The key for the business space. If you do not specify this parameter, the default business space is used. You can get the key from the Business Management Page of your Alibaba Cloud account.
   * 
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * The knowledge entry ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 30002299537
   */
  knowledgeId?: number;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      knowledgeId: 'KnowledgeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      knowledgeId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

