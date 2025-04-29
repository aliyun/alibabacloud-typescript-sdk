// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GenerateOutputFormatRequestTags } from "./GenerateOutputFormatRequestTags";


export class GenerateOutputFormatRequest extends $dara.Model {
  /**
   * @example
   * clueMining
   */
  businessType?: string;
  /**
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
   * @remarks
   * This parameter is required.
   */
  tags?: GenerateOutputFormatRequestTags[];
  /**
   * @example
   * 给你一条待分析文本数据，请你按照标签体系来对数据进行打标。
   */
  taskDescription?: string;
  static names(): { [key: string]: string } {
    return {
      businessType: 'businessType',
      content: 'content',
      extraInfo: 'extraInfo',
      tags: 'tags',
      taskDescription: 'taskDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'string',
      content: 'string',
      extraInfo: 'string',
      tags: { 'type': 'array', 'itemType': GenerateOutputFormatRequestTags },
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

