// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSmsTemplateRequest extends $dara.Model {
  customerId?: number;
  ownerId?: number;
  prodCode?: string;
  queryTemplate?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      customerId: 'CustomerId',
      ownerId: 'OwnerId',
      prodCode: 'ProdCode',
      queryTemplate: 'QueryTemplate',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customerId: 'number',
      ownerId: 'number',
      prodCode: 'string',
      queryTemplate: 'string',
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

