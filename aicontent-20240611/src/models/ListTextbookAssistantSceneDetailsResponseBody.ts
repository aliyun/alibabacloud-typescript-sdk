// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTextbookAssistantSceneDetailsResponseBodyDataRoleList extends $dara.Model {
  /**
   * @remarks
   * The role introduction.
   * 
   * @example
   * Carl, a curious boy
   */
  introduction?: string;
  /**
   * @remarks
   * The translation of the role introduction.
   * 
   * @example
   * Carl, a curious boy
   */
  introductionTranslate?: string;
  /**
   * @remarks
   * The role prompt text.
   * 
   * @example
   * Hi Noah, who is that in the photo?
   */
  promoting?: string;
  /**
   * @remarks
   * The translation of the role prompt text.
   * 
   * @example
   * Hi Noah, who is the person in the photo?
   */
  promotingTranslate?: string;
  /**
   * @remarks
   * The role name.
   * 
   * @example
   * Carl
   */
  roleName?: string;
  /**
   * @remarks
   * The translation of the role name.
   * 
   * @example
   * Carl
   */
  roleNameTranslate?: string;
  /**
   * @remarks
   * The role type. A value of 0 indicates the AI questioner, and a value of 1 indicates the responder.
   * 
   * @example
   * 0
   */
  roleType?: string;
  static names(): { [key: string]: string } {
    return {
      introduction: 'introduction',
      introductionTranslate: 'introductionTranslate',
      promoting: 'promoting',
      promotingTranslate: 'promotingTranslate',
      roleName: 'roleName',
      roleNameTranslate: 'roleNameTranslate',
      roleType: 'roleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      introduction: 'string',
      introductionTranslate: 'string',
      promoting: 'string',
      promotingTranslate: 'string',
      roleName: 'string',
      roleNameTranslate: 'string',
      roleType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTextbookAssistantSceneDetailsResponseBodyDataSceneTaskList extends $dara.Model {
  /**
   * @remarks
   * The scene task description.
   * 
   * @example
   * Say that this is your dad\\"s brother.
   */
  sceneTask?: string;
  /**
   * @remarks
   * The translation of the scene task description.
   * 
   * @example
   * Say this is your father\\"s brother
   */
  sceneTaskTranslate?: string;
  static names(): { [key: string]: string } {
    return {
      sceneTask: 'sceneTask',
      sceneTaskTranslate: 'sceneTaskTranslate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sceneTask: 'string',
      sceneTaskTranslate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTextbookAssistantSceneDetailsResponseBodyDataSentenceList extends $dara.Model {
  /**
   * @remarks
   * The sentence analysis and explanation.
   * 
   * @example
   * Is + this + your + family member?
   */
  sentenceAnalysis?: string;
  /**
   * @remarks
   * The sentence ID.
   * 
   * @example
   * a774c6d09c4511eebe6e0c42a106bb02
   */
  sentenceId?: string;
  /**
   * @remarks
   * The sentence text.
   * 
   * @example
   * Is this your sister?
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

export class ListTextbookAssistantSceneDetailsResponseBodyDataTheme extends $dara.Model {
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
   * Family life
   */
  themeName?: string;
  /**
   * @remarks
   * The translation of the theme name.
   * 
   * @example
   * Family and family life
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

export class ListTextbookAssistantSceneDetailsResponseBodyDataTopic extends $dara.Model {
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
   * Introducing family members
   */
  topicName?: string;
  /**
   * @remarks
   * The translation of the topic content.
   * 
   * @example
   * Introducing family members
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

export class ListTextbookAssistantSceneDetailsResponseBodyDataWordList extends $dara.Model {
  /**
   * @remarks
   * The word definition.
   * 
   * @example
   * Home; family
   */
  wordAnalysis?: string;
  /**
   * @remarks
   * The word ID.
   * 
   * @example
   * a94c3337ed8c11eebe6e0c42a106bb02
   */
  wordId?: string;
  /**
   * @remarks
   * The word text.
   * 
   * @example
   * family
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

export class ListTextbookAssistantSceneDetailsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of roles.
   */
  roleList?: ListTextbookAssistantSceneDetailsResponseBodyDataRoleList[];
  /**
   * @remarks
   * The scene description.
   * 
   * @example
   * At school, Carl sees a photo and asks you about your family.
   */
  scene?: string;
  /**
   * @remarks
   * The scene ID.
   * 
   * @example
   * 38c41b7b509911efbe6e0c42a106bb02
   */
  sceneId?: string;
  /**
   * @remarks
   * The images related to the current scene.
   */
  sceneImageList?: string[];
  /**
   * @remarks
   * The list of scene tasks.
   */
  sceneTaskList?: ListTextbookAssistantSceneDetailsResponseBodyDataSceneTaskList[];
  sceneTranslate?: string;
  /**
   * @remarks
   * The list of sentences.
   */
  sentenceList?: ListTextbookAssistantSceneDetailsResponseBodyDataSentenceList[];
  /**
   * @remarks
   * The practice objective.
   * 
   * @example
   * ""
   */
  target?: string;
  /**
   * @remarks
   * The theme information.
   */
  theme?: ListTextbookAssistantSceneDetailsResponseBodyDataTheme;
  /**
   * @remarks
   * The topic information.
   */
  topic?: ListTextbookAssistantSceneDetailsResponseBodyDataTopic;
  /**
   * @remarks
   * The list of words.
   */
  wordList?: ListTextbookAssistantSceneDetailsResponseBodyDataWordList[];
  static names(): { [key: string]: string } {
    return {
      roleList: 'roleList',
      scene: 'scene',
      sceneId: 'sceneId',
      sceneImageList: 'sceneImageList',
      sceneTaskList: 'sceneTaskList',
      sceneTranslate: 'sceneTranslate',
      sentenceList: 'sentenceList',
      target: 'target',
      theme: 'theme',
      topic: 'topic',
      wordList: 'wordList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleList: { 'type': 'array', 'itemType': ListTextbookAssistantSceneDetailsResponseBodyDataRoleList },
      scene: 'string',
      sceneId: 'string',
      sceneImageList: { 'type': 'array', 'itemType': 'string' },
      sceneTaskList: { 'type': 'array', 'itemType': ListTextbookAssistantSceneDetailsResponseBodyDataSceneTaskList },
      sceneTranslate: 'string',
      sentenceList: { 'type': 'array', 'itemType': ListTextbookAssistantSceneDetailsResponseBodyDataSentenceList },
      target: 'string',
      theme: ListTextbookAssistantSceneDetailsResponseBodyDataTheme,
      topic: ListTextbookAssistantSceneDetailsResponseBodyDataTopic,
      wordList: { 'type': 'array', 'itemType': ListTextbookAssistantSceneDetailsResponseBodyDataWordList },
    };
  }

  validate() {
    if(Array.isArray(this.roleList)) {
      $dara.Model.validateArray(this.roleList);
    }
    if(Array.isArray(this.sceneImageList)) {
      $dara.Model.validateArray(this.sceneImageList);
    }
    if(Array.isArray(this.sceneTaskList)) {
      $dara.Model.validateArray(this.sceneTaskList);
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

export class ListTextbookAssistantSceneDetailsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data object.
   */
  data?: ListTextbookAssistantSceneDetailsResponseBodyData[];
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
   * Indicates whether the API call is successful. Valid values:
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
      data: { 'type': 'array', 'itemType': ListTextbookAssistantSceneDetailsResponseBodyData },
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

