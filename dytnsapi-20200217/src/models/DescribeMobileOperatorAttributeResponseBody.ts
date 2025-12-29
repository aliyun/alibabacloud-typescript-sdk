// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMobileOperatorAttributeResponseBodyData extends $dara.Model {
  /**
   * @example
   * 示例值示例值示例值
   */
  basicCarrier?: string;
  /**
   * @example
   * 示例值
   */
  carrier?: string;
  /**
   * @example
   * 示例值示例值
   */
  city?: string;
  /**
   * @example
   * true
   */
  isNumberPortability?: boolean;
  /**
   * @example
   * 示例值示例值
   */
  province?: string;
  /**
   * @example
   * 示例值示例值
   */
  realNumber?: string;
  /**
   * @example
   * 示例值示例值
   */
  segmentCarrier?: string;
  static names(): { [key: string]: string } {
    return {
      basicCarrier: 'BasicCarrier',
      carrier: 'Carrier',
      city: 'City',
      isNumberPortability: 'IsNumberPortability',
      province: 'Province',
      realNumber: 'RealNumber',
      segmentCarrier: 'SegmentCarrier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      basicCarrier: 'string',
      carrier: 'string',
      city: 'string',
      isNumberPortability: 'boolean',
      province: 'string',
      realNumber: 'string',
      segmentCarrier: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMobileOperatorAttributeResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * 示例值示例值
   */
  code?: string;
  data?: DescribeMobileOperatorAttributeResponseBodyData;
  /**
   * @example
   * 示例值示例值
   */
  message?: string;
  /**
   * @example
   * 示例值示例值
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
      data: DescribeMobileOperatorAttributeResponseBodyData,
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

