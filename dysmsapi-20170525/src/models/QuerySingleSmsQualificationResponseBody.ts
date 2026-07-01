// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySingleSmsQualificationResponseBodyDataBusinessLicensePics extends $dara.Model {
  /**
   * @remarks
   * The file path parameter of the business license.
   * 
   * @example
   * 123456/111.png
   */
  licensePic?: string;
  /**
   * @remarks
   * The full URL of the business license file.
   * 
   * @example
   * https://******.aliyuncs.com/******
   */
  picUrl?: string;
  /**
   * @remarks
   * The type of business license. Valid values:
   * 
   * - socialCreditLicense: Unified social credit code certificate.
   * - businessLicense: Business license.
   * - signLegalLicense: Legal person certificate of a public institution.
   * - otherLicense: Other types of license certificates.
   * 
   * @example
   * businessLicense
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      licensePic: 'LicensePic',
      picUrl: 'PicUrl',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      licensePic: 'string',
      picUrl: 'string',
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

export class QuerySingleSmsQualificationResponseBodyDataOtherFiles extends $dara.Model {
  /**
   * @remarks
   * The file path parameter of the additional materials.
   * 
   * @example
   * 123456/111.png
   */
  licensePic?: string;
  /**
   * @remarks
   * The full URL of the additional materials file.
   * 
   * @example
   * https://******.aliyuncs.com/******
   */
  picUrl?: string;
  static names(): { [key: string]: string } {
    return {
      licensePic: 'LicensePic',
      picUrl: 'PicUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      licensePic: 'string',
      picUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySingleSmsQualificationResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The validity period of the administrator\\"s certificate. Format: YYYY-MM-DD~YYYY-MM-DD.
   * 
   * @example
   * 2023-01-01~2033-01-01
   */
  adminIDCardExpDate?: string;
  /**
   * @remarks
   * The full URL of the photo of the front side of the administrator\\"s certificate (national emblem side of the ID card).
   * 
   * @example
   * https://******.aliyuncs.com/******
   */
  adminIDCardFrontFace?: string;
  /**
   * @remarks
   * The certificate number of the administrator.
   * 
   * @example
   * 511391********5123
   */
  adminIDCardNo?: string;
  /**
   * @remarks
   * The full URL of the photo of the back side of the administrator\\"s certificate (portrait side of the ID card).
   * 
   * @example
   * https://******.aliyuncs.com/******
   */
  adminIDCardPic?: string;
  /**
   * @remarks
   * The type of the administrator\\"s certificate. Valid values:
   * 
   * - identityCard: ID card.
   * - passport: Passport.
   * - homeReturnPermit: Home return permit for Hong Kong and Macao residents.
   * - TaiwanCompatriotPermit: Mainland travel permit for Taiwan residents.
   * - residencePermit: Residence permit for residents of Hong Kong, Macao, and Taiwan.
   * - other: Other.
   * 
   * @example
   * identityCard
   */
  adminIDCardType?: string;
  /**
   * @remarks
   * The name of the administrator.
   * 
   * @example
   * 李华
   */
  adminName?: string;
  /**
   * @remarks
   * The mobile phone number of the administrator.
   * 
   * @example
   * 137*******
   */
  adminPhoneNo?: string;
  /**
   * @remarks
   * The business license information of the enterprise.
   */
  businessLicensePics?: QuerySingleSmsQualificationResponseBodyDataBusinessLicensePics[];
  /**
   * @remarks
   * The industry type.
   * 
   * @example
   * dysms
   */
  businessType?: string;
  /**
   * @remarks
   * The name of the enterprise.
   * 
   * @example
   * 阿里云云通信有限公司
   */
  companyName?: string;
  /**
   * @remarks
   * The type of enterprise. Valid values:
   * 
   * - COMPANY: Enterprise.
   * - NON_PROFIT_ORGANIZATION: Government agency or public institution.
   * 
   * @example
   * COMPANY
   */
  companyType?: string;
  /**
   * @remarks
   * The validity period of the business license. Format: YYYY-MM-DD~YYYY-MM-DD.
   * 
   * @example
   * 2023-01-01~2033-01-01
   */
  effTimeStr?: string;
  /**
   * @remarks
   * The certificate number of the legal representative.
   * 
   * @example
   * 511391********5123
   */
  legalPersonIDCardNo?: string;
  /**
   * @remarks
   * The type of the legal representative\\"s certificate. Valid values:
   * 
   * - identityCard: ID card.
   * - passport: Passport.
   * - homeReturnPermit: Home return permit for Hong Kong and Macao residents.
   * - TaiwanCompatriotPermit: Mainland travel permit for Taiwan residents.
   * - residencePermit: Residence permit for residents of Hong Kong, Macao, and Taiwan.
   * - other: Other.
   * 
   * @example
   * identityCard
   */
  legalPersonIDCardType?: string;
  /**
   * @remarks
   * The validity period of the legal representative\\"s certificate. Format: YYYY-MM-DD~YYYY-MM-DD.
   * 
   * @example
   * 2023-01-01~2033-01-01
   */
  legalPersonIdCardEffTime?: string;
  /**
   * @remarks
   * The name of the legal representative.
   * 
   * @example
   * 李华
   */
  legalPersonName?: string;
  /**
   * @remarks
   * The unified social credit code.
   * 
   * @example
   * 910X********0012
   */
  organizationCode?: string;
  /**
   * @remarks
   * Additional materials.
   */
  otherFiles?: QuerySingleSmsQualificationResponseBodyDataOtherFiles[];
  /**
   * @remarks
   * The qualification ID.
   * 
   * @example
   * 10000****
   */
  qualificationGroupId?: number;
  /**
   * @remarks
   * The qualification name.
   * 
   * @example
   * 阿里云云通信有限公司资质李华
   */
  qualificationName?: string;
  /**
   * @remarks
   * The remarks.
   * 
   * @example
   * 无
   */
  remark?: string;
  /**
   * @remarks
   * The review status. Valid values:
   * 
   * - INT: Under review.
   * - FAILED: Review failed.
   * - PASSED: Review passed.
   * - NOT_FINISH: Materials to be supplemented.
   * - CANCELED: Cancelled.
   * 
   * > This API does not return review remarks. To query review remarks (`AuditRemark`), use [QuerySmsQualificationRecord](~~QuerySmsQualificationRecord~~).
   * 
   * @example
   * PASSED
   */
  state?: string;
  /**
   * @remarks
   * The purpose of the qualification application. Valid values:
   * 
   * - **true**: For self-use.
   * - **false**: For other use.
   * 
   * @example
   * false
   */
  useBySelf?: boolean;
  /**
   * @remarks
   * Qualification authorization. Indicates whether to allow this qualification to be shared with other cloud communication products (such as Domestic Voice and Domestic Number Privacy Protection). The qualification can be shared and reused only when you apply for a **self-use qualification** and the qualification information **matches the enterprise information authenticated under the current Alibaba Cloud account**. Other cases are invalid. Valid values:
   * 
   * - true: Agree. Your qualification information can be invoked in the "qualification authentication step" of other cloud communication products, eliminating duplicate authentication steps.
   * - false: Disagree.
   * 
   * @example
   * false
   */
  whetherShare?: boolean;
  /**
   * @remarks
   * The review ticket ID.
   * 
   * @example
   * 2001****
   */
  workOrderId?: number;
  static names(): { [key: string]: string } {
    return {
      adminIDCardExpDate: 'AdminIDCardExpDate',
      adminIDCardFrontFace: 'AdminIDCardFrontFace',
      adminIDCardNo: 'AdminIDCardNo',
      adminIDCardPic: 'AdminIDCardPic',
      adminIDCardType: 'AdminIDCardType',
      adminName: 'AdminName',
      adminPhoneNo: 'AdminPhoneNo',
      businessLicensePics: 'BusinessLicensePics',
      businessType: 'BusinessType',
      companyName: 'CompanyName',
      companyType: 'CompanyType',
      effTimeStr: 'EffTimeStr',
      legalPersonIDCardNo: 'LegalPersonIDCardNo',
      legalPersonIDCardType: 'LegalPersonIDCardType',
      legalPersonIdCardEffTime: 'LegalPersonIdCardEffTime',
      legalPersonName: 'LegalPersonName',
      organizationCode: 'OrganizationCode',
      otherFiles: 'OtherFiles',
      qualificationGroupId: 'QualificationGroupId',
      qualificationName: 'QualificationName',
      remark: 'Remark',
      state: 'State',
      useBySelf: 'UseBySelf',
      whetherShare: 'WhetherShare',
      workOrderId: 'WorkOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adminIDCardExpDate: 'string',
      adminIDCardFrontFace: 'string',
      adminIDCardNo: 'string',
      adminIDCardPic: 'string',
      adminIDCardType: 'string',
      adminName: 'string',
      adminPhoneNo: 'string',
      businessLicensePics: { 'type': 'array', 'itemType': QuerySingleSmsQualificationResponseBodyDataBusinessLicensePics },
      businessType: 'string',
      companyName: 'string',
      companyType: 'string',
      effTimeStr: 'string',
      legalPersonIDCardNo: 'string',
      legalPersonIDCardType: 'string',
      legalPersonIdCardEffTime: 'string',
      legalPersonName: 'string',
      organizationCode: 'string',
      otherFiles: { 'type': 'array', 'itemType': QuerySingleSmsQualificationResponseBodyDataOtherFiles },
      qualificationGroupId: 'number',
      qualificationName: 'string',
      remark: 'string',
      state: 'string',
      useBySelf: 'boolean',
      whetherShare: 'boolean',
      workOrderId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.businessLicensePics)) {
      $dara.Model.validateArray(this.businessLicensePics);
    }
    if(Array.isArray(this.otherFiles)) {
      $dara.Model.validateArray(this.otherFiles);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySingleSmsQualificationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial. This parameter is returned only when the RAM check fails.
   * 
   * @example
   * 无
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The status code of the request.
   * 
   * - The value OK indicates that the request was successful.
   * - For other error codes, see the error code list in this chapter or the product [error code list](https://help.aliyun.com/document_detail/101346.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The details of a single qualification.
   */
  data?: QuerySingleSmsQualificationResponseBodyData;
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
   * The ID of this API call request, which is the unique identifier generated by Alibaba Cloud for this request. It can be used to troubleshoot and locate issues.
   * 
   * @example
   * 25D5AFDE-8EBC-132E-8909-1FDC071DA
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the API call was successful. Valid values:
   * 
   * - **true**: The call was successful.
   * - **false**: The call failed.
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
      data: QuerySingleSmsQualificationResponseBodyData,
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

