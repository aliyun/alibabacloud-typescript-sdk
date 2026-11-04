// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetViberByRequestNoResponseBodyDataAuditRecordCompanyAddress extends $dara.Model {
  /**
   * @remarks
   * The company address.
   * 
   * @example
   * address
   */
  companyAddress?: string;
  /**
   * @remarks
   * The title of the company address.
   * 
   * @example
   * 111
   */
  companyAddressTitle?: string;
  static names(): { [key: string]: string } {
    return {
      companyAddress: 'CompanyAddress',
      companyAddressTitle: 'CompanyAddressTitle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      companyAddress: 'string',
      companyAddressTitle: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetViberByRequestNoResponseBodyDataAuditRecordCompanyTel extends $dara.Model {
  /**
   * @remarks
   * The company phone numbers.
   * 
   * @example
   * 134213213
   */
  companyTelNumber?: string;
  /**
   * @remarks
   * The title.
   * 
   * @example
   * xxx
   */
  companyTelTitle?: string;
  static names(): { [key: string]: string } {
    return {
      companyTelNumber: 'CompanyTelNumber',
      companyTelTitle: 'CompanyTelTitle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      companyTelNumber: 'string',
      companyTelTitle: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetViberByRequestNoResponseBodyDataAuditRecord extends $dara.Model {
  /**
   * @remarks
   * The age limit.
   * 
   * @example
   * eighteenUp
   */
  ageLimit?: string;
  /**
   * @remarks
   * The reason for the application.
   * 
   * @example
   * aaa
   */
  applyReason?: string;
  /**
   * @remarks
   * The business account name.
   * 
   * @example
   * aaaa
   */
  businessAccountName?: string;
  /**
   * @remarks
   * The business license registration number.
   * 
   * @example
   * 43645465465
   */
  businessLicenseRegistrationNumber?: string;
  /**
   * @remarks
   * The company address.
   */
  companyAddress?: GetViberByRequestNoResponseBodyDataAuditRecordCompanyAddress[];
  /**
   * @remarks
   * The English name of the company.
   * 
   * @example
   * english
   */
  companyEnglishName?: string;
  /**
   * @remarks
   * The legal name of the company.
   * 
   * @example
   * xxxxxxcompany
   */
  companyLegalName?: string;
  /**
   * @remarks
   * The name of the company\\"s legal representative.
   * 
   * @example
   * jack
   */
  companyLegalPerson?: string;
  /**
   * @remarks
   * The company profile.
   * 
   * @example
   * new
   */
  companyProfile?: string;
  /**
   * @remarks
   * The country where the company is registered.
   * 
   * @example
   * beijing
   */
  companyRegisteredCountry?: string;
  /**
   * @remarks
   * The company phone numbers.
   */
  companyTel?: GetViberByRequestNoResponseBodyDataAuditRecordCompanyTel[];
  /**
   * @remarks
   * The complete address of the headquarters.
   * 
   * @example
   * address
   */
  completeAddressOfHeadquarters?: string;
  /**
   * @remarks
   * The email address of the contact.
   * 
   * @example
   * 6944**@gmail.com
   */
  contactEmail?: string;
  /**
   * @remarks
   * The contact email address.
   * 
   * @example
   * example
   */
  contactMail?: string;
  /**
   * @remarks
   * The name of the contact.
   * 
   * @example
   * qwq
   */
  contactName?: string;
  /**
   * @remarks
   * The phone number of the contact.
   * 
   * @example
   * 861151515***
   */
  contactPhone?: string;
  /**
   * @remarks
   * The position of the contact.
   * 
   * @example
   * example
   */
  contactPosition?: string;
  /**
   * @remarks
   * Specifies whether auto-reply is enabled.
   * 
   * @example
   * N
   */
  enableAutoReply?: string;
  /**
   * @remarks
   * The industry description.
   * 
   * @example
   * Description
   */
  industryDescription?: string;
  /**
   * @remarks
   * The industry to which the company belongs.
   * 
   * @example
   * cateringServices
   */
  industryInvolved?: string;
  /**
   * @remarks
   * The address of the letter of guarantee.
   * 
   * @example
   * https://xxxxxxxxxx
   */
  letterGuarantee?: string;
  /**
   * @remarks
   * The logo address.
   */
  logo?: string[];
  /**
   * @remarks
   * The local destination or region.
   */
  messageDestinationCountry?: string[];
  /**
   * @remarks
   * The international destination country or region.
   */
  messageDestinationInternationalCountry?: string[];
  /**
   * @remarks
   * The business message conversation introduction.
   * 
   * @example
   * aaa
   */
  messageDialogueIntroduction?: string;
  /**
   * @remarks
   * The date on which business messaging is enabled, in YYYY-MM-DD format.
   * 
   * @example
   * 2025-08-05
   */
  messageEnableDate?: string;
  /**
   * @remarks
   * The business message conversation name.
   * 
   * @example
   * name
   */
  messageSessionName?: string;
  /**
   * @remarks
   * The recovery status.
   * 
   * @example
   * NowRecovery
   */
  nowRecovery?: string;
  /**
   * @remarks
   * The supplementary information address.
   * 
   * @example
   * https://wwwxxxx
   */
  otherLetterGuarantee?: string;
  /**
   * @remarks
   * The recovery date, in YYYY-MM-DD format.
   * 
   * @example
   * 2025-11-11
   */
  recoveryDate?: string;
  /**
   * @remarks
   * The auto-reply content.
   * 
   * @example
   * aaa
   */
  replyContent?: string;
  /**
   * @remarks
   * SuspensionDate
   * 
   * @example
   * SuspensionDate
   */
  suspensionDate?: string;
  /**
   * @remarks
   * The company website address.
   * 
   * @example
   * https://xxxxxx
   */
  webAddress?: string;
  static names(): { [key: string]: string } {
    return {
      ageLimit: 'AgeLimit',
      applyReason: 'ApplyReason',
      businessAccountName: 'BusinessAccountName',
      businessLicenseRegistrationNumber: 'BusinessLicenseRegistrationNumber',
      companyAddress: 'CompanyAddress',
      companyEnglishName: 'CompanyEnglishName',
      companyLegalName: 'CompanyLegalName',
      companyLegalPerson: 'CompanyLegalPerson',
      companyProfile: 'CompanyProfile',
      companyRegisteredCountry: 'CompanyRegisteredCountry',
      companyTel: 'CompanyTel',
      completeAddressOfHeadquarters: 'CompleteAddressOfHeadquarters',
      contactEmail: 'ContactEmail',
      contactMail: 'ContactMail',
      contactName: 'ContactName',
      contactPhone: 'ContactPhone',
      contactPosition: 'ContactPosition',
      enableAutoReply: 'EnableAutoReply',
      industryDescription: 'IndustryDescription',
      industryInvolved: 'IndustryInvolved',
      letterGuarantee: 'LetterGuarantee',
      logo: 'Logo',
      messageDestinationCountry: 'MessageDestinationCountry',
      messageDestinationInternationalCountry: 'MessageDestinationInternationalCountry',
      messageDialogueIntroduction: 'MessageDialogueIntroduction',
      messageEnableDate: 'MessageEnableDate',
      messageSessionName: 'MessageSessionName',
      nowRecovery: 'NowRecovery',
      otherLetterGuarantee: 'OtherLetterGuarantee',
      recoveryDate: 'RecoveryDate',
      replyContent: 'ReplyContent',
      suspensionDate: 'SuspensionDate',
      webAddress: 'WebAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ageLimit: 'string',
      applyReason: 'string',
      businessAccountName: 'string',
      businessLicenseRegistrationNumber: 'string',
      companyAddress: { 'type': 'array', 'itemType': GetViberByRequestNoResponseBodyDataAuditRecordCompanyAddress },
      companyEnglishName: 'string',
      companyLegalName: 'string',
      companyLegalPerson: 'string',
      companyProfile: 'string',
      companyRegisteredCountry: 'string',
      companyTel: { 'type': 'array', 'itemType': GetViberByRequestNoResponseBodyDataAuditRecordCompanyTel },
      completeAddressOfHeadquarters: 'string',
      contactEmail: 'string',
      contactMail: 'string',
      contactName: 'string',
      contactPhone: 'string',
      contactPosition: 'string',
      enableAutoReply: 'string',
      industryDescription: 'string',
      industryInvolved: 'string',
      letterGuarantee: 'string',
      logo: { 'type': 'array', 'itemType': 'string' },
      messageDestinationCountry: { 'type': 'array', 'itemType': 'string' },
      messageDestinationInternationalCountry: { 'type': 'array', 'itemType': 'string' },
      messageDialogueIntroduction: 'string',
      messageEnableDate: 'string',
      messageSessionName: 'string',
      nowRecovery: 'string',
      otherLetterGuarantee: 'string',
      recoveryDate: 'string',
      replyContent: 'string',
      suspensionDate: 'string',
      webAddress: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.companyAddress)) {
      $dara.Model.validateArray(this.companyAddress);
    }
    if(Array.isArray(this.companyTel)) {
      $dara.Model.validateArray(this.companyTel);
    }
    if(Array.isArray(this.logo)) {
      $dara.Model.validateArray(this.logo);
    }
    if(Array.isArray(this.messageDestinationCountry)) {
      $dara.Model.validateArray(this.messageDestinationCountry);
    }
    if(Array.isArray(this.messageDestinationInternationalCountry)) {
      $dara.Model.validateArray(this.messageDestinationInternationalCountry);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetViberByRequestNoResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The audit content.
   */
  auditRecord?: GetViberByRequestNoResponseBodyDataAuditRecord;
  /**
   * @remarks
   * The audit result.
   * 
   * @example
   * pass
   */
  auditResult?: string;
  /**
   * @remarks
   * The audit time.
   * 
   * @example
   * 1785465
   */
  auditTime?: string;
  /**
   * @remarks
   * The creator.
   * 
   * @example
   * 11
   */
  creator?: string;
  /**
   * @remarks
   * The creation time, expressed as a Unix timestamp in milliseconds.
   * 
   * @example
   * 1753236426000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 17833636
   */
  gmtModifier?: string;
  /**
   * @remarks
   * ID。
   * 
   * @example
   * 11
   */
  id?: string;
  /**
   * @remarks
   * The Viber service number.
   * 
   * @example
   * 735221
   */
  maapServiceNo?: string;
  /**
   * @remarks
   * The modifier.
   * 
   * @example
   * 11
   */
  modifier?: string;
  /**
   * @remarks
   * The audit comment.
   * 
   * @example
   * aa
   */
  reason?: string;
  /**
   * @remarks
   * The unique request number.
   * 
   * @example
   * 5435435435
   */
  requestNo?: string;
  /**
   * @remarks
   * The request type.
   * 
   * @example
   * viberOpen
   */
  requestType?: string;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * A
   */
  state?: string;
  /**
   * @remarks
   * The subscriber code.
   * 
   * @example
   * 4534**
   */
  subscriberCode?: string;
  static names(): { [key: string]: string } {
    return {
      auditRecord: 'AuditRecord',
      auditResult: 'AuditResult',
      auditTime: 'AuditTime',
      creator: 'Creator',
      gmtCreate: 'GmtCreate',
      gmtModifier: 'GmtModifier',
      id: 'Id',
      maapServiceNo: 'MaapServiceNo',
      modifier: 'Modifier',
      reason: 'Reason',
      requestNo: 'RequestNo',
      requestType: 'RequestType',
      state: 'State',
      subscriberCode: 'SubscriberCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditRecord: GetViberByRequestNoResponseBodyDataAuditRecord,
      auditResult: 'string',
      auditTime: 'string',
      creator: 'string',
      gmtCreate: 'string',
      gmtModifier: 'string',
      id: 'string',
      maapServiceNo: 'string',
      modifier: 'string',
      reason: 'string',
      requestNo: 'string',
      requestType: 'string',
      state: 'string',
      subscriberCode: 'string',
    };
  }

  validate() {
    if(this.auditRecord && typeof (this.auditRecord as any).validate === 'function') {
      (this.auditRecord as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetViberByRequestNoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the access denial.
   * 
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The request status code.
   * 
   * - OK indicates that the request was successful.
   * 
   * - For other error codes, see [Error codes](https://help.aliyun.com/document_detail/196974.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The return data.
   */
  data?: GetViberByRequestNoResponseBodyData;
  /**
   * @remarks
   * The return message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID. It is a unique identifier generated by Alibaba Cloud for the request. You can use the ID to troubleshoot and locate issues.
   * 
   * @example
   * 90E63D28-E31D-1EB2-8**9-A94866411B2O
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful. Valid values:
   * 
   * - true: Successful.
   * 
   * - false: Failed.
   * 
   * @example
   * false
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
      data: GetViberByRequestNoResponseBodyData,
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

