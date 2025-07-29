// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunTagMiningAnalysisRequestTags extends $dara.Model {
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

export class RunTagMiningAnalysisRequest extends $dara.Model {
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
  tags?: RunTagMiningAnalysisRequestTags[];
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
      tags: 'tags',
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
      tags: { 'type': 'array', 'itemType': RunTagMiningAnalysisRequestTags },
      taskDescription: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

