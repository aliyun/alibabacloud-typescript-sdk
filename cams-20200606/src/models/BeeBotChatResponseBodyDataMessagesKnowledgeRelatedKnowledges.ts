// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BeeBotChatResponseBodyDataMessagesKnowledgeRelatedKnowledges extends $dara.Model {
  /**
   * @remarks
   * The ID of knowledge associated with knowledge.
   * 
   * @example
   * 735899
   */
  knowledgeId?: string;
  /**
   * @remarks
   * The title of related knowledge.
   * 
   * @example
   * Withdrawal of housing provident fund.
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      knowledgeId: 'KnowledgeId',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      knowledgeId: 'string',
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

