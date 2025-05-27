// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QuerySingleSmsQualificationResponseBodyDataBusinessLicensePics } from "./QuerySingleSmsQualificationResponseBodyDataBusinessLicensePics";
import { QuerySingleSmsQualificationResponseBodyDataOtherFiles } from "./QuerySingleSmsQualificationResponseBodyDataOtherFiles";


export class QuerySingleSmsQualificationResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * 经办人身份证有效期
   * 
   * @example
   * 2023-01-01~2033-01-01
   */
  adminIDCardExpDate?: string;
  /**
   * @remarks
   * 经办人身份证国徽面，产品需求，要求身份证可以分正反面上传
   * 
   * @example
   * https://******.aliyuncs.com/******
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
   * 经办人身份证图片地址，正反面合一
   * 
   * @example
   * https://******.aliyuncs.com/******
   */
  adminIDCardPic?: string;
  /**
   * @remarks
   * 管理员身份证类型
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
   * 示例值示例值
   */
  adminName?: string;
  /**
   * @remarks
   * 经办人手机号码
   * 
   * @example
   * 137*******
   */
  adminPhoneNo?: string;
  /**
   * @remarks
   * 证件信息
   */
  businessLicensePics?: QuerySingleSmsQualificationResponseBodyDataBusinessLicensePics[];
  /**
   * @remarks
   * 行业类型，在当前模式下是可以用产品线code来区分
   * 
   * @example
   * dysms
   */
  businessType?: string;
  /**
   * @remarks
   * 公司名称
   * 
   * @example
   * 示例值示例值
   */
  companyName?: string;
  /**
   * @remarks
   * 企业类型, COMPANY:公司，政府或者事业单位:NON_PROFIT_ORGANIZATION
   * 
   * @example
   * COMPANY
   */
  companyType?: string;
  /**
   * @example
   * 2023-01-01~2033-01-01
   */
  effTimeStr?: string;
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
   * 法人身份证类型
   * 
   * @example
   * identityCard
   */
  legalPersonIDCardType?: string;
  /**
   * @remarks
   * 法人身份证有效期
   * 
   * @example
   * 2023-01-01~2033-01-01
   */
  legalPersonIdCardEffTime?: string;
  /**
   * @remarks
   * 法人姓名
   * 
   * @example
   * 示例值
   */
  legalPersonName?: string;
  /**
   * @remarks
   * 社会统一信用代码
   * 
   * @example
   * 910X********0012
   */
  organizationCode?: string;
  /**
   * @remarks
   * 更多资料
   */
  otherFiles?: QuerySingleSmsQualificationResponseBodyDataOtherFiles[];
  /**
   * @example
   * 10000****
   */
  qualificationGroupId?: number;
  /**
   * @remarks
   * 资质名称
   * 
   * @example
   * 示例值示例值
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
  /**
   * @remarks
   * 当前审核状态
   * 
   * @example
   * PASSED
   */
  state?: string;
  /**
   * @remarks
   * 是否自用
   * 
   * @example
   * false
   */
  useBySelf?: boolean;
  /**
   * @example
   * false
   */
  whetherShare?: boolean;
  /**
   * @remarks
   * 乾坤袋工单ID
   * 
   * @example
   * 2001****
   */
  workOrderId?: number;
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
      businessType: 'BusinessType',
      companyName: 'CompanyName',
      companyType: 'CompanyType',
      effTimeStr: 'EffTimeStr',
      legalPersonIDCardNo: 'LegalPersonIDCardNo',
      legalPersonIDCardType: 'LegalPersonIDCardType',
      legalPersonIdCardEffTime: 'LegalPersonIdCardEffTime',
      legalPersonName: 'LegalPersonName',
      organizationCode: 'OrganizationCode',
      otherFiles: 'OtherFiles',
      qualificationGroupId: 'QualificationGroupId',
      qualificationName: 'QualificationName',
      remark: 'Remark',
      state: 'State',
      useBySelf: 'UseBySelf',
      whetherShare: 'WhetherShare',
      workOrderId: 'WorkOrderId',
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
      businessLicensePics: { 'type': 'array', 'itemType': QuerySingleSmsQualificationResponseBodyDataBusinessLicensePics },
      businessType: 'string',
      companyName: 'string',
      companyType: 'string',
      effTimeStr: 'string',
      legalPersonIDCardNo: 'string',
      legalPersonIDCardType: 'string',
      legalPersonIdCardEffTime: 'string',
      legalPersonName: 'string',
      organizationCode: 'string',
      otherFiles: { 'type': 'array', 'itemType': QuerySingleSmsQualificationResponseBodyDataOtherFiles },
      qualificationGroupId: 'number',
      qualificationName: 'string',
      remark: 'string',
      state: 'string',
      useBySelf: 'boolean',
      whetherShare: 'boolean',
      workOrderId: 'number',
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

