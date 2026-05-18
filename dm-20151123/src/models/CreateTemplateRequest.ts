// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTemplateRequest extends $dara.Model {
  fromType?: number;
  ownerId?: number;
  remark?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  smsContent?: string;
  smsType?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 001 Condom Manufacturer J48
   */
  templateName?: string;
  templateNickName?: string;
  templateSubject?: string;
  templateText?: string;
  /**
   * @example
   * 0
   */
  templateType?: number;
  static names(): { [key: string]: string } {
    return {
      fromType: 'FromType',
      ownerId: 'OwnerId',
      remark: 'Remark',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smsContent: 'SmsContent',
      smsType: 'SmsType',
      templateName: 'TemplateName',
      templateNickName: 'TemplateNickName',
      templateSubject: 'TemplateSubject',
      templateText: 'TemplateText',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fromType: 'number',
      ownerId: 'number',
      remark: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smsContent: 'string',
      smsType: 'number',
      templateName: 'string',
      templateNickName: 'string',
      templateSubject: 'string',
      templateText: 'string',
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

