// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BeeBotChatResponseBodyDataMessagesKnowledgeRelatedKnowledges } from "./BeeBotChatResponseBodyDataMessagesKnowledgeRelatedKnowledges";


export class BeeBotChatResponseBodyDataMessagesKnowledge extends $dara.Model {
  /**
   * @remarks
   * Distinguish answer types.
   * 
   * @example
   * KnowledgeBase
   */
  answerSource?: string;
  /**
   * @remarks
   * Knowledge category.
   * 
   * @example
   * provident fund.
   */
  category?: string;
  /**
   * @remarks
   * Hit the content of the problem.
   * 
   * @example
   * Provident fund withdrawal, please search for provident fund withdrawal on the homepage and submit the form for handling the matter.
   */
  content?: string;
  /**
   * @remarks
   * Indication of plain/rich text answers.
   * 
   * @example
   * PLAIN_TEXT
   */
  contentType?: string;
  /**
   * @remarks
   * Hit statement.
   * 
   * @example
   * provident fund
   */
  hitStatement?: string;
  /**
   * @remarks
   * The ID of the hit problem in the knowledge base.
   * 
   * @example
   * 735898
   */
  id?: string;
  /**
   * @remarks
   * Related knowledge list.
   */
  relatedKnowledges?: BeeBotChatResponseBodyDataMessagesKnowledgeRelatedKnowledges[];
  /**
   * @remarks
   * Introduction to hit problems.
   * 
   * @example
   * Withdrawal of housing provident fund
   */
  summary?: string;
  /**
   * @remarks
   * Hit the title of the problem.
   * 
   * @example
   * Withdrawal of housing provident fund.
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      answerSource: 'AnswerSource',
      category: 'Category',
      content: 'Content',
      contentType: 'ContentType',
      hitStatement: 'HitStatement',
      id: 'Id',
      relatedKnowledges: 'RelatedKnowledges',
      summary: 'Summary',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answerSource: 'string',
      category: 'string',
      content: 'string',
      contentType: 'string',
      hitStatement: 'string',
      id: 'string',
      relatedKnowledges: { 'type': 'array', 'itemType': BeeBotChatResponseBodyDataMessagesKnowledgeRelatedKnowledges },
      summary: 'string',
      title: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.relatedKnowledges)) {
      $dara.Model.validateArray(this.relatedKnowledges);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

