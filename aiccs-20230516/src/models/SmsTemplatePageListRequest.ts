// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SmsTemplatePageListRequest extends $dara.Model {
  ownerId?: number;
  /**
   * @remarks
   * 页码
   * 
   * @example
   * 24
   */
  pageNo?: number;
  /**
   * @remarks
   * 每页条数
   * 
   * @example
   * 97
   */
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * 短信签名
   * 
   * @example
   * 114ah23m
   */
  sign?: string;
  /**
   * @remarks
   * 短信类型
   * 
   * @example
   * 42
   */
  smsType?: number;
  /**
   * @remarks
   * 模板状态
   * 
   * @example
   * 92
   */
  status?: number;
  /**
   * @remarks
   * 模板ID
   * 
   * @example
   * 83
   */
  templateId?: number;
  /**
   * @remarks
   * 模板类型
   * 
   * @example
   * 19
   */
  templateType?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sign: 'Sign',
      smsType: 'SmsType',
      status: 'Status',
      templateId: 'TemplateId',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      pageNo: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sign: 'string',
      smsType: 'number',
      status: 'number',
      templateId: 'number',
      templateType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

