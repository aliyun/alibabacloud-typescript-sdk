// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateSmsQualificationRequestBusinessLicensePics } from "./UpdateSmsQualificationRequestBusinessLicensePics";
import { UpdateSmsQualificationRequestOtherFiles } from "./UpdateSmsQualificationRequestOtherFiles";


export class UpdateSmsQualificationRequest extends $dara.Model {
  /**
   * @remarks
   * 经办人身份证有效期，格式示例2023-01-01~2033-01-01
   * 
   * @example
   * 2023-01-01~2033-01-01
   */
  adminIDCardExpDate?: string;
  /**
   * @remarks
   * 经办人身份证照片国徽面
   * 
   * @example
   * 123456/111.png
   */
  adminIDCardFrontFace?: string;
  /**
   * @remarks
   * 经办人身份证号码
   * 
   * @example
   * 511391********5123
   */
  adminIDCardNo?: string;
  /**
   * @remarks
   * 经办人身份证照片人像面
   * 
   * @example
   * 123456/111.png
   */
  adminIDCardPic?: string;
  /**
   * @remarks
   * 管理员身份证类型。identityCard:中国居民身份证;passport:护照;homeReturnPermit:港澳居民来往内地通行证;TaiwanCompatriotPermit:台湾居民来往大陆通行证;residencePermit:港澳台居民居住证";other:其他
   * 
   * @example
   * identityCard
   */
  adminIDCardType?: string;
  /**
   * @remarks
   * 经办人姓名
   * 
   * @example
   * 示例值
   */
  adminName?: string;
  /**
   * @remarks
   * 经办人手机号码
   * 
   * This parameter is required.
   * 
   * @example
   * 137********
   */
  adminPhoneNo?: string;
  /**
   * @remarks
   * 企业证件信息
   */
  businessLicensePics?: UpdateSmsQualificationRequestBusinessLicensePics[];
  /**
   * @remarks
   * 企业营业时间开始和结束字符串，格式示例2023-01-01~2033-01-01
   * 
   * @example
   * 2023-01-01~2033-01-01
   */
  bussinessLicenseExpDate?: string;
  /**
   * @remarks
   * 手机号验证码
   * 
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  certifyCode?: string;
  /**
   * @remarks
   * 公司名称
   * 
   * @example
   * 示例值示例值示例值
   */
  companyName?: string;
  /**
   * @remarks
   * 法人身份证号码
   * 
   * @example
   * 511391********5123
   */
  legalPersonIDCardNo?: string;
  /**
   * @remarks
   * 法人身份证类型。identityCard:中国居民身份证;passport:护照;homeReturnPermit:港澳居民来往内地通行证;TaiwanCompatriotPermit:台湾居民来往大陆通行证;residencePermit:港澳台居民居住证";other:其他
   * 
   * @example
   * identityCard
   */
  legalPersonIDCardType?: string;
  /**
   * @remarks
   * 法人身份证照片人像面
   * 
   * @example
   * 123456/111.png
   */
  legalPersonIdCardBackSide?: string;
  /**
   * @remarks
   * 法人身份证有效期，格式示例2023-01-01~2033-01-01
   * 
   * @example
   * 2023-01-01~2033-01-01
   */
  legalPersonIdCardEffTime?: string;
  /**
   * @remarks
   * 法人身份照片证国徽面
   * 
   * @example
   * 123456/111.png
   */
  legalPersonIdCardFrontSide?: string;
  /**
   * @remarks
   * 法人姓名
   * 
   * @example
   * 示例值示例值
   */
  legalPersonName?: string;
  /**
   * @remarks
   * 工单ID
   * 
   * This parameter is required.
   * 
   * @example
   * 2001*****
   */
  orderId?: number;
  /**
   * @remarks
   * 更多资料
   */
  otherFiles?: UpdateSmsQualificationRequestOtherFiles[];
  ownerId?: number;
  /**
   * @remarks
   * 资质组ID
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
      businessLicensePics: 'BusinessLicensePics',
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
      otherFiles: 'OtherFiles',
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
      businessLicensePics: { 'type': 'array', 'itemType': UpdateSmsQualificationRequestBusinessLicensePics },
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
      otherFiles: { 'type': 'array', 'itemType': UpdateSmsQualificationRequestOtherFiles },
      ownerId: 'number',
      qualificationGroupId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.businessLicensePics)) {
      $dara.Model.validateArray(this.businessLicensePics);
    }
    if(Array.isArray(this.otherFiles)) {
      $dara.Model.validateArray(this.otherFiles);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

