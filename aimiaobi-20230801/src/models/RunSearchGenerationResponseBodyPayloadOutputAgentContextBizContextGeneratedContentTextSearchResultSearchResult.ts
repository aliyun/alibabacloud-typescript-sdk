// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextSearchResultSearchResult extends $dara.Model {
  /**
   * @example
   * xx
   */
  content?: string;
  /**
   * @example
   * xx
   */
  docId?: string;
  /**
   * @example
   * xx
   */
  docUuid?: string;
  /**
   * @example
   * 2024-11-25 14:25:59
   */
  pubTime?: string;
  /**
   * @example
   * QuarkCommonNews
   */
  searchSource?: string;
  /**
   * @example
   * xxx
   */
  searchSourceName?: string;
  /**
   * @example
   * SystemSearch
   */
  searchSourceType?: string;
  /**
   * @example
   * xx
   */
  summary?: string;
  /**
   * @example
   * xx
   */
  title?: string;
  /**
   * @example
   * xx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      docId: 'DocId',
      docUuid: 'DocUuid',
      pubTime: 'PubTime',
      searchSource: 'SearchSource',
      searchSourceName: 'SearchSourceName',
      searchSourceType: 'SearchSourceType',
      summary: 'Summary',
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      docId: 'string',
      docUuid: 'string',
      pubTime: 'string',
      searchSource: 'string',
      searchSourceName: 'string',
      searchSourceType: 'string',
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

