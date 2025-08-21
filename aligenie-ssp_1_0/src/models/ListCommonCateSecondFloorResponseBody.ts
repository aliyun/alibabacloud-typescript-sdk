// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCommonCateSecondFloorResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 80018009
   */
  cateId?: number;
  cateName?: string;
  /**
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
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * F12B6147-5925-19E5-A3AD-E1EE1360F34E
   */
  requestId?: string;
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

