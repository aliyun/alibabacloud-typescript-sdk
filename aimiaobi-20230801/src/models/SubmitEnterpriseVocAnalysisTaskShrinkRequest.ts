// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitEnterpriseVocAnalysisTaskShrinkRequest extends $dara.Model {
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
  contentTagsShrink?: string;
  /**
   * @remarks
   * The material content to be mined.
   */
  contentsShrink?: string;
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
  filterTagsShrink?: string;
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
      contentTagsShrink: 'ContentTags',
      contentsShrink: 'Contents',
      fileKey: 'FileKey',
      filterTagsShrink: 'FilterTags',
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
      contentTagsShrink: 'string',
      contentsShrink: 'string',
      fileKey: 'string',
      filterTagsShrink: 'string',
      materialType: 'string',
      modelId: 'string',
      positiveSample: 'string',
      positiveSampleFileKey: 'string',
      taskType: 'string',
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

