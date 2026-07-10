// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLangfuseEndpointsResponseBodyDataEndpointsPorts extends $dara.Model {
  /**
   * @remarks
   * The access port. Valid values:
   * 
   * - http: 3000
   * 
   * @example
   * 3000
   */
  port?: number;
  /**
   * @remarks
   * The protocol type. Valid values:
   * 
   * - http: HTTP port.
   * 
   * @example
   * http
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

export class DescribeLangfuseEndpointsResponseBodyDataEndpoints extends $dara.Model {
  /**
   * @remarks
   * The endpoint of the instance.
   * 
   * @example
   * lfs-2zeejcvmzn1******.com
   */
  connectionString?: string;
  /**
   * @remarks
   * The endpoint name.
   * 
   * @example
   * lfs-2zeejcvmzn1******
   */
  endpointName?: string;
  /**
   * @remarks
   * The IP address.
   * 
   * @example
   * 172.30.****.****
   */
  IPAddress?: string;
  /**
   * @remarks
   * The network type of the endpoint. Valid values:
   * 
   * - VPC: VPC.
   * - PUBLIC: Internet.
   * 
   * @example
   * VPC
   */
  netType?: string;
  /**
   * @remarks
   * The port details.
   */
  ports?: DescribeLangfuseEndpointsResponseBodyDataEndpointsPorts[];
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
   * VPC ID。
   * 
   * @example
   * vpc-uf61z****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      connectionString: 'ConnectionString',
      endpointName: 'EndpointName',
      IPAddress: 'IPAddress',
      netType: 'NetType',
      ports: 'Ports',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionString: 'string',
      endpointName: 'string',
      IPAddress: 'string',
      netType: 'string',
      ports: { 'type': 'array', 'itemType': DescribeLangfuseEndpointsResponseBodyDataEndpointsPorts },
      vSwitchId: 'string',
      vpcId: 'string',
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

export class DescribeLangfuseEndpointsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of endpoints.
   */
  endpoints?: DescribeLangfuseEndpointsResponseBodyDataEndpoints[];
  /**
   * @remarks
   * The network type of the instance. Valid values:
   * 
   * * **VPC**: virtual private cloud (VPC).
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
      endpoints: { 'type': 'array', 'itemType': DescribeLangfuseEndpointsResponseBodyDataEndpoints },
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

export class DescribeLangfuseEndpointsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: DescribeLangfuseEndpointsResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * D0CEC6AC-7760-409A-A0D5-E6CD8660E9CC
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
      data: DescribeLangfuseEndpointsResponseBodyData,
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

