// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyDBProxyRequestDBProxyNodes } from "./ModifyDbproxyRequestDbproxyNodes";


export class ModifyDBProxyRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable or disable the database proxy feature. Valid values:
   * 
   * *   **Startup**: enables the feature.
   * *   **Shutdown**: disables the feature.
   * *   **Modify**: modifies the configuration of the feature.
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
   * rm-uf6wjk5xxxxxxx
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
   * The number of proxy instances that are enabled. Valid values: **1** to **16**. Default value: **1**.
   * 
   * >  The capability of the database proxy to process requests increases with the number of proxy instances that are enabled. You can monitor the load on the instance and specify an appropriate number of proxy instances based on the load monitoring data.
   * 
   * @example
   * 1
   */
  DBProxyInstanceNum?: string;
  /**
   * @remarks
   * The database proxy type. Valid values:
   * 
   * *   **common**: general-purpose database proxy
   * *   **exclusive** (default): dedicated database proxy
   * 
   * @example
   * common
   */
  DBProxyInstanceType?: string;
  /**
   * @remarks
   * The proxy nodes.
   */
  DBProxyNodes?: ModifyDBProxyRequestDBProxyNodes[];
  /**
   * @remarks
   * The network type of the instance. Only the VPC network type is supported. Set the value to **VPC**.
   * 
   * >  If you enable the database proxy feature for the instance, you must specify this parameter.
   * 
   * @example
   * VPC
   */
  instanceNetworkType?: string;
  ownerId?: number;
  /**
   * @remarks
   * Specifies whether to enable persistent connections. Valid values:
   * 
   * *   **Enabled**
   * *   **Disabled**
   * 
   * > 
   * 
   * *   This parameter is available only for instances that run MySQL.
   * 
   * *   If you want to modify persistent connections, you must set the **ConfigDBProxyService** parameter to **Modify**.
   * 
   * @example
   * Enabled
   */
  persistentConnectionStatus?: string;
  /**
   * @remarks
   * The region ID. You can call the DescribeRegions operation to query the most recent region list.
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
   * rg-acfmy*****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) to which the instance belongs. You can call the DescribeDBInstanceAttribute operation to query the ID.
   * 
   * >  If you enable the database proxy feature for the instance, you must specify this parameter.
   * 
   * @example
   * vpc-xxxxxxxxxxxx
   */
  VPCId?: string;
  /**
   * @remarks
   * The ID of the vSwitch to which the instance belongs. You can call the DescribeDBInstanceAttribute operation to query the ID.
   * 
   * >  If you enable the database proxy feature for the instance, you must specify this parameter.
   * 
   * @example
   * vsw-xxxxxxxxxxxx
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

