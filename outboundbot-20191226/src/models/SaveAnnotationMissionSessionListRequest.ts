// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveAnnotationMissionSessionListRequestAnnotationMissionSessionListAnnotationMissionChatListAnnotationMissionChatCustomizationDataInfoList extends $dara.Model {
  /**
   * @remarks
   * id
   */
  annotationMissionChatCustomizationDataInfoId?: string;
  /**
   * @remarks
   * chat id
   * 
   * @example
   * 977a45dc-b636-4407-9e98-9f572c709ada
   */
  annotationMissionChatId?: string;
  /**
   * @example
   * 03f56192-fa8a-40dc-9558-39b357f0618f
   */
  annotationMissionId?: string;
  /**
   * @example
   * 977a45dc-b636-4407-9e98-9f572c709ada
   */
  annotationMissionSessionId?: string;
  content?: string;
  /**
   * @example
   * true
   */
  create?: boolean;
  /**
   * @example
   * 1682316909210
   */
  createTime?: number;
  customizationDataDescription?: string;
  /**
   * @remarks
   * id
   * 
   * @example
   * 977a45dc-b636-4407-9e98-9f572c709ada
   */
  customizationDataId?: string;
  customizationDataName?: string;
  customizationDataWeight?: number;
  /**
   * @example
   * true
   */
  delete?: boolean;
  /**
   * @example
   * b598a47a-7c03-45fb-af6b-343950dd9512
   */
  instanceId?: string;
  /**
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
  annotationMissionChatId?: string;
  annotationMissionChatIntentUserSayInfoId?: string;
  annotationMissionId?: string;
  annotationMissionSessionId?: string;
  botId?: string;
  content?: string;
  create?: boolean;
  createTime?: number;
  delete?: boolean;
  dialogId?: number;
  instanceId?: string;
  intentId?: number;
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
   * chat id
   * 
   * @example
   * 977a45dc-b636-4407-9e98-9f572c709ada
   */
  annotationMissionChatId?: string;
  /**
   * @remarks
   * id
   */
  annotationMissionChatTagInfoId?: string;
  /**
   * @example
   * 977a45dc-b636-4407-9e98-9f572c709ada
   */
  annotationMissionId?: string;
  /**
   * @example
   * 977a45dc-b636-4407-9e98-9f572c709ada
   */
  annotationMissionSessionId?: string;
  /**
   * @remarks
   * tag id
   * 
   * @example
   * 977a45dc-b636-4407-9e98-9f572c709ada
   */
  annotationMissionTagInfoId?: string;
  /**
   * @example
   * -
   */
  annotationMissionTagInfoName?: string;
  /**
   * @example
   * true
   */
  create?: boolean;
  /**
   * @example
   * 1679710866060
   */
  createTime?: number;
  /**
   * @example
   * false
   */
  delete?: boolean;
  /**
   * @example
   * 32be9d94-1346-4c4a-a4d0-ccd379f87013
   */
  instanceId?: string;
  /**
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
   * chat id
   */
  annotationMissionChatId?: string;
  /**
   * @remarks
   * id
   */
  annotationMissionChatVocabularyInfoId?: string;
  /**
   * @example
   * 977a45dc-b636-4407-9e98-9f572c709ada
   */
  annotationMissionId?: string;
  annotationMissionSessionId?: string;
  /**
   * @example
   * false
   */
  create?: boolean;
  /**
   * @example
   * 1677552860720
   */
  createTime?: number;
  /**
   * @example
   * true
   */
  delete?: boolean;
  /**
   * @example
   * 77343553-cbc2-4487-a35c-869f1e86c573
   */
  instanceId?: string;
  /**
   * @example
   * 1679283408230
   */
  modifiedTime?: number;
  vocabulary?: string;
  vocabularyDescription?: string;
  vocabularyId?: string;
  vocabularyName?: string;
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
  annotationAsrResult?: string;
  annotationMissionChatCustomizationDataInfoList?: SaveAnnotationMissionSessionListRequestAnnotationMissionSessionListAnnotationMissionChatListAnnotationMissionChatCustomizationDataInfoList[];
  /**
   * @remarks
   * chat id
   */
  annotationMissionChatId?: string;
  annotationMissionChatIntentUserSayInfoList?: SaveAnnotationMissionSessionListRequestAnnotationMissionSessionListAnnotationMissionChatListAnnotationMissionChatIntentUserSayInfoList[];
  annotationMissionChatTagInfoList?: SaveAnnotationMissionSessionListRequestAnnotationMissionSessionListAnnotationMissionChatListAnnotationMissionChatTagInfoList[];
  annotationMissionChatVocabularyInfoList?: SaveAnnotationMissionSessionListRequestAnnotationMissionSessionListAnnotationMissionChatListAnnotationMissionChatVocabularyInfoList[];
  /**
   * @example
   * ddce607f-f537-4ebd-9914-cf45671defb9
   */
  annotationMissionId?: string;
  annotationMissionSessionId?: string;
  /**
   * @example
   * 1
   */
  annotationStatus?: number;
  /**
   * @example
   * {\\"Answer\\": u\\"\\u53c2\\u8003\\u6587\\u6863\\uff1ahttps://help.aliyun.com/document_detail/181325.html\\", \\"QuestionId\\": 372858, \\"Uuid\\": \\"ac14000516762684770197536d0044\\"}
   */
  answer?: string;
  asrAnnotationStatus?: number;
  /**
   * @example
   * 1679629770336
   */
  createTime?: number;
  /**
   * @example
   * 5ec263fa-c8de-46f4-b844-6fb8275bb645
   */
  instanceId?: string;
  intentAnnotationStatus?: number;
  /**
   * @example
   * 1629360780000
   */
  modifiedTime?: number;
  /**
   * @example
   * 1682493047418
   */
  occurTime?: number;
  originalAsrResult?: string;
  /**
   * @example
   * 1475140522
   */
  sequenceId?: string;
  /**
   * @example
   * 1
   */
  subStatus?: number;
  /**
   * @example
   * 1
   */
  tagAnnotationStatus?: number;
  /**
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
  annotationMissionChatList?: SaveAnnotationMissionSessionListRequestAnnotationMissionSessionListAnnotationMissionChatList[];
  /**
   * @example
   * c88cc004-de69-4eee-aa5f-2efed533a54e
   */
  annotationMissionId?: string;
  annotationMissionSessionId?: string;
  /**
   * @example
   * 1
   */
  annotationStatus?: number;
  /**
   * @example
   * 2023-04-14T02:01:23Z
   */
  createTime?: number;
  /**
   * @example
   * 77343553-cbc2-4487-a35c-869f1e86c573
   */
  instanceId?: string;
  /**
   * @example
   * 29e669bd-a9d1-4529-98cd-c2b0549bcf53
   */
  jobGroupId?: string;
  /**
   * @example
   * 593aaf5e-1275-4add-9990-22696385dc6e
   */
  jobId?: string;
  /**
   * @example
   * 1683858248778
   */
  modifiedTime?: number;
  /**
   * @example
   * e4f32632-2e56-4399-9fec-47bdbaeefdf6
   */
  scriptId?: string;
  /**
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
   * @example
   * 1198938
   */
  agentId?: string;
  /**
   * @example
   * 9137ab9c27044921860030adf8590ec4_p_outbound_public
   */
  agentKey?: string;
  /**
   * @example
   * 1
   */
  annotationMissionDataSourceType?: number;
  annotationMissionSessionList?: SaveAnnotationMissionSessionListRequestAnnotationMissionSessionList[];
  /**
   * @example
   * []
   */
  annotationMissionSessionListJsonString?: string;
  /**
   * @example
   * 0
   */
  environment?: number;
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

