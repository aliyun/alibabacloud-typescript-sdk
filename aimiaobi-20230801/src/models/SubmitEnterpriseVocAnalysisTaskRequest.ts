// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitEnterpriseVocAnalysisTaskRequestContentTags extends $dara.Model {
  /**
   * @remarks
   * The tag definition.
   * 
   * @example
   * 一级标签-二级标签
   */
  tagDefinePrompt?: string;
  /**
   * @remarks
   * The tag name.
   * 
   * @example
   * 一级标签-二级标签
   */
  tagName?: string;
  /**
   * @remarks
   * The type of the tag mining task. Valid values: \\`singleTagValue\\` (single tag), \\`multiTagValues\\` (multiple tags), \\`summaryAndOverview\\` (summarization and overview), and \\`filter\\` (filtering).
   * 
   * @example
   * singleTagValue
   */
  tagTaskType?: string;
  /**
   * @remarks
   * The definition of the tag value. For a tag mining task, this is a comma-separated list of enumerated values. For a summarization task, this is the summarization prompt.
   * 
   * @example
   * 是,否
   */
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
  /**
   * @remarks
   * Additional information provided directly to the large language model (LLM).
   * 
   * @example
   * 额外信息
   */
  extraInfo?: string;
  /**
   * @remarks
   * The material to be mined.
   * 
   * @example
   * 内容文本
   */
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
   * @remarks
   * The tag definition.
   * 
   * @example
   * 一级标签-二级标签
   */
  tagDefinePrompt?: string;
  /**
   * @remarks
   * The tag name.
   * 
   * @example
   * 一级标签-二级标签
   */
  tagName?: string;
  /**
   * @remarks
   * The type of the tag mining task. Valid values: \\`singleTagValue\\` (single tag), \\`multiTagValues\\` (multiple tags), \\`summaryAndOverview\\` (summarization and overview), and \\`filter\\` (filtering).
   * 
   * @example
   * singleTagValue
   */
  tagType?: string;
  /**
   * @remarks
   * The definition of the tag value. For a tag mining task, this is a comma-separated list of enumerated values. For a summarization task, this is the summarization prompt.
   * 
   * @example
   * 是,否
   */
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
  /**
   * @remarks
   * The API key for integration access. For more information, see [Get an API key](https://help.aliyun.com/zh/model-studio/get-api-key?spm=a2c4g.11186623.help-menu-2400256.d_2_0_0.1cbdb0a8lsT1n3).
   * 
   * @example
   * sk-sdfs2-wewerwe-ere
   */
  apiKey?: string;
  /**
   * @remarks
   * The content tags.
   * 
   * This parameter is required.
   */
  contentTags?: SubmitEnterpriseVocAnalysisTaskRequestContentTags[];
  /**
   * @remarks
   * The material content to be mined.
   */
  contents?: SubmitEnterpriseVocAnalysisTaskRequestContents[];
  /**
   * @remarks
   * The key of the file.
   * 
   * @example
   * oss://default/bucket-name/materialDocument/tenant_agent/fileName
   */
  fileKey?: string;
  /**
   * @remarks
   * The filter tags.
   */
  filterTags?: SubmitEnterpriseVocAnalysisTaskRequestFilterTags[];
  /**
   * @remarks
   * The material type. Valid values: \\`shortContent\\` (long or short comments, or tickets) and \\`dialogue\\` (dialogues).
   * 
   * @example
   * shortContent
   */
  materialType?: string;
  /**
   * @remarks
   * The ID of the model.
   * 
   * This parameter is required.
   * 
   * @example
   * qwen-max
   */
  modelId?: string;
  /**
   * @remarks
   * The content of the positive sample.
   * 
   * @example
   * 正面样本
   */
  positiveSample?: string;
  /**
   * @remarks
   * The key of the positive sample file.
   * 
   * @example
   * oss://default/bucket-name/path/xxx.xlsx
   */
  positiveSampleFileKey?: string;
  /**
   * @remarks
   * The task type. Valid values: \\`lightAppSass\\` (invoked from a Software as a Service (SaaS) page) and \\`sdkBatchTask\\` (SDK batch task).
   * 
   * @example
   * lightAppSass
   */
  taskType?: string;
  /**
   * @remarks
   * The ID of the Model Studio workspace. For more information, see [Get a workspace ID](https://help.aliyun.com/document_detail/2782167.html).
   * 
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

