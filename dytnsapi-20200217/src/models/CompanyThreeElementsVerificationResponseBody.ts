// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CompanyThreeElementsVerificationResponseBodyDataDetailInfo extends $dara.Model {
  /**
   * @remarks
   * The operating status of the company.
   * 
   * @example
   * 在营（开业）
   */
  enterpriseStatus?: string;
  /**
   * @remarks
   * The business term of the company.
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

export class CompanyThreeElementsVerificationResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The company details.
   * 
   * @example
   * {
   *       "enterpriseStatus": "在营（开业）",
   *       "openTime": "2023-05-25/2053-05-24"
   * }
   */
  detailInfo?: CompanyThreeElementsVerificationResponseBodyDataDetailInfo;
  /**
   * @remarks
   * The fields whose verification results are inconsistent.
   */
  inconsistentData?: string[];
  /**
   * @remarks
   * The verification result code. Valid values:
   * 
   * - 0: The verification is consistent.
   * - 1: The verification is consistent, but the company is not operating normally.
   * - 2: The person-company verification is inconsistent.
   * - 3: The two-element company verification failed.
   * - 4: The company is not found.
   * - 5: The person does not exist in the database.
   * 
   * @example
   * 2
   */
  reasonCode?: number;
  /**
   * @remarks
   * The verification result. Valid values:
   * 
   * - true: The information is consistent and the company is operating normally.
   * - false: The verification failed.
   * 
   * @example
   * false
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
      detailInfo: CompanyThreeElementsVerificationResponseBodyDataDetailInfo,
      inconsistentData: { 'type': 'array', 'itemType': 'string' },
      reasonCode: 'number',
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

export class CompanyThreeElementsVerificationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial.
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
   * The returned data.
   */
  data?: CompanyThreeElementsVerificationResponseBodyData;
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
      data: CompanyThreeElementsVerificationResponseBodyData,
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

