// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HiMarketIcon } from "./HiMarketIcon";


export class GetProductCategoryResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the product category. This ID can be used as the categoryId path parameter for GetProductCategory, UpdateProductCategory, and DeleteProductCategory, or as an element in the categories array for SetProductCategories and CreateProduct.
   * 
   * @example
   * category-xxxxxxxx
   */
  categoryId?: string;
  /**
   * @remarks
   * The description of the product category.
   * 
   * @example
   * Product category that includes AI-related capabilities
   */
  description?: string;
  /**
   * @remarks
   * The icon of the product category, which consists of the icon type (type) and icon information (value) fields.
   */
  icon?: HiMarketIcon;
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

export class GetProductCategoryResponseBody extends $dara.Model {
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
  data?: GetProductCategoryResponseBodyData;
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
      data: GetProductCategoryResponseBodyData,
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

