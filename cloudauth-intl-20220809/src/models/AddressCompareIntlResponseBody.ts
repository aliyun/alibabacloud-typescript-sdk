// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddressCompareIntlResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Valid values:
   * - all: Exactly the same.
   * - prov: Province. 
   * - city: City.
   * - district: District.
   * - town: Town.
   * - road: Road.
   * - roadno: Road number.
   * - poi: Residential community.
   * - roomno: Room number.
   * 
   * @example
   * {
   *      sameLevel: "city", 
   *      distance:  5997.34m, -- Distance between addresses
   *      same_info: {    -- Identical information
   *               prov: "Zhejiang Province",
   *               city: "Hangzhou",
   *               district: "Xihu District"
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
   * The return result.
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

