// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAuditRequestByTypeUnAuditResponseBodyDataAuditRecordCompanyAddress extends $dara.Model {
  /**
   * @example
   * 示例值示例值示例值
   */
  companyAddress?: string;
  /**
   * @example
   * 示例值示例值示例值
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
   * 示例值
   */
  companyTelNumber?: string;
  /**
   * @example
   * 示例值
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
   * 示例值示例值示例值
   */
  ageLimit?: string;
  /**
   * @example
   * 示例值示例值
   */
  applyReason?: string;
  /**
   * @example
   * 示例值
   */
  businessAccountName?: string;
  companyAddress?: GetAuditRequestByTypeUnAuditResponseBodyDataAuditRecordCompanyAddress[];
  /**
   * @example
   * 示例值示例值
   */
  companyEnglishName?: string;
  /**
   * @example
   * 示例值示例值
   */
  companyLegalName?: string;
  /**
   * @example
   * 示例值示例值
   */
  companyLegalPerson?: string;
  /**
   * @example
   * 示例值示例值示例值
   */
  companyProfile?: string;
  companyRegisteredCountry?: string[];
  companyTel?: GetAuditRequestByTypeUnAuditResponseBodyDataAuditRecordCompanyTel[];
  /**
   * @example
   * 示例值
   */
  contactMail?: string;
  /**
   * @example
   * 示例值示例值
   */
  enableAutoReply?: string;
  /**
   * @example
   * 示例值示例值示例值
   */
  industryDescription?: string;
  /**
   * @example
   * 示例值
   */
  industryInvolved?: string;
  /**
   * @example
   * 示例值示例值
   */
  letterGuarantee?: string;
  logo?: string[];
  messageDestinationCountry?: string[];
  messageDestinationInternationalCountry?: string[];
  /**
   * @example
   * 示例值示例值示例值
   */
  messageDialogueIntroduction?: string;
  /**
   * @example
   * 示例值示例值
   */
  messageEnableDate?: string;
  /**
   * @example
   * 示例值示例值
   */
  messageSessionName?: string;
  /**
   * @example
   * 示例值示例值示例值
   */
  nowRecovery?: string;
  /**
   * @example
   * 示例值示例值
   */
  recoveryDate?: string;
  /**
   * @example
   * 示例值示例值
   */
  replyContent?: string;
  /**
   * @example
   * 示例值示例值
   */
  suspensionDate?: string;
  /**
   * @example
   * 示例值
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
   * 示例值示例值
   */
  aliUid?: string;
  auditRecord?: GetAuditRequestByTypeUnAuditResponseBodyDataAuditRecord;
  /**
   * @example
   * 示例值示例值
   */
  auditResult?: string;
  /**
   * @example
   * 示例值
   */
  auditTime?: string;
  /**
   * @example
   * 示例值示例值示例值
   */
  creator?: string;
  /**
   * @example
   * 示例值示例值
   */
  gmtCreate?: string;
  /**
   * @example
   * 示例值示例值示例值
   */
  gmtModifier?: string;
  /**
   * @example
   * 示例值示例值
   */
  id?: string;
  /**
   * @example
   * 示例值示例值
   */
  maapServiceNo?: string;
  /**
   * @example
   * 示例值示例值示例值
   */
  modifier?: string;
  /**
   * @example
   * 示例值示例值示例值
   */
  requestNo?: string;
  /**
   * @example
   * 示例值示例值
   */
  requestType?: string;
  /**
   * @example
   * 示例值示例值
   */
  state?: string;
  /**
   * @example
   * 示例值示例值
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
  accessDeniedDetail?: string;
  /**
   * @example
   * 示例值示例值示例值
   */
  code?: string;
  data?: GetAuditRequestByTypeUnAuditResponseBodyData;
  /**
   * @example
   * 示例值示例值
   */
  message?: string;
  /**
   * @example
   * 示例值示例值
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

