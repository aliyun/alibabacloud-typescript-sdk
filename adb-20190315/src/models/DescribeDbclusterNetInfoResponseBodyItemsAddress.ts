// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBClusterNetInfoResponseBodyItemsAddress extends $dara.Model {
  /**
   * @remarks
   * The endpoint of the cluster.
   * 
   * @example
   * am-bpxxxxxxxx.ads.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * The prefix of the cluster endpoint.
   * 
   * @example
   * am-bpxxxxxxxx89k51380
   */
  connectionStringPrefix?: string;
  /**
   * @remarks
   * The IP address.
   * 
   * @example
   * 192.168.x.x
   */
  IPAddress?: string;
  /**
   * @remarks
   * The network type of the cluster. Valid values:
   * 
   * *   **Public**: public endpoint.
   * *   **VPC**: Virtual Private Cloud (VPC) endpoint.
   * 
   * @example
   * VPC
   */
  netType?: string;
  /**
   * @remarks
   * The port number that is used to connect to the cluster.
   * 
   * @example
   * 3306
   */
  port?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * >  If NetType is set to Public, an empty string is returned for this parameter.
   * 
   * @example
   * vpc-xxxxxxxxx
   */
  VPCId?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * >  If NetType is set to Public, an empty string is returned for this parameter.
   * 
   * @example
   * vsw-xxxxxx
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      connectionString: 'ConnectionString',
      connectionStringPrefix: 'ConnectionStringPrefix',
      IPAddress: 'IPAddress',
      netType: 'NetType',
      port: 'Port',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionString: 'string',
      connectionStringPrefix: 'string',
      IPAddress: 'string',
      netType: 'string',
      port: 'string',
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

