// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchMediaByAILabelRequest extends $dara.Model {
  /**
   * @example
   * {}
   */
  customFilters?: string;
  matchingMode?: string;
  /**
   * @remarks
   * The ID of the media asset. This parameter is required if you want to query media asset clips.
   * 
   * @example
   * ****c469e944b5a856828dc2****
   */
  mediaId?: string;
  /**
   * @remarks
   * The type of the media assets. Valid values:
   * 
   * *   image
   * *   video
   * *   audio
   * 
   * @example
   * video
   */
  mediaType?: string;
  /**
   * @remarks
   * The type of query. Valid values:
   * 
   * *   PersonName: queries media assets based on character names.
   * *   Ocr: queries media assets based on subtitles.
   * *   AiCategory: queries media assets based on AI categories.
   * *   FullSearch (default): queries all media assets.
   * 
   * @example
   * Ocr
   */
  multimodalSearchType?: string;
  namespace?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Maximum value: 50.
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
   * The sorting method of the results. Valid values:
   * 
   * *   CreationTime:Desc (default): sorts results in reverse chronological order.
   * *   CreationTime:Asc: sorts results in chronological order.
   * 
   * @example
   * CreationTime:Desc
   */
  sortBy?: string;
  /**
   * @remarks
   * Specifies whether to query media asset clips. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  specificSearch?: boolean;
  /**
   * @remarks
   * The content that you want to query.
   */
  text?: string;
  /**
   * @example
   * {}
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

