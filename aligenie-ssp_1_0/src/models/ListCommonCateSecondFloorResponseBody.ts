// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCommonCateSecondFloorResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Category ID
   * 
   * @example
   * 80018009
   */
  cateId?: number;
  /**
   * @remarks
   * Category Name
   * 
   * @example
   * 儿童笑话
   */
  cateName?: string;
  /**
   * @remarks
   * Parent category ID
   * 
   * @example
   * 80018
   */
  parentCateId?: number;
  static names(): { [key: string]: string } {
    return {
      cateId: 'CateId',
      cateName: 'CateName',
      parentCateId: 'ParentCateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cateId: 'number',
      cateName: 'string',
      parentCateId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCommonCateSecondFloorResponseBody extends $dara.Model {
  /**
   * @remarks
   * Code encoding
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * Message information
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
   * F12B6147-5925-19E5-A3AD-E1EE1360F34E
   */
  requestId?: string;
  /**
   * @remarks
   * Return Result
   */
  result?: ListCommonCateSecondFloorResponseBodyResult[];
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
      result: { 'type': 'array', 'itemType': ListCommonCateSecondFloorResponseBodyResult },
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

