// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CompanyTwoElementsVerificationResponseBodyDataDetailInfo extends $dara.Model {
  /**
   * @remarks
   * The operating status of the enterprise.
   * 
   * @example
   * 在营（开业）
   */
  enterpriseStatus?: string;
  /**
   * @remarks
   * The business term of the enterprise.
   * 
   * @example
   * 2023-05-25/2053-05-24
   */
  openTime?: string;
  static names(): { [key: string]: string } {
    return {
      enterpriseStatus: 'EnterpriseStatus',
      openTime: 'OpenTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enterpriseStatus: 'string',
      openTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompanyTwoElementsVerificationResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Enterprise details.
   * 
   * > This field is not returned for public institutions or civil groups.
   * 
   * @example
   * {
   *       "enterpriseStatus": "在营（开业）",
   *       "openTime": "2023-05-25/2053-05-24"
   * }
   */
  detailInfo?: CompanyTwoElementsVerificationResponseBodyDataDetailInfo;
  /**
   * @remarks
   * The fields that are inconsistent in the verification.
   */
  inconsistentData?: string[];
  /**
   * @remarks
   * The verification result code. Valid values:
   * 
   * - 0: Verification consistent
   * - 1: Verification consistent, the enterprise is not in normal operation
   * - 3: The two enterprise elements failed verification
   * - 4: No such enterprise found
   * 
   * @example
   * 0
   */
  reasonCode?: string;
  /**
   * @remarks
   * The verification result. Valid values:
   * 
   * - true: The information is verified to be consistent, and the enterprise is operating normally.
   * - false: The verification failed.
   * 
   * > The operating status verification is not supported for public institutions or civil groups. Only the consistency between the enterprise name and the enterprise certificate number is verified.
   * 
   * @example
   * true
   */
  verifyResult?: string;
  static names(): { [key: string]: string } {
    return {
      detailInfo: 'DetailInfo',
      inconsistentData: 'InconsistentData',
      reasonCode: 'ReasonCode',
      verifyResult: 'VerifyResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detailInfo: CompanyTwoElementsVerificationResponseBodyDataDetailInfo,
      inconsistentData: { 'type': 'array', 'itemType': 'string' },
      reasonCode: 'string',
      verifyResult: 'string',
    };
  }

  validate() {
    if(this.detailInfo && typeof (this.detailInfo as any).validate === 'function') {
      (this.detailInfo as any).validate();
    }
    if(Array.isArray(this.inconsistentData)) {
      $dara.Model.validateArray(this.inconsistentData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompanyTwoElementsVerificationResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details about the access denial.
   * 
   * @example
   * -
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The request status code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The struct.
   */
  data?: CompanyTwoElementsVerificationResponseBodyData;
  /**
   * @remarks
   * The description of the returned status code.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The common parameter. Each request returns a unique ID, which can be used to troubleshoot and locate issues.
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
      data: CompanyTwoElementsVerificationResponseBodyData,
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

