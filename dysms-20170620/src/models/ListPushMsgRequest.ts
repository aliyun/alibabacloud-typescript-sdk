// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPushMsgRequest extends $dara.Model {
  id?: string;
  msgType?: string;
  name?: string;
  ownerId?: number;
  pushTime?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      msgType: 'MsgType',
      name: 'Name',
      ownerId: 'OwnerId',
      pushTime: 'PushTime',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      msgType: 'string',
      name: 'string',
      ownerId: 'number',
      pushTime: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

