// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultReferenceList extends $dara.Model {
  chunks?: string[];
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
   * 2023-04-04 08:39:09
   */
  pubTime?: string;
  /**
   * @example
   * 0.99
   */
  score?: number;
  /**
   * @example
   * QuarkCommonNews
   */
  searchSource?: string;
  /**
   * @example
   * 互联网搜索
   */
  searchSourceName?: string;
  /**
   * @example
   * SystemSearch
   */
  searchSourceType?: string;
  /**
   * @example
   * true
   */
  select?: boolean;
  /**
   * @example
   * 新华社
   */
  source?: string;
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
   * 1
   */
  traceabilityId?: number;
  /**
   * @example
   * xx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      chunks: 'Chunks',
      content: 'Content',
      docId: 'DocId',
      docUuid: 'DocUuid',
      pubTime: 'PubTime',
      score: 'Score',
      searchSource: 'SearchSource',
      searchSourceName: 'SearchSourceName',
      searchSourceType: 'SearchSourceType',
      select: 'Select',
      source: 'Source',
      summary: 'Summary',
      title: 'Title',
      traceabilityId: 'TraceabilityId',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chunks: { 'type': 'array', 'itemType': 'string' },
      content: 'string',
      docId: 'string',
      docUuid: 'string',
      pubTime: 'string',
      score: 'number',
      searchSource: 'string',
      searchSourceName: 'string',
      searchSourceType: 'string',
      select: 'boolean',
      source: 'string',
      summary: 'string',
      title: 'string',
      traceabilityId: 'number',
      url: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.chunks)) {
      $dara.Model.validateArray(this.chunks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

