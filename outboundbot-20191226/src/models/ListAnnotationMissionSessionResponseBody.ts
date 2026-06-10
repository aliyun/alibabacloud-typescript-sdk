// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAnnotationMissionSessionResponseBodyDataAnnotationMissionSessionListAnnotationMissionChatListAnnotationMissionChatCustomizationDataInfoList extends $dara.Model {
  /**
   * @remarks
   * The ID.
   * 
   * @example
   * 03f56192-fa8a-40dc-9558-39b357f0618f
   */
  annotationMissionChatCustomizationDataInfoId?: string;
  /**
   * @remarks
   * The chat ID.
   * 
   * @example
   * 03f56192-fa8a-40dc-9558-39b357f0618f
   */
  annotationMissionChatId?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 2f03b24a-fda2-4501-90ba-0a9a59f8dd9d
   */
  annotationMissionId?: string;
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * 03f56192-fa8a-40dc-9558-39b357f0618f
   */
  annotationMissionSessionId?: string;
  /**
   * @remarks
   * The text of the voice annotation.
   * 
   * @example
   * 抱歉哈，可能给您造成困扰了，这边先不打扰您，祝您生活愉快，再见
   */
  content?: string;
  /**
   * @remarks
   * Indicates whether the data is created.
   * 
   * @example
   * true
   */
  create?: boolean;
  /**
   * @remarks
   * The time when the information was created.
   * 
   * @example
   * 1682216045619
   */
  createTime?: number;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * 默认数据
   */
  customizationDataDescription?: string;
  /**
   * @remarks
   * The custom data ID.
   * 
   * @example
   * 03f56192-fa8a-40dc-9558-39b357f0618f
   */
  customizationDataId?: string;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * 默认数据
   */
  customizationDataName?: string;
  /**
   * @remarks
   * The weight of the language model data.
   * 
   * @example
   * 1
   */
  customizationDataWeight?: number;
  /**
   * @remarks
   * Indicates whether the data is deleted.
   * 
   * @example
   * true
   */
  delete?: boolean;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * d3fbfca8-4208-4d4b-a53a-c4dba5e43a66
   */
  instanceId?: string;
  /**
   * @remarks
   * The time when the information was last modified.
   * 
   * @example
   * 1679552585384
   */
  modifiedTime?: number;
  static names(): { [key: string]: string } {
    return {
      annotationMissionChatCustomizationDataInfoId: 'AnnotationMissionChatCustomizationDataInfoId',
      annotationMissionChatId: 'AnnotationMissionChatId',
      annotationMissionId: 'AnnotationMissionId',
      annotationMissionSessionId: 'AnnotationMissionSessionId',
      content: 'Content',
      create: 'Create',
      createTime: 'CreateTime',
      customizationDataDescription: 'CustomizationDataDescription',
      customizationDataId: 'CustomizationDataId',
      customizationDataName: 'CustomizationDataName',
      customizationDataWeight: 'CustomizationDataWeight',
      delete: 'Delete',
      instanceId: 'InstanceId',
      modifiedTime: 'ModifiedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      annotationMissionChatCustomizationDataInfoId: 'string',
      annotationMissionChatId: 'string',
      annotationMissionId: 'string',
      annotationMissionSessionId: 'string',
      content: 'string',
      create: 'boolean',
      createTime: 'number',
      customizationDataDescription: 'string',
      customizationDataId: 'string',
      customizationDataName: 'string',
      customizationDataWeight: 'number',
      delete: 'boolean',
      instanceId: 'string',
      modifiedTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAnnotationMissionSessionResponseBodyDataAnnotationMissionSessionListAnnotationMissionChatListAnnotationMissionChatIntentUserSayInfoList extends $dara.Model {
  /**
   * @remarks
   * The chat ID.
   * 
   * @example
   * 77343553-cbc2-4487-a35c-869f1e86c573
   */
  annotationMissionChatId?: string;
  /**
   * @remarks
   * The ID.
   * 
   * @example
   * 03f56192-fa8a-40dc-9558-39b357f0618f
   */
  annotationMissionChatIntentUserSayInfoId?: string;
  /**
   * @remarks
   * The annotation task ID.
   * 
   * @example
   * 77343553-cbc2-4487-a35c-869f1e86c573
   */
  annotationMissionId?: string;
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * 77343553-cbc2-4487-a35c-869f1e86c573
   */
  annotationMissionSessionId?: string;
  /**
   * @remarks
   * The bot ID.
   * 
   * @example
   * 77343553-cbc2-4487-a35c-869f1e86c573
   */
  botId?: string;
  /**
   * @remarks
   * The modified query.
   * 
   * @example
   * []
   */
  content?: string;
  /**
   * @remarks
   * Created.
   * 
   * @example
   * false
   */
  create?: boolean;
  /**
   * @remarks
   * The time when the intent was created.
   * 
   * @example
   * 1682216045619
   */
  createTime?: number;
  /**
   * @remarks
   * Deleted
   * 
   * @example
   * true
   */
  delete?: boolean;
  /**
   * @remarks
   * The dialog ID.
   * 
   * @example
   * 29921312
   */
  dialogId?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * 77343553-cbc2-4487-a35c-869f1e86c573
   */
  instanceId?: string;
  /**
   * @remarks
   * The intent ID.
   * 
   * @example
   * 11234112
   */
  intentId?: number;
  /**
   * @remarks
   * The time when the intent was last modified.
   * 
   * @example
   * 1682216045619
   */
  modifiedTime?: number;
  static names(): { [key: string]: string } {
    return {
      annotationMissionChatId: 'AnnotationMissionChatId',
      annotationMissionChatIntentUserSayInfoId: 'AnnotationMissionChatIntentUserSayInfoId',
      annotationMissionId: 'AnnotationMissionId',
      annotationMissionSessionId: 'AnnotationMissionSessionId',
      botId: 'BotId',
      content: 'Content',
      create: 'Create',
      createTime: 'CreateTime',
      delete: 'Delete',
      dialogId: 'DialogId',
      instanceId: 'InstanceId',
      intentId: 'IntentId',
      modifiedTime: 'ModifiedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      annotationMissionChatId: 'string',
      annotationMissionChatIntentUserSayInfoId: 'string',
      annotationMissionId: 'string',
      annotationMissionSessionId: 'string',
      botId: 'string',
      content: 'string',
      create: 'boolean',
      createTime: 'number',
      delete: 'boolean',
      dialogId: 'number',
      instanceId: 'string',
      intentId: 'number',
      modifiedTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAnnotationMissionSessionResponseBodyDataAnnotationMissionSessionListAnnotationMissionChatListAnnotationMissionChatTagInfoList extends $dara.Model {
  /**
   * @remarks
   * The chat ID.
   * 
   * @example
   * 03f56192-fa8a-40dc-9558-39b357f0618f
   */
  annotationMissionChatId?: string;
  /**
   * @remarks
   * The ID of the chat tag information for the comment.
   * 
   * @example
   * 03f56192-fa8a-40dc-9558-39b357f0618f
   */
  annotationMissionChatTagInfoId?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * e7272cbb-a60d-4b41-b5c4-8863edc0b8f7
   */
  annotationMissionId?: string;
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * 03f56192-fa8a-40dc-9558-39b357f0618f
   */
  annotationMissionSessionId?: string;
  /**
   * @remarks
   * The tag ID.
   * 
   * @example
   * 03f56192-fa8a-40dc-9558-39b357f0618f
   */
  annotationMissionTagInfoId?: string;
  /**
   * @remarks
   * The tag name.
   * 
   * @example
   * 标签
   */
  annotationMissionTagInfoName?: string;
  /**
   * @remarks
   * Create
   * 
   * @example
   * true
   */
  create?: boolean;
  /**
   * @remarks
   * The time when the tag was created.
   * 
   * @example
   * 1686797050000
   */
  createTime?: number;
  /**
   * @remarks
   * Delete.
   * 
   * @example
   * true
   */
  delete?: boolean;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * 32be9d94-1346-4c4a-a4d0-ccd379f87013
   */
  instanceId?: string;
  /**
   * @remarks
   * The time when the tag was last modified.
   * 
   * @example
   * 1679019660000
   */
  modifiedTime?: number;
  static names(): { [key: string]: string } {
    return {
      annotationMissionChatId: 'AnnotationMissionChatId',
      annotationMissionChatTagInfoId: 'AnnotationMissionChatTagInfoId',
      annotationMissionId: 'AnnotationMissionId',
      annotationMissionSessionId: 'AnnotationMissionSessionId',
      annotationMissionTagInfoId: 'AnnotationMissionTagInfoId',
      annotationMissionTagInfoName: 'AnnotationMissionTagInfoName',
      create: 'Create',
      createTime: 'CreateTime',
      delete: 'Delete',
      instanceId: 'InstanceId',
      modifiedTime: 'ModifiedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      annotationMissionChatId: 'string',
      annotationMissionChatTagInfoId: 'string',
      annotationMissionId: 'string',
      annotationMissionSessionId: 'string',
      annotationMissionTagInfoId: 'string',
      annotationMissionTagInfoName: 'string',
      create: 'boolean',
      createTime: 'number',
      delete: 'boolean',
      instanceId: 'string',
      modifiedTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAnnotationMissionSessionResponseBodyDataAnnotationMissionSessionListAnnotationMissionChatListAnnotationMissionChatVocabularyInfoList extends $dara.Model {
  /**
   * @remarks
   * The chat ID.
   * 
   * @example
   * 77343553-cbc2-4487-a35c-869f1e86c573
   */
  annotationMissionChatId?: string;
  /**
   * @remarks
   * The ID.
   * 
   * @example
   * 03f56192-fa8a-40dc-9558-39b357f0618f
   */
  annotationMissionChatVocabularyInfoId?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * b3f2c931-5180-43ca-b4aa-2baee2d73c8b
   */
  annotationMissionId?: string;
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * 77343553-cbc2-4487-a35c-869f1e86c573
   */
  annotationMissionSessionId?: string;
  /**
   * @remarks
   * Created
   * 
   * @example
   * true
   */
  create?: boolean;
  /**
   * @remarks
   * The time when the resource was created.
   * 
   * @example
   * 1675218421941
   */
  createTime?: number;
  /**
   * @remarks
   * Deleted
   * 
   * @example
   * true
   */
  delete?: boolean;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * 818961ce-d9ba-4f88-89ca-2a04b24bdf01
   */
  instanceId?: string;
  /**
   * @remarks
   * The time when the hotword was last modified.
   * 
   * @example
   * 1676272557653
   */
  modifiedTime?: number;
  /**
   * @remarks
   * The content of the hotword annotation.
   * 
   * @example
   * []
   */
  vocabulary?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * 描述
   */
  vocabularyDescription?: string;
  /**
   * @remarks
   * The hotword ID.
   * 
   * @example
   * 77343553-cbc2-4487-a35c-869f1e86c573
   */
  vocabularyId?: string;
  /**
   * @remarks
   * The name of the vocabulary.
   * 
   * @example
   * 名称
   */
  vocabularyName?: string;
  /**
   * @remarks
   * The weight of the hotword. The value ranges from -6 to 5.
   * 
   * @example
   * 0
   */
  vocabularyWeight?: number;
  static names(): { [key: string]: string } {
    return {
      annotationMissionChatId: 'AnnotationMissionChatId',
      annotationMissionChatVocabularyInfoId: 'AnnotationMissionChatVocabularyInfoId',
      annotationMissionId: 'AnnotationMissionId',
      annotationMissionSessionId: 'AnnotationMissionSessionId',
      create: 'Create',
      createTime: 'CreateTime',
      delete: 'Delete',
      instanceId: 'InstanceId',
      modifiedTime: 'ModifiedTime',
      vocabulary: 'Vocabulary',
      vocabularyDescription: 'VocabularyDescription',
      vocabularyId: 'VocabularyId',
      vocabularyName: 'VocabularyName',
      vocabularyWeight: 'VocabularyWeight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      annotationMissionChatId: 'string',
      annotationMissionChatVocabularyInfoId: 'string',
      annotationMissionId: 'string',
      annotationMissionSessionId: 'string',
      create: 'boolean',
      createTime: 'number',
      delete: 'boolean',
      instanceId: 'string',
      modifiedTime: 'number',
      vocabulary: 'string',
      vocabularyDescription: 'string',
      vocabularyId: 'string',
      vocabularyName: 'string',
      vocabularyWeight: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAnnotationMissionSessionResponseBodyDataAnnotationMissionSessionListAnnotationMissionChatList extends $dara.Model {
  /**
   * @remarks
   * The result of manual ASR annotation, used to calculate character accuracy.
   * 
   * @example
   * []
   */
  annotationAsrResult?: string;
  /**
   * @remarks
   * The table of language model annotation information for the annotation task chat.
   */
  annotationMissionChatCustomizationDataInfoList?: ListAnnotationMissionSessionResponseBodyDataAnnotationMissionSessionListAnnotationMissionChatListAnnotationMissionChatCustomizationDataInfoList[];
  /**
   * @remarks
   * The chat ID.
   * 
   * @example
   * 40669e52-c1c8-487f-9593-29749086bdc9
   */
  annotationMissionChatId?: string;
  /**
   * @remarks
   * The list of chat intents.
   */
  annotationMissionChatIntentUserSayInfoList?: ListAnnotationMissionSessionResponseBodyDataAnnotationMissionSessionListAnnotationMissionChatListAnnotationMissionChatIntentUserSayInfoList[];
  /**
   * @remarks
   * The list of mappings between chat annotation information and attached tags.
   */
  annotationMissionChatTagInfoList?: ListAnnotationMissionSessionResponseBodyDataAnnotationMissionSessionListAnnotationMissionChatListAnnotationMissionChatTagInfoList[];
  /**
   * @remarks
   * The table of hotword annotation information for the annotation task chat.
   */
  annotationMissionChatVocabularyInfoList?: ListAnnotationMissionSessionResponseBodyDataAnnotationMissionSessionListAnnotationMissionChatListAnnotationMissionChatVocabularyInfoList[];
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 03f56192-fa8a-40dc-9558-39b357f0618f
   */
  annotationMissionId?: string;
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * 03f56192-fa8a-40dc-9558-39b357f0618f
   */
  annotationMissionSessionId?: string;
  /**
   * @remarks
   * The annotation status of the chat.
   * 
   * - 0: UNDO
   * 
   * - 1: DOING
   * 
   * - 2: DONE
   * 
   * - 3: CLOSED
   * 
   * @example
   * 1
   */
  annotationStatus?: number;
  /**
   * @remarks
   * The content of the bot\\"s reply.
   * 
   * @example
   * {\\"Answer\\": u\\"\\u53c2\\u8003\\u6587\\u6863\\uff1ahttps://help.aliyun.com/document_detail/215402.html\\", \\"QuestionId\\": 371159, \\"Uuid\\": \\"ac14000116781568127896224d0044\\"}
   */
  answer?: string;
  /**
   * @remarks
   * The status of Automatic Speech Recognition (ASR) annotation.
   * 
   * - 0: UNDO
   * 
   * - 1: DOING
   * 
   * - 2: DONE
   * 
   * - 3: CLOSED
   * 
   * @example
   * 1
   */
  asrAnnotationStatus?: number;
  /**
   * @remarks
   * The time when the chat was created.
   * 
   * @example
   * 1682216045619
   */
  createTime?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * 77343553-cbc2-4487-a35c-869f1e86c573
   */
  instanceId?: string;
  /**
   * @remarks
   * The status of semantic tagging.
   * 
   * - 0: UNDO
   * 
   * - 1: DOING
   * 
   * - 2: DONE
   * 
   * - 3: CLOSED
   * 
   * @example
   * 1
   */
  intentAnnotationStatus?: number;
  /**
   * @remarks
   * The time when the chat was last modified.
   * 
   * @example
   * 1571649300000
   */
  modifiedTime?: number;
  /**
   * @remarks
   * The time when the chat was triggered.
   * 
   * @example
   * 1682390676403
   */
  occurTime?: number;
  /**
   * @remarks
   * The ASR result.
   * 
   * @example
   * []
   */
  originalAsrResult?: string;
  /**
   * @remarks
   * The sequence ID.
   * 
   * @example
   * 380578077
   */
  sequenceId?: string;
  /**
   * @remarks
   * The annotation action. 1: Correct. 20: Matching error, not optimized. 21: Matching error, optimized. 3: Uncovered. 4: Invalid.
   * 
   * @example
   * 1
   */
  subStatus?: number;
  /**
   * @remarks
   * The status of tag annotation.
   * 
   * - 0: UNDO
   * 
   * - 1: DOING
   * 
   * - 2: DONE
   * 
   * - 3: CLOSED
   * 
   * @example
   * 1
   */
  tagAnnotationStatus?: number;
  /**
   * @remarks
   * Indicates a transcription error.
   * 
   * - 0: No
   * 
   * - 1: Yes
   * 
   * @example
   * 1
   */
  translationError?: number;
  static names(): { [key: string]: string } {
    return {
      annotationAsrResult: 'AnnotationAsrResult',
      annotationMissionChatCustomizationDataInfoList: 'AnnotationMissionChatCustomizationDataInfoList',
      annotationMissionChatId: 'AnnotationMissionChatId',
      annotationMissionChatIntentUserSayInfoList: 'AnnotationMissionChatIntentUserSayInfoList',
      annotationMissionChatTagInfoList: 'AnnotationMissionChatTagInfoList',
      annotationMissionChatVocabularyInfoList: 'AnnotationMissionChatVocabularyInfoList',
      annotationMissionId: 'AnnotationMissionId',
      annotationMissionSessionId: 'AnnotationMissionSessionId',
      annotationStatus: 'AnnotationStatus',
      answer: 'Answer',
      asrAnnotationStatus: 'AsrAnnotationStatus',
      createTime: 'CreateTime',
      instanceId: 'InstanceId',
      intentAnnotationStatus: 'IntentAnnotationStatus',
      modifiedTime: 'ModifiedTime',
      occurTime: 'OccurTime',
      originalAsrResult: 'OriginalAsrResult',
      sequenceId: 'SequenceId',
      subStatus: 'SubStatus',
      tagAnnotationStatus: 'TagAnnotationStatus',
      translationError: 'TranslationError',
    };
  }

  static types(): { [key: string]: any } {
    return {
      annotationAsrResult: 'string',
      annotationMissionChatCustomizationDataInfoList: { 'type': 'array', 'itemType': ListAnnotationMissionSessionResponseBodyDataAnnotationMissionSessionListAnnotationMissionChatListAnnotationMissionChatCustomizationDataInfoList },
      annotationMissionChatId: 'string',
      annotationMissionChatIntentUserSayInfoList: { 'type': 'array', 'itemType': ListAnnotationMissionSessionResponseBodyDataAnnotationMissionSessionListAnnotationMissionChatListAnnotationMissionChatIntentUserSayInfoList },
      annotationMissionChatTagInfoList: { 'type': 'array', 'itemType': ListAnnotationMissionSessionResponseBodyDataAnnotationMissionSessionListAnnotationMissionChatListAnnotationMissionChatTagInfoList },
      annotationMissionChatVocabularyInfoList: { 'type': 'array', 'itemType': ListAnnotationMissionSessionResponseBodyDataAnnotationMissionSessionListAnnotationMissionChatListAnnotationMissionChatVocabularyInfoList },
      annotationMissionId: 'string',
      annotationMissionSessionId: 'string',
      annotationStatus: 'number',
      answer: 'string',
      asrAnnotationStatus: 'number',
      createTime: 'number',
      instanceId: 'string',
      intentAnnotationStatus: 'number',
      modifiedTime: 'number',
      occurTime: 'number',
      originalAsrResult: 'string',
      sequenceId: 'string',
      subStatus: 'number',
      tagAnnotationStatus: 'number',
      translationError: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.annotationMissionChatCustomizationDataInfoList)) {
      $dara.Model.validateArray(this.annotationMissionChatCustomizationDataInfoList);
    }
    if(Array.isArray(this.annotationMissionChatIntentUserSayInfoList)) {
      $dara.Model.validateArray(this.annotationMissionChatIntentUserSayInfoList);
    }
    if(Array.isArray(this.annotationMissionChatTagInfoList)) {
      $dara.Model.validateArray(this.annotationMissionChatTagInfoList);
    }
    if(Array.isArray(this.annotationMissionChatVocabularyInfoList)) {
      $dara.Model.validateArray(this.annotationMissionChatVocabularyInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAnnotationMissionSessionResponseBodyDataAnnotationMissionSessionList extends $dara.Model {
  /**
   * @remarks
   * The list of chats.
   */
  annotationMissionChatList?: ListAnnotationMissionSessionResponseBodyDataAnnotationMissionSessionListAnnotationMissionChatList[];
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 64ba5ac9-a4e1-4333-b03c-9d4a588c9f6c
   */
  annotationMissionId?: string;
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * 64ba5ac9-a4e1-4333-b03c-9d4a588c9f6c
   */
  annotationMissionSessionId?: string;
  /**
   * @remarks
   * The annotation status.
   * 
   * - 0: UNDO
   * 
   * - 1: DOING
   * 
   * - 2: DONE
   * 
   * - 3: CLOSED
   * 
   * @example
   * 1
   */
  annotationStatus?: number;
  /**
   * @remarks
   * The time when the session was created.
   * 
   * @example
   * 1691117009000
   */
  createTime?: number;
  /**
   * @remarks
   * Debug conversation
   * 
   * @example
   * true
   */
  debugConversation?: boolean;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * a4274627-265f-4e14-b2d6-4ee7d4f8593e
   */
  instanceId?: string;
  /**
   * @remarks
   * The task group ID.
   * 
   * @example
   * 2f642da1-b00b-4dd6-ac7d-dcbeefd13ff3
   */
  jobGroupId?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 42da7cde-a5e8-45cc-b9d2-828711d95b30
   */
  jobId?: string;
  /**
   * @remarks
   * The time when the session was last modified.
   * 
   * @example
   * 1677987898384
   */
  modifiedTime?: number;
  /**
   * @remarks
   * The scenario ID.
   * 
   * @example
   * 408d6c4d-23e2-41f6-bbdd-f919a8297aa4
   */
  scriptId?: string;
  /**
   * @remarks
   * The ID of the task in the outbound call system, or the ID of the conversation in the navigation system.
   * 
   * @example
   * 40669e52-c1c8-487f-9593-29749086bdc9
   */
  sessionId?: string;
  /**
   * @remarks
   * The version number.
   * 
   * @example
   * 1
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      annotationMissionChatList: 'AnnotationMissionChatList',
      annotationMissionId: 'AnnotationMissionId',
      annotationMissionSessionId: 'AnnotationMissionSessionId',
      annotationStatus: 'AnnotationStatus',
      createTime: 'CreateTime',
      debugConversation: 'DebugConversation',
      instanceId: 'InstanceId',
      jobGroupId: 'JobGroupId',
      jobId: 'JobId',
      modifiedTime: 'ModifiedTime',
      scriptId: 'ScriptId',
      sessionId: 'SessionId',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      annotationMissionChatList: { 'type': 'array', 'itemType': ListAnnotationMissionSessionResponseBodyDataAnnotationMissionSessionListAnnotationMissionChatList },
      annotationMissionId: 'string',
      annotationMissionSessionId: 'string',
      annotationStatus: 'number',
      createTime: 'number',
      debugConversation: 'boolean',
      instanceId: 'string',
      jobGroupId: 'string',
      jobId: 'string',
      modifiedTime: 'number',
      scriptId: 'string',
      sessionId: 'string',
      version: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.annotationMissionChatList)) {
      $dara.Model.validateArray(this.annotationMissionChatList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAnnotationMissionSessionResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * b3f2c931-5180-43ca-b4aa-2baee2d73c8b
   */
  annotationMissionId?: string;
  /**
   * @remarks
   * The list of sessions.
   */
  annotationMissionSessionList?: ListAnnotationMissionSessionResponseBodyDataAnnotationMissionSessionList[];
  /**
   * @remarks
   * Additional information. If the call is successful, \\`success\\` is returned. If the call fails, a specific error code is returned.
   * 
   * @example
   * bp.java.nopowerContact
   */
  message?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. \\`true\\` indicates success. \\`false\\` indicates failure.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 30
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      annotationMissionId: 'AnnotationMissionId',
      annotationMissionSessionList: 'AnnotationMissionSessionList',
      message: 'Message',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      annotationMissionId: 'string',
      annotationMissionSessionList: { 'type': 'array', 'itemType': ListAnnotationMissionSessionResponseBodyDataAnnotationMissionSessionList },
      message: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.annotationMissionSessionList)) {
      $dara.Model.validateArray(this.annotationMissionSessionList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAnnotationMissionSessionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code of the API call.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The data.
   */
  data?: ListAnnotationMissionSessionResponseBodyData;
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
   * Additional information. If the call is successful, \\`success\\` is returned. If the call fails, a specific error code is returned.
   * 
   * @example
   * bp.java.nopowerContact
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. A value of \\`true\\` indicates success. A value of \\`false\\` indicates failure.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListAnnotationMissionSessionResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

