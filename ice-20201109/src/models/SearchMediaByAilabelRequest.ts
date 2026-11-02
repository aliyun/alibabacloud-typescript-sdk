// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchMediaByAILabelRequest extends $dara.Model {
  /**
   * @remarks
   * The custom filters. The value is a JSON string. Supported fields include the integer field intField1 and the string fields strField1 and strField2. You can select at most one match type for the same field. Filters for different fields use the AND logical operator.
   * - Exact match, such as {"intField1":12,"strField1":"abc"}.
   * - Multi-value match, such as {"intField1":[12,13],"strField1":["abc","cd"]}.
   * - Range match, such as {"intField1":{"gte":12,"lte":13}}.
   * 
   * @example
   * {"intField1":{"gte":12,"lte":13},"strField2":["cd","de"],"strField1":"abc"}
   */
  customFilters?: string;
  /**
   * @remarks
   * The matching mode. Default value: fuzzy. Valid values:
   * - fuzzy: fuzzy match.
   * - precise: exact match. This mode takes effect only for newly added media assets.
   * 
   * @example
   * fuzzy
   */
  matchingMode?: string;
  /**
   * @remarks
   * The media asset ID. This parameter is required for precise search.
   * 
   * @example
   * ****c469e944b5a856828dc2****
   */
  mediaId?: string;
  /**
   * @remarks
   * The media asset type. Valid values:
   * - image: images
   * - video: videos
   * - audio: audio
   * 
   * @example
   * video
   */
  mediaType?: string;
  /**
   * @remarks
   * The multimodal search type. Default value: FullSearch. Valid values:
   * - PersonName: person name search
   * - Ocr: subtitle search
   * - AiCategory: AI categorization search
   * - FullSearch: full text search
   * 
   * @example
   * Ocr
   */
  multimodalSearchType?: string;
  /**
   * @remarks
   * The namespace.
   * 
   * @example
   * name-1
   */
  namespace?: string;
  /**
   * @remarks
   * The current page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 10. Maximum value: 50.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The name of the search library.
   * 
   * @example
   * test-1
   */
  searchLibName?: string;
  /**
   * @remarks
   * The sorting of query results. Valid values:
   * - CreationTime:Desc (default): sorts by creation time in descending order.
   * - CreationTime:Asc: sorts by creation time in ascending order.
   * 
   * @example
   * CreationTime:Desc
   */
  sortBy?: string;
  /**
   * @remarks
   * Specifies whether to perform a precise search. Valid values:
   * - true: performs a precise search.
   * - false: performs a coarse search.
   * 
   * @example
   * true
   */
  specificSearch?: boolean;
  /**
   * @remarks
   * The search content.
   * 
   * @example
   * kite
   */
  text?: string;
  /**
   * @remarks
   * The creation time, in milliseconds. gte indicates greater than or equal to, and lte indicates less than or equal to.
   * - Range match, such as {"gte":1761205662998,"lte":1771205662998}.
   * 
   * @example
   * {"gte":1761205662998,"lte":1771205662998}
   */
  utcCreate?: string;
  static names(): { [key: string]: string } {
    return {
      customFilters: 'CustomFilters',
      matchingMode: 'MatchingMode',
      mediaId: 'MediaId',
      mediaType: 'MediaType',
      multimodalSearchType: 'MultimodalSearchType',
      namespace: 'Namespace',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      searchLibName: 'SearchLibName',
      sortBy: 'SortBy',
      specificSearch: 'SpecificSearch',
      text: 'Text',
      utcCreate: 'UtcCreate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customFilters: 'string',
      matchingMode: 'string',
      mediaId: 'string',
      mediaType: 'string',
      multimodalSearchType: 'string',
      namespace: 'string',
      pageNo: 'number',
      pageSize: 'number',
      searchLibName: 'string',
      sortBy: 'string',
      specificSearch: 'boolean',
      text: 'string',
      utcCreate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

