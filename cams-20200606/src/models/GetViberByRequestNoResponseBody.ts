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
   * The company telephone number.
   * 
   * @example
   * 134213213
   */
  companyTelNumber?: string;
  /**
   * @remarks
   * The title for the telephone number.
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
   * The age restriction.
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
   * The name of the business account.
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
   * The company addresses.
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
   * The country or region where the company is registered.
   * 
   * @example
   * beijing
   */
  companyRegisteredCountry?: string;
  /**
   * @remarks
   * The company telephone numbers.
   */
  companyTel?: GetViberByRequestNoResponseBodyDataAuditRecordCompanyTel[];
  /**
   * @remarks
   * The complete address of the company\\"s headquarters.
   * 
   * @example
   * address
   */
  completeAddressOfHeadquarters?: string;
  /**
   * @remarks
   * The contact person\\"s email address.
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
   * The contact person\\"s name.
   * 
   * @example
   * qwq
   */
  contactName?: string;
  /**
   * @remarks
   * The contact person\\"s phone number.
   * 
   * @example
   * 861151515***
   */
  contactPhone?: string;
  /**
   * @remarks
   * The contact person\\"s position.
   * 
   * @example
   * example
   */
  contactPosition?: string;
  /**
   * @remarks
   * Indicates whether auto-reply is enabled.
   * 
   * @example
   * N
   */
  enableAutoReply?: string;
  /**
   * @remarks
   * A description of the industry.
   * 
   * @example
   * Description
   */
  industryDescription?: string;
  /**
   * @remarks
   * The company\\"s industry.
   * 
   * @example
   * cateringServices
   */
  industryInvolved?: string;
  /**
   * @remarks
   * The URL of the letter of guarantee.
   * 
   * @example
   * https://xxxxxxxxxx
   */
  letterGuarantee?: string;
  /**
   * @remarks
   * The logo URLs.
   */
  logo?: string[];
  /**
   * @remarks
   * The local destination countries or regions.
   */
  messageDestinationCountry?: string[];
  /**
   * @remarks
   * The international destination countries or regions.
   */
  messageDestinationInternationalCountry?: string[];
  /**
   * @remarks
   * A brief introduction to the business messaging conversation.
   * 
   * @example
   * aaa
   */
  messageDialogueIntroduction?: string;
  /**
   * @remarks
   * The date business messaging is enabled.
   * 
   * @example
   * 2025-08-05
   */
  messageEnableDate?: string;
  /**
   * @remarks
   * The name of the business messaging conversation.
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
   * The URL for supplementary information.
   * 
   * @example
   * https://wwwxxxx
   */
  otherLetterGuarantee?: string;
  /**
   * @remarks
   * The date of recovery.
   * 
   * @example
   * 2025-11-11
   */
  recoveryDate?: string;
  /**
   * @remarks
   * The content of the auto-reply message.
   * 
   * @example
   * aaa
   */
  replyContent?: string;
  /**
   * @remarks
   * The suspension date.
   * 
   * @example
   * SuspensionDate
   */
  suspensionDate?: string;
  /**
   * @remarks
   * The company website.
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
   * The audit record details.
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
   * The creator of the resource.
   * 
   * @example
   * 11
   */
  creator?: string;
  /**
   * @remarks
   * The creation time.
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
   * The ID of the resource.
   * 
   * @example
   * 11
   */
  id?: string;
  /**
   * @remarks
   * The Viber service ID.
   * 
   * @example
   * 735221
   */
  maapServiceNo?: string;
  /**
   * @remarks
   * The user who last modified the resource.
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
   * The unique number for the application request.
   * 
   * @example
   * 5435435435
   */
  requestNo?: string;
  /**
   * @remarks
   * The type of the request.
   * 
   * @example
   * viberOpen
   */
  requestType?: string;
  /**
   * @remarks
   * The status of the request.
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
   * Access denial details.
   * 
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The status code of the request.
   * 
   * - `OK`: The request was successful.
   * 
   * - For other error codes, see [Error codes](https://help.aliyun.com/document_detail/196974.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: GetViberByRequestNoResponseBodyData;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The unique ID for the request. You can use this Aliyun-generated ID for troubleshooting.
   * 
   * @example
   * 90E63D28-E31D-1EB2-8**9-A94866411B2O
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates if the request was successful. Valid values:
   * 
   * - `true`: The request was successful.
   * 
   * - `false`: The request failed.
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

