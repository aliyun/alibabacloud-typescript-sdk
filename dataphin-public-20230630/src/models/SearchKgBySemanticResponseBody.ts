// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchKgBySemanticResponseBodyDataSearchResults extends $dara.Model {
  /**
   * @remarks
   * The ID of the matched entity record.
   * 
   * @example
   * itemId
   */
  itemId?: string;
  /**
   * @remarks
   * The entity type code.
   * 
   * @example
   * EntityTypeCode1
   */
  itemTypeCode?: string;
  /**
   * @remarks
   * The property code that matched the semantic search.
   * 
   * @example
   * name
   */
  matchedPropertyCode?: string;
  /**
   * @remarks
   * The actual value of the matched property.
   * 
   * @example
   * 张三
   */
  matchedPropertyValue?: string;
  /**
   * @remarks
   * The similarity score ranging from 0.0 to 1.0, based on cosine similarity.
   * 
   * @example
   * 0.88
   */
  similarityScore?: number;
  static names(): { [key: string]: string } {
    return {
      itemId: 'ItemId',
      itemTypeCode: 'ItemTypeCode',
      matchedPropertyCode: 'MatchedPropertyCode',
      matchedPropertyValue: 'MatchedPropertyValue',
      similarityScore: 'SimilarityScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemId: 'string',
      itemTypeCode: 'string',
      matchedPropertyCode: 'string',
      matchedPropertyValue: 'string',
      similarityScore: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchKgBySemanticResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of search results.
   */
  searchResults?: SearchKgBySemanticResponseBodyDataSearchResults[];
  /**
   * @remarks
   * The total number of results.
   * 
   * @example
   * 1640276
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      searchResults: 'SearchResults',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      searchResults: { 'type': 'array', 'itemType': SearchKgBySemanticResponseBodyDataSearchResults },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.searchResults)) {
      $dara.Model.validateArray(this.searchResults);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchKgBySemanticResponseBody extends $dara.Model {
  /**
   * @remarks
   * The backend response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The search results.
   */
  data?: SearchKgBySemanticResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The backend exception details.
   * 
   * @example
   * internal error
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 82E78D6B-AA8F-1FEF-8AA3-5C9DA2A79140
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: SearchKgBySemanticResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

