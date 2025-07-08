// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDigitalSmsTemplateNewRequest extends $dara.Model {
  bizType?: string;
  contentOssKeys?: string;
  ownerId?: number;
  prodCode?: string;
  remark?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  templateContent?: string;
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      contentOssKeys: 'ContentOssKeys',
      ownerId: 'OwnerId',
      prodCode: 'ProdCode',
      remark: 'Remark',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      templateContent: 'TemplateContent',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      contentOssKeys: 'string',
      ownerId: 'number',
      prodCode: 'string',
      remark: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      templateContent: 'string',
      templateName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

