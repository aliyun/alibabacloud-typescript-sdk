// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunWritingV2ResponseBodyPayloadOutputArticles } from "./RunWritingV2responseBodyPayloadOutputArticles";


export class RunWritingV2ResponseBodyPayloadOutput extends $dara.Model {
  articles?: RunWritingV2ResponseBodyPayloadOutputArticles[];
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
      miniDoc: 'MiniDoc',
      searchQuery: 'SearchQuery',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      articles: { 'type': 'array', 'itemType': RunWritingV2ResponseBodyPayloadOutputArticles },
      miniDoc: { 'type': 'array', 'itemType': 'string' },
      searchQuery: 'string',
      text: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.articles)) {
      $dara.Model.validateArray(this.articles);
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

