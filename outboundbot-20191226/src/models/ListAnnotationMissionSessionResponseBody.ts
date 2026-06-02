// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAnnotationMissionSessionResponseBodyDataAnnotationMissionSessionListAnnotationMissionChatListAnnotationMissionChatCustomizationDataInfoList extends $dara.Model {
  /**
   * @remarks
   * id
   */
  annotationMissionChatCustomizationDataInfoId?: string;
  /**
   * @remarks
   * chat id
   */
  annotationMissionChatId?: string;
  /**
   * @example
   * 2f03b24a-fda2-4501-90ba-0a9a59f8dd9d
   */
  annotationMissionId?: string;
  annotationMissionSessionId?: string;
  content?: string;
  /**
   * @example
   * true
   */
  create?: boolean;
  /**
   * @example
   * 1682216045619
   */
  createTime?: number;
  customizationDataDescription?: string;
  /**
   * @remarks
   * id
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
   * d3fbfca8-4208-4d4b-a53a-c4dba5e43a66
   */
  instanceId?: string;
  /**
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
   * chat id
   * 
   * @example
   * 77343553-cbc2-4487-a35c-869f1e86c573
   */
  annotationMissionChatId?: string;
  /**
   * @remarks
   * id
   */
  annotationMissionChatIntentUserSayInfoId?: string;
  /**
   * @example
   * 77343553-cbc2-4487-a35c-869f1e86c573
   */
  annotationMissionId?: string;
  /**
   * @example
   * 77343553-cbc2-4487-a35c-869f1e86c573
   */
  annotationMissionSessionId?: string;
  /**
   * @example
   * 77343553-cbc2-4487-a35c-869f1e86c573
   */
  botId?: string;
  content?: string;
  /**
   * @example
   * false
   */
  create?: boolean;
  /**
   * @example
   * 1682216045619
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
  dialogId?: number;
  /**
   * @example
   * 77343553-cbc2-4487-a35c-869f1e86c573
   */
  instanceId?: string;
  /**
   * @example
   * 77343553-cbc2-4487-a35c-869f1e86c573
   */
  intentId?: number;
  /**
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
   * chat id
   */
  annotationMissionChatId?: string;
  /**
   * @remarks
   * id
   */
  annotationMissionChatTagInfoId?: string;
  /**
   * @example
   * e7272cbb-a60d-4b41-b5c4-8863edc0b8f7
   */
  annotationMissionId?: string;
  annotationMissionSessionId?: string;
  /**
   * @remarks
   * tag id
   */
  annotationMissionTagInfoId?: string;
  annotationMissionTagInfoName?: string;
  /**
   * @example
   * true
   */
  create?: boolean;
  /**
   * @example
   * 1686797050000
   */
  createTime?: number;
  /**
   * @example
   * true
   */
  delete?: boolean;
  /**
   * @example
   * 32be9d94-1346-4c4a-a4d0-ccd379f87013
   */
  instanceId?: string;
  /**
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
   * chat id
   * 
   * @example
   * 77343553-cbc2-4487-a35c-869f1e86c573
   */
  annotationMissionChatId?: string;
  /**
   * @remarks
   * id
   */
  annotationMissionChatVocabularyInfoId?: string;
  /**
   * @example
   * b3f2c931-5180-43ca-b4aa-2baee2d73c8b
   */
  annotationMissionId?: string;
  /**
   * @example
   * 77343553-cbc2-4487-a35c-869f1e86c573
   */
  annotationMissionSessionId?: string;
  /**
   * @example
   * true
   */
  create?: boolean;
  /**
   * @example
   * 1675218421941
   */
  createTime?: number;
  /**
   * @example
   * true
   */
  delete?: boolean;
  /**
   * @example
   * 818961ce-d9ba-4f88-89ca-2a04b24bdf01
   */
  instanceId?: string;
  /**
   * @example
   * 1676272557653
   */
  modifiedTime?: number;
  vocabulary?: string;
  vocabularyDescription?: string;
  /**
   * @example
   * 77343553-cbc2-4487-a35c-869f1e86c573
   */
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

