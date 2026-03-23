// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBProxyInstanceRequestDBProxyNodes extends $dara.Model {
  /**
   * @example
   * 1
   */
  cpuCores?: string;
  /**
   * @example
   * 2
   */
  nodeCounts?: string;
  /**
   * @example
   * cn-hagnzhou-c
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      cpuCores: 'cpuCores',
      nodeCounts: 'nodeCounts',
      zoneId: 'zoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuCores: 'string',
      nodeCounts: 'string',
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

export class ModifyDBProxyInstanceRequestMigrateAZ extends $dara.Model {
  dbProxyEndpointId?: string;
  destVSwitchId?: string;
  destVpcId?: string;
  static names(): { [key: string]: string } {
    return {
      dbProxyEndpointId: 'dbProxyEndpointId',
      destVSwitchId: 'destVSwitchId',
      destVpcId: 'destVpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbProxyEndpointId: 'string',
      destVSwitchId: 'string',
      destVpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBProxyInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  DBInstanceId?: string;
  DBProxyEngineType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  DBProxyInstanceNum?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  DBProxyInstanceType?: string;
  DBProxyNodes?: ModifyDBProxyInstanceRequestDBProxyNodes[];
  effectiveSpecificTime?: string;
  effectiveTime?: string;
  migrateAZ?: ModifyDBProxyInstanceRequestMigrateAZ[];
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  vSwitchIds?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      DBProxyEngineType: 'DBProxyEngineType',
      DBProxyInstanceNum: 'DBProxyInstanceNum',
      DBProxyInstanceType: 'DBProxyInstanceType',
      DBProxyNodes: 'DBProxyNodes',
      effectiveSpecificTime: 'EffectiveSpecificTime',
      effectiveTime: 'EffectiveTime',
      migrateAZ: 'MigrateAZ',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      vSwitchIds: 'VSwitchIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      DBProxyEngineType: 'string',
      DBProxyInstanceNum: 'string',
      DBProxyInstanceType: 'string',
      DBProxyNodes: { 'type': 'array', 'itemType': ModifyDBProxyInstanceRequestDBProxyNodes },
      effectiveSpecificTime: 'string',
      effectiveTime: 'string',
      migrateAZ: { 'type': 'array', 'itemType': ModifyDBProxyInstanceRequestMigrateAZ },
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      vSwitchIds: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.DBProxyNodes)) {
      $dara.Model.validateArray(this.DBProxyNodes);
    }
    if(Array.isArray(this.migrateAZ)) {
      $dara.Model.validateArray(this.migrateAZ);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

