// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePhoneNumberOperatorAttributeResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The basic carrier. Valid values:
   * 
   * - **China Mobile**.
   * - **China Unicom**.
   * - **China Telecom**.
   * - **China Broadnet**.
   * 
   * @example
   * 中国移动
   */
  basicCarrier?: string;
  /**
   * @remarks
   * The actual carrier (including the mobile virtual network operator). If number portability is enabled, the value indicates the carrier after number portability.
   * 
   * @example
   * 中国移动
   */
  carrier?: string;
  /**
   * @remarks
   * The city to which the phone number belongs.
   * 
   * @example
   * 杭州
   */
  city?: string;
  /**
   * @remarks
   * Indicates whether the number has been ported. Valid values:
   * 
   * - **true**: yes
   * 
   * - **false**: no
   * 
   * @example
   * false
   */
  isNumberPortability?: boolean;
  /**
   * @remarks
   * The number segment to which the phone number belongs.
   * 
   * @example
   * 139
   */
  numberSegment?: number;
  /**
   * @remarks
   * The province to which the phone number belongs.
   * 
   * @example
   * 浙江
   */
  province?: string;
  static names(): { [key: string]: string } {
    return {
      basicCarrier: 'BasicCarrier',
      carrier: 'Carrier',
      city: 'City',
      isNumberPortability: 'IsNumberPortability',
      numberSegment: 'NumberSegment',
      province: 'Province',
    };
  }

  static types(): { [key: string]: any } {
    return {
      basicCarrier: 'string',
      carrier: 'string',
      city: 'string',
      isNumberPortability: 'boolean',
      numberSegment: 'number',
      province: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePhoneNumberOperatorAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial. This parameter is returned only if the request is denied because the RAM user or RAM role does not have the required permissions.
   * 
   * @example
   * -
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The status code of the request. Valid values:
   * 
   * - **OK**: The request is successful.
   * - **InvalidParameter**: The phone number is invalid or the format of the parameter is invalid.
   * - **PhoneNumberNotfound**: The carrier information of the phone number is not found.
   * - **isp.UNKNOWN**: An unknown error occurred.
   * - **RequestFrequencyLimit**: Due to carrier restrictions, you cannot frequently query the same number in a short period of time. If this error code is returned, try again later.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: DescribePhoneNumberOperatorAttributeResponseBodyData;
  /**
   * @remarks
   * The description of the status code.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 68A40250-50CD-034C-B728-0BD135850177
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
      data: DescribePhoneNumberOperatorAttributeResponseBodyData,
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

