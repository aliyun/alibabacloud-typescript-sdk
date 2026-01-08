// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddAuditViberOpenRequestAuditRecordCompanyAddress extends $dara.Model {
  /**
   * @example
   * address
   */
  companyAddress?: string;
  /**
   * @example
   * title
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

export class AddAuditViberOpenRequestAuditRecordCompanyTel extends $dara.Model {
  /**
   * @example
   * 156********
   */
  companyTelNumber?: string;
  /**
   * @example
   * title
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

export class AddAuditViberOpenRequestAuditRecord extends $dara.Model {
  /**
   * @example
   * 示例值示例值
   */
  ageLimit?: string;
  /**
   * @example
   * 示例值示例值示例值
   */
  businessAccountName?: string;
  /**
   * @example
   * 示例值示例值
   */
  businessLicenseRegistrationNumber?: string;
  companyAddress?: AddAuditViberOpenRequestAuditRecordCompanyAddress[];
  /**
   * @example
   * 7Pj6
   */
  companyEnglishName?: string;
  /**
   * @example
   * 示例值
   */
  companyLegalName?: string;
  /**
   * @example
   * jerry
   */
  companyLegalPerson?: string;
  /**
   * @example
   * CompanyProfile
   */
  companyProfile?: string;
  /**
   * @example
   * cn
   */
  companyRegisteredCountry?: string;
  companyTel?: AddAuditViberOpenRequestAuditRecordCompanyTel[];
  /**
   * @example
   * 示例值示例值示例值
   */
  completeAddressOfHeadquarters?: string;
  /**
   * @example
   * 123@123.com
   */
  contactMail?: string;
  /**
   * @example
   * 示例值
   */
  enableAutoReply?: string;
  /**
   * @example
   * 示例值示例值
   */
  industryDescription?: string;
  /**
   * @example
   * NFUwytiBnm11
   */
  industryInvolved?: string;
  /**
   * @example
   * tiCaYNHR8ttt
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
   * nPHK8uaRo
   */
  messageSessionName?: string;
  /**
   * @example
   * 示例值示例值
   */
  otherLetterGuarantee?: string;
  /**
   * @example
   * hello
   */
  replyContent?: string;
  /**
   * @example
   * 示例值示例值
   */
  webAddress?: string;
  static names(): { [key: string]: string } {
    return {
      ageLimit: 'AgeLimit',
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
      otherLetterGuarantee: 'OtherLetterGuarantee',
      replyContent: 'ReplyContent',
      webAddress: 'WebAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ageLimit: 'string',
      businessAccountName: 'string',
      businessLicenseRegistrationNumber: 'string',
      companyAddress: { 'type': 'array', 'itemType': AddAuditViberOpenRequestAuditRecordCompanyAddress },
      companyEnglishName: 'string',
      companyLegalName: 'string',
      companyLegalPerson: 'string',
      companyProfile: 'string',
      companyRegisteredCountry: 'string',
      companyTel: { 'type': 'array', 'itemType': AddAuditViberOpenRequestAuditRecordCompanyTel },
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
      otherLetterGuarantee: 'string',
      replyContent: 'string',
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

export class AddAuditViberOpenRequest extends $dara.Model {
  auditRecord?: AddAuditViberOpenRequestAuditRecord;
  /**
   * @example
   * 示例值
   */
  auditResult?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 示例值示例值示例值
   */
  custSpaceId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      auditRecord: 'AuditRecord',
      auditResult: 'AuditResult',
      custSpaceId: 'CustSpaceId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditRecord: AddAuditViberOpenRequestAuditRecord,
      auditResult: 'string',
      custSpaceId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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

