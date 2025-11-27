// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBProxyInstanceRequestDBProxyNodes extends $dara.Model {
  /**
   * @remarks
   * The number of cpu cores for the node, valid values: **1** to **16**.
   * >This parameter is required when selecting **DBProxyNodes**.
   * 
   * @example
   * 1
   */
  cpuCores?: string;
  /**
   * @remarks
   * The number of proxy nodes in the availability zone, valid values: **1** to **16**.
   * >This parameter is required when selecting **DBProxyNodes**.
   * 
   * @example
   * 2
   */
  nodeCounts?: string;
  /**
   * @remarks
   * The id of the availability zone where the node is located.
   * >This parameter is required when selecting **DBProxyNodes**.
   * 
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
  /**
   * @remarks
   * The proxy connection address ID. You can obtain it through the DescribeDBProxyEndpoint interface.
   * 
   * > This parameter is required when MigrateAZ is selected.
   * 
   * @example
   * yhw429********
   */
  dbProxyEndpointId?: string;
  /**
   * @remarks
   * The target VSwitchId corresponding to the proxy instance migration.
   * 
   * > This parameter is required when MigrateAZ is selected.
   * 
   * @example
   * vsw-sw0qq49d1m****
   */
  destVSwitchId?: string;
  /**
   * @remarks
   * The target vpc id corresponding to the proxy instance migration.
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
   * A deprecated parameter. You do not need to specify this parameter.
   * 
   * @example
   * normal
   */
  DBProxyEngineType?: string;
  /**
   * @remarks
   * The number of database proxies. If you set this parameter to 0, the database proxy feature is disabled for the instance. Valid values: **1** to **16**.
   * 
   * >  The capability of the database proxy feature to process requests increases with the number of database proxies that are enabled. You can monitor the load on the instance and specify an appropriate number of database proxies based on the load monitoring data.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  DBProxyInstanceNum?: string;
  /**
   * @remarks
   * The database proxy type. Valid values:
   * 
   * *   **common**: general-purpose database proxy
   * *   **exclusive** (default): dedicated database proxy
   * 
   * This parameter is required.
   * 
   * @example
   * DedicatedProxy
   */
  DBProxyInstanceType?: string;
  /**
   * @remarks
   * List of proxy nodes.
   * 
   * > This parameter must be passed when the current proxy instance is deployed in multiple availability zones.
   */
  DBProxyNodes?: ModifyDBProxyInstanceRequestDBProxyNodes[];
  /**
   * @remarks
   * The point in time that you want to specify. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time must be in UTC.
   * 
   * >  If the **EffectiveTime** parameter is set to **SpecificTime**, you must specify this parameter.
   * 
   * @example
   * 2019-07-10T13:15:12Z
   */
  effectiveSpecificTime?: string;
  /**
   * @remarks
   * The effective time. Valid values:
   * 
   * *   **Immediate**: The effective time is immediate.
   * *   **MaintainTime**: The effective time is within the maintenance window. For more information, see ModifyDBInstanceMaintainTime.
   * *   **SpecificTime**: The effective time is a specified point in time.
   * 
   * Default value: **MaintainTime**.
   * 
   * @example
   * MaintainTime
   */
  effectiveTime?: string;
  /**
   * @remarks
   * The list of available zones for migration agents.
   * 
   * > Currently, only RDS MySQL cloud disk version agent instance migration is supported.
   */
  migrateAZ?: ModifyDBProxyInstanceRequestMigrateAZ[];
  ownerId?: number;
  /**
   * @remarks
   * The region ID. You can call the DescribeRegions operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the vSwitch in the destination zone. You can call the [DescribeVSwitches](https://help.aliyun.com/document_detail/610431.html) operation to query existing vSwitches.
   * 
   * >  Only database proxies for ApsaraDB RDS for MySQL instances that use cloud disks can be migrated to different zones.
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

