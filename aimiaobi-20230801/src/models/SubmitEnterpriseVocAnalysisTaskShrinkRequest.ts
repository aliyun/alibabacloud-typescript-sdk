// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitEnterpriseVocAnalysisTaskShrinkRequest extends $dara.Model {
  apiKey?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  contentTagsShrink?: string;
  contentsShrink?: string;
  /**
   * @example
   * oss://default/bucket-name/materialDocument/tenant_agent/fileName
   */
  fileKey?: string;
  filterTagsShrink?: string;
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

