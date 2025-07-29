// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitEnterpriseVocAnalysisTaskRequestContents extends $dara.Model {
  /**
   * @example
   * id-xxxxx
   */
  id?: string;
  /**
   * @example
   * xxxx
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      text: 'text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
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

export class SubmitEnterpriseVocAnalysisTaskRequestFilterTags extends $dara.Model {
  tagDefinePrompt?: string;
  tagName?: string;
  static names(): { [key: string]: string } {
    return {
      tagDefinePrompt: 'tagDefinePrompt',
      tagName: 'tagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagDefinePrompt: 'string',
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

export class SubmitEnterpriseVocAnalysisTaskRequestTags extends $dara.Model {
  /**
   * @example
   * xxxx
   */
  tagDefinePrompt?: string;
  /**
   * @example
   * xxxx
   */
  tagName?: string;
  static names(): { [key: string]: string } {
    return {
      tagDefinePrompt: 'tagDefinePrompt',
      tagName: 'tagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagDefinePrompt: 'string',
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

export class SubmitEnterpriseVocAnalysisTaskRequest extends $dara.Model {
  apiKey?: string;
  contents?: SubmitEnterpriseVocAnalysisTaskRequestContents[];
  extraInfo?: string;
  /**
   * @example
   * oss://default/aimiaobi-service-prod/aimiaobi/temp/public/government_service_experience_feedback_summary.txt
   */
  fileKey?: string;
  filterTags?: SubmitEnterpriseVocAnalysisTaskRequestFilterTags[];
  /**
   * @example
   * qwen-max
   */
  modelId?: string;
  outputFormat?: string;
  sourceTrace?: boolean;
  tags?: SubmitEnterpriseVocAnalysisTaskRequestTags[];
  taskDescription?: string;
  /**
   * @example
   * http://www.example.com/xxxx.txt
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'apiKey',
      contents: 'contents',
      extraInfo: 'extraInfo',
      fileKey: 'fileKey',
      filterTags: 'filterTags',
      modelId: 'modelId',
      outputFormat: 'outputFormat',
      sourceTrace: 'sourceTrace',
      tags: 'tags',
      taskDescription: 'taskDescription',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      contents: { 'type': 'array', 'itemType': SubmitEnterpriseVocAnalysisTaskRequestContents },
      extraInfo: 'string',
      fileKey: 'string',
      filterTags: { 'type': 'array', 'itemType': SubmitEnterpriseVocAnalysisTaskRequestFilterTags },
      modelId: 'string',
      outputFormat: 'string',
      sourceTrace: 'boolean',
      tags: { 'type': 'array', 'itemType': SubmitEnterpriseVocAnalysisTaskRequestTags },
      taskDescription: 'string',
      url: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.contents)) {
      $dara.Model.validateArray(this.contents);
    }
    if(Array.isArray(this.filterTags)) {
      $dara.Model.validateArray(this.filterTags);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

