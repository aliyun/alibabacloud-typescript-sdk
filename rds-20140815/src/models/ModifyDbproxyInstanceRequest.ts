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
   * The number of proxy nodes in the zone. Valid values: **1** and **2**.
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
   * The ID of the proxy endpoint. You can call the DescribeDBProxyEndpoint operation to query the ID.
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
   * The instance ID. You can call the DescribeDBInstances operation to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-t4n3a****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * **[Deprecated]** This parameter is deprecated and does not need to be configured.
   * 
   * @example
   * normal
   */
  DBProxyEngineType?: string;
  /**
   * @remarks
   * The number of proxy instances. A value of 0 indicates that the proxy service of this type is disabled for the instance. Valid values: **1** to **16**.
   * > More proxy instances can process more requests. You can check the load of the proxy instances based on monitoring data and specify an appropriate number of proxy instances.
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
   * > This parameter is required when the current proxy instance is active in a multi-zone deployment.
   */
  DBProxyNodes?: ModifyDBProxyInstanceRequestDBProxyNodes[];
  /**
   * @remarks
   * The specified time when the modifications take effect. Specify the time in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format. The time must be in UTC.
   * > This parameter is required when **EffectiveTime** is set to **SpecificTime**.
   * 
   * @example
   * 2019-07-10T13:15:12Z
   */
  effectiveSpecificTime?: string;
  /**
   * @remarks
   * The time when the modifications take effect. Valid values:
   * 
   * * **Immediate**: The modifications take effect immediately.
   * * **MaintainTime**: The modifications take effect within the maintenance window. For more information, see ModifyDBInstanceMaintainTime.
   * * **SpecificTime**: The modifications take effect at a specified time.
   * 
   * Default value: **MaintainTime**.
   * 
   * @example
   * MaintainTime
   */
  effectiveTime?: string;
  /**
   * @remarks
   * The list of zones to which the proxy is migrated.
   * > Currently, only ApsaraDB RDS for MySQL instances with cloud disks support proxy instance migration across zones.
   */
  migrateAZ?: ModifyDBProxyInstanceRequestMigrateAZ[];
  ownerId?: number;
  /**
   * @remarks
   * The region ID. You can call the DescribeRegions operation to query the region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * **[Deprecated]** This parameter is deprecated and does not need to be configured.
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

