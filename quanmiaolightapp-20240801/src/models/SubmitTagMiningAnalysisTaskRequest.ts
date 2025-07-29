// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitTagMiningAnalysisTaskRequestTags extends $dara.Model {
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

export class SubmitTagMiningAnalysisTaskRequest extends $dara.Model {
  apiKey?: string;
  /**
   * @example
   * clueMining
   */
  businessType?: string;
  contents?: string[];
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
  tags?: SubmitTagMiningAnalysisTaskRequestTags[];
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
      contents: 'contents',
      extraInfo: 'extraInfo',
      modelId: 'modelId',
      outputFormat: 'outputFormat',
      tags: 'tags',
      taskDescription: 'taskDescription',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      businessType: 'string',
      contents: { 'type': 'array', 'itemType': 'string' },
      extraInfo: 'string',
      modelId: 'string',
      outputFormat: 'string',
      tags: { 'type': 'array', 'itemType': SubmitTagMiningAnalysisTaskRequestTags },
      taskDescription: 'string',
      url: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.contents)) {
      $dara.Model.validateArray(this.contents);
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

