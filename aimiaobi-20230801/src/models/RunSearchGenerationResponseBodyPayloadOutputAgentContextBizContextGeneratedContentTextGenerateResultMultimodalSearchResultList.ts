// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultMultimodalSearchResultListSearchResult } from "./RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultMultimodalSearchResultListSearchResult";


export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultMultimodalSearchResultList extends $dara.Model {
  /**
   * @example
   * 1
   */
  current?: number;
  /**
   * @example
   * xx
   */
  searchQuery?: string;
  searchResult?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultMultimodalSearchResultListSearchResult[];
  /**
   * @example
   * realtime
   */
  searchType?: string;
  /**
   * @example
   * 1
   */
  size?: number;
  /**
   * @example
   * 时间脉络-时间
   */
  timelineDateStr?: string;
  /**
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      current: 'Current',
      searchQuery: 'SearchQuery',
      searchResult: 'SearchResult',
      searchType: 'SearchType',
      size: 'Size',
      timelineDateStr: 'TimelineDateStr',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      current: 'number',
      searchQuery: 'string',
      searchResult: { 'type': 'array', 'itemType': RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultMultimodalSearchResultListSearchResult },
      searchType: 'string',
      size: 'number',
      timelineDateStr: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.searchResult)) {
      $dara.Model.validateArray(this.searchResult);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

