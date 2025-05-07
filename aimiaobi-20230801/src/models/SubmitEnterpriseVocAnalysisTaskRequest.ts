// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SubmitEnterpriseVocAnalysisTaskRequestContentTags } from "./SubmitEnterpriseVocAnalysisTaskRequestContentTags";
import { SubmitEnterpriseVocAnalysisTaskRequestContents } from "./SubmitEnterpriseVocAnalysisTaskRequestContents";
import { SubmitEnterpriseVocAnalysisTaskRequestFilterTags } from "./SubmitEnterpriseVocAnalysisTaskRequestFilterTags";


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

