// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCustomRoutingEndpointsRequestEndpointConfigurationsPolicyConfigurationsPortRanges extends $dara.Model {
  /**
   * @remarks
   * The first port of the destination port range. The value of this parameter must fall within the port range of the endpoint group.
   * 
   * This parameter takes effect only when **TrafficToEndpointPolicy** is set to **AllowCustom**.
   * 
   * You can specify port ranges for up to 20 destinations for each endpoint and specify up to 20 first ports for each destination.
   * 
   * @example
   * 80
   */
  fromPort?: number;
  /**
   * @remarks
   * The last port of the destination port range. The value of this parameter must fall within the port range of the endpoint group.
   * 
   * This parameter takes effect only when **TrafficToEndpointPolicy** is set to **AllowCustom**.
   * 
   * You can specify port ranges for up to 20 destinations for each endpoint and specify up to 20 last ports for each destination.
   * 
   * @example
   * 80
   */
  toPort?: number;
  static names(): { [key: string]: string } {
    return {
      fromPort: 'FromPort',
      toPort: 'ToPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fromPort: 'number',
      toPort: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomRoutingEndpointsRequestEndpointConfigurationsPolicyConfigurations extends $dara.Model {
  /**
   * @remarks
   * The IP address of the destination to which traffic is forwarded.
   * 
   * This parameter takes effect only when **TrafficToEndpointPolicy** is set to **AllowCustom**.
   * 
   * You can specify up to 20 destination IP addresses for each endpoint.
   * 
   * This parameter is required.
   * 
   * @example
   * 10.0.XX.XX
   */
  address?: string;
  /**
   * @remarks
   * The port range of the destination to which traffic is forwarded. The value of this parameter must fall within the port range of the endpoint group.
   * 
   * If you leave this parameter empty, traffic is forwarded to all destination ports.
   * 
   * This parameter takes effect only when **TrafficToEndpointPolicy** is set to **AllowCustom**.
   * 
   * You can specify port ranges for up to 20 destinations for each endpoint and specify up to 20 port ranges for each destination.
   */
  portRanges?: CreateCustomRoutingEndpointsRequestEndpointConfigurationsPolicyConfigurationsPortRanges[];
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      portRanges: 'PortRanges',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      portRanges: { 'type': 'array', 'itemType': CreateCustomRoutingEndpointsRequestEndpointConfigurationsPolicyConfigurationsPortRanges },
    };
  }

  validate() {
    if(Array.isArray(this.portRanges)) {
      $dara.Model.validateArray(this.portRanges);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomRoutingEndpointsRequestEndpointConfigurations extends $dara.Model {
  /**
   * @remarks
   * The ID of the vSwitch that is specified as an endpoint.
   * 
   * @example
   * vsw-test01
   */
  endpoint?: string;
  /**
   * @remarks
   * The destination to which traffic is forwarded.
   * 
   * You can specify up to 20 destinations for each endpoint.
   */
  policyConfigurations?: CreateCustomRoutingEndpointsRequestEndpointConfigurationsPolicyConfigurations[];
  /**
   * @remarks
   * The traffic policy that is used to process traffic to the endpoint. Valid values:
   * 
   * *   **DenyAll** (default): denies all traffic to the endpoint.
   * *   **AllowAll**: allows all traffic to the endpoint.
   * *   **AllowCustom**: allows traffic only to specified destinations in the endpoint.
   * 
   * If you set this parameter to AllowCustom, you must specify IP addresses and port ranges as the destinations to which traffic is distributed. If you specify only IP addresses and do not specify port ranges, GA can forward traffic to the specified IP addresses over all destination ports.
   * 
   * @example
   * DenyAll
   */
  trafficToEndpointPolicy?: string;
  /**
   * @remarks
   * The type of endpoint.
   * 
   * Set the value to **PrivateSubNet**, which specifies a private CIDR block. This is the default value.
   * 
   * @example
   * PrivateSubNet
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      endpoint: 'Endpoint',
      policyConfigurations: 'PolicyConfigurations',
      trafficToEndpointPolicy: 'TrafficToEndpointPolicy',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoint: 'string',
      policyConfigurations: { 'type': 'array', 'itemType': CreateCustomRoutingEndpointsRequestEndpointConfigurationsPolicyConfigurations },
      trafficToEndpointPolicy: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.policyConfigurations)) {
      $dara.Model.validateArray(this.policyConfigurations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomRoutingEndpointsRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among all requests. The token can contain only ASCII characters.
   * 
   * > If you do not set this parameter, **ClientToken** is set to the value of **RequestId**. The value of **RequestId** for each API request is different.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The information about the endpoints.
   * 
   * You can specify information for up to 20 endpoints.
   * 
   * This parameter is required.
   */
  endpointConfigurations?: CreateCustomRoutingEndpointsRequestEndpointConfigurations[];
  /**
   * @remarks
   * The ID of the endpoint group in which to create endpoints.
   * 
   * This parameter is required.
   * 
   * @example
   * epg-bp1bpn0kn908w4nb****
   */
  endpointGroupId?: string;
  /**
   * @remarks
   * The ID of the region where the GA instance is deployed. Set the value to **cn-hangzhou**.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      endpointConfigurations: 'EndpointConfigurations',
      endpointGroupId: 'EndpointGroupId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      endpointConfigurations: { 'type': 'array', 'itemType': CreateCustomRoutingEndpointsRequestEndpointConfigurations },
      endpointGroupId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.endpointConfigurations)) {
      $dara.Model.validateArray(this.endpointConfigurations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

