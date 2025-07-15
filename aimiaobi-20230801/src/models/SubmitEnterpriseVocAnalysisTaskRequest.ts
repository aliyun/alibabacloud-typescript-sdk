// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitEnterpriseVocAnalysisTaskRequestContentTags extends $dara.Model {
  /**
   * @example
   * 一级标签-二级标签
   */
  tagDefinePrompt?: string;
  /**
   * @example
   * 一级标签-二级标签
   */
  tagName?: string;
  /**
   * @example
   * singleTagValue
   */
  tagTaskType?: string;
  tagValueDefinePrompt?: string;
  static names(): { [key: string]: string } {
    return {
      tagDefinePrompt: 'TagDefinePrompt',
      tagName: 'TagName',
      tagTaskType: 'TagTaskType',
      tagValueDefinePrompt: 'TagValueDefinePrompt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagDefinePrompt: 'string',
      tagName: 'string',
      tagTaskType: 'string',
      tagValueDefinePrompt: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitEnterpriseVocAnalysisTaskRequestContents extends $dara.Model {
  extraInfo?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      extraInfo: 'ExtraInfo',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extraInfo: 'string',
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
  /**
   * @example
   * 一级标签-二级标签
   */
  tagDefinePrompt?: string;
  /**
   * @example
   * 一级标签-二级标签
   */
  tagName?: string;
  /**
   * @example
   * singleTagValue
   */
  tagType?: string;
  tagValueDefinePrompt?: string;
  static names(): { [key: string]: string } {
    return {
      tagDefinePrompt: 'TagDefinePrompt',
      tagName: 'TagName',
      tagType: 'TagType',
      tagValueDefinePrompt: 'TagValueDefinePrompt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagDefinePrompt: 'string',
      tagName: 'string',
      tagType: 'string',
      tagValueDefinePrompt: 'string',
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
  /**
   * @remarks
   * This parameter is required.
   */
  contentTags?: SubmitEnterpriseVocAnalysisTaskRequestContentTags[];
  contents?: SubmitEnterpriseVocAnalysisTaskRequestContents[];
  /**
   * @example
   * oss://default/bucket-name/materialDocument/tenant_agent/fileName
   */
  fileKey?: string;
  filterTags?: SubmitEnterpriseVocAnalysisTaskRequestFilterTags[];
  /**
   * @example
   * shortContent
   */
  materialType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * qwen-max
   */
  modelId?: string;
  positiveSample?: string;
  /**
   * @example
   * oss://default/bucket-name/path/xxx.xlsx
   */
  positiveSampleFileKey?: string;
  /**
   * @example
   * lightAppSass
   */
  taskType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'ApiKey',
      contentTags: 'ContentTags',
      contents: 'Contents',
      fileKey: 'FileKey',
      filterTags: 'FilterTags',
      materialType: 'MaterialType',
      modelId: 'ModelId',
      positiveSample: 'PositiveSample',
      positiveSampleFileKey: 'PositiveSampleFileKey',
      taskType: 'TaskType',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      contentTags: { 'type': 'array', 'itemType': SubmitEnterpriseVocAnalysisTaskRequestContentTags },
      contents: { 'type': 'array', 'itemType': SubmitEnterpriseVocAnalysisTaskRequestContents },
      fileKey: 'string',
      filterTags: { 'type': 'array', 'itemType': SubmitEnterpriseVocAnalysisTaskRequestFilterTags },
      materialType: 'string',
      modelId: 'string',
      positiveSample: 'string',
      positiveSampleFileKey: 'string',
      taskType: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.contentTags)) {
      $dara.Model.validateArray(this.contentTags);
    }
    if(Array.isArray(this.contents)) {
      $dara.Model.validateArray(this.contents);
    }
    if(Array.isArray(this.filterTags)) {
      $dara.Model.validateArray(this.filterTags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

