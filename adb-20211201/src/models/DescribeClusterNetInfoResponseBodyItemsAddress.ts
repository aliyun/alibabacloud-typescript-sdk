// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeClusterNetInfoResponseBodyItemsAddressPorts } from "./DescribeClusterNetInfoResponseBodyItemsAddressPorts";


export class DescribeClusterNetInfoResponseBodyItemsAddress extends $dara.Model {
  /**
   * @remarks
   * The endpoint of the cluster.
   * 
   * *   If NetType is set to VPC, the VPC endpoint of the cluster is returned.
   * *   If NetType is set to Public, the public endpoint of the cluster is returned.
   * 
   * @example
   * amv-wz9dqvn0o7****.ads.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * The prefix of the endpoint.
   * 
   * *   If NetType is set to VPC, the prefix of the VPC endpoint is returned.
   * *   If NetType is set to Public, the prefix of the public endpoint is returned.
   * 
   * @example
   * amv-wz9dqvn0o7****
   */
  connectionStringPrefix?: string;
  /**
   * @remarks
   * The IP address of the endpoint.
   * 
   * *   If NetType is set to VPC, the private IP address of the cluster is returned.
   * *   If NetType is set to Public, the public IP address of the cluster is returned.
   * 
   * @example
   * 192.168.xx.xx
   */
  IPAddress?: string;
  /**
   * @remarks
   * The network type of the cluster. Valid values:
   * 
   * *   **Public**: Internet.
   * *   **VPC**: VPC.
   * 
   * @example
   * VPC
   */
  netType?: string;
  /**
   * @remarks
   * The port number that is used to connect to the cluster. **3306** is returned.
   * 
   * @example
   * 3306
   */
  port?: string;
  /**
   * @remarks
   * The ports.
   */
  ports?: DescribeClusterNetInfoResponseBodyItemsAddressPorts;
  /**
   * @remarks
   * The VPC ID.
   * 
   * >  If NetType is set to Public, an empty string is returned.
   * 
   * @example
   * vpc-8vbhucmd5b****
   */
  VPCId?: string;
  /**
   * @remarks
   * The vSwitch ID of the cluster.
   * 
   * >  If NetType is set to Public, an empty string is returned.
   * 
   * @example
   * vsw-bp1syh8vvw8yec****
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      connectionString: 'ConnectionString',
      connectionStringPrefix: 'ConnectionStringPrefix',
      IPAddress: 'IPAddress',
      netType: 'NetType',
      port: 'Port',
      ports: 'Ports',
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
      ports: DescribeClusterNetInfoResponseBodyItemsAddressPorts,
      VPCId: 'string',
      vSwitchId: 'string',
    };
  }

  validate() {
    if(this.ports && typeof (this.ports as any).validate === 'function') {
      (this.ports as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

