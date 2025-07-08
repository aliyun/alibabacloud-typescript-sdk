// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCardMessageQueueRequest extends $dara.Model {
  ownerId?: number;
  prodCode?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  queueType?: string;
  region?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      prodCode: 'ProdCode',
      queueType: 'QueueType',
      region: 'Region',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      prodCode: 'string',
      queueType: 'string',
      region: 'string',
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

