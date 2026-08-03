// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSubscriptionAlbumCategoryResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Category ID
   * 
   * @example
   * 80011
   */
  categoryId?: string;
  /**
   * @remarks
   * Category name
   * 
   * @example
   * 儿童
   */
  categoryName?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      categoryName: 'CategoryName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'string',
      categoryName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubscriptionAlbumCategoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * Additional information
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 60E7A523-9766-1D07-87A2-6E587420C59B
   */
  requestId?: string;
  /**
   * @remarks
   * List of categories
   */
  result?: ListSubscriptionAlbumCategoryResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListSubscriptionAlbumCategoryResponseBodyResult },
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

