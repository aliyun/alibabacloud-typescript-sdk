// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTextbookAssistantArticleDetailsResponseBodyDataQuestionList extends $dara.Model {
  /**
   * @example
   * I\\"m Mike Black
   */
  answer?: string;
  /**
   * @example
   * From the book, how does Mike Black introduce himself?
   */
  question?: string;
  questionTranslate?: string;
  static names(): { [key: string]: string } {
    return {
      answer: 'answer',
      question: 'question',
      questionTranslate: 'questionTranslate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answer: 'string',
      question: 'string',
      questionTranslate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

