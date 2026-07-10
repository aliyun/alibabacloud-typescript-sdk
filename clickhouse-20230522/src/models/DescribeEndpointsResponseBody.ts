// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEndpointsResponseBodyDataEndpointsPorts extends $dara.Model {
  /**
   * @remarks
   * The port number. The value varies based on the protocol type. For example:
   * 
   * - HttpPort: 8123
   * 
   * - HttpsPort: 8443
   * 
   * - TcpPort: 9000
   * 
   * @example
   * 8123
   */
  port?: number;
  /**
   * @remarks
   * The protocol type. Valid values:
   * 
   * - HttpPort: HTTP port.
   * 
   * - HttpsPort: HTTPS port.
   * 
   * - TcpPort: TCP port.
   * 
   * @example
   * HttpPort
   */
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      port: 'Port',
      protocol: 'Protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      port: 'number',
      protocol: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEndpointsResponseBodyDataEndpoints extends $dara.Model {
  /**
   * @remarks
   * The computing group ID.
   * 
   * @example
   * cc-ad321**-clickhouse
   */
  computingGroupId?: string;
  /**
   * @remarks
   * The instance connection string.
   * 
   * @example
   * cc-****-clickhouse.clickhouseserver.pre.rds.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * The endpoint name.
   * 
   * @example
   * cc-*****-clickhouse
   */
  endpointName?: string;
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
   * - VPC
   * 
   * - PUBLIC: Internet.
   * 
   * @example
   * VPC
   */
  netType?: string;
  /**
   * @remarks
   * The ports.
   */
  ports?: DescribeEndpointsResponseBodyDataEndpointsPorts[];
  /**
   * @remarks
   * The status of the endpoint.
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
   * The VPC ID.
   * 
   * @example
   * vpc-uf61z****
   */
  vpcId?: string;
  /**
   * @remarks
   * The VPC instance ID.
   * 
   * @example
   * vpc-uf61z****
   */
  vpcInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      computingGroupId: 'ComputingGroupId',
      connectionString: 'ConnectionString',
      endpointName: 'EndpointName',
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
      computingGroupId: 'string',
      connectionString: 'string',
      endpointName: 'string',
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

export class DescribeEndpointsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The endpoints.
   */
  endpoints?: DescribeEndpointsResponseBodyDataEndpoints[];
  /**
   * @remarks
   * The network type of the instance. Valid values:
   * 
   * - **VPC**
   * 
   * - **PUBLIC**: Internet.
   * 
   * @example
   * VPC
   */
  instanceNetworkType?: string;
  static names(): { [key: string]: string } {
    return {
      endpoints: 'Endpoints',
      instanceNetworkType: 'InstanceNetworkType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoints: { 'type': 'array', 'itemType': DescribeEndpointsResponseBodyDataEndpoints },
      instanceNetworkType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.endpoints)) {
      $dara.Model.validateArray(this.endpoints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEndpointsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response data.
   */
  data?: DescribeEndpointsResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * xxx-xxx-xxx
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeEndpointsResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

