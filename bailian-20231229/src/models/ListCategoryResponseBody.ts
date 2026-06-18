// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCategoryResponseBodyDataCategoryList extends $dara.Model {
  /**
   * @remarks
   * The category ID.
   * 
   * @example
   * cate_cdd11b1b79a74e8bbd675c356a91ee3xxxxxxxx
   */
  categoryId?: string;
  /**
   * @remarks
   * The category name.
   * 
   * @example
   * 类目1
   */
  categoryName?: string;
  /**
   * @remarks
   * The category type. The only valid value is:
   * 
   * - `UNSTRUCTURED`: A standard category.
   * 
   * @example
   * UNSTRUCTURED
   */
  categoryType?: string;
  /**
   * @remarks
   * Indicates whether the category is the default. Valid values:
   * 
   * - `true`: The category is the default.
   * 
   * - `false`: The category is not the default.
   * 
   * You cannot delete the default category.
   * 
   * @example
   * true
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The parent category ID.
   * 
   * @example
   * cate_addd11b1b79a74e8bbd675c356a91ee3xxxxxxxx
   */
  parentCategoryId?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      categoryName: 'CategoryName',
      categoryType: 'CategoryType',
      isDefault: 'IsDefault',
      parentCategoryId: 'ParentCategoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'string',
      categoryName: 'string',
      categoryType: 'string',
      isDefault: 'boolean',
      parentCategoryId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCategoryResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of categories.
   */
  categoryList?: ListCategoryResponseBodyDataCategoryList[];
  /**
   * @remarks
   * Indicates whether more results are available for retrieval. Valid values:
   * 
   * - `true`: More results are available.
   * 
   * - `false`: This is the last page of results.
   * 
   * @example
   * true
   */
  hasNext?: boolean;
  /**
   * @remarks
   * The maximum number of results to return per page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token used to retrieve the next page of results. This parameter is omitted when no more results are available.
   * 
   * @example
   * AAAAALHWGpGoYCcYMxiFfmlhvh7Z4G8jiXR6IjHYd+M9WQVJ
   */
  nextToken?: string;
  /**
   * @remarks
   * The total number of matching categories.
   * 
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      categoryList: 'CategoryList',
      hasNext: 'HasNext',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryList: { 'type': 'array', 'itemType': ListCategoryResponseBodyDataCategoryList },
      hasNext: 'boolean',
      maxResults: 'number',
      nextToken: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.categoryList)) {
      $dara.Model.validateArray(this.categoryList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCategoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * The response payload.
   */
  data?: ListCategoryResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * workspace id is null or invalid.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 17204B98-xxxx-4F9A-8464-2446A84821CA
   */
  requestId?: string;
  /**
   * @remarks
   * The status code for the request.
   * 
   * @example
   * 200
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether the request succeeded. Valid values:
   * 
   * - `true`: The request succeeded.
   * 
   * - `false`: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListCategoryResponseBodyData,
      message: 'string',
      requestId: 'string',
      status: 'string',
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

