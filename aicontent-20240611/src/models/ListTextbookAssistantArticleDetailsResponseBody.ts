// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTextbookAssistantArticleDetailsResponseBodyDataQuestionList extends $dara.Model {
  /**
   * @remarks
   * The answer to the question.
   * 
   * @example
   * I\\"m Mike Black
   */
  answer?: string;
  /**
   * @remarks
   * The question content.
   * 
   * @example
   * From the book, how does Mike Black introduce himself?
   */
  question?: string;
  /**
   * @remarks
   * The translation of the question content.
   * 
   * @example
   * According to the article, how does Mike Black introduce himself?
   */
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

export class ListTextbookAssistantArticleDetailsResponseBodyDataSceneList extends $dara.Model {
  /**
   * @remarks
   * The scene description.
   * 
   * @example
   * In the park, you introduce yourself to John and ask his name.
   */
  scene?: string;
  /**
   * @remarks
   * The scene ID.
   * 
   * @example
   * 38cddd70509911efbe6e0c42a106bb02
   */
  sceneId?: string;
  /**
   * @remarks
   * The images related to the current scene.
   */
  sceneImageList?: string[];
  /**
   * @remarks
   * The translation of the scene description.
   * 
   * @example
   * At a cafe, share the story of how you met your friends
   */
  sceneTranslate?: string;
  static names(): { [key: string]: string } {
    return {
      scene: 'scene',
      sceneId: 'sceneId',
      sceneImageList: 'sceneImageList',
      sceneTranslate: 'sceneTranslate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scene: 'string',
      sceneId: 'string',
      sceneImageList: { 'type': 'array', 'itemType': 'string' },
      sceneTranslate: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.sceneImageList)) {
      $dara.Model.validateArray(this.sceneImageList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTextbookAssistantArticleDetailsResponseBodyDataSentenceList extends $dara.Model {
  /**
   * @remarks
   * The sentence analysis and explanation.
   * 
   * @example
   * Subject + be verb (am/is/are) + name
   */
  sentenceAnalysis?: string;
  /**
   * @remarks
   * The sentence ID.
   * 
   * @example
   * 4de677d2509811efbe6e0c42a106bb02
   */
  sentenceId?: string;
  /**
   * @remarks
   * The sentence text.
   * 
   * @example
   * I\\"m Mike Black
   */
  sentenceText?: string;
  static names(): { [key: string]: string } {
    return {
      sentenceAnalysis: 'sentenceAnalysis',
      sentenceId: 'sentenceId',
      sentenceText: 'sentenceText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sentenceAnalysis: 'string',
      sentenceId: 'string',
      sentenceText: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTextbookAssistantArticleDetailsResponseBodyDataTheme extends $dara.Model {
  /**
   * @remarks
   * The images related to the current theme.
   */
  themeImageList?: string[];
  /**
   * @remarks
   * The theme name.
   * 
   * @example
   * Self-awareness and improvement
   */
  themeName?: string;
  /**
   * @remarks
   * The translation of the theme name.
   * 
   * @example
   * Self-awareness, self-management, self-improvement
   */
  themeTranslate?: string;
  static names(): { [key: string]: string } {
    return {
      themeImageList: 'themeImageList',
      themeName: 'themeName',
      themeTranslate: 'themeTranslate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      themeImageList: { 'type': 'array', 'itemType': 'string' },
      themeName: 'string',
      themeTranslate: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.themeImageList)) {
      $dara.Model.validateArray(this.themeImageList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTextbookAssistantArticleDetailsResponseBodyDataTopic extends $dara.Model {
  /**
   * @remarks
   * The images related to the current topic.
   */
  topicImageList?: string[];
  /**
   * @remarks
   * The topic name.
   * 
   * @example
   * Greetings and self-introductions
   */
  topicName?: string;
  /**
   * @remarks
   * The translation of the topic content.
   * 
   * @example
   * Greetings and self-introduction
   */
  topicTranslate?: string;
  static names(): { [key: string]: string } {
    return {
      topicImageList: 'topicImageList',
      topicName: 'topicName',
      topicTranslate: 'topicTranslate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      topicImageList: { 'type': 'array', 'itemType': 'string' },
      topicName: 'string',
      topicTranslate: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.topicImageList)) {
      $dara.Model.validateArray(this.topicImageList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTextbookAssistantArticleDetailsResponseBodyDataWordList extends $dara.Model {
  /**
   * @remarks
   * The word definition.
   * 
   * @example
   * Pleasant; friendly
   */
  wordAnalysis?: string;
  /**
   * @remarks
   * The word ID.
   * 
   * @example
   * a94df134ed8c11eebe6e0c42a106bb02
   */
  wordId?: string;
  /**
   * @remarks
   * The word text.
   * 
   * @example
   * nice
   */
  wordText?: string;
  static names(): { [key: string]: string } {
    return {
      wordAnalysis: 'wordAnalysis',
      wordId: 'wordId',
      wordText: 'wordText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      wordAnalysis: 'string',
      wordId: 'string',
      wordText: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTextbookAssistantArticleDetailsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The article ID.
   * 
   * @example
   * 0c05700d4d9411efbe6e0c42a106bb02
   */
  articleId?: string;
  /**
   * @remarks
   * The question and answer data.
   */
  questionList?: ListTextbookAssistantArticleDetailsResponseBodyDataQuestionList[];
  /**
   * @remarks
   * The scene list.
   */
  sceneList?: ListTextbookAssistantArticleDetailsResponseBodyDataSceneList[];
  /**
   * @remarks
   * The sentence list.
   */
  sentenceList?: ListTextbookAssistantArticleDetailsResponseBodyDataSentenceList[];
  /**
   * @remarks
   * The practice objective.
   * 
   * @example
   * 1. Be able to use the sentence pattern "What\\"s your name? My name is/I\\"m..." to ask and answer during self-introductions.\\n2. Be able to use the sentence pattern "Nice to meet you (too)." to greet new friends
   */
  target?: string;
  /**
   * @remarks
   * The theme information.
   */
  theme?: ListTextbookAssistantArticleDetailsResponseBodyDataTheme;
  /**
   * @remarks
   * The topic information.
   */
  topic?: ListTextbookAssistantArticleDetailsResponseBodyDataTopic;
  /**
   * @remarks
   * The word list.
   */
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

export class ListTextbookAssistantArticleDetailsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data object.
   */
  data?: ListTextbookAssistantArticleDetailsResponseBodyData[];
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * UNKNOWN_ERROR
   */
  errCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Unknown error
   */
  errMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * xxxx-xxxx-xxxx-xxxxxxxx
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the API call is successful.
   * - **true**: Successful.
   * 
   * - **false**: Failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errCode: 'errCode',
      errMessage: 'errMessage',
      httpStatusCode: 'httpStatusCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListTextbookAssistantArticleDetailsResponseBodyData },
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

