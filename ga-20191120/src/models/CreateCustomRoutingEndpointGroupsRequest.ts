// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCustomRoutingEndpointGroupsRequestEndpointGroupConfigurationsDestinationConfigurations extends $dara.Model {
  /**
   * @remarks
   * The first backend service port for the endpoint group.
   * 
   * Valid values: **1** to **65499**. The value of **FromPort** must be smaller than or equal to the value of **ToPort**.
   * 
   * You can specify at most 20 first backend service ports for each endpoint group.
   * 
   * @example
   * 80
   */
  fromPort?: number;
  /**
   * @remarks
   * The backend service protocol.
   * 
   * You can specify up to four backend service protocols in each mapping configuration.
   */
  protocols?: string[];
  /**
   * @remarks
   * The last backend service port for the endpoint group.
   * 
   * Valid values: **1** to **65499**. The value of **FromPort** must be smaller than or equal to the value of **ToPort**.
   * 
   * You can specify at most 20 last backend service ports for each endpoint group.
   * 
   * @example
   * 80
   */
  toPort?: number;
  static names(): { [key: string]: string } {
    return {
      fromPort: 'FromPort',
      protocols: 'Protocols',
      toPort: 'ToPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fromPort: 'number',
      protocols: { 'type': 'array', 'itemType': 'string' },
      toPort: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.protocols)) {
      $dara.Model.validateArray(this.protocols);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomRoutingEndpointGroupsRequestEndpointGroupConfigurationsEndpointConfigurationsPolicyConfigurationsPortRanges extends $dara.Model {
  /**
   * @remarks
   * The first port of the destination port range. The value of this parameter must fall within the port range of the endpoint group.
   * 
   * This parameter takes effect only when **TrafficToEndpointPolicy** is set to **AllowCustom**.
   * 
   * You can specify port ranges for at most 20 destinations in each endpoint and specify at most five first ports for each destination.
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
   * You can specify port ranges for at most 20 destinations in each endpoint and specify at most five last ports for each destination.
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

export class CreateCustomRoutingEndpointGroupsRequestEndpointGroupConfigurationsEndpointConfigurationsPolicyConfigurations extends $dara.Model {
  /**
   * @remarks
   * The IP address of the destination to which traffic is forwarded.
   * 
   * This parameter takes effect only when **TrafficToEndpointPolicy** is set to **AllowCustom**.
   * 
   * You can specify at most 20 destination IP addresses for each endpoint.
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
   * You can specify port ranges for at most 20 destinations in each endpoint and specify at most five port ranges for each destination.
   */
  portRanges?: CreateCustomRoutingEndpointGroupsRequestEndpointGroupConfigurationsEndpointConfigurationsPolicyConfigurationsPortRanges[];
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      portRanges: 'PortRanges',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      portRanges: { 'type': 'array', 'itemType': CreateCustomRoutingEndpointGroupsRequestEndpointGroupConfigurationsEndpointConfigurationsPolicyConfigurationsPortRanges },
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

export class CreateCustomRoutingEndpointGroupsRequestEndpointGroupConfigurationsEndpointConfigurations extends $dara.Model {
  /**
   * @remarks
   * The name of the vSwitch that is specified as an endpoint.
   * 
   * @example
   * vsw-test01
   */
  endpoint?: string;
  /**
   * @remarks
   * The destination to which traffic is forwarded.
   * 
   * You can specify at most 20 destinations for each endpoint.
   */
  policyConfigurations?: CreateCustomRoutingEndpointGroupsRequestEndpointGroupConfigurationsEndpointConfigurationsPolicyConfigurations[];
  /**
   * @remarks
   * The traffic policy that is used to process traffic to the endpoint. Valid values:
   * 
   * *   **AllowAll**: allows all traffic to the endpoint.
   * *   **DenyAll** (default): denies all traffic to the endpoint.
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
      policyConfigurations: { 'type': 'array', 'itemType': CreateCustomRoutingEndpointGroupsRequestEndpointGroupConfigurationsEndpointConfigurationsPolicyConfigurations },
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

export class CreateCustomRoutingEndpointGroupsRequestEndpointGroupConfigurations extends $dara.Model {
  /**
   * @remarks
   * The description of the endpoint group.
   * 
   * The description cannot exceed 256 characters in length and cannot contain `http://` or `https://`.
   * 
   * You can specify at most five endpoint group descriptions.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The mapping configuration of the endpoint group.
   * 
   * You need to specify the backend service ports and protocols for the endpoint group. The ports are mapped to listener ports.
   * 
   * You can specify at most 20 mapping configurations for each endpoint group.
   */
  destinationConfigurations?: CreateCustomRoutingEndpointGroupsRequestEndpointGroupConfigurationsDestinationConfigurations[];
  /**
   * @remarks
   * The information about the endpoints.
   * 
   * You can specify at most 10 endpoints for each endpoint group.
   */
  endpointConfigurations?: CreateCustomRoutingEndpointGroupsRequestEndpointGroupConfigurationsEndpointConfigurations[];
  /**
   * @remarks
   * The ID of the region in which the endpoint group resides.
   * 
   * You can specify at most five region IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  endpointGroupRegion?: string;
  /**
   * @remarks
   * The name of the endpoint group.
   * 
   * The name must be 2 to 128 characters in length, and can contain letters, digits, underscores (_), and hyphens (-). The name must start with a letter.
   * 
   * You can specify at most five endpoint group names.
   * 
   * @example
   * test
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      destinationConfigurations: 'DestinationConfigurations',
      endpointConfigurations: 'EndpointConfigurations',
      endpointGroupRegion: 'EndpointGroupRegion',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      destinationConfigurations: { 'type': 'array', 'itemType': CreateCustomRoutingEndpointGroupsRequestEndpointGroupConfigurationsDestinationConfigurations },
      endpointConfigurations: { 'type': 'array', 'itemType': CreateCustomRoutingEndpointGroupsRequestEndpointGroupConfigurationsEndpointConfigurations },
      endpointGroupRegion: 'string',
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.destinationConfigurations)) {
      $dara.Model.validateArray(this.destinationConfigurations);
    }
    if(Array.isArray(this.endpointConfigurations)) {
      $dara.Model.validateArray(this.endpointConfigurations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomRoutingEndpointGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the GA instance.
   * 
   * This parameter is required.
   * 
   * @example
   * ga-bp1odcab8tmno0hdq****
   */
  acceleratorId?: string;
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
   * Specifies whether to perform a dry run. Valid values:
   * 
   * *   **true**: performs a dry run. The system checks the required parameters, request syntax, and limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   **false** (default): performs a dry run and sends the request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The information about the endpoint groups.
   * 
   * You can specify at most five endpoint groups.
   * 
   * This parameter is required.
   */
  endpointGroupConfigurations?: CreateCustomRoutingEndpointGroupsRequestEndpointGroupConfigurations[];
  /**
   * @remarks
   * The ID of the custom routing listener.
   * 
   * This parameter is required.
   * 
   * @example
   * lsr-bp1bpn0kn908w4nbw****
   */
  listenerId?: string;
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
      acceleratorId: 'AcceleratorId',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      endpointGroupConfigurations: 'EndpointGroupConfigurations',
      listenerId: 'ListenerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      endpointGroupConfigurations: { 'type': 'array', 'itemType': CreateCustomRoutingEndpointGroupsRequestEndpointGroupConfigurations },
      listenerId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.endpointGroupConfigurations)) {
      $dara.Model.validateArray(this.endpointGroupConfigurations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

