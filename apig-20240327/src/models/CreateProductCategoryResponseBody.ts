// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProductCategoryResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the newly created product category. It can be used as the categoryId path parameter in GetProductCategory, UpdateProductCategory, and DeleteProductCategory, or as an element in the category ID array for SetProductCategories.
   * 
   * @example
   * category-xxxxxxxx
   */
  categoryId?: string;
  /**
   * @remarks
   * The name of the product category.
   * 
   * @example
   * ai-capabilities
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'categoryId',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProductCategoryResponseBody extends $dara.Model {
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
  data?: CreateProductCategoryResponseBodyData;
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
      data: CreateProductCategoryResponseBodyData,
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

