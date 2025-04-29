// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunTagMiningAnalysisShrinkRequest extends $dara.Model {
  apiKey?: string;
  /**
   * @example
   * clueMining
   */
  businessType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 待分析文本
   */
  content?: string;
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
  static names(): { [key: string]: string } {
    return {
      apiKey: 'apiKey',
      businessType: 'businessType',
      content: 'content',
      extraInfo: 'extraInfo',
      modelId: 'modelId',
      outputFormat: 'outputFormat',
      tagsShrink: 'tags',
      taskDescription: 'taskDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      businessType: 'string',
      content: 'string',
      extraInfo: 'string',
      modelId: 'string',
      outputFormat: 'string',
      tagsShrink: 'string',
      taskDescription: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

