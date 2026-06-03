// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDypnsSmsVerifyMessageQueueRequest extends $dara.Model {
  ownerId?: number;
  /**
   * @example
   * -
   */
  queryQueueTypes?: string;
  /**
   * @example
   * dypnsSmsVerifyMnsReport
   */
  queueType?: string;
  /**
   * @example
   * cn-hangzhou
   */
  region?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      queryQueueTypes: 'QueryQueueTypes',
      queueType: 'QueueType',
      region: 'Region',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      queryQueueTypes: 'string',
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

