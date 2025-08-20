// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
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

