// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAuditRequestRequestAuditRecordCompanyAddress extends $dara.Model {
  /**
   * @remarks
   * Company address.
   * 
   * @example
   * 123 Sunshine Street, City, Country
   */
  companyAddress?: string;
  /**
   * @remarks
   * Company address title.
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
   * Company phone number.
   * 
   * @example
   * 07364245xxxx
   */
  companyTelNumber?: string;
  /**
   * @remarks
   * Phone number title.
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
   * Age limit.
   * 
   * @example
   * unlimited
   */
  ageLimit?: string;
  /**
   * @remarks
   * Application reason.
   * 
   * @example
   * reason
   */
  applyReason?: string;
  /**
   * @remarks
   * Business account name.
   * 
   * @example
   * testaccount
   */
  businessAccountName?: string;
  /**
   * @remarks
   * Business license registration number.
   * 
   * @example
   * 9211515**345
   */
  businessLicenseRegistrationNumber?: string;
  /**
   * @remarks
   * Company addresses.
   */
  companyAddress?: UpdateAuditRequestRequestAuditRecordCompanyAddress[];
  /**
   * @remarks
   * Company English name.
   * 
   * @example
   * baidu
   */
  companyEnglishName?: string;
  /**
   * @remarks
   * Company legal name.
   * 
   * @example
   * example
   */
  companyLegalName?: string;
  /**
   * @remarks
   * Company legal person name.
   * 
   * @example
   * example
   */
  companyLegalPerson?: string;
  /**
   * @remarks
   * Company profile.
   * 
   * @example
   * xxx
   */
  companyProfile?: string;
  /**
   * @remarks
   * Company registered country or region.
   * 
   * @example
   * example
   */
  companyRegisteredCountry?: string;
  /**
   * @remarks
   * Company phone numbers.
   */
  companyTel?: UpdateAuditRequestRequestAuditRecordCompanyTel[];
  /**
   * @remarks
   * Complete address of headquarters.
   * 
   * @example
   * xxxstreet
   */
  completeAddressOfHeadquarters?: string;
  /**
   * @remarks
   * Contact mailbox.
   * 
   * @example
   * 5**8585@gmail.com
   */
  contactEmail?: string;
  /**
   * @remarks
   * Contact mailbox.
   * 
   * @example
   * xxxx@gamil.com
   */
  contactMail?: string;
  /**
   * @remarks
   * Contact name.
   * 
   * @example
   * mary
   */
  contactName?: string;
  /**
   * @remarks
   * Contact phone number.
   * 
   * @example
   * 861515115***
   */
  contactPhone?: string;
  /**
   * @remarks
   * Contact position.
   * 
   * @example
   * job
   */
  contactPosition?: string;
  /**
   * @remarks
   * Enable auto-reply (this field is deprecated).
   * 
   * @example
   * N/A‌
   */
  enableAutoReply?: string;
  /**
   * @remarks
   * Industry description.
   * 
   * @example
   * description
   */
  industryDescription?: string;
  /**
   * @remarks
   * Industry involved.
   * 
   * @example
   * telecommunicationsAndIT
   */
  industryInvolved?: string;
  /**
   * @remarks
   * Letter of guarantee (download address).
   * 
   * @example
   * https://xxx.xxx.xxx
   */
  letterGuarantee?: string;
  /**
   * @remarks
   * Logo
   */
  logo?: string[];
  /**
   * @remarks
   * Local destination countries or regions.
   */
  messageDestinationCountry?: string[];
  /**
   * @remarks
   * International destination countries and regions.
   */
  messageDestinationInternationalCountry?: string[];
  /**
   * @remarks
   * Commercial message dialogue introduction.
   * 
   * @example
   * hello!
   */
  messageDialogueIntroduction?: string;
  /**
   * @remarks
   * Commercial message enable date (GMT).
   * 
   * @example
   * 2025-11-07
   */
  messageEnableDate?: string;
  /**
   * @remarks
   * Commercial message dialogue name.
   * 
   * @example
   * test
   */
  messageSessionName?: string;
  /**
   * @remarks
   * Supplementary material address.
   * 
   * @example
   * https://xxx.xxx.com
   */
  otherLetterGuarantee?: string;
  /**
   * @remarks
   * Recovery date.
   * 
   * @example
   * 2025-11-07
   */
  recoveryDate?: string;
  /**
   * @remarks
   * Reply content (deprecated).
   * 
   * @example
   * N/A
   */
  replyContent?: string;
  /**
   * @remarks
   * Deprecated.
   * 
   * @example
   * N/A
   */
  suspensionDate?: string;
  /**
   * @remarks
   * Company website.
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
   * Viber audit items.
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
   * The Space ID of the ISV sub-customer or the instance ID. View it on the [Channel Management](https://chatapp.console.aliyun.com/ChannelsManagement) page.
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
   * The request number.
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

