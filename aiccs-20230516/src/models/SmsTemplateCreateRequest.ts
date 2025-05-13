// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SmsTemplateCreateRequest extends $dara.Model {
  /**
   * @remarks
   * 短信内容
   * 
   * This parameter is required.
   * 
   * @example
   * 示例值示例值示例值
   */
  content?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * 短信签名
   * 
   * This parameter is required.
   * 
   * @example
   * ef2i29fsljf
   */
  sign?: string;
  /**
   * @remarks
   * 短信类型
   * 
   * @example
   * 73
   */
  smsType?: number;
  /**
   * @remarks
   * 模板名称
   * 
   * This parameter is required.
   * 
   * @example
   * 示例值示例值
   */
  templateName?: string;
  /**
   * @remarks
   * 模板类型
   * 
   * @example
   * 56
   */
  templateType?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sign: 'Sign',
      smsType: 'SmsType',
      templateName: 'TemplateName',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sign: 'string',
      smsType: 'number',
      templateName: 'string',
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

