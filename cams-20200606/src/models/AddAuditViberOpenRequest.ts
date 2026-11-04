// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddAuditViberOpenRequestAuditRecordCompanyAddress extends $dara.Model {
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
   * @remarks
   * The company telephone number.
   * 
   * @example
   * 156********
   */
  companyTelNumber?: string;
  /**
   * @remarks
   * The title of the company telephone.
   * 
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
   * @remarks
   * The age limit.
   * 
   * @example
   * example
   */
  ageLimit?: string;
  /**
   * @remarks
   * The business account name.
   * 
   * @example
   * example
   */
  businessAccountName?: string;
  /**
   * @remarks
   * The business license registration number.
   * 
   * @example
   * example
   */
  businessLicenseRegistrationNumber?: string;
  /**
   * @remarks
   * The list of company addresses.
   */
  companyAddress?: AddAuditViberOpenRequestAuditRecordCompanyAddress[];
  /**
   * @remarks
   * The English name of the company.
   * 
   * @example
   * 7Pj6
   */
  companyEnglishName?: string;
  /**
   * @remarks
   * The legal name of the company.
   * 
   * @example
   * abc
   */
  companyLegalName?: string;
  /**
   * @remarks
   * The legal representative of the company.
   * 
   * @example
   * jerry
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
   * 
   * @example
   * cn
   */
  companyRegisteredCountry?: string;
  /**
   * @remarks
   * The list of company telephone objects.
   */
  companyTel?: AddAuditViberOpenRequestAuditRecordCompanyTel[];
  /**
   * @remarks
   * The complete address of the headquarters.
   * 
   * @example
   * example
   */
  completeAddressOfHeadquarters?: string;
  /**
   * @remarks
   * The email address of the contact.
   * 
   * @example
   * 7151***5@qq.com
   */
  contactEmail?: string;
  /**
   * @remarks
   * The email address.
   * 
   * @example
   * 123@123.com
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
   * 8615115**777
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
   * Specifies whether to enable auto-reply.
   * 
   * @example
   * example
   */
  enableAutoReply?: string;
  /**
   * @remarks
   * The industry description.
   * 
   * @example
   * example
   */
  industryDescription?: string;
  /**
   * @remarks
   * The industry involved.
   * 
   * @example
   * NFUwytiBnm11
   */
  industryInvolved?: string;
  /**
   * @remarks
   * The letter of guarantee.
   * 
   * @example
   * tiCaYNHR8ttt
   */
  letterGuarantee?: string;
  /**
   * @remarks
   * The list of logos.
   */
  logo?: string[];
  /**
   * @remarks
   * The list of message destination countries.
   */
  messageDestinationCountry?: string[];
  /**
   * @remarks
   * The list of international destination countries for messages.
   */
  messageDestinationInternationalCountry?: string[];
  /**
   * @remarks
   * The introduction of the message dialog box.
   * 
   * @example
   * example
   */
  messageDialogueIntroduction?: string;
  /**
   * @remarks
   * The date when messaging is enabled, in the YYYY-MM-DD format.
   * 
   * @example
   * example
   */
  messageEnableDate?: string;
  /**
   * @remarks
   * The message session name.
   * 
   * @example
   * nPHK8uaRo
   */
  messageSessionName?: string;
  /**
   * @remarks
   * The other letter of guarantee.
   * 
   * @example
   * example
   */
  otherLetterGuarantee?: string;
  /**
   * @remarks
   * The reply content.
   * 
   * @example
   * hello
   */
  replyContent?: string;
  /**
   * @remarks
   * The web address.
   * 
   * @example
   * example
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
  /**
   * @remarks
   * The audit record.
   */
  auditRecord?: AddAuditViberOpenRequestAuditRecord;
  /**
   * @remarks
   * The audit result.
   * 
   * @example
   * example
   */
  auditResult?: string;
  /**
   * @remarks
   * The SpaceId of the ISV sub-customer.
   * 
   * This parameter is required.
   * 
   * @example
   * example
   */
  custSpaceId?: string;
  /**
   * @example
   * 1651322271196729
   */
  ownerId?: number;
  /**
   * @example
   * testuser@testdomain.co
   */
  resourceOwnerAccount?: string;
  /**
   * @example
   * 1754580903499898
   */
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

