// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBProxyShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  configDBProxyService?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  DBInstanceId?: string;
  DBProxyEngineType?: string;
  DBProxyInstanceNum?: string;
  /**
   * @example
   * common
   */
  DBProxyInstanceType?: string;
  DBProxyNodesShrink?: string;
  instanceNetworkType?: string;
  ownerId?: number;
  /**
   * @example
   * Enabled
   */
  persistentConnectionStatus?: string;
  regionId?: string;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  VPCId?: string;
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      configDBProxyService: 'ConfigDBProxyService',
      DBInstanceId: 'DBInstanceId',
      DBProxyEngineType: 'DBProxyEngineType',
      DBProxyInstanceNum: 'DBProxyInstanceNum',
      DBProxyInstanceType: 'DBProxyInstanceType',
      DBProxyNodesShrink: 'DBProxyNodes',
      instanceNetworkType: 'InstanceNetworkType',
      ownerId: 'OwnerId',
      persistentConnectionStatus: 'PersistentConnectionStatus',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configDBProxyService: 'string',
      DBInstanceId: 'string',
      DBProxyEngineType: 'string',
      DBProxyInstanceNum: 'string',
      DBProxyInstanceType: 'string',
      DBProxyNodesShrink: 'string',
      instanceNetworkType: 'string',
      ownerId: 'number',
      persistentConnectionStatus: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      VPCId: 'string',
      vSwitchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

