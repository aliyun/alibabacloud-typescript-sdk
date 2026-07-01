// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSmsQualificationShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Validity period of the administrator ID card. Format: YYYY-MM-DD~YYYY-MM-DD.
   * > When the certificate validity period is long-term, the end date can be set to 2099-12-31.
   * 
   * @example
   * 2023-01-01~2033-01-01
   */
  adminIDCardExpDate?: string;
  /**
   * @remarks
   * Photo of the front of the administrator\\"s ID card (national emblem side). Only jpg, png, gif, and jpeg image formats are supported, and the image must not exceed 5 MB. Please provide the path of the file uploaded to OSS. The file name to be uploaded must not contain Chinese characters or special characters. For upload operations, see [Upload Files via OSS](https://help.aliyun.com/document_detail/2833114.html).
   * 
   * >Notice: 
   * No stamp is required for color originals of the certificate. If you upload a photocopy or black-and-white photo, you must affix the enterprise red seal to the photocopy and take a photo to upload.
   * 
   * @example
   * 123456/111.png
   */
  adminIDCardFrontFace?: string;
  /**
   * @remarks
   * Administrator\\"s ID number.
   * 
   * @example
   * 511391********5123
   */
  adminIDCardNo?: string;
  /**
   * @remarks
   * Photo of the back of the administrator\\"s ID card (portrait side). Only jpg, png, gif, and jpeg image formats are supported, and the image must not exceed 5 MB. Please provide the path of the file uploaded to OSS. The file name to be uploaded must not contain Chinese characters or special characters. For upload operations, see [Upload Files via OSS](https://help.aliyun.com/document_detail/2833114.html).
   * 
   * >Notice: 
   *  No stamp is required for color originals of the certificate. If you upload a photocopy or black-and-white photo, you must affix the enterprise red seal to the photocopy and take a photo to upload.
   * 
   * @example
   * 123456/111.png
   */
  adminIDCardPic?: string;
  /**
   * @remarks
   * Administrator ID card type. Valid values:
   * 
   * - identityCard: ID card.
   * - passport: Passport.
   * - homeReturnPermit: Mainland Travel Permit for Hong Kong and Macao Residents.
   * - TaiwanCompatriotPermit: Mainland Travel Permit for Taiwan Residents.
   * - residencePermit: Residence Permit for Hong Kong, Macao, and Taiwan Residents.
   * - other: Other.
   * 
   * @example
   * identityCard
   */
  adminIDCardType?: string;
  /**
   * @remarks
   * Administrator name.
   * 
   * > The administrator (also known as the operator) refers to the person who logs in to the Alibaba Cloud account and manages the SMS service. Generally, this is the operations personnel who manages qualifications, signatures, and templates and sends SMS messages under this Alibaba Cloud account, and whose phone number can receive verification codes. The administrator is not necessarily the administrator of this Alibaba Cloud account. The administrator can be the same person as the enterprise\\"s legal representative.
   * 
   * @example
   * 李华
   */
  adminName?: string;
  /**
   * @remarks
   * Administrator\\"s mobile phone number. Format: +/+86/0086/86 prefix or a phone number without any prefix, for example, 1390000****.
   * 
   * This parameter is required.
   * 
   * @example
   * 137********
   */
  adminPhoneNo?: string;
  /**
   * @remarks
   * Enterprise business license information. This parameter is required when the purpose of the qualification to be modified is for use by others.
   */
  businessLicensePicsShrink?: string;
  /**
   * @remarks
   * Validity period of the business license. Format: YYYY-MM-DD~YYYY-MM-DD.
   * > When the certificate validity period is long-term, the end date can be set to 2099-12-31.
   * 
   * @example
   * 2023-01-01~2033-01-01
   */
  bussinessLicenseExpDate?: string;
  /**
   * @remarks
   * Phone verification code. Please call the [RequiredPhoneCode](~~RequiredPhoneCode~~) API and pass in the **administrator\\"s phone number**, then enter the SMS verification code you receive here.
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
   * Enterprise name. Supported symbols are only the middle dot `·`, the Chinese symbols `【】（）`, the English symbols `()`, and the `space`. Other symbols or pure numbers are not allowed. The length must not exceed 150 characters.
   * 
   * @example
   * 阿里云云通信有限公司
   */
  companyName?: string;
  /**
   * @remarks
   * Legal person\\"s ID number.
   * 
   * @example
   * 511391********5123
   */
  legalPersonIDCardNo?: string;
  /**
   * @remarks
   * Legal person ID card type. Valid values:
   * 
   * - identityCard: ID card.
   * - passport: Passport.
   * - homeReturnPermit: Mainland Travel Permit for Hong Kong and Macao Residents.
   * - TaiwanCompatriotPermit: Mainland Travel Permit for Taiwan Residents.
   * - residencePermit: Residence Permit for Hong Kong, Macao, and Taiwan Residents.
   * - other: Other.
   * 
   * @example
   * identityCard
   */
  legalPersonIDCardType?: string;
  /**
   * @remarks
   * Photo of the back of the legal representative\\"s ID card (portrait side). Only jpg, png, gif, and jpeg image formats are supported, and the image must not exceed 5 MB. Please provide the path of the file uploaded to OSS. The file name to be uploaded must not contain Chinese characters or special characters. For upload operations, see [Upload Files via OSS](https://help.aliyun.com/document_detail/2833114.html).
   * > The system will use the legal person name and ID number you provide for verification. If the verification fails, you need to upload a photo of the legal representative\\"s ID card.
   * 
   * @example
   * 123456/111.png
   */
  legalPersonIdCardBackSide?: string;
  /**
   * @remarks
   * Validity period of the legal person ID card. Format: YYYY-MM-DD~YYYY-MM-DD.
   * > When the certificate validity period is long-term, the end date can be set to 2099-12-31.
   * 
   * @example
   * 2023-01-01~2033-01-01
   */
  legalPersonIdCardEffTime?: string;
  /**
   * @remarks
   * Photo of the front of the legal representative\\"s ID card (national emblem side). Only jpg, png, gif, and jpeg image formats are supported, and the image must not exceed 5 MB. Please provide the path of the file uploaded to OSS. The file name to be uploaded must not contain Chinese characters or special characters. For upload operations, see [Upload Files via OSS](https://help.aliyun.com/document_detail/2833114.html).
   * > The system will use the legal person name and ID number you provide for verification. If the verification fails, you need to upload a photo of the legal representative\\"s ID card.
   * 
   * @example
   * 123456/111.png
   */
  legalPersonIdCardFrontSide?: string;
  /**
   * @remarks
   * Name of the legal representative.
   * 
   * > - If there is no legal representative information on the organization\\"s certificate, but there is information about a person in charge / chief representative or similar, please prepare the ID card photo of the corresponding person in charge or chief representative listed on the certificate.
   * > - If there is no legal representative information on the organization\\"s certificate, and there is no information about any person in charge, please prepare the name and ID card photo of the main business contact person.
   * 
   * @example
   * 李华
   */
  legalPersonName?: string;
  /**
   * @remarks
   * The review order ID. You can obtain the qualifications and their corresponding review order IDs under the current account by calling [Query Qualification List](~~QuerySmsQualificationRecord~~).
   * 
   * This parameter is required.
   * 
   * @example
   * 2001*****
   */
  orderId?: number;
  /**
   * @remarks
   * Additional materials. If you have other supporting or supplementary materials, photos, etc., you can upload them here.
   */
  otherFilesShrink?: string;
  ownerId?: number;
  /**
   * @remarks
   * The qualification ID, that is, the ID returned when you [apply for SMS qualification](~~SubmitSmsQualification~~). You can obtain the qualification IDs under the current account by calling [Query Qualification List](~~QuerySmsQualificationRecord~~).
   * 
   * This parameter is required.
   * 
   * @example
   * 10000****
   */
  qualificationGroupId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
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
      legalPersonIDCardNo: 'LegalPersonIDCardNo',
      legalPersonIDCardType: 'LegalPersonIDCardType',
      legalPersonIdCardBackSide: 'LegalPersonIdCardBackSide',
      legalPersonIdCardEffTime: 'LegalPersonIdCardEffTime',
      legalPersonIdCardFrontSide: 'LegalPersonIdCardFrontSide',
      legalPersonName: 'LegalPersonName',
      orderId: 'OrderId',
      otherFilesShrink: 'OtherFiles',
      ownerId: 'OwnerId',
      qualificationGroupId: 'QualificationGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
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
      legalPersonIDCardNo: 'string',
      legalPersonIDCardType: 'string',
      legalPersonIdCardBackSide: 'string',
      legalPersonIdCardEffTime: 'string',
      legalPersonIdCardFrontSide: 'string',
      legalPersonName: 'string',
      orderId: 'number',
      otherFilesShrink: 'string',
      ownerId: 'number',
      qualificationGroupId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

