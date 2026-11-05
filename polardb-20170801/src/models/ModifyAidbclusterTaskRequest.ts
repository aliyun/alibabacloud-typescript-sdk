// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAIDBClusterTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * pm-2ze9***
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The operation to perform. Valid values:
   * * **stop**: Stops training. This value applies only to tasks that are being trained.
   * 
   * @example
   * stop
   */
  modifyMode?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The instance ID of the PolarDB database for the AI model service.
   * 
   * @example
   * pc-bp10ze***
   */
  relativeDBClusterId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      modifyMode: 'ModifyMode',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      relativeDBClusterId: 'RelativeDBClusterId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      modifyMode: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      relativeDBClusterId: 'string',
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

