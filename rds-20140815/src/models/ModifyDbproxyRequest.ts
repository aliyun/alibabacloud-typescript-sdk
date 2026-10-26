// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBProxyRequestDBProxyNodes extends $dara.Model {
  /**
   * @remarks
   * The number of CPU cores for the node. Valid values: **1** to **16**.
   * > This parameter is required when you specify **DBProxyNodes**.
   * 
   * @example
   * 1
   */
  cpuCores?: string;
  /**
   * @remarks
   * The number of proxy nodes in the zone. Valid values: **1** to **2**.
   * > This parameter is required when you specify **DBProxyNodes**.
   * 
   * @example
   * 2
   */
  nodeCounts?: string;
  /**
   * @remarks
   * The zone ID of the node.
   * > This parameter is required when you specify **DBProxyNodes**.
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

export class ModifyDBProxyRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable or disable the database proxy. Valid values:
   * 
   * * **Startup**: Enables the proxy service.
   * * **Shutdown**: Disables the proxy service.
   * * **Modify**: Modifies the proxy service.
   * 
   * This parameter is required.
   * 
   * @example
   * Startup
   */
  configDBProxyService?: string;
  /**
   * @remarks
   * The instance ID. You can call the DescribeDBInstances operation to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5****
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
   * The number of proxy instances to enable. Valid values: **1** to **16**. Default value: **1**.
   * 
   * > More proxy instances can process more requests. You can check the load of proxy instances based on monitoring data and specify an appropriate number of proxy instances.
   * 
   * @example
   * 1
   */
  DBProxyInstanceNum?: string;
  /**
   * @remarks
   * The type of the database proxy instance. Valid values:
   * - **common**: General-purpose database proxy.
   * - **exclusive**: Dedicated proxy (default).
   * 
   * @example
   * exclusive
   */
  DBProxyInstanceType?: string;
  /**
   * @remarks
   * The list of proxy nodes.
   */
  DBProxyNodes?: ModifyDBProxyRequestDBProxyNodes[];
  /**
   * @remarks
   * The network type of the instance. Only VPC is supported. Valid value: **VPC**.
   * 
   * > This parameter is required when you enable the database proxy.
   * 
   * @example
   * VPC
   */
  instanceNetworkType?: string;
  ownerId?: number;
  /**
   * @remarks
   * Specifies whether to enable connection keep-alive. Valid values:
   * - **Enabled**: Enables connection keep-alive.
   * - **Disabled**: Disables connection keep-alive.
   * 
   * > - Only ApsaraDB RDS for MySQL supports this parameter.
   * > - When you modify the connection keep-alive status, set **ConfigDBProxyService** to **Modify**.
   * 
   * @example
   * Disabled
   */
  persistentConnectionStatus?: string;
  /**
   * @remarks
   * The region ID. You can call the DescribeRegions operation to query the region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmy****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the VPC to which the instance belongs. You can call the DescribeDBInstanceAttribute operation to query the VPC ID.
   * 
   * > This parameter is required when you enable the database proxy.
   * 
   * @example
   * vpc-****
   */
  VPCId?: string;
  /**
   * @remarks
   * The ID of the vSwitch to which the instance belongs. You can call the DescribeDBInstanceAttribute operation to query the vSwitch ID.
   * 
   * > This parameter is required when you enable the database proxy.
   * 
   * @example
   * vsw-****
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      configDBProxyService: 'ConfigDBProxyService',
      DBInstanceId: 'DBInstanceId',
      DBProxyEngineType: 'DBProxyEngineType',
      DBProxyInstanceNum: 'DBProxyInstanceNum',
      DBProxyInstanceType: 'DBProxyInstanceType',
      DBProxyNodes: 'DBProxyNodes',
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
      DBProxyNodes: { 'type': 'array', 'itemType': ModifyDBProxyRequestDBProxyNodes },
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
    if(Array.isArray(this.DBProxyNodes)) {
      $dara.Model.validateArray(this.DBProxyNodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

