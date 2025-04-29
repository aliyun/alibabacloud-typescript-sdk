// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunHotTopicChatResponseBodyPayloadOutputArticles extends $dara.Model {
  /**
   * @example
   * xxx
   */
  content?: string;
  /**
   * @example
   * 2024-09-22 16:45:06
   */
  pubTime?: string;
  score?: number;
  searchSourceName?: string;
  select?: boolean;
  /**
   * @example
   * xx
   */
  summary?: string;
  /**
   * @example
   * test
   */
  title?: string;
  /**
   * @example
   * http://xxx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      pubTime: 'pubTime',
      score: 'score',
      searchSourceName: 'searchSourceName',
      select: 'select',
      summary: 'summary',
      title: 'title',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      pubTime: 'string',
      score: 'number',
      searchSourceName: 'string',
      select: 'boolean',
      summary: 'string',
      title: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

