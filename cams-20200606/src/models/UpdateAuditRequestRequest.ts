// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAuditRequestRequestAuditRecordCompanyAddress extends $dara.Model {
  /**
   * @remarks
   * The company address.
   * 
   * @example
   * 123 Sunshine Street, City, Country
   */
  companyAddress?: string;
  /**
   * @remarks
   * The company address title.
   * 
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
   * @remarks
   * The company telephone number.
   * 
   * @example
   * 07364245xxxx
   */
  companyTelNumber?: string;
  /**
   * @remarks
   * The telephone number title.
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

export class UpdateAuditRequestRequestAuditRecord extends $dara.Model {
  /**
   * @remarks
   * The age limit.
   * 
   * @example
   * unlimited
   */
  ageLimit?: string;
  /**
   * @remarks
   * The reason for the application.
   * 
   * @example
   * reason
   */
  applyReason?: string;
  /**
   * @remarks
   * The business account name.
   * 
   * @example
   * testaccount
   */
  businessAccountName?: string;
  /**
   * @remarks
   * The business license registration number.
   * 
   * @example
   * 9211515**345
   */
  businessLicenseRegistrationNumber?: string;
  /**
   * @remarks
   * The company address.
   */
  companyAddress?: UpdateAuditRequestRequestAuditRecordCompanyAddress[];
  /**
   * @remarks
   * The English name of the company.
   * 
   * @example
   * baidu
   */
  companyEnglishName?: string;
  /**
   * @remarks
   * The legal name of the company.
   * 
   * @example
   * example
   */
  companyLegalName?: string;
  /**
   * @remarks
   * The name of the legal representative of the company.
   * 
   * @example
   * example
   */
  companyLegalPerson?: string;
  /**
   * @remarks
   * The company profile.
   * 
   * @example
   * xxx
   */
  companyProfile?: string;
  /**
   * @remarks
   * The country or region where the company is registered.
   * 
   * @example
   * example
   */
  companyRegisteredCountry?: string;
  /**
   * @remarks
   * The company telephone number.
   */
  companyTel?: UpdateAuditRequestRequestAuditRecordCompanyTel[];
  /**
   * @remarks
   * The complete address of the headquarters.
   * 
   * @example
   * xxxstreet
   */
  completeAddressOfHeadquarters?: string;
  /**
   * @remarks
   * The email address of the contact.
   * 
   * @example
   * 5**8585@gmail.com
   */
  contactEmail?: string;
  /**
   * @remarks
   * The contact email address.
   * 
   * @example
   * xxxx@gamil.com
   */
  contactMail?: string;
  /**
   * @remarks
   * The name of the contact.
   * 
   * @example
   * mary
   */
  contactName?: string;
  /**
   * @remarks
   * The phone number of the contact.
   * 
   * @example
   * 861515115***
   */
  contactPhone?: string;
  /**
   * @remarks
   * The position of the contact.
   * 
   * @example
   * job
   */
  contactPosition?: string;
  /**
   * @remarks
   * Specifies whether to enable auto-reply. This field is deprecated.
   * 
   * @example
   * N/A‌
   */
  enableAutoReply?: string;
  /**
   * @remarks
   * The industry description.
   * 
   * @example
   * description
   */
  industryDescription?: string;
  /**
   * @remarks
   * The industry to which the company belongs.
   * 
   * @example
   * telecommunicationsAndIT
   */
  industryInvolved?: string;
  /**
   * @remarks
   * The letter of guarantee (download URL).
   * 
   * @example
   * https://xxx.xxx.xxx
   */
  letterGuarantee?: string;
  /**
   * @remarks
   * logo
   */
  logo?: string[];
  /**
   * @remarks
   * The local destination countries or regions.
   */
  messageDestinationCountry?: string[];
  /**
   * @remarks
   * The international destination countries and regions.
   */
  messageDestinationInternationalCountry?: string[];
  /**
   * @remarks
   * The introduction to the business message dialogue.
   * 
   * @example
   * hello!
   */
  messageDialogueIntroduction?: string;
  /**
   * @remarks
   * The date on which business messaging is enabled (GMT time zone).
   * 
   * @example
   * 2025-11-07
   */
  messageEnableDate?: string;
  /**
   * @remarks
   * The business message session name.
   * 
   * @example
   * test
   */
  messageSessionName?: string;
  /**
   * @remarks
   * The URL of the supplementary document.
   * 
   * @example
   * https://xxx.xxx.com
   */
  otherLetterGuarantee?: string;
  /**
   * @remarks
   * The recovery date, in YYYY-MM-DD format.
   * 
   * @example
   * 2025-11-07
   */
  recoveryDate?: string;
  /**
   * @remarks
   * The reply content. This field is deprecated.
   * 
   * @example
   * N/A
   */
  replyContent?: string;
  /**
   * @remarks
   * This field is deprecated.
   * 
   * @example
   * N/A
   */
  suspensionDate?: string;
  /**
   * @remarks
   * The company web address.
   * 
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
   * The Viber audit items.
   * 
   * This parameter is required.
   */
  auditRecord?: UpdateAuditRequestRequestAuditRecord;
  /**
   * @remarks
   * The audit result.
   * 
   * @example
   * unAudit
   */
  auditResult?: string;
  /**
   * @remarks
   * The space ID or instance ID of the ISV sub-customer. This is the channel ID. You can view it on the [Channel Management](https://chatapp.console.aliyun.com/ChannelsManagement) page.
   * 
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
   * The request number to update.
   * 
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

