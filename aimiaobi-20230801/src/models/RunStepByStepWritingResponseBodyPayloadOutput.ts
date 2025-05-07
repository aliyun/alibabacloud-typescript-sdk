// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunStepByStepWritingResponseBodyPayloadOutputArticles } from "./RunStepByStepWritingResponseBodyPayloadOutputArticles";
import { RunStepByStepWritingResponseBodyPayloadOutputExtraOutput } from "./RunStepByStepWritingResponseBodyPayloadOutputExtraOutput";


export class RunStepByStepWritingResponseBodyPayloadOutput extends $dara.Model {
  articles?: RunStepByStepWritingResponseBodyPayloadOutputArticles[];
  extraOutput?: RunStepByStepWritingResponseBodyPayloadOutputExtraOutput;
  /**
   * @example
   * 文章精排之后的片段
   */
  miniDoc?: string[];
  /**
   * @example
   * 大模型改变世界
   */
  searchQuery?: string;
  /**
   * @example
   * 文本生成结果
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      articles: 'Articles',
      extraOutput: 'ExtraOutput',
      miniDoc: 'MiniDoc',
      searchQuery: 'SearchQuery',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      articles: { 'type': 'array', 'itemType': RunStepByStepWritingResponseBodyPayloadOutputArticles },
      extraOutput: RunStepByStepWritingResponseBodyPayloadOutputExtraOutput,
      miniDoc: { 'type': 'array', 'itemType': 'string' },
      searchQuery: 'string',
      text: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.articles)) {
      $dara.Model.validateArray(this.articles);
    }
    if(this.extraOutput && typeof (this.extraOutput as any).validate === 'function') {
      (this.extraOutput as any).validate();
    }
    if(Array.isArray(this.miniDoc)) {
      $dara.Model.validateArray(this.miniDoc);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

