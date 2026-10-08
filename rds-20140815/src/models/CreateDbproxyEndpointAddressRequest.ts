// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDBProxyEndpointAddressRequest extends $dara.Model {
  /**
   * @remarks
   * The prefix of the new database proxy endpoint. Specify a custom value.
   * 
   * This parameter is required.
   * 
   * @example
   * test1234
   */
  connectionStringPrefix?: string;
  /**
   * @remarks
   * The instance ID. You can call DescribeDBInstances to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-t4n3****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The network type of the new database proxy endpoint. Valid values:
   * * **Public**: Internet
   * * **VPC** (default): virtual private cloud (VPC)
   * 
   * This parameter is required.
   * 
   * @example
   * Public
   */
  DBProxyConnectStringNetType?: string;
  /**
   * @remarks
   * The ID of the database proxy endpoint. You can call DescribeDBProxyEndpoint to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ta9um4****
   */
  DBProxyEndpointId?: string;
  /**
   * @remarks
   * A reserved parameter. You do not need to specify this parameter.
   * 
   * @example
   * normal
   */
  DBProxyEngineType?: string;
  /**
   * @remarks
   * The port of the new database proxy endpoint. Default value:
   * 
   * - MySQL: **3306**
   * - PostgreSQL: **5432**
   * 
   * @example
   * 3306
   */
  DBProxyNewConnectStringPort?: string;
  /**
   * @remarks
   * The region ID. You can call DescribeRegions to query the most recent region list.
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
  /**
   * @remarks
   * The VPC ID of the new database proxy endpoint. You can call DescribeDBInstanceAttribute to query the VPC ID.
   * 
   * >This parameter is required when **DBProxyConnectStringNetType** is set to **VPC**.
   * 
   * @example
   * vpc-bp****
   */
  VPCId?: string;
  /**
   * @remarks
   * The vSwitch ID of the new database proxy endpoint. You can call DescribeDBInstanceAttribute to query the vSwitch ID.
   * 
   * >This parameter is required when **DBProxyConnectStringNetType** is set to **VPC**.
   * 
   * @example
   * vsw-bp****
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      connectionStringPrefix: 'ConnectionStringPrefix',
      DBInstanceId: 'DBInstanceId',
      DBProxyConnectStringNetType: 'DBProxyConnectStringNetType',
      DBProxyEndpointId: 'DBProxyEndpointId',
      DBProxyEngineType: 'DBProxyEngineType',
      DBProxyNewConnectStringPort: 'DBProxyNewConnectStringPort',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionStringPrefix: 'string',
      DBInstanceId: 'string',
      DBProxyConnectStringNetType: 'string',
      DBProxyEndpointId: 'string',
      DBProxyEngineType: 'string',
      DBProxyNewConnectStringPort: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
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

