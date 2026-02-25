// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySmarttagTemplateListResponseBodyTemplatesTemplate extends $dara.Model {
  analyseTypes?: string;
  faceCategoryIds?: string;
  faceCustomParamsConfig?: string;
  industry?: string;
  isDefault?: boolean;
  keywordConfig?: string;
  knowledgeConfig?: string;
  labelType?: string;
  labelVersion?: string;
  landmarkGroupIds?: string;
  objectGroupIds?: string;
  scene?: string;
  templateId?: string;
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      analyseTypes: 'AnalyseTypes',
      faceCategoryIds: 'FaceCategoryIds',
      faceCustomParamsConfig: 'FaceCustomParamsConfig',
      industry: 'Industry',
      isDefault: 'IsDefault',
      keywordConfig: 'KeywordConfig',
      knowledgeConfig: 'KnowledgeConfig',
      labelType: 'LabelType',
      labelVersion: 'LabelVersion',
      landmarkGroupIds: 'LandmarkGroupIds',
      objectGroupIds: 'ObjectGroupIds',
      scene: 'Scene',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analyseTypes: 'string',
      faceCategoryIds: 'string',
      faceCustomParamsConfig: 'string',
      industry: 'string',
      isDefault: 'boolean',
      keywordConfig: 'string',
      knowledgeConfig: 'string',
      labelType: 'string',
      labelVersion: 'string',
      landmarkGroupIds: 'string',
      objectGroupIds: 'string',
      scene: 'string',
      templateId: 'string',
      templateName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySmarttagTemplateListResponseBodyTemplates extends $dara.Model {
  template?: QuerySmarttagTemplateListResponseBodyTemplatesTemplate[];
  static names(): { [key: string]: string } {
    return {
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      template: { 'type': 'array', 'itemType': QuerySmarttagTemplateListResponseBodyTemplatesTemplate },
    };
  }

  validate() {
    if(Array.isArray(this.template)) {
      $dara.Model.validateArray(this.template);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySmarttagTemplateListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 5210DBB0-E327-4D45-ADBC-0B83C8796E26
   */
  requestId?: string;
  templates?: QuerySmarttagTemplateListResponseBodyTemplates;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      templates: 'Templates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      templates: QuerySmarttagTemplateListResponseBodyTemplates,
    };
  }

  validate() {
    if(this.templates && typeof (this.templates as any).validate === 'function') {
      (this.templates as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

