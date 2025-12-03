// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RelateDbForHBaseHaRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  clusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  haActive?: string;
  haActiveClusterKey?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  haActiveDBType?: string;
  haActiveHbaseFsDir?: string;
  haActiveHdfsUri?: string;
  haActivePassword?: string;
  haActiveUser?: string;
  haActiveVersion?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  haMigrateType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  haStandby?: string;
  haStandbyClusterKey?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  haStandbyDBType?: string;
  haStandbyHbaseFsDir?: string;
  haStandbyHdfsUri?: string;
  haStandbyPassword?: string;
  haStandbyUser?: string;
  haStandbyVersion?: string;
  haTables?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  isActiveStandard?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  isStandbyStandard?: boolean;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      haActive: 'HaActive',
      haActiveClusterKey: 'HaActiveClusterKey',
      haActiveDBType: 'HaActiveDBType',
      haActiveHbaseFsDir: 'HaActiveHbaseFsDir',
      haActiveHdfsUri: 'HaActiveHdfsUri',
      haActivePassword: 'HaActivePassword',
      haActiveUser: 'HaActiveUser',
      haActiveVersion: 'HaActiveVersion',
      haMigrateType: 'HaMigrateType',
      haStandby: 'HaStandby',
      haStandbyClusterKey: 'HaStandbyClusterKey',
      haStandbyDBType: 'HaStandbyDBType',
      haStandbyHbaseFsDir: 'HaStandbyHbaseFsDir',
      haStandbyHdfsUri: 'HaStandbyHdfsUri',
      haStandbyPassword: 'HaStandbyPassword',
      haStandbyUser: 'HaStandbyUser',
      haStandbyVersion: 'HaStandbyVersion',
      haTables: 'HaTables',
      isActiveStandard: 'IsActiveStandard',
      isStandbyStandard: 'IsStandbyStandard',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      haActive: 'string',
      haActiveClusterKey: 'string',
      haActiveDBType: 'string',
      haActiveHbaseFsDir: 'string',
      haActiveHdfsUri: 'string',
      haActivePassword: 'string',
      haActiveUser: 'string',
      haActiveVersion: 'string',
      haMigrateType: 'string',
      haStandby: 'string',
      haStandbyClusterKey: 'string',
      haStandbyDBType: 'string',
      haStandbyHbaseFsDir: 'string',
      haStandbyHdfsUri: 'string',
      haStandbyPassword: 'string',
      haStandbyUser: 'string',
      haStandbyVersion: 'string',
      haTables: 'string',
      isActiveStandard: 'boolean',
      isStandbyStandard: 'boolean',
      ownerId: 'number',
      regionId: 'string',
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