export class ListAnnotationMissionSessionResponseBodyDataAnnotationMissionSessionListAnnotationMissionChatList extends $dara.Model {
  annotationAsrResult?: string;
  annotationMissionChatCustomizationDataInfoList?: ListAnnotationMissionSessionResponseBodyDataAnnotationMissionSessionListAnnotationMissionChatListAnnotationMissionChatCustomizationDataInfoList[];
  /**
   * @remarks
   * chat id
   * 
   * @example
   * 40669e52-c1c8-487f-9593-29749086bdc9
   */
  annotationMissionChatId?: string;
  annotationMissionChatIntentUserSayInfoList?: ListAnnotationMissionSessionResponseBodyDataAnnotationMissionSessionListAnnotationMissionChatListAnnotationMissionChatIntentUserSayInfoList[];
  annotationMissionChatTagInfoList?: ListAnnotationMissionSessionResponseBodyDataAnnotationMissionSessionListAnnotationMissionChatListAnnotationMissionChatTagInfoList[];
  annotationMissionChatVocabularyInfoList?: ListAnnotationMissionSessionResponseBodyDataAnnotationMissionSessionListAnnotationMissionChatListAnnotationMissionChatVocabularyInfoList[];
  /**
   * @example
   * 03f56192-fa8a-40dc-9558-39b357f0618f
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
   * {\\"Answer\\": u\\"\\u53c2\\u8003\\u6587\\u6863\\uff1ahttps://help.aliyun.com/document_detail/215402.html\\", \\"QuestionId\\": 371159, \\"Uuid\\": \\"ac14000116781568127896224d0044\\"}
   */
  answer?: string;
  asrAnnotationStatus?: number;
  /**
   * @example
   * 1682216045619
   */
  createTime?: number;
  /**
   * @example
   * 77343553-cbc2-4487-a35c-869f1e86c573
   */
  instanceId?: string;
  intentAnnotationStatus?: number;
  /**
   * @example
   * 1571649300000
   */
  modifiedTime?: number;
  /**
   * @example
   * 1682390676403
   */
  occurTime?: number;
  originalAsrResult?: string;
  /**
   * @example
   * 380578077
   */
  sequenceId?: string;
  subStatus?: number;
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
  annotationMissionChatList?: ListAnnotationMissionSessionResponseBodyDataAnnotationMissionSessionListAnnotationMissionChatList[];
  /**
   * @example
   * 64ba5ac9-a4e1-4333-b03c-9d4a588c9f6c
   */
  annotationMissionId?: string;
  /**
   * @remarks
   * ID
   * 
   * @example
   * 64ba5ac9-a4e1-4333-b03c-9d4a588c9f6c
   */
  annotationMissionSessionId?: string;
  /**
   * @example
   * 1
   */
  annotationStatus?: number;
  /**
   * @example
   * 1691117009000
   */
  createTime?: number;
  /**
   * @example
   * true
   */
  debugConversation?: boolean;
  /**
   * @example
   * a4274627-265f-4e14-b2d6-4ee7d4f8593e
   */
  instanceId?: string;
  /**
   * @example
   * 2f642da1-b00b-4dd6-ac7d-dcbeefd13ff3
   */
  jobGroupId?: string;
  /**
   * @example
   * 42da7cde-a5e8-45cc-b9d2-828711d95b30
   */
  jobId?: string;
  /**
   * @example
   * 1677987898384
   */
  modifiedTime?: number;
  /**
   * @example
   * 408d6c4d-23e2-41f6-bbdd-f919a8297aa4
   */
  scriptId?: string;
  /**
   * @example
   * 40669e52-c1c8-487f-9593-29749086bdc9
   */
  sessionId?: string;
  /**
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
   * @example
   * b3f2c931-5180-43ca-b4aa-2baee2d73c8b
   */
  annotationMissionId?: string;
  annotationMissionSessionList?: ListAnnotationMissionSessionResponseBodyDataAnnotationMissionSessionList[];
  /**
   * @example
   * bp.java.nopowerContact
   */
  message?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
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
   * @example
   * OK
   */
  code?: string;
  data?: ListAnnotationMissionSessionResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * bp.java.nopowerContact
   */
  message?: string;
  /**
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  requestId?: string;
  /**
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

