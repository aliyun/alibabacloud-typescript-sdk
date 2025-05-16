// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTextbookAssistantSceneDetailsResponseBodyDataRoleList } from "./ListTextbookAssistantSceneDetailsResponseBodyDataRoleList";
import { ListTextbookAssistantSceneDetailsResponseBodyDataSceneTaskList } from "./ListTextbookAssistantSceneDetailsResponseBodyDataSceneTaskList";
import { ListTextbookAssistantSceneDetailsResponseBodyDataSentenceList } from "./ListTextbookAssistantSceneDetailsResponseBodyDataSentenceList";
import { ListTextbookAssistantSceneDetailsResponseBodyDataTheme } from "./ListTextbookAssistantSceneDetailsResponseBodyDataTheme";
import { ListTextbookAssistantSceneDetailsResponseBodyDataTopic } from "./ListTextbookAssistantSceneDetailsResponseBodyDataTopic";
import { ListTextbookAssistantSceneDetailsResponseBodyDataWordList } from "./ListTextbookAssistantSceneDetailsResponseBodyDataWordList";


export class ListTextbookAssistantSceneDetailsResponseBodyData extends $dara.Model {
  roleList?: ListTextbookAssistantSceneDetailsResponseBodyDataRoleList[];
  /**
   * @example
   * At school, Carl sees a photo and asks you about your family.
   */
  scene?: string;
  /**
   * @example
   * 38c41b7b509911efbe6e0c42a106bb02
   */
  sceneId?: string;
  sceneImageList?: string[];
  sceneTaskList?: ListTextbookAssistantSceneDetailsResponseBodyDataSceneTaskList[];
  sentenceList?: ListTextbookAssistantSceneDetailsResponseBodyDataSentenceList[];
  /**
   * @example
   * ""
   */
  target?: string;
  theme?: ListTextbookAssistantSceneDetailsResponseBodyDataTheme;
  topic?: ListTextbookAssistantSceneDetailsResponseBodyDataTopic;
  wordList?: ListTextbookAssistantSceneDetailsResponseBodyDataWordList[];
  static names(): { [key: string]: string } {
    return {
      roleList: 'roleList',
      scene: 'scene',
      sceneId: 'sceneId',
      sceneImageList: 'sceneImageList',
      sceneTaskList: 'sceneTaskList',
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

