// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTextbookAssistantArticleDetailsResponseBodyDataQuestionList extends $dara.Model {
  /**
   * @remarks
   * The answer.
   * 
   * @example
   * I\\"m Mike Black
   */
  answer?: string;
  /**
   * @remarks
   * The question.
   * 
   * @example
   * From the book, how does Mike Black introduce himself?
   */
  question?: string;
  /**
   * @remarks
   * The translated question.
   * 
   * @example
   * 根据文章，迈克·布莱克是如何介绍自己的？
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
   * A list of image URLs for the scene.
   */
  sceneImageList?: string[];
  /**
   * @remarks
   * The translated scene description.
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
   * The sentence analysis.
   * 
   * @example
   * 主语 + be动词（am/is/are） + 姓名.
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
   * A list of image URLs for the theme.
   */
  themeImageList?: string[];
  /**
   * @remarks
   * The theme name.
   * 
   * @example
   * 自我认知与提升
   */
  themeName?: string;
  /**
   * @remarks
   * The translated theme name.
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
   * A list of image URLs for the topic.
   */
  topicImageList?: string[];
  /**
   * @remarks
   * The topic name.
   * 
   * @example
   * 打招呼与自我介绍
   */
  topicName?: string;
  /**
   * @remarks
   * The translated topic name.
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
   * The word analysis.
   * 
   * @example
   * 令人愉快的；友好的
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
   * A list of Q\\&A objects.
   */
  questionList?: ListTextbookAssistantArticleDetailsResponseBodyDataQuestionList[];
  /**
   * @remarks
   * A list of scene objects.
   */
  sceneList?: ListTextbookAssistantArticleDetailsResponseBodyDataSceneList[];
  /**
   * @remarks
   * A list of sentence objects.
   */
  sentenceList?: ListTextbookAssistantArticleDetailsResponseBodyDataSentenceList[];
  /**
   * @remarks
   * The learning objectives.
   * 
   * @example
   * 1.能够在自我介绍时运用句型“What\\"s your name? My name is/I‘m...”进行询问及回答。\\n2.能够和新朋友运用句型“Nice to meet you(too).”进行问候。
   */
  target?: string;
  /**
   * @remarks
   * The theme object.
   */
  theme?: ListTextbookAssistantArticleDetailsResponseBodyDataTheme;
  /**
   * @remarks
   * The topic object.
   */
  topic?: ListTextbookAssistantArticleDetailsResponseBodyDataTopic;
  /**
   * @remarks
   * A list of word objects.
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
   * An array of article detail objects.
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
   * 未知错误
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
   * The request ID.
   * 
   * @example
   * xxxx-xxxx-xxxx-xxxxxxxx
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates if the API call succeeded.
   * 
   * - **true**: Success
   * 
   * - **false**: Failure
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

