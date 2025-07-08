// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSmsTemplateNewRequest extends $dara.Model {
  aiTemplate?: number;
  aiTemplateUuid?: string;
  applicationSceneId?: number;
  applySource?: string;
  bizType?: string;
  intlType?: number;
  moreData?: string[];
  orderId?: string;
  ossKeys?: string;
  ownerId?: number;
  prodCode?: string;
  productUrl?: string;
  relatedSignName?: string;
  relatedSignOrderId?: string;
  relatedSignUsageName?: string;
  remark?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  rmdTemplateId?: number;
  templateCode?: string;
  templateContent?: string;
  templateName?: string;
  templateRule?: string;
  userViewFileName?: string;
  static names(): { [key: string]: string } {
    return {
      aiTemplate: 'AiTemplate',
      aiTemplateUuid: 'AiTemplateUuid',
      applicationSceneId: 'ApplicationSceneId',
      applySource: 'ApplySource',
      bizType: 'BizType',
      intlType: 'IntlType',
      moreData: 'MoreData',
      orderId: 'OrderId',
      ossKeys: 'OssKeys',
      ownerId: 'OwnerId',
      prodCode: 'ProdCode',
      productUrl: 'ProductUrl',
      relatedSignName: 'RelatedSignName',
      relatedSignOrderId: 'RelatedSignOrderId',
      relatedSignUsageName: 'RelatedSignUsageName',
      remark: 'Remark',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      rmdTemplateId: 'RmdTemplateId',
      templateCode: 'TemplateCode',
      templateContent: 'TemplateContent',
      templateName: 'TemplateName',
      templateRule: 'TemplateRule',
      userViewFileName: 'UserViewFileName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiTemplate: 'number',
      aiTemplateUuid: 'string',
      applicationSceneId: 'number',
      applySource: 'string',
      bizType: 'string',
      intlType: 'number',
      moreData: { 'type': 'array', 'itemType': 'string' },
      orderId: 'string',
      ossKeys: 'string',
      ownerId: 'number',
      prodCode: 'string',
      productUrl: 'string',
      relatedSignName: 'string',
      relatedSignOrderId: 'string',
      relatedSignUsageName: 'string',
      remark: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      rmdTemplateId: 'number',
      templateCode: 'string',
      templateContent: 'string',
      templateName: 'string',
      templateRule: 'string',
      userViewFileName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.moreData)) {
      $dara.Model.validateArray(this.moreData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

