// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSlsStatusNewRequest extends $dara.Model {
  authStatus?: boolean;
  ownerId?: number;
  prodCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  saveTime?: number;
  static names(): { [key: string]: string } {
    return {
      authStatus: 'AuthStatus',
      ownerId: 'OwnerId',
      prodCode: 'ProdCode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      saveTime: 'SaveTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authStatus: 'boolean',
      ownerId: 'number',
      prodCode: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      saveTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

