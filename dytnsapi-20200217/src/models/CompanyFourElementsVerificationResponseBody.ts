// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CompanyFourElementsVerificationResponseBodyDataDetailInfo extends $dara.Model {
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

export class CompanyFourElementsVerificationResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The enterprise details.
   * 
   * @example
   * { "enterpriseStatus": "在营（开业）", 
   * "openTime": "2023-05-25/2053-05-24" }
   */
  detailInfo?: CompanyFourElementsVerificationResponseBodyDataDetailInfo;
  /**
   * @remarks
   * The fields that failed verification.
   */
  inconsistentData?: string[];
  /**
   * @remarks
   * The verification result code. Valid values:
   * 
   * - 0: Verification passed.
   * - 1: Verification passed, but the enterprise is not operating normally.
   * - 2: The legal person and enterprise information are inconsistent.
   * - 3: The enterprise four-element verification failed.
   * - 4: The enterprise was not found.
   * - 5: The legal person was not found in the database.
   * 
   * @example
   * 0
   */
  reasonCode?: number;
  /**
   * @remarks
   * The verification result. Valid values:
   * -   true: The information is consistent and the enterprise is operating normally.
   * -   false: Verification failed.
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
      detailInfo: CompanyFourElementsVerificationResponseBodyDataDetailInfo,
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

export class CompanyFourElementsVerificationResponseBody extends $dara.Model {
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
   * The structure.
   */
  data?: CompanyFourElementsVerificationResponseBodyData;
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
   * The common parameter. The ID returned for each request is unique and can be used to troubleshoot and locate issues.
   * 
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
      data: CompanyFourElementsVerificationResponseBodyData,
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

