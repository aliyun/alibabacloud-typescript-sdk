// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchImageByFilterResponseBodyAuctions extends $dara.Model {
  /**
   * @remarks
   * The image category.
   * 
   * @example
   * 8888888
   */
  categoryId?: number;
  /**
   * @remarks
   * The user-defined content.
   * 
   * @example
   * zidingyi
   */
  customContent?: string;
  /**
   * @remarks
   * The integer type attribute.
   * 
   * @example
   * 2
   */
  intAttr?: number;
  /**
   * @remarks
   * The integer type attribute.
   * 
   * @example
   * 2
   */
  intAttr2?: number;
  /**
   * @remarks
   * The integer type attribute.
   * 
   * @example
   * 2
   */
  intAttr3?: number;
  /**
   * @remarks
   * The integer type attribute.
   * 
   * @example
   * 2
   */
  intAttr4?: number;
  /**
   * @remarks
   * The image name.
   * 
   * @example
   * 2092061_1.jpg
   */
  picName?: string;
  /**
   * @remarks
   * The product ID.
   * 
   * @example
   * 2092061_1
   */
  productId?: string;
  /**
   * @remarks
   * The string type attribute.
   * 
   * @example
   * test
   */
  strAttr?: string;
  /**
   * @remarks
   * The string type attribute.
   * 
   * @example
   * test
   */
  strAttr2?: string;
  /**
   * @remarks
   * The string type attribute.
   * 
   * @example
   * test
   */
  strAttr3?: string;
  /**
   * @remarks
   * The string type attribute.
   * 
   * @example
   * test
   */
  strAttr4?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      customContent: 'CustomContent',
      intAttr: 'IntAttr',
      intAttr2: 'IntAttr2',
      intAttr3: 'IntAttr3',
      intAttr4: 'IntAttr4',
      picName: 'PicName',
      productId: 'ProductId',
      strAttr: 'StrAttr',
      strAttr2: 'StrAttr2',
      strAttr3: 'StrAttr3',
      strAttr4: 'StrAttr4',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'number',
      customContent: 'string',
      intAttr: 'number',
      intAttr2: 'number',
      intAttr3: 'number',
      intAttr4: 'number',
      picName: 'string',
      productId: 'string',
      strAttr: 'string',
      strAttr2: 'string',
      strAttr3: 'string',
      strAttr4: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchImageByFilterResponseBody extends $dara.Model {
  /**
   * @remarks
   * The product description information returned.
   */
  auctions?: SearchImageByFilterResponseBodyAuctions[];
  /**
   * @remarks
   * The error code.
   * - 0: success.
   * - Non-zero: failure.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * success
   */
  msg?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B3137727-7D6E-488C-BA21-0E034C38A879
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      auctions: 'Auctions',
      code: 'Code',
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auctions: { 'type': 'array', 'itemType': SearchImageByFilterResponseBodyAuctions },
      code: 'number',
      msg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.auctions)) {
      $dara.Model.validateArray(this.auctions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

