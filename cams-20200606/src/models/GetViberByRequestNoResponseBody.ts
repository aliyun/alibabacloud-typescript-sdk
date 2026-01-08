// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetViberByRequestNoResponseBodyDataAuditRecordCompanyAddress extends $dara.Model {
  /**
   * @example
   * address
   */
  companyAddress?: string;
  /**
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
   * @example
   * 134213213
   */
  companyTelNumber?: string;
  /**
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
   * @example
   * eighteenUp
   */
  ageLimit?: string;
  /**
   * @example
   * aaa
   */
  applyReason?: string;
  /**
   * @example
   * aaaa
   */
  businessAccountName?: string;
  /**
   * @example
   * 43645465465
   */
  businessLicenseRegistrationNumber?: string;
  companyAddress?: GetViberByRequestNoResponseBodyDataAuditRecordCompanyAddress[];
  /**
   * @example
   * english
   */
  companyEnglishName?: string;
  /**
   * @example
   * xxxxxxcompany
   */
  companyLegalName?: string;
  /**
   * @example
   * jack
   */
  companyLegalPerson?: string;
  /**
   * @example
   * new
   */
  companyProfile?: string;
  /**
   * @example
   * beijing
   */
  companyRegisteredCountry?: string;
  companyTel?: GetViberByRequestNoResponseBodyDataAuditRecordCompanyTel[];
  /**
   * @example
   * address
   */
  completeAddressOfHeadquarters?: string;
  /**
   * @example
   * 示例值示例值
   */
  contactMail?: string;
  /**
   * @example
   * N
   */
  enableAutoReply?: string;
  /**
   * @example
   * Description
   */
  industryDescription?: string;
  /**
   * @example
   * cateringServices
   */
  industryInvolved?: string;
  /**
   * @example
   * https://xxxxxxxxxx
   */
  letterGuarantee?: string;
  logo?: string[];
  messageDestinationCountry?: string[];
  messageDestinationInternationalCountry?: string[];
  /**
   * @example
   * aaa
   */
  messageDialogueIntroduction?: string;
  /**
   * @example
   * 2025-08-05
   */
  messageEnableDate?: string;
  /**
   * @example
   * name
   */
  messageSessionName?: string;
  /**
   * @example
   * NowRecovery
   */
  nowRecovery?: string;
  /**
   * @example
   * https://wwwxxxx
   */
  otherLetterGuarantee?: string;
  /**
   * @example
   * 2025-11-11
   */
  recoveryDate?: string;
  /**
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
  auditRecord?: GetViberByRequestNoResponseBodyDataAuditRecord;
  /**
   * @example
   * pass
   */
  auditResult?: string;
  /**
   * @example
   * 1785465
   */
  auditTime?: string;
  /**
   * @example
   * 11
   */
  creator?: string;
  /**
   * @example
   * 1753236426000
   */
  gmtCreate?: string;
  /**
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
   * @example
   * 735221
   */
  maapServiceNo?: string;
  /**
   * @example
   * 11
   */
  modifier?: string;
  /**
   * @example
   * aa
   */
  reason?: string;
  /**
   * @example
   * 5435435435
   */
  requestNo?: string;
  /**
   * @example
   * viberOpen
   */
  requestType?: string;
  /**
   * @example
   * A
   */
  state?: string;
  /**
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
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: GetViberByRequestNoResponseBodyData;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 90E63D28-E31D-1EB2-8**9-A94866411B2O
   */
  requestId?: string;
  /**
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

