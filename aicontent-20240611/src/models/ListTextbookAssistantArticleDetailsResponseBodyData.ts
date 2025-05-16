// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTextbookAssistantArticleDetailsResponseBodyDataQuestionList } from "./ListTextbookAssistantArticleDetailsResponseBodyDataQuestionList";
import { ListTextbookAssistantArticleDetailsResponseBodyDataSceneList } from "./ListTextbookAssistantArticleDetailsResponseBodyDataSceneList";
import { ListTextbookAssistantArticleDetailsResponseBodyDataSentenceList } from "./ListTextbookAssistantArticleDetailsResponseBodyDataSentenceList";
import { ListTextbookAssistantArticleDetailsResponseBodyDataTheme } from "./ListTextbookAssistantArticleDetailsResponseBodyDataTheme";
import { ListTextbookAssistantArticleDetailsResponseBodyDataTopic } from "./ListTextbookAssistantArticleDetailsResponseBodyDataTopic";
import { ListTextbookAssistantArticleDetailsResponseBodyDataWordList } from "./ListTextbookAssistantArticleDetailsResponseBodyDataWordList";


export class ListTextbookAssistantArticleDetailsResponseBodyData extends $dara.Model {
  /**
   * @example
   * 0c05700d4d9411efbe6e0c42a106bb02
   */
  articleId?: string;
  questionList?: ListTextbookAssistantArticleDetailsResponseBodyDataQuestionList[];
  sceneList?: ListTextbookAssistantArticleDetailsResponseBodyDataSceneList[];
  sentenceList?: ListTextbookAssistantArticleDetailsResponseBodyDataSentenceList[];
  target?: string;
  theme?: ListTextbookAssistantArticleDetailsResponseBodyDataTheme;
  topic?: ListTextbookAssistantArticleDetailsResponseBodyDataTopic;
  wordList?: ListTextbookAssistantArticleDetailsResponseBodyDataWordList[];
  static names(): { [key: string]: string } {
    return {
      articleId: 'articleId',
      questionList: 'questionList',
      sceneList: 'sceneList',
      sentenceList: 'sentenceList',
      target: 'target',
      theme: 'theme',
      topic: 'topic',
      wordList: 'wordList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      articleId: 'string',
      questionList: { 'type': 'array', 'itemType': ListTextbookAssistantArticleDetailsResponseBodyDataQuestionList },
      sceneList: { 'type': 'array', 'itemType': ListTextbookAssistantArticleDetailsResponseBodyDataSceneList },
      sentenceList: { 'type': 'array', 'itemType': ListTextbookAssistantArticleDetailsResponseBodyDataSentenceList },
      target: 'string',
      theme: ListTextbookAssistantArticleDetailsResponseBodyDataTheme,
      topic: ListTextbookAssistantArticleDetailsResponseBodyDataTopic,
      wordList: { 'type': 'array', 'itemType': ListTextbookAssistantArticleDetailsResponseBodyDataWordList },
    };
  }

  validate() {
    if(Array.isArray(this.questionList)) {
      $dara.Model.validateArray(this.questionList);
    }
    if(Array.isArray(this.sceneList)) {
      $dara.Model.validateArray(this.sceneList);
    }
    if(Array.isArray(this.sentenceList)) {
      $dara.Model.validateArray(this.sentenceList);
    }
    if(this.theme && typeof (this.theme as any).validate === 'function') {
      (this.theme as any).validate();
    }
    if(this.topic && typeof (this.topic as any).validate === 'function') {
      (this.topic as any).validate();
    }
    if(Array.isArray(this.wordList)) {
      $dara.Model.validateArray(this.wordList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

