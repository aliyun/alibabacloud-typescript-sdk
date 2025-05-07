// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentExcerptResultSearchResultMultimodalMedias } from "./RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentExcerptResultSearchResultMultimodalMedias";
import { RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentExcerptResultSearchResultTextGenerateMultimodalMediaList } from "./RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentExcerptResultSearchResultTextGenerateMultimodalMediaList";


export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentExcerptResultSearchResult extends $dara.Model {
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
   * xx
   */
  excerpt?: string;
  multimodalMedias?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentExcerptResultSearchResultMultimodalMedias[];
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
   * xx
   */
  summary?: string;
  textGenerateMultimodalMediaList?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentExcerptResultSearchResultTextGenerateMultimodalMediaList[];
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
      excerpt: 'Excerpt',
      multimodalMedias: 'MultimodalMedias',
      pubTime: 'PubTime',
      score: 'Score',
      searchSource: 'SearchSource',
      searchSourceName: 'SearchSourceName',
      searchSourceType: 'SearchSourceType',
      select: 'Select',
      summary: 'Summary',
      textGenerateMultimodalMediaList: 'TextGenerateMultimodalMediaList',
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
      excerpt: 'string',
      multimodalMedias: { 'type': 'array', 'itemType': RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentExcerptResultSearchResultMultimodalMedias },
      pubTime: 'string',
      score: 'number',
      searchSource: 'string',
      searchSourceName: 'string',
      searchSourceType: 'string',
      select: 'boolean',
      summary: 'string',
      textGenerateMultimodalMediaList: { 'type': 'array', 'itemType': RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentExcerptResultSearchResultTextGenerateMultimodalMediaList },
      title: 'string',
      traceabilityId: 'number',
      url: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.chunks)) {
      $dara.Model.validateArray(this.chunks);
    }
    if(Array.isArray(this.multimodalMedias)) {
      $dara.Model.validateArray(this.multimodalMedias);
    }
    if(Array.isArray(this.textGenerateMultimodalMediaList)) {
      $dara.Model.validateArray(this.textGenerateMultimodalMediaList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

