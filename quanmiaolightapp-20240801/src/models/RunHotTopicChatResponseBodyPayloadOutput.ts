// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunHotTopicChatResponseBodyPayloadOutputArticles } from "./RunHotTopicChatResponseBodyPayloadOutputArticles";
import { RunHotTopicChatResponseBodyPayloadOutputHotTopicSummaries } from "./RunHotTopicChatResponseBodyPayloadOutputHotTopicSummaries";
import { RunHotTopicChatResponseBodyPayloadOutputMultimodalMedias } from "./RunHotTopicChatResponseBodyPayloadOutputMultimodalMedias";


export class RunHotTopicChatResponseBodyPayloadOutput extends $dara.Model {
  articles?: RunHotTopicChatResponseBodyPayloadOutputArticles[];
  category?: string;
  hotTopicSummaries?: RunHotTopicChatResponseBodyPayloadOutputHotTopicSummaries[];
  keyword?: string;
  location?: string;
  multimodalMedias?: RunHotTopicChatResponseBodyPayloadOutputMultimodalMedias[];
  recommendQueries?: string[];
  searchQuery?: string;
  /**
   * @example
   * xx
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      articles: 'articles',
      category: 'category',
      hotTopicSummaries: 'hotTopicSummaries',
      keyword: 'keyword',
      location: 'location',
      multimodalMedias: 'multimodalMedias',
      recommendQueries: 'recommendQueries',
      searchQuery: 'searchQuery',
      text: 'text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      articles: { 'type': 'array', 'itemType': RunHotTopicChatResponseBodyPayloadOutputArticles },
      category: 'string',
      hotTopicSummaries: { 'type': 'array', 'itemType': RunHotTopicChatResponseBodyPayloadOutputHotTopicSummaries },
      keyword: 'string',
      location: 'string',
      multimodalMedias: { 'type': 'array', 'itemType': RunHotTopicChatResponseBodyPayloadOutputMultimodalMedias },
      recommendQueries: { 'type': 'array', 'itemType': 'string' },
      searchQuery: 'string',
      text: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.articles)) {
      $dara.Model.validateArray(this.articles);
    }
    if(Array.isArray(this.hotTopicSummaries)) {
      $dara.Model.validateArray(this.hotTopicSummaries);
    }
    if(Array.isArray(this.multimodalMedias)) {
      $dara.Model.validateArray(this.multimodalMedias);
    }
    if(Array.isArray(this.recommendQueries)) {
      $dara.Model.validateArray(this.recommendQueries);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

