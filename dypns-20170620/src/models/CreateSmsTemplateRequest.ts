// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSmsTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  bizUrl?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  businessType?: string;
  ownerId?: number;
  prodCode?: string;
  remark?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  smsTemplateContent?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  smsTemplateName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  smsTemplateRule?: string;
  static names(): { [key: string]: string } {
    return {
      bizUrl: 'BizUrl',
      businessType: 'BusinessType',
      ownerId: 'OwnerId',
      prodCode: 'ProdCode',
      remark: 'Remark',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smsTemplateContent: 'SmsTemplateContent',
      smsTemplateName: 'SmsTemplateName',
      smsTemplateRule: 'SmsTemplateRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizUrl: 'string',
      businessType: 'string',
      ownerId: 'number',
      prodCode: 'string',
      remark: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smsTemplateContent: 'string',
      smsTemplateName: 'string',
      smsTemplateRule: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

