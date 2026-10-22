// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSimQuestionRequest extends $dara.Model {
  /**
   * @remarks
   * The business space key. If not specified, the default business space is accessed. You can obtain the key value from the business management page of the main account.
   * 
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * The knowledge ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 30001905617
   */
  knowledgeId?: number;
  /**
   * @remarks
   * The title of the similar question. The maximum length is 120 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * Test similar question title
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      knowledgeId: 'KnowledgeId',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      knowledgeId: 'number',
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

