// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePhoneNoAReportRequest extends $dara.Model {
  /**
   * @remarks
   * 所属a号码组id
   * 
   * This parameter is required.
   * 
   * @example
   * 19
   */
  ANoWhiteGroupId?: number;
  /**
   * @remarks
   * 姓名
   * 
   * This parameter is required.
   * 
   * @example
   * 赵**
   */
  custName?: string;
  /**
   * @remarks
   * 证件号码
   * 
   * This parameter is required.
   * 
   * @example
   * 370*********
   */
  documentNumber?: string;
  /**
   * @remarks
   * 证件类型 填写1表示身份证
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  documentType?: number;
  /**
   * @remarks
   * 半身照oss路径地址
   * 
   * This parameter is required.
   * 
   * @example
   * 123456/test1719383196033.jpg示例值
   */
  idCardAlivePhoto?: string;
  /**
   * @remarks
   * 身份证反面照片oss路径地址
   * 
   * @example
   * 123456/test1719383196032.jpg
   */
  idCardBackPhoto?: string;
  /**
   * @remarks
   * 身份证正面照片oss路径地址
   * 
   * @example
   * 123456/test1719383196031.jpg
   */
  idCardFrontPhoto?: string;
  ownerId?: number;
  /**
   * @remarks
   * 手机号
   * 
   * This parameter is required.
   * 
   * @example
   * 130*****1234
   */
  phoneNoA?: string;
  /**
   * @remarks
   * 备注（客户自己的业务备注，可编辑）
   * 
   * @example
   * ***报备
   */
  remark?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ANoWhiteGroupId: 'ANoWhiteGroupId',
      custName: 'CustName',
      documentNumber: 'DocumentNumber',
      documentType: 'DocumentType',
      idCardAlivePhoto: 'IdCardAlivePhoto',
      idCardBackPhoto: 'IdCardBackPhoto',
      idCardFrontPhoto: 'IdCardFrontPhoto',
      ownerId: 'OwnerId',
      phoneNoA: 'PhoneNoA',
      remark: 'Remark',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ANoWhiteGroupId: 'number',
      custName: 'string',
      documentNumber: 'string',
      documentType: 'number',
      idCardAlivePhoto: 'string',
      idCardBackPhoto: 'string',
      idCardFrontPhoto: 'string',
      ownerId: 'number',
      phoneNoA: 'string',
      remark: 'string',
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

