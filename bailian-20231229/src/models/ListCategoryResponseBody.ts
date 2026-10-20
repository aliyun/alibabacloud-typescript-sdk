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
   * Category1
   */
  categoryName?: string;
  /**
   * @remarks
   * The category type. Valid values:
   * - UNSTRUCTURED: category.
   * 
   * @example
   * UNSTRUCTURED
   */
  categoryType?: string;
  /**
   * @remarks
   * Indicates whether the category is a default category. Valid values:
   * - true: Yes.
   * - false: No.
   * 
   * Default categories cannot be deleted.
   * 
   * @example
   * true
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The category ID of the parent category.
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
   * The category list.
   */
  categoryList?: ListCategoryResponseBodyDataCategoryList[];
  /**
   * @remarks
   * Indicates whether a next page of category data that matches the query conditions exists. Valid values:
   * 
   * - true: Yes.
   * - false: No.
   * 
   * @example
   * true
   */
  hasNext?: boolean;
  /**
   * @remarks
   * The number of categories per page in a paged query.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token returned in this call.
   * 
   * @example
   * AAAAALHWGpGoYCcYMxiFfmlhvh7Z4G8jiXR6IjHYd+M9WQVJ
   */
  nextToken?: string;
  /**
   * @remarks
   * The total number of categories in the returned results.
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
   * The error status code.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * The business data field of the operation.
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
   * The status code returned by the operation.
   * 
   * @example
   * 200
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * - true: Successful.
   * - false: Failed.
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

