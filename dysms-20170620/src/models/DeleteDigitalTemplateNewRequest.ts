// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDigitalTemplateNewRequest extends $dara.Model {
  auditState?: string;
  bizType?: string;
  ownerId?: number;
  prodCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  templateCode?: string;
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      auditState: 'AuditState',
      bizType: 'BizType',
      ownerId: 'OwnerId',
      prodCode: 'ProdCode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      templateCode: 'TemplateCode',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditState: 'string',
      bizType: 'string',
      ownerId: 'number',
      prodCode: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      templateCode: 'string',
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

