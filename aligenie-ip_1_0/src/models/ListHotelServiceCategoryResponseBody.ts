// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHotelServiceCategoryResponseBodyResult extends $dara.Model {
  /**
   * @example
   * GOODS
   */
  code?: string;
  /**
   * @example
   * 生活及洗漱用品
   */
  desc?: string;
  /**
   * @example
   * https://ailabsaicloudservice.alicdn.com/hotel/icon/changjingfenlei/wupintianjia.png
   */
  icon?: string;
  /**
   * @example
   * 物品添加
   */
  name?: string;
  /**
   * @example
   * HOTEL_SERVICE
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      desc: 'Desc',
      icon: 'Icon',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      desc: 'string',
      icon: 'string',
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelServiceCategoryResponseBody extends $dara.Model {
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
   * 5373C821-65D2-1764-B9F9-951914937FF5
   */
  requestId?: string;
  result?: ListHotelServiceCategoryResponseBodyResult[];
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
      result: { 'type': 'array', 'itemType': ListHotelServiceCategoryResponseBodyResult },
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

