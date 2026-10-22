// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateConnQuestionRequest extends $dara.Model {
  /**
   * @remarks
   * The key of the business space. If this parameter is not specified, the default business space is accessed. You can obtain the key on the business management page of the Alibaba Cloud account.
   * 
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * The ID of the associated knowledge.
   * 
   * This parameter is required.
   * 
   * @example
   * 30002654628
   */
  connQuestionId?: number;
  /**
   * @remarks
   * The knowledge ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 30002174773
   */
  knowledgeId?: number;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      connQuestionId: 'ConnQuestionId',
      knowledgeId: 'KnowledgeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      connQuestionId: 'number',
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

