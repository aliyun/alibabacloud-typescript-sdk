// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFixedNoAReportRequest extends $dara.Model {
  /**
   * @remarks
   * 所属a号码组id
   * 
   * This parameter is required.
   * 
   * @example
   * 12
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
   * 经办人/法人电话
   * 
   * @example
   * 130*****8888
   */
  custPhoneNo?: string;
  /**
   * @remarks
   * 固话客户类型 1:法人,2:经办人
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  custType?: number;
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
   * 固话申请时服务大厅工单号
   * 
   * @example
   * 45***12
   */
  fixedLineWorkId?: string;
  /**
   * @remarks
   * a号码(固话)
   * 
   * This parameter is required.
   * 
   * @example
   * 89*****1234
   */
  fixedNoA?: string;
  /**
   * @remarks
   * 正面人像照片 OSS 路径地址
   * 
   * This parameter is required.
   * 
   * @example
   * 123456/test1719383196033.jpg
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
      custPhoneNo: 'CustPhoneNo',
      custType: 'CustType',
      documentNumber: 'DocumentNumber',
      documentType: 'DocumentType',
      fixedLineWorkId: 'FixedLineWorkId',
      fixedNoA: 'FixedNoA',
      idCardAlivePhoto: 'IdCardAlivePhoto',
      idCardBackPhoto: 'IdCardBackPhoto',
      idCardFrontPhoto: 'IdCardFrontPhoto',
      ownerId: 'OwnerId',
      remark: 'Remark',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ANoWhiteGroupId: 'number',
      custName: 'string',
      custPhoneNo: 'string',
      custType: 'number',
      documentNumber: 'string',
      documentType: 'number',
      fixedLineWorkId: 'string',
      fixedNoA: 'string',
      idCardAlivePhoto: 'string',
      idCardBackPhoto: 'string',
      idCardFrontPhoto: 'string',
      ownerId: 'number',
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

