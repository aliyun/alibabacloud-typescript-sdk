// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDBProxyEndpointAddressRequest extends $dara.Model {
  /**
   * @remarks
   * The prefix of the proxy endpoint Enter a custom prefix.
   * 
   * This parameter is required.
   * 
   * @example
   * test1234
   */
  connectionStringPrefix?: string;
  /**
   * @remarks
   * The instance ID. You can call the DescribeDBInstances operation to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-t4n3axxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The network type of the proxy endpoint. Valid values:
   * 
   * *   **Public**: Internet
   * *   **VPC**: Virtual Private Cloud (VPC)
   * *   **Classic**: classic network
   * 
   * Default value: **Classic**
   * 
   * This parameter is required.
   * 
   * @example
   * Public
   */
  DBProxyConnectStringNetType?: string;
  /**
   * @remarks
   * The proxy endpoint ID. You can call the DescribeDBProxyEndpoint operation to query the proxy endpoint ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ta9um4xxxxx
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
   * The port number that is associated with the proxy endpoint.
   * 
   * *   If the instance runs MySQL, the default value is **3306**.
   * *   If the instance runs PostgreSQL, the default value is **5432**.
   * 
   * @example
   * 3306
   */
  DBProxyNewConnectStringPort?: string;
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
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmy*****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the VPC to which the proxy endpoint belongs. You can call the DescribeDBInstanceAttribute operation to query the information.
   * 
   * >  This parameter must be specified when **DBProxyConnectStringNetType** is set to **VPC**.
   * 
   * @example
   * vpc-bpxxxxxx
   */
  VPCId?: string;
  /**
   * @remarks
   * The ID of the vSwitch that is associated with the specified VPC. You can call the DescribeDBInstanceAttribute operation to query the vSwitch ID.
   * 
   * >  This parameter must be specified when **DBProxyConnectStringNetType** is set to **VPC**.
   * 
   * @example
   * vsw-bpxxxxxx
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

