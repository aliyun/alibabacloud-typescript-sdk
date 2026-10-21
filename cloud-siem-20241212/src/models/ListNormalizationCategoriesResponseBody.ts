// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNormalizationCategoriesResponseBodyNormalizationCategories extends $dara.Model {
  /**
   * @remarks
   * The ID of the standardized category.
   * 
   * @example
   * COMMON_CATEGORY
   */
  normalizationCategoryId?: string;
  /**
   * @remarks
   * The name of the standardized category.
   * 
   * @example
   * COMMON_CATEGORY
   */
  normalizationCategoryName?: string;
  static names(): { [key: string]: string } {
    return {
      normalizationCategoryId: 'NormalizationCategoryId',
      normalizationCategoryName: 'NormalizationCategoryName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      normalizationCategoryId: 'string',
      normalizationCategoryName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNormalizationCategoriesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries to return in this request.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token for the next query. You do not need to specify this parameter for the first query or if no more results exist. If more results exist, set this parameter to the NextToken value returned by the previous API call.
   * 
   * @example
   * AAAAAUqcj6VO4E3ECWIrFczs****
   */
  nextToken?: string;
  /**
   * @remarks
   * The list of standardized categories.
   */
  normalizationCategories?: ListNormalizationCategoriesResponseBodyNormalizationCategories[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6276D891-*****-55B2-87B9-74D413F7****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 57
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      normalizationCategories: 'NormalizationCategories',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      normalizationCategories: { 'type': 'array', 'itemType': ListNormalizationCategoriesResponseBodyNormalizationCategories },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.normalizationCategories)) {
      $dara.Model.validateArray(this.normalizationCategories);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

