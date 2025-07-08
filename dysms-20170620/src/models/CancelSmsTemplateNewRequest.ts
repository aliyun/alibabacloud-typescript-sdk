// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelSmsTemplateNewRequest extends $dara.Model {
  intelligentApproval?: boolean;
  orderId?: number;
  ownerId?: number;
  prodCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  templateCode?: string;
  static names(): { [key: string]: string } {
    return {
      intelligentApproval: 'IntelligentApproval',
      orderId: 'OrderId',
      ownerId: 'OwnerId',
      prodCode: 'ProdCode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      templateCode: 'TemplateCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      intelligentApproval: 'boolean',
      orderId: 'number',
      ownerId: 'number',
      prodCode: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      templateCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

