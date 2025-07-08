// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSmsProductForChannelCustRequest extends $dara.Model {
  channelId?: number;
  onlyCheckOpened?: boolean;
  ownerId?: number;
  prodCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      channelId: 'ChannelId',
      onlyCheckOpened: 'OnlyCheckOpened',
      ownerId: 'OwnerId',
      prodCode: 'ProdCode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelId: 'number',
      onlyCheckOpened: 'boolean',
      ownerId: 'number',
      prodCode: 'string',
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

