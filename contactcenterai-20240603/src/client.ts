// This file is auto-generated, don't edit it
/**
 */
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import * as $dara from '@darabonba/typescript';

export class AnalyzeAudioSyncRequestCategoryTags extends $dara.Model {
  tagDesc?: string;
  tagName?: string;
  static names(): { [key: string]: string } {
    return {
      tagDesc: 'tagDesc',
      tagName: 'tagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagDesc: 'string',
      tagName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AnalyzeAudioSyncRequestFieldsEnumValues extends $dara.Model {
  desc?: string;
  enumValue?: string;
  static names(): { [key: string]: string } {
    return {
      desc: 'desc',
      enumValue: 'enumValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desc: 'string',
      enumValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AnalyzeAudioSyncRequestFields extends $dara.Model {
  /**
   * @example
   * phoneNumber
   */
  code?: string;
  desc?: string;
  enumValues?: AnalyzeAudioSyncRequestFieldsEnumValues[];
  name?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      desc: 'desc',
      enumValues: 'enumValues',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      desc: 'string',
      enumValues: { 'type': 'array', 'itemType': AnalyzeAudioSyncRequestFieldsEnumValues },
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.enumValues)) {
      $dara.Model.validateArray(this.enumValues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AnalyzeAudioSyncRequestServiceInspectionInspectionContents extends $dara.Model {
  content?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AnalyzeAudioSyncRequestServiceInspection extends $dara.Model {
  inspectionContents?: AnalyzeAudioSyncRequestServiceInspectionInspectionContents[];
  inspectionIntroduction?: string;
  sceneIntroduction?: string;
  static names(): { [key: string]: string } {
    return {
      inspectionContents: 'inspectionContents',
      inspectionIntroduction: 'inspectionIntroduction',
      sceneIntroduction: 'sceneIntroduction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inspectionContents: { 'type': 'array', 'itemType': AnalyzeAudioSyncRequestServiceInspectionInspectionContents },
      inspectionIntroduction: 'string',
      sceneIntroduction: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.inspectionContents)) {
      $dara.Model.validateArray(this.inspectionContents);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AnalyzeAudioSyncRequestTranscription extends $dara.Model {
  /**
   * @example
   * nls
   */
  asrModelCode?: string;
  /**
   * @example
   * 1
   */
  autoSplit?: number;
  /**
   * @example
   * 1
   */
  clientChannel?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sss.mp3
   */
  fileName?: string;
  /**
   * @example
   * low
   */
  level?: string;
  /**
   * @example
   * 1
   */
  serviceChannel?: number;
  serviceChannelKeywords?: string[];
  /**
   * @example
   * esnvknv*****skdnvjksd
   */
  vocabularyId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://1111.com/sss.mp3
   */
  voiceFileUrl?: string;
  static names(): { [key: string]: string } {
    return {
      asrModelCode: 'asrModelCode',
      autoSplit: 'autoSplit',
      clientChannel: 'clientChannel',
      fileName: 'fileName',
      level: 'level',
      serviceChannel: 'serviceChannel',
      serviceChannelKeywords: 'serviceChannelKeywords',
      vocabularyId: 'vocabularyId',
      voiceFileUrl: 'voiceFileUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asrModelCode: 'string',
      autoSplit: 'number',
      clientChannel: 'number',
      fileName: 'string',
      level: 'string',
      serviceChannel: 'number',
      serviceChannelKeywords: { 'type': 'array', 'itemType': 'string' },
      vocabularyId: 'string',
      voiceFileUrl: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.serviceChannelKeywords)) {
      $dara.Model.validateArray(this.serviceChannelKeywords);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AnalyzeAudioSyncRequestVariables extends $dara.Model {
  /**
   * @example
   * name
   */
  variableCode?: string;
  variableValue?: string;
  static names(): { [key: string]: string } {
    return {
      variableCode: 'variableCode',
      variableValue: 'variableValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      variableCode: 'string',
      variableValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AnalyzeConversationRequestCategoryTags extends $dara.Model {
  tagDesc?: string;
  tagName?: string;
  static names(): { [key: string]: string } {
    return {
      tagDesc: 'tagDesc',
      tagName: 'tagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagDesc: 'string',
      tagName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AnalyzeConversationRequestDialogueSentences extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * user
   */
  role?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      role: 'role',
      text: 'text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      role: 'string',
      text: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AnalyzeConversationRequestDialogue extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  sentences?: AnalyzeConversationRequestDialogueSentences[];
  /**
   * @example
   * session-01
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      sentences: 'sentences',
      sessionId: 'sessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sentences: { 'type': 'array', 'itemType': AnalyzeConversationRequestDialogueSentences },
      sessionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.sentences)) {
      $dara.Model.validateArray(this.sentences);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AnalyzeConversationRequestExamplesSentences extends $dara.Model {
  chatId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  role?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      chatId: 'chatId',
      role: 'role',
      text: 'text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chatId: 'string',
      role: 'string',
      text: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AnalyzeConversationRequestExamples extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  output?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  sentences?: AnalyzeConversationRequestExamplesSentences[];
  static names(): { [key: string]: string } {
    return {
      output: 'output',
      sentences: 'sentences',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: 'string',
      sentences: { 'type': 'array', 'itemType': AnalyzeConversationRequestExamplesSentences },
    };
  }

  validate() {
    if(Array.isArray(this.sentences)) {
      $dara.Model.validateArray(this.sentences);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AnalyzeConversationRequestFieldsEnumValues extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  desc?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  enumValue?: string;
  static names(): { [key: string]: string } {
    return {
      desc: 'desc',
      enumValue: 'enumValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desc: 'string',
      enumValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AnalyzeConversationRequestFields extends $dara.Model {
  /**
   * @example
   * phoneNumber
   */
  code?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  desc?: string;
  enumValues?: AnalyzeConversationRequestFieldsEnumValues[];
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      desc: 'desc',
      enumValues: 'enumValues',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      desc: 'string',
      enumValues: { 'type': 'array', 'itemType': AnalyzeConversationRequestFieldsEnumValues },
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.enumValues)) {
      $dara.Model.validateArray(this.enumValues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AnalyzeConversationRequestServiceInspectionInspectionContents extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  content?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AnalyzeConversationRequestServiceInspection extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  inspectionContents?: AnalyzeConversationRequestServiceInspectionInspectionContents[];
  /**
   * @remarks
   * This parameter is required.
   */
  inspectionIntroduction?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  sceneIntroduction?: string;
  static names(): { [key: string]: string } {
    return {
      inspectionContents: 'inspectionContents',
      inspectionIntroduction: 'inspectionIntroduction',
      sceneIntroduction: 'sceneIntroduction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inspectionContents: { 'type': 'array', 'itemType': AnalyzeConversationRequestServiceInspectionInspectionContents },
      inspectionIntroduction: 'string',
      sceneIntroduction: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.inspectionContents)) {
      $dara.Model.validateArray(this.inspectionContents);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AnalyzeConversationRequestUserProfiles extends $dara.Model {
  name?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskRequestCategoryTags extends $dara.Model {
  tagDesc?: string;
  tagName?: string;
  static names(): { [key: string]: string } {
    return {
      tagDesc: 'tagDesc',
      tagName: 'tagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagDesc: 'string',
      tagName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskRequestDialogueSentences extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * user
   */
  role?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      role: 'role',
      text: 'text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      role: 'string',
      text: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskRequestDialogue extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  sentences?: CreateTaskRequestDialogueSentences[];
  /**
   * @example
   * session-01
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      sentences: 'sentences',
      sessionId: 'sessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sentences: { 'type': 'array', 'itemType': CreateTaskRequestDialogueSentences },
      sessionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.sentences)) {
      $dara.Model.validateArray(this.sentences);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskRequestExamplesSentences extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * user
   */
  role?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      role: 'role',
      text: 'text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      role: 'string',
      text: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskRequestExamples extends $dara.Model {
  output?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  sentences?: CreateTaskRequestExamplesSentences[];
  static names(): { [key: string]: string } {
    return {
      output: 'output',
      sentences: 'sentences',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: 'string',
      sentences: { 'type': 'array', 'itemType': CreateTaskRequestExamplesSentences },
    };
  }

  validate() {
    if(Array.isArray(this.sentences)) {
      $dara.Model.validateArray(this.sentences);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskRequestFieldsEnumValues extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  desc?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  enumValue?: string;
  static names(): { [key: string]: string } {
    return {
      desc: 'desc',
      enumValue: 'enumValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desc: 'string',
      enumValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskRequestFields extends $dara.Model {
  /**
   * @example
   * phoneNumber
   */
  code?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  desc?: string;
  enumValues?: CreateTaskRequestFieldsEnumValues[];
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      desc: 'desc',
      enumValues: 'enumValues',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      desc: 'string',
      enumValues: { 'type': 'array', 'itemType': CreateTaskRequestFieldsEnumValues },
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.enumValues)) {
      $dara.Model.validateArray(this.enumValues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskRequestServiceInspectionInspectionContents extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  content?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskRequestServiceInspection extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  inspectionContents?: CreateTaskRequestServiceInspectionInspectionContents[];
  /**
   * @remarks
   * This parameter is required.
   */
  inspectionIntroduction?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  sceneIntroduction?: string;
  static names(): { [key: string]: string } {
    return {
      inspectionContents: 'inspectionContents',
      inspectionIntroduction: 'inspectionIntroduction',
      sceneIntroduction: 'sceneIntroduction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inspectionContents: { 'type': 'array', 'itemType': CreateTaskRequestServiceInspectionInspectionContents },
      inspectionIntroduction: 'string',
      sceneIntroduction: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.inspectionContents)) {
      $dara.Model.validateArray(this.inspectionContents);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskRequestTranscription extends $dara.Model {
  asrModelCode?: string;
  /**
   * @example
   * 1
   */
  autoSplit?: number;
  /**
   * @example
   * 1
   */
  clientChannel?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sss.mp3
   */
  fileName?: string;
  level?: string;
  /**
   * @example
   * 1
   */
  serviceChannel?: number;
  serviceChannelKeywords?: string[];
  vocabularyId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://1111.com/sss.mp3
   */
  voiceFileUrl?: string;
  static names(): { [key: string]: string } {
    return {
      asrModelCode: 'asrModelCode',
      autoSplit: 'autoSplit',
      clientChannel: 'clientChannel',
      fileName: 'fileName',
      level: 'level',
      serviceChannel: 'serviceChannel',
      serviceChannelKeywords: 'serviceChannelKeywords',
      vocabularyId: 'vocabularyId',
      voiceFileUrl: 'voiceFileUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asrModelCode: 'string',
      autoSplit: 'number',
      clientChannel: 'number',
      fileName: 'string',
      level: 'string',
      serviceChannel: 'number',
      serviceChannelKeywords: { 'type': 'array', 'itemType': 'string' },
      vocabularyId: 'string',
      voiceFileUrl: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.serviceChannelKeywords)) {
      $dara.Model.validateArray(this.serviceChannelKeywords);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskRequestVariables extends $dara.Model {
  variableCode?: string;
  variableValue?: string;
  static names(): { [key: string]: string } {
    return {
      variableCode: 'variableCode',
      variableValue: 'variableValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      variableCode: 'string',
      variableValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskResponseBodyData extends $dara.Model {
  /**
   * @example
   * 20240905-********-93E9-5D45-B4EF-045743A34071
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVocabRequestWordWeightList extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2
   */
  weight?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  word?: string;
  static names(): { [key: string]: string } {
    return {
      weight: 'weight',
      word: 'word',
    };
  }

  static types(): { [key: string]: any } {
    return {
      weight: 'number',
      word: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVocabResponseBodyData extends $dara.Model {
  /**
   * @example
   * f3d82*******7
   */
  vocabularyId?: string;
  static names(): { [key: string]: string } {
    return {
      vocabularyId: 'vocabularyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vocabularyId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskResultResponseBodyDataAsrResult extends $dara.Model {
  begin?: number;
  emotionValue?: number;
  end?: number;
  role?: string;
  speechRate?: number;
  words?: string;
  static names(): { [key: string]: string } {
    return {
      begin: 'begin',
      emotionValue: 'emotionValue',
      end: 'end',
      role: 'role',
      speechRate: 'speechRate',
      words: 'words',
    };
  }

  static types(): { [key: string]: any } {
    return {
      begin: 'number',
      emotionValue: 'number',
      end: 'number',
      role: 'string',
      speechRate: 'number',
      words: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskResultResponseBodyData extends $dara.Model {
  asrResult?: GetTaskResultResponseBodyDataAsrResult[];
  extra?: string;
  taskErrorMessage?: string;
  /**
   * @example
   * 20240905-********-93E9-5D45-B4EF-045743A34071
   */
  taskId?: string;
  /**
   * @example
   * FINISH
   */
  taskStatus?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      asrResult: 'asrResult',
      extra: 'extra',
      taskErrorMessage: 'taskErrorMessage',
      taskId: 'taskId',
      taskStatus: 'taskStatus',
      text: 'text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asrResult: { 'type': 'array', 'itemType': GetTaskResultResponseBodyDataAsrResult },
      extra: 'string',
      taskErrorMessage: 'string',
      taskId: 'string',
      taskStatus: 'string',
      text: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.asrResult)) {
      $dara.Model.validateArray(this.asrResult);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVocabResponseBodyDataWordWeightList extends $dara.Model {
  /**
   * @example
   * 1
   */
  weight?: number;
  word?: string;
  static names(): { [key: string]: string } {
    return {
      weight: 'weight',
      word: 'word',
    };
  }

  static types(): { [key: string]: any } {
    return {
      weight: 'number',
      word: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVocabResponseBodyData extends $dara.Model {
  /**
   * @example
   * nls
   */
  audioModelCode?: string;
  description?: string;
  name?: string;
  /**
   * @example
   * rrbe***jrvrdd
   */
  vocabularyId?: string;
  wordWeightList?: GetVocabResponseBodyDataWordWeightList[];
  static names(): { [key: string]: string } {
    return {
      audioModelCode: 'audioModelCode',
      description: 'description',
      name: 'name',
      vocabularyId: 'vocabularyId',
      wordWeightList: 'wordWeightList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioModelCode: 'string',
      description: 'string',
      name: 'string',
      vocabularyId: 'string',
      wordWeightList: { 'type': 'array', 'itemType': GetVocabResponseBodyDataWordWeightList },
    };
  }

  validate() {
    if(Array.isArray(this.wordWeightList)) {
      $dara.Model.validateArray(this.wordWeightList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVocabResponseBodyDataWordWeightList extends $dara.Model {
  /**
   * @example
   * 3
   */
  weight?: number;
  word?: string;
  static names(): { [key: string]: string } {
    return {
      weight: 'weight',
      word: 'word',
    };
  }

  static types(): { [key: string]: any } {
    return {
      weight: 'number',
      word: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVocabResponseBodyData extends $dara.Model {
  /**
   * @example
   * nls
   */
  audioModelCode?: string;
  description?: string;
  name?: string;
  /**
   * @example
   * dv*****erverve
   */
  vocabularyId?: string;
  wordWeightList?: ListVocabResponseBodyDataWordWeightList[];
  static names(): { [key: string]: string } {
    return {
      audioModelCode: 'audioModelCode',
      description: 'description',
      name: 'name',
      vocabularyId: 'vocabularyId',
      wordWeightList: 'wordWeightList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioModelCode: 'string',
      description: 'string',
      name: 'string',
      vocabularyId: 'string',
      wordWeightList: { 'type': 'array', 'itemType': ListVocabResponseBodyDataWordWeightList },
    };
  }

  validate() {
    if(Array.isArray(this.wordWeightList)) {
      $dara.Model.validateArray(this.wordWeightList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunCompletionRequestDialogueSentences extends $dara.Model {
  chatId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * user
   */
  role?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      chatId: 'ChatId',
      role: 'Role',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chatId: 'string',
      role: 'string',
      text: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunCompletionRequestDialogue extends $dara.Model {
  sentences?: RunCompletionRequestDialogueSentences[];
  /**
   * @example
   * d25zc9c7004f8dad2b454d
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      sentences: 'Sentences',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sentences: { 'type': 'array', 'itemType': RunCompletionRequestDialogueSentences },
      sessionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.sentences)) {
      $dara.Model.validateArray(this.sentences);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunCompletionRequestFieldsEnumValues extends $dara.Model {
  desc?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  enumValue?: string;
  static names(): { [key: string]: string } {
    return {
      desc: 'Desc',
      enumValue: 'EnumValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desc: 'string',
      enumValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunCompletionRequestFields extends $dara.Model {
  /**
   * @example
   * phoneNumber
   */
  code?: string;
  desc?: string;
  enumValues?: RunCompletionRequestFieldsEnumValues[];
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      desc: 'Desc',
      enumValues: 'EnumValues',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      desc: 'string',
      enumValues: { 'type': 'array', 'itemType': RunCompletionRequestFieldsEnumValues },
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.enumValues)) {
      $dara.Model.validateArray(this.enumValues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunCompletionRequestServiceInspectionInspectionContents extends $dara.Model {
  content?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunCompletionRequestServiceInspection extends $dara.Model {
  inspectionContents?: RunCompletionRequestServiceInspectionInspectionContents[];
  inspectionIntroduction?: string;
  sceneIntroduction?: string;
  static names(): { [key: string]: string } {
    return {
      inspectionContents: 'InspectionContents',
      inspectionIntroduction: 'InspectionIntroduction',
      sceneIntroduction: 'SceneIntroduction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inspectionContents: { 'type': 'array', 'itemType': RunCompletionRequestServiceInspectionInspectionContents },
      inspectionIntroduction: 'string',
      sceneIntroduction: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.inspectionContents)) {
      $dara.Model.validateArray(this.inspectionContents);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunCompletionRequestVariables extends $dara.Model {
  variableCode?: string;
  variableValue?: string;
  static names(): { [key: string]: string } {
    return {
      variableCode: 'variableCode',
      variableValue: 'variableValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      variableCode: 'string',
      variableValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunCompletionMessageRequestMessages extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  content?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * user
   */
  role?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      role: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVocabRequestWordWeightList extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2
   */
  weight?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  word?: string;
  static names(): { [key: string]: string } {
    return {
      weight: 'weight',
      word: 'word',
    };
  }

  static types(): { [key: string]: any } {
    return {
      weight: 'number',
      word: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AnalyzeAudioSyncRequest extends $dara.Model {
  categoryTags?: AnalyzeAudioSyncRequestCategoryTags[];
  customPrompt?: string;
  fields?: AnalyzeAudioSyncRequestFields[];
  /**
   * @example
   * tyxmTurbo
   */
  modelCode?: string;
  /**
   * @example
   * jsonObject
   */
  responseFormatType?: string;
  resultTypes?: string[];
  serviceInspection?: AnalyzeAudioSyncRequestServiceInspection;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * false
   */
  stream?: boolean;
  templateIds?: string[];
  transcription?: AnalyzeAudioSyncRequestTranscription;
  variables?: AnalyzeAudioSyncRequestVariables[];
  static names(): { [key: string]: string } {
    return {
      categoryTags: 'categoryTags',
      customPrompt: 'customPrompt',
      fields: 'fields',
      modelCode: 'modelCode',
      responseFormatType: 'responseFormatType',
      resultTypes: 'resultTypes',
      serviceInspection: 'serviceInspection',
      stream: 'stream',
      templateIds: 'templateIds',
      transcription: 'transcription',
      variables: 'variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryTags: { 'type': 'array', 'itemType': AnalyzeAudioSyncRequestCategoryTags },
      customPrompt: 'string',
      fields: { 'type': 'array', 'itemType': AnalyzeAudioSyncRequestFields },
      modelCode: 'string',
      responseFormatType: 'string',
      resultTypes: { 'type': 'array', 'itemType': 'string' },
      serviceInspection: AnalyzeAudioSyncRequestServiceInspection,
      stream: 'boolean',
      templateIds: { 'type': 'array', 'itemType': 'string' },
      transcription: AnalyzeAudioSyncRequestTranscription,
      variables: { 'type': 'array', 'itemType': AnalyzeAudioSyncRequestVariables },
    };
  }

  validate() {
    if(Array.isArray(this.categoryTags)) {
      $dara.Model.validateArray(this.categoryTags);
    }
    if(Array.isArray(this.fields)) {
      $dara.Model.validateArray(this.fields);
    }
    if(Array.isArray(this.resultTypes)) {
      $dara.Model.validateArray(this.resultTypes);
    }
    if(this.serviceInspection && typeof (this.serviceInspection as any).validate === 'function') {
      (this.serviceInspection as any).validate();
    }
    if(Array.isArray(this.templateIds)) {
      $dara.Model.validateArray(this.templateIds);
    }
    if(this.transcription && typeof (this.transcription as any).validate === 'function') {
      (this.transcription as any).validate();
    }
    if(Array.isArray(this.variables)) {
      $dara.Model.validateArray(this.variables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AnalyzeAudioSyncResponseBody extends $dara.Model {
  /**
   * @example
   * stop
   */
  finishReason?: string;
  /**
   * @example
   * 1000
   */
  inputTokens?: string;
  /**
   * @example
   * 2000
   */
  outputTokens?: string;
  /**
   * @example
   * 968A8634-FA2C-5381-9B3E-*******F
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  text?: string;
  /**
   * @example
   * 3000
   */
  totalTokens?: string;
  static names(): { [key: string]: string } {
    return {
      finishReason: 'finishReason',
      inputTokens: 'inputTokens',
      outputTokens: 'outputTokens',
      requestId: 'requestId',
      success: 'success',
      text: 'text',
      totalTokens: 'totalTokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      finishReason: 'string',
      inputTokens: 'string',
      outputTokens: 'string',
      requestId: 'string',
      success: 'boolean',
      text: 'string',
      totalTokens: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AnalyzeAudioSyncResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AnalyzeAudioSyncResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AnalyzeAudioSyncResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AnalyzeConversationRequest extends $dara.Model {
  categoryTags?: AnalyzeConversationRequestCategoryTags[];
  customPrompt?: string;
  dialogue?: AnalyzeConversationRequestDialogue;
  examples?: AnalyzeConversationRequestExamples[];
  fields?: AnalyzeConversationRequestFields[];
  /**
   * @example
   * tyxmTurbo
   */
  modelCode?: string;
  responseFormatType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  resultTypes?: string[];
  sceneName?: string;
  serviceInspection?: AnalyzeConversationRequestServiceInspection;
  sourceCallerUid?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * false
   */
  stream?: boolean;
  timeConstraintList?: string[];
  userProfiles?: AnalyzeConversationRequestUserProfiles[];
  static names(): { [key: string]: string } {
    return {
      categoryTags: 'categoryTags',
      customPrompt: 'customPrompt',
      dialogue: 'dialogue',
      examples: 'examples',
      fields: 'fields',
      modelCode: 'modelCode',
      responseFormatType: 'responseFormatType',
      resultTypes: 'resultTypes',
      sceneName: 'sceneName',
      serviceInspection: 'serviceInspection',
      sourceCallerUid: 'sourceCallerUid',
      stream: 'stream',
      timeConstraintList: 'timeConstraintList',
      userProfiles: 'userProfiles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryTags: { 'type': 'array', 'itemType': AnalyzeConversationRequestCategoryTags },
      customPrompt: 'string',
      dialogue: AnalyzeConversationRequestDialogue,
      examples: { 'type': 'array', 'itemType': AnalyzeConversationRequestExamples },
      fields: { 'type': 'array', 'itemType': AnalyzeConversationRequestFields },
      modelCode: 'string',
      responseFormatType: 'string',
      resultTypes: { 'type': 'array', 'itemType': 'string' },
      sceneName: 'string',
      serviceInspection: AnalyzeConversationRequestServiceInspection,
      sourceCallerUid: 'string',
      stream: 'boolean',
      timeConstraintList: { 'type': 'array', 'itemType': 'string' },
      userProfiles: { 'type': 'array', 'itemType': AnalyzeConversationRequestUserProfiles },
    };
  }

  validate() {
    if(Array.isArray(this.categoryTags)) {
      $dara.Model.validateArray(this.categoryTags);
    }
    if(this.dialogue && typeof (this.dialogue as any).validate === 'function') {
      (this.dialogue as any).validate();
    }
    if(Array.isArray(this.examples)) {
      $dara.Model.validateArray(this.examples);
    }
    if(Array.isArray(this.fields)) {
      $dara.Model.validateArray(this.fields);
    }
    if(Array.isArray(this.resultTypes)) {
      $dara.Model.validateArray(this.resultTypes);
    }
    if(this.serviceInspection && typeof (this.serviceInspection as any).validate === 'function') {
      (this.serviceInspection as any).validate();
    }
    if(Array.isArray(this.timeConstraintList)) {
      $dara.Model.validateArray(this.timeConstraintList);
    }
    if(Array.isArray(this.userProfiles)) {
      $dara.Model.validateArray(this.userProfiles);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AnalyzeConversationResponseBody extends $dara.Model {
  /**
   * @example
   * InvalidUser.NotFound
   */
  errorCode?: string;
  errorInfo?: string;
  /**
   * @example
   * stop
   */
  finishReason?: string;
  inputTokens?: string;
  outputTokens?: string;
  /**
   * @example
   * 968A8634-FA2C-5381-9B3E-C552DED7E8BF
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  text?: string;
  totalTokens?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorInfo: 'errorInfo',
      finishReason: 'finishReason',
      inputTokens: 'inputTokens',
      outputTokens: 'outputTokens',
      requestId: 'requestId',
      success: 'success',
      text: 'text',
      totalTokens: 'totalTokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorInfo: 'string',
      finishReason: 'string',
      inputTokens: 'string',
      outputTokens: 'string',
      requestId: 'string',
      success: 'boolean',
      text: 'string',
      totalTokens: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AnalyzeConversationResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AnalyzeConversationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AnalyzeConversationResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AnalyzeImageRequest extends $dara.Model {
  imageUrls?: string[];
  responseFormatType?: string;
  resultTypes?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * false
   */
  stream?: boolean;
  static names(): { [key: string]: string } {
    return {
      imageUrls: 'imageUrls',
      responseFormatType: 'responseFormatType',
      resultTypes: 'resultTypes',
      stream: 'stream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageUrls: { 'type': 'array', 'itemType': 'string' },
      responseFormatType: 'string',
      resultTypes: { 'type': 'array', 'itemType': 'string' },
      stream: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.imageUrls)) {
      $dara.Model.validateArray(this.imageUrls);
    }
    if(Array.isArray(this.resultTypes)) {
      $dara.Model.validateArray(this.resultTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AnalyzeImageResponseBody extends $dara.Model {
  /**
   * @example
   * stop
   */
  finishReason?: string;
  /**
   * @example
   * 1000
   */
  inputTokens?: string;
  /**
   * @example
   * 2000
   */
  outputTokens?: string;
  /**
   * @example
   * 9*****-AE0D-5EE3-B1AF-48632CB0831C
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  text?: string;
  /**
   * @example
   * 3000
   */
  totalTokens?: string;
  static names(): { [key: string]: string } {
    return {
      finishReason: 'finishReason',
      inputTokens: 'inputTokens',
      outputTokens: 'outputTokens',
      requestId: 'requestId',
      success: 'success',
      text: 'text',
      totalTokens: 'totalTokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      finishReason: 'string',
      inputTokens: 'string',
      outputTokens: 'string',
      requestId: 'string',
      success: 'boolean',
      text: 'string',
      totalTokens: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AnalyzeImageResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AnalyzeImageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AnalyzeImageResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskRequest extends $dara.Model {
  categoryTags?: CreateTaskRequestCategoryTags[];
  customPrompt?: string;
  dialogue?: CreateTaskRequestDialogue;
  examples?: CreateTaskRequestExamples;
  fields?: CreateTaskRequestFields[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * tyxmTurbo
   */
  modelCode?: string;
  responseFormatType?: string;
  resultTypes?: string[];
  serviceInspection?: CreateTaskRequestServiceInspection;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * text
   */
  taskType?: string;
  templateIds?: string[];
  transcription?: CreateTaskRequestTranscription;
  variables?: CreateTaskRequestVariables[];
  static names(): { [key: string]: string } {
    return {
      categoryTags: 'categoryTags',
      customPrompt: 'customPrompt',
      dialogue: 'dialogue',
      examples: 'examples',
      fields: 'fields',
      modelCode: 'modelCode',
      responseFormatType: 'responseFormatType',
      resultTypes: 'resultTypes',
      serviceInspection: 'serviceInspection',
      taskType: 'taskType',
      templateIds: 'templateIds',
      transcription: 'transcription',
      variables: 'variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryTags: { 'type': 'array', 'itemType': CreateTaskRequestCategoryTags },
      customPrompt: 'string',
      dialogue: CreateTaskRequestDialogue,
      examples: CreateTaskRequestExamples,
      fields: { 'type': 'array', 'itemType': CreateTaskRequestFields },
      modelCode: 'string',
      responseFormatType: 'string',
      resultTypes: { 'type': 'array', 'itemType': 'string' },
      serviceInspection: CreateTaskRequestServiceInspection,
      taskType: 'string',
      templateIds: { 'type': 'array', 'itemType': 'string' },
      transcription: CreateTaskRequestTranscription,
      variables: { 'type': 'array', 'itemType': CreateTaskRequestVariables },
    };
  }

  validate() {
    if(Array.isArray(this.categoryTags)) {
      $dara.Model.validateArray(this.categoryTags);
    }
    if(this.dialogue && typeof (this.dialogue as any).validate === 'function') {
      (this.dialogue as any).validate();
    }
    if(this.examples && typeof (this.examples as any).validate === 'function') {
      (this.examples as any).validate();
    }
    if(Array.isArray(this.fields)) {
      $dara.Model.validateArray(this.fields);
    }
    if(Array.isArray(this.resultTypes)) {
      $dara.Model.validateArray(this.resultTypes);
    }
    if(this.serviceInspection && typeof (this.serviceInspection as any).validate === 'function') {
      (this.serviceInspection as any).validate();
    }
    if(Array.isArray(this.templateIds)) {
      $dara.Model.validateArray(this.templateIds);
    }
    if(this.transcription && typeof (this.transcription as any).validate === 'function') {
      (this.transcription as any).validate();
    }
    if(Array.isArray(this.variables)) {
      $dara.Model.validateArray(this.variables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskResponseBody extends $dara.Model {
  data?: CreateTaskResponseBodyData;
  /**
   * @example
   * 9F1DB065-AE0D-5EE3-B1AF-48632CB0831C
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateTaskResponseBodyData,
      requestId: 'string',
      success: 'string',
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

export class CreateTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVocabRequest extends $dara.Model {
  /**
   * @example
   * nls
   */
  audioModelCode?: string;
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  wordWeightList?: CreateVocabRequestWordWeightList[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-9****me1
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      audioModelCode: 'audioModelCode',
      description: 'description',
      name: 'name',
      wordWeightList: 'wordWeightList',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioModelCode: 'string',
      description: 'string',
      name: 'string',
      wordWeightList: { 'type': 'array', 'itemType': CreateVocabRequestWordWeightList },
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.wordWeightList)) {
      $dara.Model.validateArray(this.wordWeightList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVocabResponseBody extends $dara.Model {
  data?: CreateVocabResponseBodyData;
  /**
   * @example
   * 968A8634-FA2C-5381-9B3E-*******F
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateVocabResponseBodyData,
      requestId: 'string',
      success: 'string',
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

export class CreateVocabResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateVocabResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateVocabResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVocabRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ern*******rve
   */
  vocabularyId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-0*****jlg8s
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      vocabularyId: 'vocabularyId',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vocabularyId: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVocabResponseBody extends $dara.Model {
  /**
   * @example
   * true
   */
  data?: string;
  /**
   * @example
   * 968A8634-FA2C-5381-9B3E-*******F
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVocabResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteVocabResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteVocabResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskResultRequest extends $dara.Model {
  requiredFieldList?: string[];
  /**
   * @example
   * 20240905-********-93E9-5D45-B4EF-045743A34071
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requiredFieldList: 'requiredFieldList',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requiredFieldList: { 'type': 'array', 'itemType': 'string' },
      taskId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.requiredFieldList)) {
      $dara.Model.validateArray(this.requiredFieldList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskResultShrinkRequest extends $dara.Model {
  requiredFieldListShrink?: string;
  /**
   * @example
   * 20240905-********-93E9-5D45-B4EF-045743A34071
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requiredFieldListShrink: 'requiredFieldList',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requiredFieldListShrink: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskResultResponseBody extends $dara.Model {
  data?: GetTaskResultResponseBodyData;
  /**
   * @example
   * 968A8634-FA2C-5381-9B3E-C552DED7E8BF
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetTaskResultResponseBodyData,
      requestId: 'string',
      success: 'string',
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

export class GetTaskResultResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTaskResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetTaskResultResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVocabRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dhbf***rbrdb
   */
  vocabularyId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-9864***1
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      vocabularyId: 'vocabularyId',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vocabularyId: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVocabResponseBody extends $dara.Model {
  data?: GetVocabResponseBodyData;
  /**
   * @example
   * 968A8634-FA2C-5381-9B3E-*******F
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetVocabResponseBodyData,
      requestId: 'string',
      success: 'string',
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

export class GetVocabResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetVocabResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetVocabResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVocabRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-jhfr****8v
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVocabResponseBody extends $dara.Model {
  data?: ListVocabResponseBodyData[];
  /**
   * @example
   * 968A8634-FA2C-5381-9B3E-*******F
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListVocabResponseBodyData },
      requestId: 'string',
      success: 'string',
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

export class ListVocabResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListVocabResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListVocabResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunCompletionRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  dialogue?: RunCompletionRequestDialogue;
  fields?: RunCompletionRequestFields[];
  /**
   * @example
   * ccai-14b
   */
  modelCode?: string;
  serviceInspection?: RunCompletionRequestServiceInspection;
  /**
   * @example
   * false
   */
  stream?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  templateIds?: number[];
  responseFormatType?: string;
  variables?: RunCompletionRequestVariables[];
  static names(): { [key: string]: string } {
    return {
      dialogue: 'Dialogue',
      fields: 'Fields',
      modelCode: 'ModelCode',
      serviceInspection: 'ServiceInspection',
      stream: 'Stream',
      templateIds: 'TemplateIds',
      responseFormatType: 'responseFormatType',
      variables: 'variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dialogue: RunCompletionRequestDialogue,
      fields: { 'type': 'array', 'itemType': RunCompletionRequestFields },
      modelCode: 'string',
      serviceInspection: RunCompletionRequestServiceInspection,
      stream: 'boolean',
      templateIds: { 'type': 'array', 'itemType': 'number' },
      responseFormatType: 'string',
      variables: { 'type': 'array', 'itemType': RunCompletionRequestVariables },
    };
  }

  validate() {
    if(this.dialogue && typeof (this.dialogue as any).validate === 'function') {
      (this.dialogue as any).validate();
    }
    if(Array.isArray(this.fields)) {
      $dara.Model.validateArray(this.fields);
    }
    if(this.serviceInspection && typeof (this.serviceInspection as any).validate === 'function') {
      (this.serviceInspection as any).validate();
    }
    if(Array.isArray(this.templateIds)) {
      $dara.Model.validateArray(this.templateIds);
    }
    if(Array.isArray(this.variables)) {
      $dara.Model.validateArray(this.variables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunCompletionResponseBody extends $dara.Model {
  finishReason?: string;
  /**
   * @example
   * 17204B98-xxxx-4F9A-8464-2446A84821CA
   */
  requestId?: string;
  text?: string;
  inputTokens?: string;
  outputTokens?: string;
  totalTokens?: string;
  static names(): { [key: string]: string } {
    return {
      finishReason: 'FinishReason',
      requestId: 'RequestId',
      text: 'Text',
      inputTokens: 'inputTokens',
      outputTokens: 'outputTokens',
      totalTokens: 'totalTokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      finishReason: 'string',
      requestId: 'string',
      text: 'string',
      inputTokens: 'string',
      outputTokens: 'string',
      totalTokens: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunCompletionResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RunCompletionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RunCompletionResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunCompletionMessageRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  messages?: RunCompletionMessageRequestMessages[];
  /**
   * @example
   * ccai-14b
   */
  modelCode?: string;
  /**
   * @example
   * false
   */
  stream?: boolean;
  responseFormatType?: string;
  static names(): { [key: string]: string } {
    return {
      messages: 'Messages',
      modelCode: 'ModelCode',
      stream: 'Stream',
      responseFormatType: 'responseFormatType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messages: { 'type': 'array', 'itemType': RunCompletionMessageRequestMessages },
      modelCode: 'string',
      stream: 'boolean',
      responseFormatType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.messages)) {
      $dara.Model.validateArray(this.messages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunCompletionMessageResponseBody extends $dara.Model {
  finishReason?: string;
  /**
   * @example
   * 17204B98-xxxx-4F9A-8464-2446A84821CA
   */
  requestId?: string;
  text?: string;
  inputTokens?: string;
  outputTokens?: string;
  totalTokens?: string;
  static names(): { [key: string]: string } {
    return {
      finishReason: 'FinishReason',
      requestId: 'RequestId',
      text: 'Text',
      inputTokens: 'inputTokens',
      outputTokens: 'outputTokens',
      totalTokens: 'totalTokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      finishReason: 'string',
      requestId: 'string',
      text: 'string',
      inputTokens: 'string',
      outputTokens: 'string',
      totalTokens: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunCompletionMessageResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RunCompletionMessageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RunCompletionMessageResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVocabRequest extends $dara.Model {
  description?: string;
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dsvsv***dsvv
   */
  vocabularyId?: string;
  wordWeightList?: UpdateVocabRequestWordWeightList[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-jhfr****w8v
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      name: 'name',
      vocabularyId: 'vocabularyId',
      wordWeightList: 'wordWeightList',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      vocabularyId: 'string',
      wordWeightList: { 'type': 'array', 'itemType': UpdateVocabRequestWordWeightList },
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.wordWeightList)) {
      $dara.Model.validateArray(this.wordWeightList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVocabResponseBody extends $dara.Model {
  /**
   * @example
   * true
   */
  data?: string;
  /**
   * @example
   * 968A8634-FA2C-5381-9B3E-*******F
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVocabResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateVocabResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateVocabResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("contactcenterai", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!$dara.isNull(endpoint)) {
      return endpoint;
    }

    if (!$dara.isNull(endpointMap) && !$dara.isNull(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return OpenApiUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * 语音文件分析任务极速版
   * 
   * @param request - AnalyzeAudioSyncRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AnalyzeAudioSyncResponse
   */
  async analyzeAudioSyncWithOptions(workspaceId: string, appId: string, request: AnalyzeAudioSyncRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<AnalyzeAudioSyncResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.categoryTags)) {
      body["categoryTags"] = request.categoryTags;
    }

    if (!$dara.isNull(request.customPrompt)) {
      body["customPrompt"] = request.customPrompt;
    }

    if (!$dara.isNull(request.fields)) {
      body["fields"] = request.fields;
    }

    if (!$dara.isNull(request.modelCode)) {
      body["modelCode"] = request.modelCode;
    }

    if (!$dara.isNull(request.responseFormatType)) {
      body["responseFormatType"] = request.responseFormatType;
    }

    if (!$dara.isNull(request.resultTypes)) {
      body["resultTypes"] = request.resultTypes;
    }

    if (!$dara.isNull(request.serviceInspection)) {
      body["serviceInspection"] = request.serviceInspection;
    }

    if (!$dara.isNull(request.stream)) {
      body["stream"] = request.stream;
    }

    if (!$dara.isNull(request.templateIds)) {
      body["templateIds"] = request.templateIds;
    }

    if (!$dara.isNull(request.transcription)) {
      body["transcription"] = request.transcription;
    }

    if (!$dara.isNull(request.variables)) {
      body["variables"] = request.variables;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AnalyzeAudioSync",
      version: "2024-06-03",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/ccai/app/${$dara.URL.percentEncode(appId)}/analyzeAudioSync`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<AnalyzeAudioSyncResponse>(await this.callApi(params, req, runtime), new AnalyzeAudioSyncResponse({}));
  }

  /**
   * 语音文件分析任务极速版
   * 
   * @param request - AnalyzeAudioSyncRequest
   * @returns AnalyzeAudioSyncResponse
   */
  async analyzeAudioSync(workspaceId: string, appId: string, request: AnalyzeAudioSyncRequest): Promise<AnalyzeAudioSyncResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.analyzeAudioSyncWithOptions(workspaceId, appId, request, headers, runtime);
  }

  /**
   * 根据类型调用大模型
   * 
   * @param request - AnalyzeConversationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AnalyzeConversationResponse
   */
  async analyzeConversationWithOptions(workspaceId: string, appId: string, request: AnalyzeConversationRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<AnalyzeConversationResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.categoryTags)) {
      body["categoryTags"] = request.categoryTags;
    }

    if (!$dara.isNull(request.customPrompt)) {
      body["customPrompt"] = request.customPrompt;
    }

    if (!$dara.isNull(request.dialogue)) {
      body["dialogue"] = request.dialogue;
    }

    if (!$dara.isNull(request.examples)) {
      body["examples"] = request.examples;
    }

    if (!$dara.isNull(request.fields)) {
      body["fields"] = request.fields;
    }

    if (!$dara.isNull(request.modelCode)) {
      body["modelCode"] = request.modelCode;
    }

    if (!$dara.isNull(request.responseFormatType)) {
      body["responseFormatType"] = request.responseFormatType;
    }

    if (!$dara.isNull(request.resultTypes)) {
      body["resultTypes"] = request.resultTypes;
    }

    if (!$dara.isNull(request.sceneName)) {
      body["sceneName"] = request.sceneName;
    }

    if (!$dara.isNull(request.serviceInspection)) {
      body["serviceInspection"] = request.serviceInspection;
    }

    if (!$dara.isNull(request.sourceCallerUid)) {
      body["sourceCallerUid"] = request.sourceCallerUid;
    }

    if (!$dara.isNull(request.stream)) {
      body["stream"] = request.stream;
    }

    if (!$dara.isNull(request.timeConstraintList)) {
      body["timeConstraintList"] = request.timeConstraintList;
    }

    if (!$dara.isNull(request.userProfiles)) {
      body["userProfiles"] = request.userProfiles;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AnalyzeConversation",
      version: "2024-06-03",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/ccai/app/${$dara.URL.percentEncode(appId)}/analyze_conversation`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<AnalyzeConversationResponse>(await this.callApi(params, req, runtime), new AnalyzeConversationResponse({}));
  }

  /**
   * 根据类型调用大模型
   * 
   * @param request - AnalyzeConversationRequest
   * @returns AnalyzeConversationResponse
   */
  async analyzeConversation(workspaceId: string, appId: string, request: AnalyzeConversationRequest): Promise<AnalyzeConversationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.analyzeConversationWithOptions(workspaceId, appId, request, headers, runtime);
  }

  /**
   * 图片分析
   * 
   * @param request - AnalyzeImageRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AnalyzeImageResponse
   */
  async analyzeImageWithOptions(workspaceId: string, appId: string, request: AnalyzeImageRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<AnalyzeImageResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.imageUrls)) {
      body["imageUrls"] = request.imageUrls;
    }

    if (!$dara.isNull(request.responseFormatType)) {
      body["responseFormatType"] = request.responseFormatType;
    }

    if (!$dara.isNull(request.resultTypes)) {
      body["resultTypes"] = request.resultTypes;
    }

    if (!$dara.isNull(request.stream)) {
      body["stream"] = request.stream;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AnalyzeImage",
      version: "2024-06-03",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/ccai/app/${$dara.URL.percentEncode(appId)}/analyzeImage`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<AnalyzeImageResponse>(await this.callApi(params, req, runtime), new AnalyzeImageResponse({}));
  }

  /**
   * 图片分析
   * 
   * @param request - AnalyzeImageRequest
   * @returns AnalyzeImageResponse
   */
  async analyzeImage(workspaceId: string, appId: string, request: AnalyzeImageRequest): Promise<AnalyzeImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.analyzeImageWithOptions(workspaceId, appId, request, headers, runtime);
  }

  /**
   * 创建语音文件调用llm任务
   * 
   * @param request - CreateTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTaskResponse
   */
  async createTaskWithOptions(workspaceId: string, appId: string, request: CreateTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.categoryTags)) {
      body["categoryTags"] = request.categoryTags;
    }

    if (!$dara.isNull(request.customPrompt)) {
      body["customPrompt"] = request.customPrompt;
    }

    if (!$dara.isNull(request.dialogue)) {
      body["dialogue"] = request.dialogue;
    }

    if (!$dara.isNull(request.examples)) {
      body["examples"] = request.examples;
    }

    if (!$dara.isNull(request.fields)) {
      body["fields"] = request.fields;
    }

    if (!$dara.isNull(request.modelCode)) {
      body["modelCode"] = request.modelCode;
    }

    if (!$dara.isNull(request.responseFormatType)) {
      body["responseFormatType"] = request.responseFormatType;
    }

    if (!$dara.isNull(request.resultTypes)) {
      body["resultTypes"] = request.resultTypes;
    }

    if (!$dara.isNull(request.serviceInspection)) {
      body["serviceInspection"] = request.serviceInspection;
    }

    if (!$dara.isNull(request.taskType)) {
      body["taskType"] = request.taskType;
    }

    if (!$dara.isNull(request.templateIds)) {
      body["templateIds"] = request.templateIds;
    }

    if (!$dara.isNull(request.transcription)) {
      body["transcription"] = request.transcription;
    }

    if (!$dara.isNull(request.variables)) {
      body["variables"] = request.variables;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTask",
      version: "2024-06-03",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/ccai/app/${$dara.URL.percentEncode(appId)}/createTask`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<CreateTaskResponse>(await this.callApi(params, req, runtime), new CreateTaskResponse({}));
  }

  /**
   * 创建语音文件调用llm任务
   * 
   * @param request - CreateTaskRequest
   * @returns CreateTaskResponse
   */
  async createTask(workspaceId: string, appId: string, request: CreateTaskRequest): Promise<CreateTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createTaskWithOptions(workspaceId, appId, request, headers, runtime);
  }

  /**
   * 创建热词
   * 
   * @param request - CreateVocabRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateVocabResponse
   */
  async createVocabWithOptions(request: CreateVocabRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateVocabResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.audioModelCode)) {
      body["audioModelCode"] = request.audioModelCode;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.wordWeightList)) {
      body["wordWeightList"] = request.wordWeightList;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["workspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateVocab",
      version: "2024-06-03",
      protocol: "HTTPS",
      pathname: `/vocab/createVocab`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<CreateVocabResponse>(await this.callApi(params, req, runtime), new CreateVocabResponse({}));
  }

  /**
   * 创建热词
   * 
   * @param request - CreateVocabRequest
   * @returns CreateVocabResponse
   */
  async createVocab(request: CreateVocabRequest): Promise<CreateVocabResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createVocabWithOptions(request, headers, runtime);
  }

  /**
   * 删删除热词
   * 
   * @param request - DeleteVocabRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteVocabResponse
   */
  async deleteVocabWithOptions(request: DeleteVocabRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteVocabResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.vocabularyId)) {
      body["vocabularyId"] = request.vocabularyId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["workspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteVocab",
      version: "2024-06-03",
      protocol: "HTTPS",
      pathname: `/vocab/deleteVocab`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<DeleteVocabResponse>(await this.callApi(params, req, runtime), new DeleteVocabResponse({}));
  }

  /**
   * 删删除热词
   * 
   * @param request - DeleteVocabRequest
   * @returns DeleteVocabResponse
   */
  async deleteVocab(request: DeleteVocabRequest): Promise<DeleteVocabResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteVocabWithOptions(request, headers, runtime);
  }

  /**
   * 语音文件调用大模型获取结果
   * 
   * @param tmpReq - GetTaskResultRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTaskResultResponse
   */
  async getTaskResultWithOptions(tmpReq: GetTaskResultRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetTaskResultResponse> {
    tmpReq.validate();
    let request = new GetTaskResultShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.requiredFieldList)) {
      request.requiredFieldListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.requiredFieldList, "requiredFieldList", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.requiredFieldListShrink)) {
      query["requiredFieldList"] = request.requiredFieldListShrink;
    }

    if (!$dara.isNull(request.taskId)) {
      query["taskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTaskResult",
      version: "2024-06-03",
      protocol: "HTTPS",
      pathname: `/ccai/app/getTaskResult`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<GetTaskResultResponse>(await this.callApi(params, req, runtime), new GetTaskResultResponse({}));
  }

  /**
   * 语音文件调用大模型获取结果
   * 
   * @param request - GetTaskResultRequest
   * @returns GetTaskResultResponse
   */
  async getTaskResult(request: GetTaskResultRequest): Promise<GetTaskResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTaskResultWithOptions(request, headers, runtime);
  }

  /**
   * 获取热词
   * 
   * @param request - GetVocabRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetVocabResponse
   */
  async getVocabWithOptions(request: GetVocabRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetVocabResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.vocabularyId)) {
      body["vocabularyId"] = request.vocabularyId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["workspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetVocab",
      version: "2024-06-03",
      protocol: "HTTPS",
      pathname: `/vocab/getVocab`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<GetVocabResponse>(await this.callApi(params, req, runtime), new GetVocabResponse({}));
  }

  /**
   * 获取热词
   * 
   * @param request - GetVocabRequest
   * @returns GetVocabResponse
   */
  async getVocab(request: GetVocabRequest): Promise<GetVocabResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getVocabWithOptions(request, headers, runtime);
  }

  /**
   * 热词列表
   * 
   * @param request - ListVocabRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListVocabResponse
   */
  async listVocabWithOptions(request: ListVocabRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListVocabResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.workspaceId)) {
      body["workspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListVocab",
      version: "2024-06-03",
      protocol: "HTTPS",
      pathname: `/vocab/listVocab`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ListVocabResponse>(await this.callApi(params, req, runtime), new ListVocabResponse({}));
  }

  /**
   * 热词列表
   * 
   * @param request - ListVocabRequest
   * @returns ListVocabResponse
   */
  async listVocab(request: ListVocabRequest): Promise<ListVocabResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listVocabWithOptions(request, headers, runtime);
  }

  /**
   * CCAI服务面API
   * 
   * @param request - RunCompletionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunCompletionResponse
   */
  async runCompletionWithOptions(workspaceId: string, appId: string, request: RunCompletionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<RunCompletionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dialogue)) {
      body["Dialogue"] = request.dialogue;
    }

    if (!$dara.isNull(request.fields)) {
      body["Fields"] = request.fields;
    }

    if (!$dara.isNull(request.modelCode)) {
      body["ModelCode"] = request.modelCode;
    }

    if (!$dara.isNull(request.serviceInspection)) {
      body["ServiceInspection"] = request.serviceInspection;
    }

    if (!$dara.isNull(request.stream)) {
      body["Stream"] = request.stream;
    }

    if (!$dara.isNull(request.templateIds)) {
      body["TemplateIds"] = request.templateIds;
    }

    if (!$dara.isNull(request.responseFormatType)) {
      body["responseFormatType"] = request.responseFormatType;
    }

    if (!$dara.isNull(request.variables)) {
      body["variables"] = request.variables;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunCompletion",
      version: "2024-06-03",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/ccai/app/${$dara.URL.percentEncode(appId)}/completion`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<RunCompletionResponse>(await this.callApi(params, req, runtime), new RunCompletionResponse({}));
  }

  /**
   * CCAI服务面API
   * 
   * @param request - RunCompletionRequest
   * @returns RunCompletionResponse
   */
  async runCompletion(workspaceId: string, appId: string, request: RunCompletionRequest): Promise<RunCompletionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.runCompletionWithOptions(workspaceId, appId, request, headers, runtime);
  }

  /**
   * CCAI服务面API
   * 
   * @param request - RunCompletionMessageRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunCompletionMessageResponse
   */
  async runCompletionMessageWithOptions(workspaceId: string, appId: string, request: RunCompletionMessageRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<RunCompletionMessageResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.messages)) {
      body["Messages"] = request.messages;
    }

    if (!$dara.isNull(request.modelCode)) {
      body["ModelCode"] = request.modelCode;
    }

    if (!$dara.isNull(request.stream)) {
      body["Stream"] = request.stream;
    }

    if (!$dara.isNull(request.responseFormatType)) {
      body["responseFormatType"] = request.responseFormatType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunCompletionMessage",
      version: "2024-06-03",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/ccai/app/${$dara.URL.percentEncode(appId)}/completion_message`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<RunCompletionMessageResponse>(await this.callApi(params, req, runtime), new RunCompletionMessageResponse({}));
  }

  /**
   * CCAI服务面API
   * 
   * @param request - RunCompletionMessageRequest
   * @returns RunCompletionMessageResponse
   */
  async runCompletionMessage(workspaceId: string, appId: string, request: RunCompletionMessageRequest): Promise<RunCompletionMessageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.runCompletionMessageWithOptions(workspaceId, appId, request, headers, runtime);
  }

  /**
   * 修改热词
   * 
   * @param request - UpdateVocabRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateVocabResponse
   */
  async updateVocabWithOptions(request: UpdateVocabRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateVocabResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.vocabularyId)) {
      body["vocabularyId"] = request.vocabularyId;
    }

    if (!$dara.isNull(request.wordWeightList)) {
      body["wordWeightList"] = request.wordWeightList;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["workspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateVocab",
      version: "2024-06-03",
      protocol: "HTTPS",
      pathname: `/vocab/updateVocab`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<UpdateVocabResponse>(await this.callApi(params, req, runtime), new UpdateVocabResponse({}));
  }

  /**
   * 修改热词
   * 
   * @param request - UpdateVocabRequest
   * @returns UpdateVocabResponse
   */
  async updateVocab(request: UpdateVocabRequest): Promise<UpdateVocabResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateVocabWithOptions(request, headers, runtime);
  }

}
