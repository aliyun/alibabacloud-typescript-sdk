// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBProxyInstanceRequestDBProxyNodes extends $dara.Model {
  /**
   * @remarks
   * The number of CPU cores for the node. Valid values: **1** to **16**.
   * > This parameter is required when **DBProxyNodes** is specified.
   * 
   * @example
   * 1
   */
  cpuCores?: string;
  /**
   * @remarks
   * The number of proxy nodes in the zone. Valid values: **1** to **2**.
   * > This parameter is required when **DBProxyNodes** is specified.
   * 
   * @example
   * 2
   */
  nodeCounts?: string;
  /**
   * @remarks
   * The zone ID of the node.
   * > This parameter is required when **DBProxyNodes** is specified.
   * 
   * @example
   * cn-hangzhou-c
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
  /**
   * @remarks
   * The proxy endpoint ID. You can call DescribeDBProxyEndpoint to obtain the proxy endpoint ID.
   * > This parameter is required when **MigrateAZ** is specified.
   * 
   * @example
   * yhw429********
   */
  dbProxyEndpointId?: string;
  /**
   * @remarks
   * The ID of the destination vSwitch for the proxy instance migration.
   * > This parameter is required when **MigrateAZ** is specified.
   * 
   * @example
   * vsw-sw0qq49d1m****
   */
  destVSwitchId?: string;
  /**
   * @remarks
   * The ID of the destination VPC for the proxy instance migration.
   * > This parameter is required when **MigrateAZ** is specified.
   * 
   * @example
   * vpc-2vcicu73rdylp****
   */
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
   * The instance ID. You can call DescribeDBInstances to obtain the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-t4n3a****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * A deprecated parameter. You do not need to configure this parameter.
   * 
   * @example
   * normal
   */
  DBProxyEngineType?: string;
  /**
   * @remarks
   * The number of proxy instances. If this parameter is set to 0, the proxy service of this type is disabled for the instance. Valid values: **1** to **16**.
   * > More proxy instances can handle more requests. You can check the load of proxy instances based on monitoring data and then specify an appropriate number of proxy instances.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  DBProxyInstanceNum?: string;
  /**
   * @remarks
   * The type of the database proxy instance. Valid values:
   * - **common**: general-purpose database proxy
   * - **exclusive**: dedicated database proxy (default)
   * 
   * This parameter is required.
   * 
   * @example
   * exclusive
   */
  DBProxyInstanceType?: string;
  /**
   * @remarks
   * The list of proxy nodes.
   * > This parameter is required when the current proxy instance uses multi-active zone deployment.
   */
  DBProxyNodes?: ModifyDBProxyInstanceRequestDBProxyNodes[];
  /**
   * @remarks
   * The specified time for the modification to take effect. Format: <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC).
   * > This parameter is required when **EffectiveTime** is set to **SpecificTime**.
   * 
   * @example
   * 2019-07-10T13:15:12Z
   */
  effectiveSpecificTime?: string;
  /**
   * @remarks
   * The effective period. Valid values:
   * 
   * * **Immediate**: The modification takes effect immediately.
   * * **MaintainTime**: The modification takes effect during the maintenance window. For more information, see ModifyDBInstanceMaintainTime.
   * * **SpecificTime**: The modification takes effect at a specified time.
   * 
   * Default value: **MaintainTime**.
   * 
   * @example
   * MaintainTime
   */
  effectiveTime?: string;
  /**
   * @remarks
   * The list of active zones for proxy migration.
   * > Currently, only ApsaraDB RDS for MySQL proxy instances with cloud disks support active zone migration.
   */
  migrateAZ?: ModifyDBProxyInstanceRequestMigrateAZ[];
  ownerId?: number;
  /**
   * @remarks
   * The region ID. You can call DescribeRegions to obtain the region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * A deprecated parameter. You do not need to configure this parameter.
   * 
   * @example
   * vsw-uf6adz52c2p****
   */
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

