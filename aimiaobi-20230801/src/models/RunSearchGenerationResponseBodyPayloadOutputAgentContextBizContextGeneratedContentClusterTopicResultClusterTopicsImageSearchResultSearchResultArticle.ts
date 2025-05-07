// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopicsImageSearchResultSearchResultArticle extends $dara.Model {
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
   * 互联网搜索
   */
  searchSourceName?: string;
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
      docId: 'DocId',
      docUuid: 'DocUuid',
      searchSourceName: 'SearchSourceName',
      summary: 'Summary',
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docId: 'string',
      docUuid: 'string',
      searchSourceName: 'string',
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

