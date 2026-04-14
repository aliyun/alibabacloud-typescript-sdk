// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAuditRequestRequestAuditRecordCompanyAddress extends $dara.Model {
  /**
   * @example
   * 123 Sunshine Street, City, Country
   */
  companyAddress?: string;
  /**
   * @example
   * xxx company
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

export class UpdateAuditRequestRequestAuditRecordCompanyTel extends $dara.Model {
  /**
   * @example
   * 07364245xxxx
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

export class UpdateAuditRequestRequestAuditRecord extends $dara.Model {
  /**
   * @example
   * unlimited
   */
  ageLimit?: string;
  /**
   * @example
   * reason
   */
  applyReason?: string;
  /**
   * @example
   * testaccount
   */
  businessAccountName?: string;
  /**
   * @example
   * 9211515**345
   */
  businessLicenseRegistrationNumber?: string;
  companyAddress?: UpdateAuditRequestRequestAuditRecordCompanyAddress[];
  /**
   * @example
   * baidu
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
   * xxx
   */
  companyProfile?: string;
  /**
   * @example
   * 示例值示例值
   */
  companyRegisteredCountry?: string;
  companyTel?: UpdateAuditRequestRequestAuditRecordCompanyTel[];
  /**
   * @example
   * xxxstreet
   */
  completeAddressOfHeadquarters?: string;
  /**
   * @example
   * 5**8585@gmail.com
   */
  contactEmail?: string;
  /**
   * @example
   * xxxx@gamil.com
   */
  contactMail?: string;
  /**
   * @example
   * mary
   */
  contactName?: string;
  /**
   * @example
   * 861515115***
   */
  contactPhone?: string;
  /**
   * @example
   * job
   */
  contactPosition?: string;
  /**
   * @example
   * N/A‌
   */
  enableAutoReply?: string;
  /**
   * @example
   * description
   */
  industryDescription?: string;
  /**
   * @example
   * telecommunicationsAndIT
   */
  industryInvolved?: string;
  /**
   * @example
   * 示例值示例值示例值
   */
  letterGuarantee?: string;
  /**
   * @remarks
   * logo
   */
  logo?: string[];
  messageDestinationCountry?: string[];
  messageDestinationInternationalCountry?: string[];
  /**
   * @example
   * hello!
   */
  messageDialogueIntroduction?: string;
  /**
   * @example
   * 2025-11-07
   */
  messageEnableDate?: string;
  /**
   * @example
   * test
   */
  messageSessionName?: string;
  /**
   * @example
   * https://xxx.xxx.com
   */
  otherLetterGuarantee?: string;
  /**
   * @example
   * 2025-11-07
   */
  recoveryDate?: string;
  /**
   * @example
   * N/A
   */
  replyContent?: string;
  /**
   * @example
   * N/A
   */
  suspensionDate?: string;
  /**
   * @example
   * https://www.xxx.xxx.com
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
      companyAddress: { 'type': 'array', 'itemType': UpdateAuditRequestRequestAuditRecordCompanyAddress },
      companyEnglishName: 'string',
      companyLegalName: 'string',
      companyLegalPerson: 'string',
      companyProfile: 'string',
      companyRegisteredCountry: 'string',
      companyTel: { 'type': 'array', 'itemType': UpdateAuditRequestRequestAuditRecordCompanyTel },
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

export class UpdateAuditRequestRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  auditRecord?: UpdateAuditRequestRequestAuditRecord;
  /**
   * @example
   * unAudit
   */
  auditResult?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cams-8pi**urn5s
   */
  custSpaceId?: string;
  /**
   * @example
   * 1500111740532860
   */
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 114624518**5956096
   */
  requestNo?: string;
  /**
   * @example
   * user1@example.com\"
   */
  resourceOwnerAccount?: string;
  /**
   * @example
   * 1577495724967111
   */
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      auditRecord: 'AuditRecord',
      auditResult: 'AuditResult',
      custSpaceId: 'CustSpaceId',
      ownerId: 'OwnerId',
      requestNo: 'RequestNo',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditRecord: UpdateAuditRequestRequestAuditRecord,
      auditResult: 'string',
      custSpaceId: 'string',
      ownerId: 'number',
      requestNo: 'string',
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

