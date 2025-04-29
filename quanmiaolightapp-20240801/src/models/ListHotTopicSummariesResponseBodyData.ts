// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListHotTopicSummariesResponseBodyDataNews } from "./ListHotTopicSummariesResponseBodyDataNews";
import { ListHotTopicSummariesResponseBodyDataSummary } from "./ListHotTopicSummariesResponseBodyDataSummary";


export class ListHotTopicSummariesResponseBodyData extends $dara.Model {
  category?: string;
  /**
   * @example
   * xx
   */
  hotTopic?: string;
  /**
   * @example
   * 2024-09-13_12
   */
  hotTopicVersion?: string;
  /**
   * @example
   * 1000000
   */
  hotValue?: number;
  /**
   * @example
   * db5dc5b3d8954a30b65ba700c9dda3bb
   */
  id?: string;
  news?: ListHotTopicSummariesResponseBodyDataNews[];
  summary?: ListHotTopicSummariesResponseBodyDataSummary;
  /**
   * @example
   * xx
   */
  textSummary?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      hotTopic: 'hotTopic',
      hotTopicVersion: 'hotTopicVersion',
      hotValue: 'hotValue',
      id: 'id',
      news: 'news',
      summary: 'summary',
      textSummary: 'textSummary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      hotTopic: 'string',
      hotTopicVersion: 'string',
      hotValue: 'number',
      id: 'string',
      news: { 'type': 'array', 'itemType': ListHotTopicSummariesResponseBodyDataNews },
      summary: ListHotTopicSummariesResponseBodyDataSummary,
      textSummary: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.news)) {
      $dara.Model.validateArray(this.news);
    }
    if(this.summary && typeof (this.summary as any).validate === 'function') {
      (this.summary as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

