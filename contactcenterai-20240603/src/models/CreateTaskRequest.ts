// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


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
  languageHints?: string;
  level?: string;
  roleIdentification?: boolean;
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
      languageHints: 'languageHints',
      level: 'level',
      roleIdentification: 'roleIdentification',
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
      languageHints: 'string',
      level: 'string',
      roleIdentification: 'boolean',
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

export class CreateTaskRequest extends $dara.Model {
  callBackUrl?: string;
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
      callBackUrl: 'callBackUrl',
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
      callBackUrl: 'string',
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

