// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAuditRequestByTypeUnAuditResponseBodyDataAuditRecordCompanyAddress extends $dara.Model {
  /**
   * @example
   * xxxxcompany
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

export class GetAuditRequestByTypeUnAuditResponseBodyDataAuditRecordCompanyTel extends $dara.Model {
  /**
   * @example
   * 143243**
   */
  companyTelNumber?: string;
  /**
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
   * @example
   * eighteenUp
   */
  ageLimit?: string;
  /**
   * @example
   * bnv
   */
  applyReason?: string;
  /**
   * @example
   * aaa
   */
  businessAccountName?: string;
  companyAddress?: GetAuditRequestByTypeUnAuditResponseBodyDataAuditRecordCompanyAddress[];
  /**
   * @example
   * Company English Name
   */
  companyEnglishName?: string;
  /**
   * @example
   * xxxxcompany
   */
  companyLegalName?: string;
  /**
   * @example
   * jack
   */
  companyLegalPerson?: string;
  /**
   * @example
   * CompanyProfile
   */
  companyProfile?: string;
  companyRegisteredCountry?: string[];
  companyTel?: GetAuditRequestByTypeUnAuditResponseBodyDataAuditRecordCompanyTel[];
  /**
   * @example
   * qqemail@gmail.com
   */
  contactMail?: string;
  /**
   * @example
   * N
   */
  enableAutoReply?: string;
  /**
   * @example
   * xxx
   */
  industryDescription?: string;
  /**
   * @example
   * it
   */
  industryInvolved?: string;
  /**
   * @example
   * https://www.xxxxxxx
   */
  letterGuarantee?: string;
  logo?: string[];
  messageDestinationCountry?: string[];
  messageDestinationInternationalCountry?: string[];
  /**
   * @example
   * MessageDialogueIntroduction
   */
  messageDialogueIntroduction?: string;
  /**
   * @example
   * 2025-11-01
   */
  messageEnableDate?: string;
  /**
   * @example
   * Message Session Name
   */
  messageSessionName?: string;
  /**
   * @example
   * n
   */
  nowRecovery?: string;
  /**
   * @example
   * 2025-111-06
   */
  recoveryDate?: string;
  /**
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
   * @example
   * 21432
   */
  aliUid?: string;
  auditRecord?: GetAuditRequestByTypeUnAuditResponseBodyDataAuditRecord;
  /**
   * @example
   * pass
   */
  auditResult?: string;
  /**
   * @example
   * 20250106
   */
  auditTime?: string;
  /**
   * @example
   * 11
   */
  creator?: string;
  /**
   * @example
   * 1789200
   */
  gmtCreate?: string;
  /**
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
   * @example
   * 475646
   */
  maapServiceNo?: string;
  /**
   * @example
   * 1
   */
  modifier?: string;
  /**
   * @example
   * 45345435435
   */
  requestNo?: string;
  /**
   * @example
   * viber_open
   */
  requestType?: string;
  /**
   * @example
   * A
   */
  state?: string;
  /**
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
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: GetAuditRequestByTypeUnAuditResponseBodyData;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 90E63D28-E31D-1EB2-8939-A9486***
   */
  requestId?: string;
  /**
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

