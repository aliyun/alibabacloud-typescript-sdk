// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitEnterpriseVocAnalysisTaskShrinkRequest extends $dara.Model {
  apiKey?: string;
  contentsShrink?: string;
  extraInfo?: string;
  /**
   * @example
   * oss://default/aimiaobi-service-prod/aimiaobi/temp/public/government_service_experience_feedback_summary.txt
   */
  fileKey?: string;
  filterTagsShrink?: string;
  /**
   * @example
   * qwen-max
   */
  modelId?: string;
  outputFormat?: string;
  sourceTrace?: boolean;
  tagsShrink?: string;
  taskDescription?: string;
  /**
   * @example
   * http://www.example.com/xxxx.txt
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'apiKey',
      contentsShrink: 'contents',
      extraInfo: 'extraInfo',
      fileKey: 'fileKey',
      filterTagsShrink: 'filterTags',
      modelId: 'modelId',
      outputFormat: 'outputFormat',
      sourceTrace: 'sourceTrace',
      tagsShrink: 'tags',
      taskDescription: 'taskDescription',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      contentsShrink: 'string',
      extraInfo: 'string',
      fileKey: 'string',
      filterTagsShrink: 'string',
      modelId: 'string',
      outputFormat: 'string',
      sourceTrace: 'boolean',
      tagsShrink: 'string',
      taskDescription: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

