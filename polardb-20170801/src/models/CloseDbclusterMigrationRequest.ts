// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloseDBClusterMigrationRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to continue to enable binary logging. Valid values:
   * 
   * *   **true**: continues to enable binary logging.
   * *   **false**: disables binary logging.
   * 
   * Default value: **true**.
   * 
   * > If binary logging is disabled, your PolarDB cluster is restarted.
   * 
   * @example
   * true
   */
  continueEnableBinlog?: boolean;
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-**************
   */
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      continueEnableBinlog: 'ContinueEnableBinlog',
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      continueEnableBinlog: 'boolean',
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
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

