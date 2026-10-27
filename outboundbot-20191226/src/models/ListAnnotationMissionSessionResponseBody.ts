// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAnnotationMissionSessionResponseBodyDataAnnotationMissionSessionListAnnotationMissionChatListAnnotationMissionChatCustomizationDataInfoList extends $dara.Model {
  /**
   * @remarks
   * ID
   * 
   * @example
   * 03f56192-fa8a-40dc-9558-39b357f0618f
   */
  annotationMissionChatCustomizationDataInfoId?: string;
  /**
   * @remarks
   * ChatID
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
   * The speech annotation text.
   * 
   * @example
   * I apologize for any inconvenience caused. I will not bother you anymore. Have a nice day and goodbye
   */
  content?: string;
  /**
   * @remarks
   * Indicates whether the item is created.
   * 
   * @example
   * true
   */
  create?: boolean;
  /**
   * @remarks
   * The creation time. The value is a UNIX timestamp in milliseconds.
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
   * Default data
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
   * Default data
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
   * Indicates whether the item is deleted.
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
   * The modification time. The value is a UNIX timestamp in milliseconds.
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
   * ChatID
   * 
   * @example
   * 77343553-cbc2-4487-a35c-869f1e86c573
   */
  annotationMissionChatId?: string;
  /**
   * @remarks
   * ID
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
   * The robot ID.
   * 
   * @example
   * 77343553-cbc2-4487-a35c-869f1e86c573
   */
  botId?: string;
  /**
   * @remarks
   * The modified question.
   * 
   * @example
   * []
   */
  content?: string;
  /**
   * @remarks
   * Indicates whether the item is created.
   * 
   * @example
   * false
   */
  create?: boolean;
  /**
   * @remarks
   * The creation time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1682216045619
   */
  createTime?: number;
  /**
   * @remarks
   * Indicates whether the item is deleted.
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
   * The modification time. The value is a UNIX timestamp in milliseconds.
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
   * ChatID
   * 
   * @example
   * 03f56192-fa8a-40dc-9558-39b357f0618f
   */
  annotationMissionChatId?: string;
  /**
   * @remarks
   * The ID of the annotation chat tag.
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
   * TagID
   * 
   * @example
   * 03f56192-fa8a-40dc-9558-39b357f0618f
   */
  annotationMissionTagInfoId?: string;
  /**
   * @remarks
   * The name of the tag.
   * 
   * @example
   * Tag
   */
  annotationMissionTagInfoName?: string;
  /**
   * @remarks
   * Indicates whether the item is created.
   * 
   * @example
   * true
   */
  create?: boolean;
  /**
   * @remarks
   * The creation time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1686797050000
   */
  createTime?: number;
  /**
   * @remarks
   * Indicates whether the item is deleted.
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
   * The modification time. The value is a UNIX timestamp in milliseconds.
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
   * ChatID
   * 
   * @example
   * 77343553-cbc2-4487-a35c-869f1e86c573
   */
  annotationMissionChatId?: string;
  /**
   * @remarks
   * ID
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
   * Indicates whether the item is created.
   * 
   * @example
   * true
   */
  create?: boolean;
  /**
   * @remarks
   * The creation time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1675218421941
   */
  createTime?: number;
  /**
   * @remarks
   * Indicates whether the item is deleted.
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
   * The modification time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1676272557653
   */
  modifiedTime?: number;
  /**
   * @remarks
   * The hot word annotation content.
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
   * Description
   */
  vocabularyDescription?: string;
  /**
   * @remarks
   * The hot word ID.
   * 
   * @example
   * 77343553-cbc2-4487-a35c-869f1e86c573
   */
  vocabularyId?: string;
  /**
   * @remarks
   * The vocabulary name.
   * 
   * @example
   * Name
   */
  vocabularyName?: string;
  /**
   * @remarks
   * The hot word weight. Valid values: -6 to 5.
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
   * The manual ASR annotation text result, which is used to calculate the character accuracy rate.
   * 
   * @example
   * []
   */
  annotationAsrResult?: string;
  /**
   * @remarks
   * The language model annotation information list for the chat annotation task.
   */
  annotationMissionChatCustomizationDataInfoList?: ListAnnotationMissionSessionResponseBodyDataAnnotationMissionSessionListAnnotationMissionChatListAnnotationMissionChatCustomizationDataInfoList[];
  /**
   * @remarks
   * chat id
   * 
   * @example
   * 40669e52-c1c8-487f-9593-29749086bdc9
   */
  annotationMissionChatId?: string;
  /**
   * @remarks
   * The chat intent list.
   */
  annotationMissionChatIntentUserSayInfoList?: ListAnnotationMissionSessionResponseBodyDataAnnotationMissionSessionListAnnotationMissionChatListAnnotationMissionChatIntentUserSayInfoList[];
  /**
   * @remarks
   * The list of tag mappings bound to the annotation chat.
   */
  annotationMissionChatTagInfoList?: ListAnnotationMissionSessionResponseBodyDataAnnotationMissionSessionListAnnotationMissionChatListAnnotationMissionChatTagInfoList[];
  /**
   * @remarks
   * The hot word annotation information list for the chat annotation task.
   */
  annotationMissionChatVocabularyInfoList?: ListAnnotationMissionSessionResponseBodyDataAnnotationMissionSessionListAnnotationMissionChatListAnnotationMissionChatVocabularyInfoList[];
  /**
   * @remarks
   * The annotation mission ID.
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
   * The chat annotation status. Valid values:
   * - 0: Pending (UNDO).
   * - 1: In progress (DOING).
   * - 2: Completed (DONE).
   * - 3: Canceled (CLOSED).
   * 
   * @example
   * 1
   */
  annotationStatus?: number;
  /**
   * @remarks
   * The reply content of the robot.
   * 
   * @example
   * {\\"Answer\\": u\\"\\u53c2\\u8003\\u6587\\u6863\\uff1ahttps://help.aliyun.com/document_detail/215402.html\\", \\"QuestionId\\": 371159, \\"Uuid\\": \\"ac14000116781568127896224d0044\\"}
   */
  answer?: string;
  /**
   * @remarks
   * The ASR annotation status. Valid values:
   * - 0: Pending (UNDO).
   * - 1: In progress (DOING).
   * - 2: Completed (DONE).
   * - 3: Canceled (CLOSED).
   * 
   * @example
   * 1
   */
  asrAnnotationStatus?: number;
  /**
   * @remarks
   * The creation time. The value is a UNIX timestamp in milliseconds.
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
   * The semantic annotation status. Valid values:
   * - 0: Pending (UNDO).
   * - 1: In progress (DOING).
   * - 2: Completed (DONE).
   * - 3: Canceled (CLOSED).
   * 
   * @example
   * 1
   */
  intentAnnotationStatus?: number;
  /**
   * @remarks
   * The modification time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1571649300000
   */
  modifiedTime?: number;
  /**
   * @remarks
   * The trigger time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1682390676403
   */
  occurTime?: number;
  /**
   * @remarks
   * The ASR recognition result.
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
   * The annotation action. Valid values:
   * - 1: Correct.
   * - 20: Matching error, not optimized.
   * - 21: Matching error, optimized.
   * - 3: Not covered.
   * - 4: Invalid.
   * 
   * @example
   * 1
   */
  subStatus?: number;
  /**
   * @remarks
   * The tag annotation status. Valid values:
   * - 0: Pending (UNDO).
   * - 1: In progress (DOING).
   * - 2: Completed (DONE).
   * - 3: Canceled (CLOSED).
   * 
   * @example
   * 1
   */
  tagAnnotationStatus?: number;
  /**
   * @remarks
   * Indicates whether a transcription error occurred. Valid values:
   * - 0: No.
   * - 1: Yes.
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
   * The chat list.
   */
  annotationMissionChatList?: ListAnnotationMissionSessionResponseBodyDataAnnotationMissionSessionListAnnotationMissionChatList[];
  /**
   * @remarks
   * The annotation mission ID.
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
   * The annotation status. Valid values:
   * - 0: Pending (UNDO).
   * - 1: In progress (DOING).
   * - 2: Completed (DONE).
   * - 3: Canceled (CLOSED).
   * 
   * @example
   * 1
   */
  annotationStatus?: number;
  /**
   * @remarks
   * The creation time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1691117009000
   */
  createTime?: number;
  /**
   * @remarks
   * The debug conversation.
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
   * The job group ID.
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
   * The modification time. The value is a UNIX timestamp in milliseconds.
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
   * The session ID. This is the task ID for outbound robots and the conversation ID for voice navigator robots.
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
   * The session list.
   */
  annotationMissionSessionList?: ListAnnotationMissionSessionResponseBodyDataAnnotationMissionSessionList[];
  /**
   * @remarks
   * The additional information. If the request is successful, success is returned. If the request fails, a specific error code is returned.
   * 
   * @example
   * bp.java.nopowerContact
   */
  message?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. Valid values:
   * - true: The call is successful.
   * - false: The call fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total count.
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
   * The API status code.
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
   * The additional information. If the request is successful, success is returned. If the request fails, a specific error code is returned.
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
   * Indicates whether the call is successful. Valid values:
   * - true: The call is successful.
   * - false: The call fails.
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

