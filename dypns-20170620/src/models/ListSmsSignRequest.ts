// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSmsSignRequest extends $dara.Model {
  customerId?: number;
  ownerId?: number;
  prodCode?: string;
  querySmsSign?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      customerId: 'CustomerId',
      ownerId: 'OwnerId',
      prodCode: 'ProdCode',
      querySmsSign: 'QuerySmsSign',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customerId: 'number',
      ownerId: 'number',
      prodCode: 'string',
      querySmsSign: 'string',
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

