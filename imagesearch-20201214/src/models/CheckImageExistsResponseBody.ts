// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckImageExistsResponseBodyAuctions extends $dara.Model {
  /**
   * @example
   * 88888888
   */
  categoryId?: number;
  /**
   * @example
   * zidingyi
   */
  customContent?: string;
  /**
   * @example
   * 2
   */
  intAttr?: number;
  /**
   * @example
   * 2
   */
  intAttr2?: number;
  /**
   * @example
   * 2
   */
  intAttr3?: number;
  /**
   * @example
   * 2
   */
  intAttr4?: number;
  /**
   * @example
   * 2092061_1.jpg
   */
  picName?: string;
  /**
   * @example
   * 2092061_1
   */
  productId?: string;
  /**
   * @example
   * test
   */
  strAttr?: string;
  /**
   * @example
   * test
   */
  strAttr2?: string;
  /**
   * @example
   * test
   */
  strAttr3?: string;
  /**
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

export class CheckImageExistsResponseBody extends $dara.Model {
  auctions?: CheckImageExistsResponseBodyAuctions;
  /**
   * @example
   * 0
   */
  code?: number;
  /**
   * @example
   * true
   */
  exists?: boolean;
  /**
   * @example
   * success
   */
  msg?: string;
  /**
   * @example
   * B3137727-7D6E-488C-BA21-0E034C38A879
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      auctions: 'Auctions',
      code: 'Code',
      exists: 'Exists',
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auctions: CheckImageExistsResponseBodyAuctions,
      code: 'number',
      exists: 'boolean',
      msg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.auctions && typeof (this.auctions as any).validate === 'function') {
      (this.auctions as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

