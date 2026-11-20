// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySecretAPhoneNoToCustResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the A number group to which the number belongs.
   * 
   * @example
   * 19
   */
  ANoWhiteGroupId?: string;
  /**
   * @remarks
   * The contact phone number of the handler or legal representative for landline reporting.
   * 
   * @example
   * 130*****8888
   */
  custPhoneNo?: string;
  /**
   * @remarks
   * The number type. Valid values:
   * 
   * - Mobile: Mobile phone number.
   * 
   * - Fixed: Landline number.
   * 
   * @example
   * Mobile
   */
  noType?: string;
  /**
   * @remarks
   * A number.
   * 
   * @example
   * 130*****1234
   */
  phoneNoA?: string;
  /**
   * @remarks
   * Remarks (user\\"s own business notes).
   * 
   * @example
   * ***报备
   */
  remark?: string;
  /**
   * @remarks
   * The reason for review failure.
   * 
   * @example
   * ["系统判断为不同人"]
   */
  reportResult?: string;
  /**
   * @remarks
   * The reporting result. Valid values:
   * 
   * - REVIEWING: Under review.
   * 
   * - PASS: Review passed.
   * 
   * - FAIL: Review failed.
   * 
   * @example
   * REVIEWING
   */
  reportStatus?: string;
  static names(): { [key: string]: string } {
    return {
      ANoWhiteGroupId: 'ANoWhiteGroupId',
      custPhoneNo: 'CustPhoneNo',
      noType: 'NoType',
      phoneNoA: 'PhoneNoA',
      remark: 'Remark',
      reportResult: 'ReportResult',
      reportStatus: 'ReportStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ANoWhiteGroupId: 'string',
      custPhoneNo: 'string',
      noType: 'string',
      phoneNoA: 'string',
      remark: 'string',
      reportResult: 'string',
      reportStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySecretAPhoneNoToCustResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details of the denied access.
   * 
   * @example
   * 0
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * Request status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The struct for querying the A number reporting status.
   */
  data?: QuerySecretAPhoneNoToCustResponseBodyData;
  /**
   * @remarks
   * Error message for a failed operation.
   * 
   * @example
   * 号码组不存在
   */
  message?: string;
  /**
   * @remarks
   * The returned ID.
   * 
   * @example
   * 1D73E648-0978-18A5-B089-3BB2
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request succeeded. Valid values:
   * 
   * - true: Succeeded.
   * 
   * - false: Failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: QuerySecretAPhoneNoToCustResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

