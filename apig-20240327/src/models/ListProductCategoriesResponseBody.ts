// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HiMarketIcon } from "./HiMarketIcon";


export class ListProductCategoriesResponseBodyDataContent extends $dara.Model {
  /**
   * @remarks
   * The product category ID. You can use this ID as the categoryId path parameter in the GetProductCategory, UpdateProductCategory, and DeleteProductCategory operations, or as an element in the categories parameter (a set of category IDs) in the SetProductCategories and CreateProduct operations.
   * 
   * @example
   * category-xxxxxxxx
   */
  categoryId?: string;
  /**
   * @remarks
   * The product category description.
   * 
   * @example
   * Product category that includes AI-related capabilities
   */
  description?: string;
  /**
   * @remarks
   * The product category icon. It consists of two fields: type (the icon type) and value (the icon information).
   */
  icon?: HiMarketIcon;
  /**
   * @remarks
   * The product category name.
   * 
   * @example
   * ai-capabilities
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'categoryId',
      description: 'description',
      icon: 'icon',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'string',
      description: 'string',
      icon: HiMarketIcon,
      name: 'string',
    };
  }

  validate() {
    if(this.icon && typeof (this.icon as any).validate === 'function') {
      (this.icon as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductCategoriesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of product categories. Each element in the list is named category and contains the information about a product category.
   */
  content?: ListProductCategoriesResponseBodyDataContent[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'array', 'itemType': ListProductCategoriesResponseBodyDataContent },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.content)) {
      $dara.Model.validateArray(this.content);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductCategoriesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: ListProductCategoriesResponseBodyData;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 393E2630-DBE7-5221-AB35-9E740675491A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListProductCategoriesResponseBodyData,
      message: 'string',
      requestId: 'string',
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

