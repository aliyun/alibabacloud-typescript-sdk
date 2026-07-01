// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitSmsQualificationShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The administrator\\"s ID card validity period. Format: YYYY-MM-DD~YYYY-MM-DD.
   * > If the ID card has a long-term validity period, set the end date to 2099-12-31.
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-01-01~2033-01-01
   */
  adminIDCardExpDate?: string;
  /**
   * @remarks
   * The front photo of the administrator\\"s ID card (national emblem side). Only jpg, png, gif, and jpeg formats are supported. The image must not exceed 5 MB. Specify the file path uploaded to OSS. The file name must not contain Chinese characters or special characters. For upload instructions, see [Upload files through OSS](https://help.aliyun.com/document_detail/2833114.html).
   * 
   * >Notice: 
   * Color originals do not require a stamp. If you upload a photocopy or black-and-white photo, stamp the photocopy with the company seal and take a photo to upload.
   * 
   * .
   * 
   * This parameter is required.
   * 
   * @example
   * 123456/111.png
   */
  adminIDCardFrontFace?: string;
  /**
   * @remarks
   * The administrator\\"s ID card number.
   * 
   * This parameter is required.
   * 
   * @example
   * 511391********5123
   */
  adminIDCardNo?: string;
  /**
   * @remarks
   * The back photo of the administrator\\"s ID card (portrait side). Only jpg, png, gif, and jpeg formats are supported. The image must not exceed 5 MB. Specify the file path uploaded to OSS. The file name must not contain Chinese characters or special characters. For upload instructions, see [Upload files through OSS](https://help.aliyun.com/document_detail/2833114.html).
   * 
   * >Notice: 
   * Color originals do not require a stamp. If you upload a photocopy or black-and-white photo, stamp the photocopy with the company seal and take a photo to upload.
   * 
   * .
   * 
   * This parameter is required.
   * 
   * @example
   * 123456/111.png
   */
  adminIDCardPic?: string;
  /**
   * @remarks
   * The administrator\\"s ID card type. Valid values:
   * 
   * - identityCard: ID card.
   * - passport: passport.
   * - homeReturnPermit: Hong Kong/Macao resident travel permit to mainland.
   * - TaiwanCompatriotPermit: Taiwan resident travel permit to mainland.
   * - residencePermit: Hong Kong/Macao/Taiwan resident residence permit.
   * - other: other.
   * 
   * This parameter is required.
   * 
   * @example
   * identityCard
   */
  adminIDCardType?: string;
  /**
   * @remarks
   * The administrator\\"s name. Maximum length: 50 characters. **Under the current [SMS signature real-name requirements](https://help.aliyun.com/document_detail/2873145.html), if the same administrator applies for qualifications for multiple different enterprises, carrier registration will fail. Ensure one administrator per enterprise to improve the registration success rate.**
   * 
   * > The administrator (also called the handler) is the person who logs on to the Alibaba Cloud account and manages SMS services. This person typically manages qualifications, signatures, and templates under this Alibaba Cloud account and performs SMS sending operations. This person\\"s phone number must be able to receive verification codes. The administrator does not have to be the Alibaba Cloud account administrator and can be the same person as the legal representative.
   * 
   * This parameter is required.
   * 
   * @example
   * 李华
   */
  adminName?: string;
  /**
   * @remarks
   * The administrator\\"s phone number. Format: +/+86/0086/86 or a phone number without any prefix, such as 1390000****.
   * 
   * This parameter is required.
   * 
   * @example
   * 137****1234
   */
  adminPhoneNo?: string;
  /**
   * @remarks
   * The business license information. This parameter is required when the qualification purpose `UseBySelf` is set to `false` (third-party use).
   * > - Based on carrier real-name registration regulatory requirements, we strongly recommend that you provide the relevant field information. Otherwise, the probability of "review rejection or carrier registration failure" increases significantly.
   */
  businessLicensePicsShrink?: string;
  /**
   * @remarks
   * The business license validity period. Format: YYYY-MM-DD~YYYY-MM-DD.
   * > If the certificate has a long-term validity period, set the end date to 2099-12-31.
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-01-01~2033-01-01
   */
  bussinessLicenseExpDate?: string;
  /**
   * @remarks
   * The phone verification code. Call the [RequiredPhoneCode](~~RequiredPhoneCode~~) operation with the **administrator\\"s phone number**, and then enter the SMS verification code received.
   * 
   * > You can use [ValidPhoneCode](~~ValidPhoneCode~~) to verify whether the SMS verification code is correct before passing it in.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  certifyCode?: string;
  /**
   * @remarks
   * The enterprise name. Only the middle dot `·`, Chinese brackets `【】（）`, English parentheses `()`, and `spaces` are supported as symbols. Other symbols or pure digits are not allowed. Maximum length: 150 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * 阿里云云通信有限公司
   */
  companyName?: string;
  /**
   * @remarks
   * The enterprise type. Valid values:
   * 
   * - COMPANY: enterprise.
   * 
   * - NON_PROFIT_ORGANIZATION: government agency or public institution.
   * 
   * This parameter is required.
   * 
   * @example
   * COMPANY
   */
  companyType?: string;
  /**
   * @remarks
   * The legal representative\\"s ID card number.
   * 
   * This parameter is required.
   * 
   * @example
   * 511391********5123
   */
  legalPersonIDCardNo?: string;
  /**
   * @remarks
   * The legal representative\\"s ID card type. Valid values:
   * 
   * - identityCard: ID card.
   * - passport: passport.
   * - homeReturnPermit: Hong Kong/Macao resident travel permit to mainland.
   * - TaiwanCompatriotPermit: Taiwan resident travel permit to mainland.
   * - residencePermit: Hong Kong/Macao/Taiwan resident residence permit.
   * - other: other.
   * 
   * This parameter is required.
   * 
   * @example
   * identityCard
   */
  legalPersonIDCardType?: string;
  /**
   * @remarks
   * The back photo of the legal representative\\"s ID card (portrait side). Only jpg, png, gif, and jpeg formats are supported. The image must not exceed 5 MB. Specify the file path uploaded to OSS. The file name must not contain Chinese characters or special characters. For upload instructions, see [Upload files through OSS](https://help.aliyun.com/document_detail/2833114.html).
   * 
   * > The system verifies the legal representative\\"s name and ID number you provide. If verification fails, you must upload photos of the legal representative\\"s ID card.
   * 
   * @example
   * 123456/111.png
   */
  legalPersonIdCardBackSide?: string;
  /**
   * @remarks
   * The legal representative\\"s ID card validity period. Format: YYYY-MM-DD~YYYY-MM-DD.
   * > If the ID card has a long-term validity period, set the end date to 2099-12-31.
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-01-01~2033-01-01
   */
  legalPersonIdCardEffTime?: string;
  /**
   * @remarks
   * The front photo of the legal representative\\"s ID card (national emblem side). Only jpg, png, gif, and jpeg formats are supported. The image must not exceed 5 MB. Specify the file path uploaded to OSS. The file name must not contain Chinese characters or special characters. For upload instructions, see [Upload files through OSS](https://help.aliyun.com/document_detail/2833114.html).
   * 
   * 
   * > The system verifies the legal representative\\"s name and ID number you provide. If verification fails, you must upload photos of the legal representative\\"s ID card.
   * 
   * @example
   * 123456/111.png
   */
  legalPersonIdCardFrontSide?: string;
  /**
   * @remarks
   * The legal representative\\"s name. Maximum length: 50 characters.
   * 
   * > - If the organization certificate does not contain legal representative information but includes a person in charge or chief representative, prepare the ID card photos of the corresponding person in charge or chief representative listed on the certificate.
   * > - If the organization certificate contains neither legal representative information nor any person in charge, prepare the name and ID card photos of the primary business contact.
   * 
   * This parameter is required.
   * 
   * @example
   * 李华
   */
  legalPersonName?: string;
  /**
   * @remarks
   * The unified social credit code. Maximum length: 150 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * 910X********0012
   */
  organizationCode?: string;
  /**
   * @remarks
   * Additional materials. If you have other supporting documents, notes, or photos, upload them here.
   */
  otherFilesShrink?: string;
  ownerId?: number;
  /**
   * @remarks
   * The qualification name, used to manage and distinguish multiple qualifications you apply for. It does not appear in SMS content. The name must be unique among your existing qualifications. Only Chinese characters, English letters, or combinations with digits are supported. Symbols or pure digits are not supported. Maximum length: 100 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * 阿里云云通信有限公司资质李华
   */
  qualificationName?: string;
  /**
   * @remarks
   * Remarks. If you have additional information to provide or notes for the qualification verification reviewer, add a description here.
   * 
   * @example
   * 无
   */
  remark?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The purpose of the qualification application. Valid values:
   * 
   * - **true**: **Self-use**. The entity that owns the signature is the same as the entity verified for this account.
   * - **false**: **Third-party use**. The entity that owns the signature is different from the entity verified for this account.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  useBySelf?: boolean;
  /**
   * @remarks
   * Qualification authorization. Specifies whether to share the qualification with other cloud communication products (such as domestic voice services and domestic number privacy protection). Sharing is available only when you apply for a **self-use qualification** and the qualification information **matches the enterprise information verified for the current Alibaba Cloud account**. Otherwise, this setting has no effect. Valid values:
   * 
   * - true: Agree. Your qualification information can be referenced during the qualification verification process of other cloud communication products, eliminating redundant verification.
   * - false: Disagree.
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  whetherShare?: boolean;
  static names(): { [key: string]: string } {
    return {
      adminIDCardExpDate: 'AdminIDCardExpDate',
      adminIDCardFrontFace: 'AdminIDCardFrontFace',
      adminIDCardNo: 'AdminIDCardNo',
      adminIDCardPic: 'AdminIDCardPic',
      adminIDCardType: 'AdminIDCardType',
      adminName: 'AdminName',
      adminPhoneNo: 'AdminPhoneNo',
      businessLicensePicsShrink: 'BusinessLicensePics',
      bussinessLicenseExpDate: 'BussinessLicenseExpDate',
      certifyCode: 'CertifyCode',
      companyName: 'CompanyName',
      companyType: 'CompanyType',
      legalPersonIDCardNo: 'LegalPersonIDCardNo',
      legalPersonIDCardType: 'LegalPersonIDCardType',
      legalPersonIdCardBackSide: 'LegalPersonIdCardBackSide',
      legalPersonIdCardEffTime: 'LegalPersonIdCardEffTime',
      legalPersonIdCardFrontSide: 'LegalPersonIdCardFrontSide',
      legalPersonName: 'LegalPersonName',
      organizationCode: 'OrganizationCode',
      otherFilesShrink: 'OtherFiles',
      ownerId: 'OwnerId',
      qualificationName: 'QualificationName',
      remark: 'Remark',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      useBySelf: 'UseBySelf',
      whetherShare: 'WhetherShare',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adminIDCardExpDate: 'string',
      adminIDCardFrontFace: 'string',
      adminIDCardNo: 'string',
      adminIDCardPic: 'string',
      adminIDCardType: 'string',
      adminName: 'string',
      adminPhoneNo: 'string',
      businessLicensePicsShrink: 'string',
      bussinessLicenseExpDate: 'string',
      certifyCode: 'string',
      companyName: 'string',
      companyType: 'string',
      legalPersonIDCardNo: 'string',
      legalPersonIDCardType: 'string',
      legalPersonIdCardBackSide: 'string',
      legalPersonIdCardEffTime: 'string',
      legalPersonIdCardFrontSide: 'string',
      legalPersonName: 'string',
      organizationCode: 'string',
      otherFilesShrink: 'string',
      ownerId: 'number',
      qualificationName: 'string',
      remark: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      useBySelf: 'boolean',
      whetherShare: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

