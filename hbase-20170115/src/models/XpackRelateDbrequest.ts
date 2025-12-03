// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class XpackRelateDBRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  clusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  dbClusterIds?: string;
  ownerId?: number;
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  relateDbType?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      dbClusterIds: 'DbClusterIds',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      relateDbType: 'RelateDbType',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      dbClusterIds: 'string',
      ownerId: 'number',
      regionId: 'string',
      relateDbType: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

