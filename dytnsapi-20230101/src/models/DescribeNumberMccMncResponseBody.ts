// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNumberMccMncResponseBodyData extends $dara.Model {
  /**
   * @example
   * 示例值示例值
   */
  countryIso3?: string;
  /**
   * @example
   * 示例值示例值
   */
  mcc?: string;
  /**
   * @example
   * 示例值示例值
   */
  mnc?: string;
  /**
   * @example
   * true
   */
  ported?: boolean;
  static names(): { [key: string]: string } {
    return {
      countryIso3: 'CountryIso3',
      mcc: 'Mcc',
      mnc: 'Mnc',
      ported: 'Ported',
    };
  }

  static types(): { [key: string]: any } {
    return {
      countryIso3: 'string',
      mcc: 'string',
      mnc: 'string',
      ported: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNumberMccMncResponseBody extends $dara.Model {
  /**
   * @example
   * -
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: DescribeNumberMccMncResponseBodyData;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * CC3BB6D2-2FDF-4321-9DCE-B38165CE4C47
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: DescribeNumberMccMncResponseBodyData,
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

