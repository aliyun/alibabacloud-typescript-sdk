// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMessageCallbackTestNewRequest extends $dara.Model {
  bizType?: string;
  content?: string;
  method?: string;
  ownerId?: number;
  prodCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      content: 'Content',
      method: 'Method',
      ownerId: 'OwnerId',
      prodCode: 'ProdCode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      content: 'string',
      method: 'string',
      ownerId: 'number',
      prodCode: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

