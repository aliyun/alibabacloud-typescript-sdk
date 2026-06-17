// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RefreshDBClusterStorageUsageRequest extends $dara.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Specifies the synchronization mode. Valid values:
   * 
   * - **true**: Real-time synchronization.
   * 
   * - **false**: T+1 synchronization.
   * 
   * @example
   * true
   */
  syncRealTime?: boolean;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      syncRealTime: 'SyncRealTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      syncRealTime: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

