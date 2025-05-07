// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunSearchSimilarArticlesResponseBodyPayloadOutputArticles extends $dara.Model {
  docId?: string;
  /**
   * @example
   * a26c2c1
   */
  docUuid?: string;
  /**
   * @example
   * 2025-01-16 18:07:22
   */
  pubTime?: string;
  searchSourceName?: string;
  /**
   * @example
   * xxx.com
   */
  source?: string;
  /**
   * @example
   * xxx
   */
  summary?: string;
  title?: string;
  /**
   * @example
   * https://xxx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      docId: 'DocId',
      docUuid: 'DocUuid',
      pubTime: 'PubTime',
      searchSourceName: 'SearchSourceName',
      source: 'Source',
      summary: 'Summary',
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docId: 'string',
      docUuid: 'string',
      pubTime: 'string',
      searchSourceName: 'string',
      source: 'string',
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

