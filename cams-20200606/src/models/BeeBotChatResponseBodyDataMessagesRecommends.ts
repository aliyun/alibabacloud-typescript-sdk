// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BeeBotChatResponseBodyDataMessagesRecommends extends $dara.Model {
  /**
   * @remarks
   * Clarify the identification of the source.
   * 
   * @example
   * KNOWLEDGE
   */
  answerSource?: string;
  /**
   * @remarks
   * Clarify the knowledge ID.
   * 
   * @example
   * 4548
   */
  knowledgeId?: string;
  /**
   * @remarks
   * Clarify the content, which may be the entities of graph Q&A, the knowledge titles of knowledge Q&A, or the column values of table Q&A.
   * 
   * @example
   * Test plain text.
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      answerSource: 'AnswerSource',
      knowledgeId: 'KnowledgeId',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answerSource: 'string',
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

