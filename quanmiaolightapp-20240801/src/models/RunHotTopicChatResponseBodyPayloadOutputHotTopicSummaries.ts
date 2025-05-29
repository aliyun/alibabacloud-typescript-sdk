// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunHotTopicChatResponseBodyPayloadOutputHotTopicSummariesImages } from "./RunHotTopicChatResponseBodyPayloadOutputHotTopicSummariesImages";
import { RunHotTopicChatResponseBodyPayloadOutputHotTopicSummariesNews } from "./RunHotTopicChatResponseBodyPayloadOutputHotTopicSummariesNews";


export class RunHotTopicChatResponseBodyPayloadOutputHotTopicSummaries extends $dara.Model {
  /**
   * @example
   * 100000
   */
  customHotValue?: number;
  /**
   * @example
   * xxx
   */
  customTextSummary?: string;
  /**
   * @example
   * xx
   */
  hotTopic?: string;
  /**
   * @example
   * 2024-09-13_08
   */
  hotTopicVersion?: string;
  /**
   * @example
   * 100000
   */
  hotValue?: number;
  images?: RunHotTopicChatResponseBodyPayloadOutputHotTopicSummariesImages[];
  news?: RunHotTopicChatResponseBodyPayloadOutputHotTopicSummariesNews[];
  pubTime?: string;
  /**
   * @example
   * xxx
   */
  textSummary?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      customHotValue: 'customHotValue',
      customTextSummary: 'customTextSummary',
      hotTopic: 'hotTopic',
      hotTopicVersion: 'hotTopicVersion',
      hotValue: 'hotValue',
      images: 'images',
      news: 'news',
      pubTime: 'pubTime',
      textSummary: 'textSummary',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customHotValue: 'number',
      customTextSummary: 'string',
      hotTopic: 'string',
      hotTopicVersion: 'string',
      hotValue: 'number',
      images: { 'type': 'array', 'itemType': RunHotTopicChatResponseBodyPayloadOutputHotTopicSummariesImages },
      news: { 'type': 'array', 'itemType': RunHotTopicChatResponseBodyPayloadOutputHotTopicSummariesNews },
      pubTime: 'string',
      textSummary: 'string',
      url: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.images)) {
      $dara.Model.validateArray(this.images);
    }
    if(Array.isArray(this.news)) {
      $dara.Model.validateArray(this.news);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

