// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBClusterEndpointsResponseBodyItemsAddressItems extends $dara.Model {
  /**
   * @remarks
   * The endpoint.
   * 
   * @example
   * ********.rwlb.polardb-pg-public.rds.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * Whether it is the dashboard endpoint of the PolarDB search node.
   * 
   * *   Ture
   * *   False
   * 
   * @example
   * True
   */
  dashboardUsed?: boolean;
  /**
   * @remarks
   * The IP address.
   * 
   * @example
   * 192.***.***.***
   */
  IPAddress?: string;
  /**
   * @remarks
   * The network type of the endpoint. Valid values:
   * 
   * *   **Public**
   * *   **Private**
   * 
   * @example
   * Private
   */
  netType?: string;
  /**
   * @remarks
   * The port.
   * 
   * @example
   * 1521
   */
  port?: string;
  /**
   * @remarks
   * The private domain name that is bound to the endpoint.
   * 
   * @example
   * ***.***.**.com
   */
  privateZoneConnectionString?: string;
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * @example
   * vpc-***************
   */
  VPCId?: string;
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * @example
   * vsw-************
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) instance.
   * 
   * > This parameter is returned for only PolarDB for MySQL clusters.
   * 
   * @example
   * pe-*************
   */
  vpcInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      connectionString: 'ConnectionString',
      dashboardUsed: 'DashboardUsed',
      IPAddress: 'IPAddress',
      netType: 'NetType',
      port: 'Port',
      privateZoneConnectionString: 'PrivateZoneConnectionString',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
      vpcInstanceId: 'VpcInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionString: 'string',
      dashboardUsed: 'boolean',
      IPAddress: 'string',
      netType: 'string',
      port: 'string',
      privateZoneConnectionString: 'string',
      VPCId: 'string',
      vSwitchId: 'string',
      vpcInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

