// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitSmsQualificationShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * 经办人身份证有效期，格式示例2023-01-01~2033-01-01
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-01-01~2033-01-01
   */
  adminIDCardExpDate?: string;
  /**
   * @remarks
   * 经办人身份证照片国徽面
   * 
   * This parameter is required.
   * 
   * @example
   * 123456/111.png
   */
  adminIDCardFrontFace?: string;
  /**
   * @remarks
   * 经办人身份证号码
   * 
   * This parameter is required.
   * 
   * @example
   * 511391********5123
   */
  adminIDCardNo?: string;
  /**
   * @remarks
   * 经办人身份证照片人像面
   * 
   * This parameter is required.
   * 
   * @example
   * 123456/111.png
   */
  adminIDCardPic?: string;
  /**
   * @remarks
   * 管理员身份证类型。identityCard:中国居民身份证;passport:护照;homeReturnPermit:港澳居民来往内地通行证;TaiwanCompatriotPermit:台湾居民来往大陆通行证;residencePermit:港澳台居民居住证";other:其他
   * 
   * This parameter is required.
   * 
   * @example
   * identityCard
   */
  adminIDCardType?: string;
  /**
   * @remarks
   * 经办人姓名
   * 
   * This parameter is required.
   * 
   * @example
   * 示例值示例值
   */
  adminName?: string;
  /**
   * @remarks
   * 经办人手机号码
   * 
   * This parameter is required.
   * 
   * @example
   * 137****1234
   */
  adminPhoneNo?: string;
  /**
   * @remarks
   * 企业营业证件信息，非大客户必填
   */
  businessLicensePicsShrink?: string;
  /**
   * @remarks
   * 企业营业时间开始和结束字符串，格式示例2023-01-01~2033-01-01
   * 
   * This parameter is required.
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
   * This parameter is required.
   * 
   * @example
   * 示例值示例值
   */
  companyName?: string;
  /**
   * @remarks
   * 企业类型, COMPANY:公司;NON_PROFIT_ORGANIZATION:政府或者事业单位
   * 
   * This parameter is required.
   * 
   * @example
   * COMPANY
   */
  companyType?: string;
  /**
   * @remarks
   * 法人身份证号码
   * 
   * This parameter is required.
   * 
   * @example
   * 511391********5123
   */
  legalPersonIDCardNo?: string;
  /**
   * @remarks
   * 法人身份证类型。identityCard:中国居民身份证;passport:护照;homeReturnPermit:港澳居民来往内地通行证;TaiwanCompatriotPermit:台湾居民来往大陆通行证;residencePermit:港澳台居民居住证";other:其他
   * 
   * This parameter is required.
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
   * 法人身份证有效期
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-01-01~2033-01-01
   */
  legalPersonIdCardEffTime?: string;
  /**
   * @remarks
   * 法人身份证照片国徽面
   * 
   * @example
   * 123456/111.png
   */
  legalPersonIdCardFrontSide?: string;
  /**
   * @remarks
   * 法人姓名
   * 
   * This parameter is required.
   * 
   * @example
   * 示例值示例值
   */
  legalPersonName?: string;
  /**
   * @remarks
   * 社会统一信用代码
   * 
   * This parameter is required.
   * 
   * @example
   * 910X********0012
   */
  organizationCode?: string;
  /**
   * @remarks
   * 更多资料
   */
  otherFilesShrink?: string;
  ownerId?: number;
  /**
   * @remarks
   * 资质名称,名称不能重复
   * 
   * This parameter is required.
   * 
   * @example
   * 示例值示例值示例值
   */
  qualificationName?: string;
  /**
   * @remarks
   * 备注
   * 
   * @example
   * 示例值示例值
   */
  remark?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * 资质是自用还是他用，true：自用，false：他用
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  useBySelf?: boolean;
  /**
   * @remarks
   * 是否同意与其他业务线共享
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

