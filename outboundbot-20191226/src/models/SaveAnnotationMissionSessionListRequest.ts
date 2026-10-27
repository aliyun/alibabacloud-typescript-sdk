// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveAnnotationMissionSessionListRequestAnnotationMissionSessionListAnnotationMissionChatListAnnotationMissionChatCustomizationDataInfoList extends $dara.Model {
  /**
   * @remarks
   * ID
   * 
   * @example
   * b598a47a-7c03-45fb-af6b-343950dd9512
   */
  annotationMissionChatCustomizationDataInfoId?: string;
  /**
   * @remarks
   * chat ID
   * 
   * @example
   * 977a45dc-b636-4407-9e98-9f572c709ada
   */
  annotationMissionChatId?: string;
  /**
   * @remarks
   * The annotation task ID.
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
   * 977a45dc-b636-4407-9e98-9f572c709ada
   */
  annotationMissionSessionId?: string;
  /**
   * @remarks
   * The content.
   * 
   * @example
   * You are now proactively invited to apply. This is a rare opportunity. The credit limit is free of charge if left unused and can be used as your reserve fund. The funds can be credited to your account in as fast as 5 minutes. We recommend that you claim the credit limit for free first
   */
  content?: string;
  /**
   * @remarks
   * Specifies whether to create the item.
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
   * 1682316909210
   */
  createTime?: number;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * Default data description
   */
  customizationDataDescription?: string;
  /**
   * @remarks
   * ID
   * 
   * @example
   * 977a45dc-b636-4407-9e98-9f572c709ada
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
   * The language model data weight.
   * 
   * @example
   * 1
   */
  customizationDataWeight?: number;
  /**
   * @remarks
   * Specifies whether to delete the item.
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
   * b598a47a-7c03-45fb-af6b-343950dd9512
   */
  instanceId?: string;
  /**
   * @remarks
   * The modification time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1673438100000
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

export class SaveAnnotationMissionSessionListRequestAnnotationMissionSessionListAnnotationMissionChatListAnnotationMissionChatIntentUserSayInfoList extends $dara.Model {
  /**
   * @remarks
   * chat ID
   * 
   * @example
   * ddce607f-f537-4ebd-9914-cf45671defb9
   */
  annotationMissionChatId?: string;
  /**
   * @remarks
   * ID
   * 
   * @example
   * ddce607f-f537-4ebd-9914-cf45671defb9
   */
  annotationMissionChatIntentUserSayInfoId?: string;
  /**
   * @remarks
   * The annotation task ID.
   * 
   * @example
   * ddce607f-f537-4ebd-9914-cf45671defb9
   */
  annotationMissionId?: string;
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * ddce607f-f537-4ebd-9914-cf45671defb9
   */
  annotationMissionSessionId?: string;
  /**
   * @remarks
   * The robot ID.
   * 
   * @example
   * ddce607f-f537-4ebd-9914-cf45671defb9
   */
  botId?: string;
  /**
   * @remarks
   * The content.
   * 
   * @example
   * []
   */
  content?: string;
  /**
   * @remarks
   * Specifies whether to create the item.
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
   * 1683858248778
   */
  createTime?: number;
  /**
   * @remarks
   * Specifies whether to delete the item.
   * 
   * @example
   * false
   */
  delete?: boolean;
  /**
   * @remarks
   * The dialog ID.
   * 
   * @example
   * 2991201
   */
  dialogId?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * ddce607f-f537-4ebd-9914-cf45671defb9
   */
  instanceId?: string;
  /**
   * @remarks
   * The intent ID.
   * 
   * @example
   * 119839
   */
  intentId?: number;
  /**
   * @remarks
   * The modification time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1683858248778
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

export class SaveAnnotationMissionSessionListRequestAnnotationMissionSessionListAnnotationMissionChatListAnnotationMissionChatTagInfoList extends $dara.Model {
  /**
   * @remarks
   * chat ID
   * 
   * @example
   * 977a45dc-b636-4407-9e98-9f572c709ada
   */
  annotationMissionChatId?: string;
  /**
   * @remarks
   * ID
   * 
   * @example
   * id
   */
  annotationMissionChatTagInfoId?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * 977a45dc-b636-4407-9e98-9f572c709ada
   */
  annotationMissionId?: string;
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * 977a45dc-b636-4407-9e98-9f572c709ada
   */
  annotationMissionSessionId?: string;
  /**
   * @remarks
   * tag ID
   * 
   * @example
   * 977a45dc-b636-4407-9e98-9f572c709ada
   */
  annotationMissionTagInfoId?: string;
  /**
   * @remarks
   * The name of the tag.
   * 
   * @example
   * -
   */
  annotationMissionTagInfoName?: string;
  /**
   * @remarks
   * Specifies whether to create the item.
   * 
   * @example
   * true
   */
  create?: boolean;
  /**
   * @remarks
   * The end time of the annotation mission group.
   * 
   * @example
   * 1679710866060
   */
  createTime?: number;
  /**
   * @remarks
   * Specifies whether to delete the item.
   * 
   * @example
   * false
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
   * 1679710866060
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

export class SaveAnnotationMissionSessionListRequestAnnotationMissionSessionListAnnotationMissionChatListAnnotationMissionChatVocabularyInfoList extends $dara.Model {
  /**
   * @remarks
   * chat ID
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
   * 77343553-cbc2-4487-a35c-869f1e86c573
   */
  annotationMissionChatVocabularyInfoId?: string;
  /**
   * @remarks
   * The annotation task ID.
   * 
   * @example
   * 977a45dc-b636-4407-9e98-9f572c709ada
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
   * Specifies whether to create the item.
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
   * 1677552860720
   */
  createTime?: number;
  /**
   * @remarks
   * Specifies whether to delete the item.
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
   * 77343553-cbc2-4487-a35c-869f1e86c573
   */
  instanceId?: string;
  /**
   * @remarks
   * The modification time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1679283408230
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
   * After-sales consultation
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
   * The processing scenario name.
   * 
   * @example
   * Consultation
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

export class SaveAnnotationMissionSessionListRequestAnnotationMissionSessionListAnnotationMissionChatList extends $dara.Model {
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
   * The language model annotation information table for the annotation task chat.
   */
  annotationMissionChatCustomizationDataInfoList?: SaveAnnotationMissionSessionListRequestAnnotationMissionSessionListAnnotationMissionChatListAnnotationMissionChatCustomizationDataInfoList[];
  /**
   * @remarks
   * chat ID
   * 
   * @example
   * ddce607f-f537-4ebd-9914-cf45671defb9
   */
  annotationMissionChatId?: string;
  /**
   * @remarks
   * The list.
   */
  annotationMissionChatIntentUserSayInfoList?: SaveAnnotationMissionSessionListRequestAnnotationMissionSessionListAnnotationMissionChatListAnnotationMissionChatIntentUserSayInfoList[];
  /**
   * @remarks
   * The mapping list of bound tags for the annotation information chat.
   */
  annotationMissionChatTagInfoList?: SaveAnnotationMissionSessionListRequestAnnotationMissionSessionListAnnotationMissionChatListAnnotationMissionChatTagInfoList[];
  /**
   * @remarks
   * The hot word annotation information table for the annotation task chat.
   */
  annotationMissionChatVocabularyInfoList?: SaveAnnotationMissionSessionListRequestAnnotationMissionSessionListAnnotationMissionChatListAnnotationMissionChatVocabularyInfoList[];
  /**
   * @remarks
   * The annotation task ID.
   * 
   * @example
   * ddce607f-f537-4ebd-9914-cf45671defb9
   */
  annotationMissionId?: string;
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * c88cc004-de69-4eee-aa5f-2efed533a54e
   */
  annotationMissionSessionId?: string;
  /**
   * @remarks
   * The annotation status. Valid values:
   * - 0: Not completed (UNDO).
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
   * {\\"Answer\\": u\\"\\u53c2\\u8003\\u6587\\u6863\\uff1ahttps://help.aliyun.com/document_detail/181325.html\\", \\"QuestionId\\": 372858, \\"Uuid\\": \\"ac14000516762684770197536d0044\\"}
   */
  answer?: string;
  /**
   * @remarks
   * The ASR annotation status. Valid values:
   * - 0: Not completed (UNDO).
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
   * 1679629770336
   */
  createTime?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * 5ec263fa-c8de-46f4-b844-6fb8275bb645
   */
  instanceId?: string;
  /**
   * @remarks
   * The intent annotation status. Valid values:
   * - 0: Not completed (UNDO).
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
   * 1629360780000
   */
  modifiedTime?: number;
  /**
   * @remarks
   * The trigger time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1682493047418
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
   * The sequence number of the current session interaction round.
   * 
   * @example
   * 1475140522
   */
  sequenceId?: string;
  /**
   * @remarks
   * The annotation action. Valid values:
   * - 1: Correct.
   * - 20: Match error, not optimized.
   * - 21: Match error, optimized.
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
   * - 0: Not completed (UNDO).
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
   * Indicates whether a translation error occurred. Valid values:
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
      annotationMissionChatCustomizationDataInfoList: { 'type': 'array', 'itemType': SaveAnnotationMissionSessionListRequestAnnotationMissionSessionListAnnotationMissionChatListAnnotationMissionChatCustomizationDataInfoList },
      annotationMissionChatId: 'string',
      annotationMissionChatIntentUserSayInfoList: { 'type': 'array', 'itemType': SaveAnnotationMissionSessionListRequestAnnotationMissionSessionListAnnotationMissionChatListAnnotationMissionChatIntentUserSayInfoList },
      annotationMissionChatTagInfoList: { 'type': 'array', 'itemType': SaveAnnotationMissionSessionListRequestAnnotationMissionSessionListAnnotationMissionChatListAnnotationMissionChatTagInfoList },
      annotationMissionChatVocabularyInfoList: { 'type': 'array', 'itemType': SaveAnnotationMissionSessionListRequestAnnotationMissionSessionListAnnotationMissionChatListAnnotationMissionChatVocabularyInfoList },
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

export class SaveAnnotationMissionSessionListRequestAnnotationMissionSessionList extends $dara.Model {
  /**
   * @remarks
   * The chat list.
   */
  annotationMissionChatList?: SaveAnnotationMissionSessionListRequestAnnotationMissionSessionListAnnotationMissionChatList[];
  /**
   * @remarks
   * The annotation task ID.
   * 
   * @example
   * c88cc004-de69-4eee-aa5f-2efed533a54e
   */
  annotationMissionId?: string;
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * c88cc004-de69-4eee-aa5f-2efed533a54e
   */
  annotationMissionSessionId?: string;
  /**
   * @remarks
   * The annotation status. Valid values:
   * - 0: Not completed (UNDO).
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
   * 2023-04-14T02:01:23Z
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
   * The job group ID.
   * 
   * @example
   * 29e669bd-a9d1-4529-98cd-c2b0549bcf53
   */
  jobGroupId?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * 593aaf5e-1275-4add-9990-22696385dc6e
   */
  jobId?: string;
  /**
   * @remarks
   * The modification time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1683858248778
   */
  modifiedTime?: number;
  /**
   * @remarks
   * The scenario ID.
   * 
   * @example
   * e4f32632-2e56-4399-9fec-47bdbaeefdf6
   */
  scriptId?: string;
  /**
   * @remarks
   * The session ID. The value is taskId for outbound robots and conversationId for voice navigator robots.
   * 
   * @example
   * e6271044-b4b2-4ad8-ade4-c720be023538
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      annotationMissionChatList: 'AnnotationMissionChatList',
      annotationMissionId: 'AnnotationMissionId',
      annotationMissionSessionId: 'AnnotationMissionSessionId',
      annotationStatus: 'AnnotationStatus',
      createTime: 'CreateTime',
      instanceId: 'InstanceId',
      jobGroupId: 'JobGroupId',
      jobId: 'JobId',
      modifiedTime: 'ModifiedTime',
      scriptId: 'ScriptId',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      annotationMissionChatList: { 'type': 'array', 'itemType': SaveAnnotationMissionSessionListRequestAnnotationMissionSessionListAnnotationMissionChatList },
      annotationMissionId: 'string',
      annotationMissionSessionId: 'string',
      annotationStatus: 'number',
      createTime: 'number',
      instanceId: 'string',
      jobGroupId: 'string',
      jobId: 'string',
      modifiedTime: 'number',
      scriptId: 'string',
      sessionId: 'string',
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

export class SaveAnnotationMissionSessionListRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the agent.
   * 
   * > You can obtain this value by calling the DescribeInstance API operation.
   * 
   * @example
   * 1198938
   */
  agentId?: string;
  /**
   * @remarks
   * The key of the workspace. If you do not specify this parameter, the default workspace is accessed. You can obtain the key value on the Business Management page of the Alibaba Cloud account.
   * > You can obtain this value by calling the DescribeInstance API operation.
   * 
   * @example
   * 9137ab9c27044921860030adf8590ec4_p_outbound_public
   */
  agentKey?: string;
  /**
   * @remarks
   * The data source of the annotation task. Valid values:
   * - 1: outbound call
   * - 2: voice navigation
   * 
   * @example
   * 1
   */
  annotationMissionDataSourceType?: number;
  /**
   * @remarks
   * The session list.
   * 
   * > This parameter serves the same purpose as the AnnotationMissionSessionListJsonString parameter. Specify only one of them.
   */
  annotationMissionSessionList?: SaveAnnotationMissionSessionListRequestAnnotationMissionSessionList[];
  /**
   * @remarks
   * The JSON string of the session list.
   * 
   * > This parameter serves the same purpose as AnnotationMissionSessionList. Specify only one of them.
   * The JSON fields correspond to the parameters of AnnotationMissionSessionList.
   * 
   * @example
   * [{"jobGroupId":"4093e364-57dc-4a89-83e0-a88454642596","modifiedTime":1744971010000,"instanceId":"00b37342-e759-4fe5-b296-aef775933af0","version":0,"annotationMissionId":"3d4bfd93-0d16-4873-9d77-e4fb1771e5cf","createTime":1744971010000,"annotationMissionSessionId":"42032063-8ef2-48e1-bc99-587b51581742","scriptId":"bc50d543-6d52-4df8-8fb0-50f31ee9c1ff","sessionId":"641a2c43-5e2a-4535-8a4d-c66d4b4258d6","jobId":"fa54c5bb-d8a7-40ae-a32e-9a4a0c734ce5","annotationStatus":2,"debugConversation":false}]
   */
  annotationMissionSessionListJsonString?: string;
  /**
   * @remarks
   * The environment. Valid values:
   * - 0: NONE
   * - 1: private cloud
   * - 2: public cloud
   * 
   * @example
   * 0
   */
  environment?: number;
  /**
   * @remarks
   * The nickname of the user.
   * 
   * @example
   * User
   */
  userNick?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      agentKey: 'AgentKey',
      annotationMissionDataSourceType: 'AnnotationMissionDataSourceType',
      annotationMissionSessionList: 'AnnotationMissionSessionList',
      annotationMissionSessionListJsonString: 'AnnotationMissionSessionListJsonString',
      environment: 'Environment',
      userNick: 'UserNick',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      agentKey: 'string',
      annotationMissionDataSourceType: 'number',
      annotationMissionSessionList: { 'type': 'array', 'itemType': SaveAnnotationMissionSessionListRequestAnnotationMissionSessionList },
      annotationMissionSessionListJsonString: 'string',
      environment: 'number',
      userNick: 'string',
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

