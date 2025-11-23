// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MetaCategory } from "./MetaCategory";


export class ListMetaCategoryResponseBodyCategoryList extends $dara.Model {
  metaCategory?: MetaCategory[];
  static names(): { [key: string]: string } {
    return {
      metaCategory: 'MetaCategory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metaCategory: { 'type': 'array', 'itemType': MetaCategory },
    };
  }

  validate() {
    if(Array.isArray(this.metaCategory)) {
      $dara.Model.validateArray(this.metaCategory);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMetaCategoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of categories.
   */
  categoryList?: ListMetaCategoryResponseBodyCategoryList;
  /**
   * @remarks
   * The error code returned if the request fails.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the request fails.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0C1CB646-1DE4-4AD0-B4A4-7D47DD52E931
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * 
   * *   **true**: The request was successful.
   * *   **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      categoryList: 'CategoryList',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryList: ListMetaCategoryResponseBodyCategoryList,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.categoryList && typeof (this.categoryList as any).validate === 'function') {
      (this.categoryList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

