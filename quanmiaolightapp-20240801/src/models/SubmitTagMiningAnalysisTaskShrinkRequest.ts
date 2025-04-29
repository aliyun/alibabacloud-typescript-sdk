// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitTagMiningAnalysisTaskShrinkRequest extends $dara.Model {
  apiKey?: string;
  /**
   * @example
   * clueMining
   */
  businessType?: string;
  contentsShrink?: string;
  /**
   * @example
   * 额外信息
   */
  extraInfo?: string;
  /**
   * @example
   * qwen-max
   */
  modelId?: string;
  /**
   * @example
   * 请返回如下JSON格式，{"key1":"","key2":""}
   */
  outputFormat?: string;
  tagsShrink?: string;
  /**
   * @example
   * 给你一条待分析文本数据，请你按照标签体系来对数据进行打标。
   */
  taskDescription?: string;
  /**
   * @example
   * http://www.example.com/xxxx.txt
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'apiKey',
      businessType: 'businessType',
      contentsShrink: 'contents',
      extraInfo: 'extraInfo',
      modelId: 'modelId',
      outputFormat: 'outputFormat',
      tagsShrink: 'tags',
      taskDescription: 'taskDescription',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      businessType: 'string',
      contentsShrink: 'string',
      extraInfo: 'string',
      modelId: 'string',
      outputFormat: 'string',
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

