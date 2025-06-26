// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeEndpointsResponseBodyDataEndpointsPorts } from "./DescribeEndpointsResponseBodyDataEndpointsPorts";


export class DescribeEndpointsResponseBodyDataEndpoints extends $dara.Model {
  /**
   * @remarks
   * The endpoint of the cluster.
   * 
   * @example
   * cc-****-clickhouse.clickhouseserver.pre.rds.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * The IP address.
   * 
   * @example
   * 172.30.XX.XX
   */
  IPAddress?: string;
  /**
   * @remarks
   * The network type of the endpoint. Valid values:
   * 
   * *   VPC
   * *   PUBLIC
   * 
   * @example
   * VPC
   */
  netType?: string;
  /**
   * @remarks
   * The details of the ports.
   */
  ports?: DescribeEndpointsResponseBodyDataEndpointsPorts[];
  /**
   * @remarks
   * The state of the cluster.
   * 
   * @example
   * active
   */
  status?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-0xi8829****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC).
   * 
   * @example
   * vpc-uf61z****
   */
  vpcId?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-uf61z****
   */
  vpcInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      connectionString: 'ConnectionString',
      IPAddress: 'IPAddress',
      netType: 'NetType',
      ports: 'Ports',
      status: 'Status',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      vpcInstanceId: 'VpcInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionString: 'string',
      IPAddress: 'string',
      netType: 'string',
      ports: { 'type': 'array', 'itemType': DescribeEndpointsResponseBodyDataEndpointsPorts },
      status: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
      vpcInstanceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ports)) {
      $dara.Model.validateArray(this.ports);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

