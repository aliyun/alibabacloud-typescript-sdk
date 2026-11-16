// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAuditRequestByTypeUnAuditResponseBodyDataAuditRecordCompanyAddress extends $dara.Model {
  /**
   * @remarks
   * The company address.
   * 
   * @example
   * xxxxcompany
   */
  companyAddress?: string;
  /**
   * @remarks
   * The address title.
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

export class GetAuditRequestByTypeUnAuditResponseBodyDataAuditRecordCompanyTel extends $dara.Model {
  /**
   * @remarks
   * The company phone number.
   * 
   * @example
   * 143243**
   */
  companyTelNumber?: string;
  /**
   * @remarks
   * The company phone number title.
   * 
   * @example
   * example
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

export class GetAuditRequestByTypeUnAuditResponseBodyDataAuditRecord extends $dara.Model {
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
   * bnv
   */
  applyReason?: string;
  /**
   * @remarks
   * The business account name.
   * 
   * @example
   * aaa
   */
  businessAccountName?: string;
  /**
   * @remarks
   * The company address.
   */
  companyAddress?: GetAuditRequestByTypeUnAuditResponseBodyDataAuditRecordCompanyAddress[];
  /**
   * @remarks
   * The English name of the company.
   * 
   * @example
   * Company English Name
   */
  companyEnglishName?: string;
  /**
   * @remarks
   * The legal name of the company.
   * 
   * @example
   * xxxxcompany
   */
  companyLegalName?: string;
  /**
   * @remarks
   * The name of the legal representative of the company.
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
   * CompanyProfile
   */
  companyProfile?: string;
  /**
   * @remarks
   * The country where the company is registered.
   */
  companyRegisteredCountry?: string[];
  /**
   * @remarks
   * The company phone number.
   */
  companyTel?: GetAuditRequestByTypeUnAuditResponseBodyDataAuditRecordCompanyTel[];
  /**
   * @remarks
   * The company email address.
   * 
   * @example
   * qqemail@gmail.com
   */
  contactMail?: string;
  /**
   * @remarks
   * Specifies whether automatic reply is enabled.
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
   * The industry provides enterprise information technology services
   */
  industryDescription?: string;
  /**
   * @remarks
   * The industry.
   * 
   * @example
   * it
   */
  industryInvolved?: string;
  /**
   * @remarks
   * The address of the letter of guarantee.
   * 
   * @example
   * https://www.xxxxxxx
   */
  letterGuarantee?: string;
  /**
   * @remarks
   * The collection of logo URLs.
   */
  logo?: string[];
  /**
   * @remarks
   * The local destination country or region.
   */
  messageDestinationCountry?: string[];
  /**
   * @remarks
   * The international destination countries or regions.
   */
  messageDestinationInternationalCountry?: string[];
  /**
   * @remarks
   * The introduction to commercial messages.
   * 
   * @example
   * MessageDialogueIntroduction
   */
  messageDialogueIntroduction?: string;
  /**
   * @remarks
   * The activation date for commercial messages. The format is YYYY-MM-DD.
   * 
   * @example
   * 2025-11-01
   */
  messageEnableDate?: string;
  /**
   * @remarks
   * The name of the commercial message session.
   * 
   * @example
   * Message Session Name
   */
  messageSessionName?: string;
  /**
   * @remarks
   * The pause status.
   * 
   * @example
   * n
   */
  nowRecovery?: string;
  /**
   * @remarks
   * The recovery date. The format is YYYY-MM-DD.
   * 
   * @example
   * 2025-111-06
   */
  recoveryDate?: string;
  /**
   * @remarks
   * The reply content.
   * 
   * @example
   * aaaqq
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
   * The company website.
   * 
   * @example
   * www.xxxxx
   */
  webAddress?: string;
  static names(): { [key: string]: string } {
    return {
      ageLimit: 'AgeLimit',
      applyReason: 'ApplyReason',
      businessAccountName: 'BusinessAccountName',
      companyAddress: 'CompanyAddress',
      companyEnglishName: 'CompanyEnglishName',
      companyLegalName: 'CompanyLegalName',
      companyLegalPerson: 'CompanyLegalPerson',
      companyProfile: 'CompanyProfile',
      companyRegisteredCountry: 'CompanyRegisteredCountry',
      companyTel: 'CompanyTel',
      contactMail: 'ContactMail',
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
      companyAddress: { 'type': 'array', 'itemType': GetAuditRequestByTypeUnAuditResponseBodyDataAuditRecordCompanyAddress },
      companyEnglishName: 'string',
      companyLegalName: 'string',
      companyLegalPerson: 'string',
      companyProfile: 'string',
      companyRegisteredCountry: { 'type': 'array', 'itemType': 'string' },
      companyTel: { 'type': 'array', 'itemType': GetAuditRequestByTypeUnAuditResponseBodyDataAuditRecordCompanyTel },
      contactMail: 'string',
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
    if(Array.isArray(this.companyRegisteredCountry)) {
      $dara.Model.validateArray(this.companyRegisteredCountry);
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

export class GetAuditRequestByTypeUnAuditResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID.
   * 
   * @example
   * 21432
   */
  aliUid?: string;
  /**
   * @remarks
   * The review data.
   */
  auditRecord?: GetAuditRequestByTypeUnAuditResponseBodyDataAuditRecord;
  /**
   * @remarks
   * The review result.
   * 
   * @example
   * pass
   */
  auditResult?: string;
  /**
   * @remarks
   * The review time. The format is YYYYMMDD.
   * 
   * @example
   * 20250106
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
   * The creation time.
   * 
   * @example
   * 1789200
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 20251624
   */
  gmtModifier?: string;
  /**
   * @remarks
   * ID
   * 
   * @example
   * id
   */
  id?: string;
  /**
   * @remarks
   * The Viber service number.
   * 
   * @example
   * 475646
   */
  maapServiceNo?: string;
  /**
   * @remarks
   * The modifier.
   * 
   * @example
   * 1
   */
  modifier?: string;
  /**
   * @remarks
   * The request number.
   * 
   * @example
   * 45345435435
   */
  requestNo?: string;
  /**
   * @remarks
   * The request type.
   * 
   * @example
   * viber_open
   */
  requestType?: string;
  /**
   * @remarks
   * The task status.
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
   * 345436456546
   */
  subscriberCode?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      auditRecord: 'AuditRecord',
      auditResult: 'AuditResult',
      auditTime: 'AuditTime',
      creator: 'Creator',
      gmtCreate: 'GmtCreate',
      gmtModifier: 'GmtModifier',
      id: 'Id',
      maapServiceNo: 'MaapServiceNo',
      modifier: 'Modifier',
      requestNo: 'RequestNo',
      requestType: 'RequestType',
      state: 'State',
      subscriberCode: 'SubscriberCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
      auditRecord: GetAuditRequestByTypeUnAuditResponseBodyDataAuditRecord,
      auditResult: 'string',
      auditTime: 'string',
      creator: 'string',
      gmtCreate: 'string',
      gmtModifier: 'string',
      id: 'string',
      maapServiceNo: 'string',
      modifier: 'string',
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

export class GetAuditRequestByTypeUnAuditResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The request status code.
   * 
   * - A value of OK indicates that the request is successful.
   * 
   * - For other error codes, see [Error codes](https://help.aliyun.com/document_detail/196974.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned data object.
   */
  data?: GetAuditRequestByTypeUnAuditResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID. This ID is generated by Alibaba Cloud for the request and can be used to troubleshoot and locate issues.
   * 
   * @example
   * 90E63D28-E31D-1EB2-8939-A9486***
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation is successful. Valid values:
   * 
   * - true: The operation is successful.
   * 
   * - false: The operation fails.
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
      data: GetAuditRequestByTypeUnAuditResponseBodyData,
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

