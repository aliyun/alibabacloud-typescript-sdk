// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunSearchSimilarArticlesResponseBodyPayloadOutputArticles } from "./RunSearchSimilarArticlesResponseBodyPayloadOutputArticles";


export class RunSearchSimilarArticlesResponseBodyPayloadOutput extends $dara.Model {
  articles?: RunSearchSimilarArticlesResponseBodyPayloadOutputArticles[];
  /**
   * @example
   * 文本生成结果
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      articles: 'Articles',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      articles: { 'type': 'array', 'itemType': RunSearchSimilarArticlesResponseBodyPayloadOutputArticles },
      text: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.articles)) {
      $dara.Model.validateArray(this.articles);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

