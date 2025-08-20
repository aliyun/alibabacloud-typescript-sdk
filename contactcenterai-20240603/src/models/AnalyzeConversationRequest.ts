// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


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

