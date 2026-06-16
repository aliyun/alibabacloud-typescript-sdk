// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddressCompareIntlResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The sameLevel parameter has the following valid values:
   * - all: completely identical
   * - prov: province level 
   * - city: city level
   * - district: district level
   * - town: street level
   * - road: road level
   * - roadno: road number level
   * - poi: community/neighborhood level
   * - roomno: room number level.
   * 
   * @example
   * {
   *      sameLevel: "city", 
   *      distance:  5997.34m, -- 地址相差距离
   *      same_info: {    -- 相同信息
   *               prov: "浙江省",
   *               city: "杭州市",
   *               district: "西湖区"
   *       } 
   * }
   */
  data?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddressCompareIntlResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The return message.
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
   * 86C40EC3-5940-5F47-995C-BFE90B70E540
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   */
  result?: AddressCompareIntlResponseBodyResult;
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
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: AddressCompareIntlResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

