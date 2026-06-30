// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCustomRoutingEndpointGroupsRequestEndpointGroupConfigurationsDestinationConfigurations extends $dara.Model {
  /**
   * @remarks
   * The start port of the backend service for the endpoint group.
   * 
   * Valid values: **1** to **65499**. The value of **FromPort** must be less than or equal to the value of **ToPort**.
   * 
   * You can specify up to 20 start port entries for each endpoint group.
   * 
   * @example
   * 80
   */
  fromPort?: number;
  /**
   * @remarks
   * The protocol types of the backend service for the endpoint group.
   * 
   * You can specify up to 4 backend service protocol types in each mapping port range and protocol type entry for the endpoint group.
   */
  protocols?: string[];
  /**
   * @remarks
   * The end port of the backend service for the endpoint group.
   * 
   * Valid values: **1** to **65499**. The value of **FromPort** must be less than or equal to the value of **ToPort**.
   * 
   * You can specify up to 20 end port entries for each endpoint group.
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
   * The start port of the traffic destination that can receive traffic. The port value must fall within the backend service port range of the endpoint group.
   * 
   * This parameter takes effect only when **TrafficToEndpointPolicy** is set to **AllowCustom**.
   * 
   * You can specify up to 20 port ranges for traffic destinations for each endpoint, and up to 5 start ports for each traffic destination.
   * 
   * @example
   * 80
   */
  fromPort?: number;
  /**
   * @remarks
   * The end port of the traffic destination that can receive traffic. The port value must fall within the backend service port range of the endpoint group.
   * 
   * This parameter takes effect only when **TrafficToEndpointPolicy** is set to **AllowCustom**.
   * 
   * You can specify up to 20 port ranges for traffic destinations for each endpoint, and up to 5 end ports for each traffic destination.
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
   * The IP address of the traffic destination that can receive traffic.
   * 
   * This parameter takes effect only when **TrafficToEndpointPolicy** is set to **AllowCustom**.
   * 
   * You can specify up to 20 traffic destination IP addresses for each endpoint.
   * 
   * @example
   * 10.0.XX.XX
   */
  address?: string;
  /**
   * @remarks
   * The port range of the traffic destination that can receive traffic. The port range must fall within the backend service port range of the endpoint group.
   * 
   * If this parameter is left empty, all ports of the traffic destination are supported.
   * 
   * This parameter takes effect only when **TrafficToEndpointPolicy** is set to **AllowCustom**.
   * 
   * You can specify up to 20 port ranges for traffic destinations for each endpoint, and up to 5 port ranges for each traffic destination.
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
   * The name of the endpoint vSwitch instance.
   * 
   * @example
   * vsw-test01
   */
  endpoint?: string;
  /**
   * @remarks
   * The traffic destination configurations.
   * 
   * You can specify up to 20 traffic destinations for each endpoint.
   */
  policyConfigurations?: CreateCustomRoutingEndpointGroupsRequestEndpointGroupConfigurationsEndpointConfigurationsPolicyConfigurations[];
  /**
   * @remarks
   * The traffic policy for the backend service. Valid values:
   * 
   * - **AllowAll**: allows all traffic to access the specified backend service.
   * 
   * - **DenyAll** (default): denies all traffic from accessing the specified backend service.
   * 
   * - **AllowCustom**: allows traffic to access specified destinations.
   * You must specify the IP address and port range of the destination. If the port range is left empty, all ports of the destination are supported.
   * 
   * @example
   * DenyAll
   */
  trafficToEndpointPolicy?: string;
  /**
   * @remarks
   * The type of the backend service for the endpoint. Valid values:
   * 
   *  **PrivateSubNet** (default): private CIDR block.
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
   * The description can be up to 256 characters in length and cannot contain `http://` or `https://`.
   * 
   * You can specify up to 5 endpoint group descriptions.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The mapping configurations of the endpoint group.
   * 
   * You must specify the backend service port range and protocol type for the endpoint group. The specified information forms a mapping relationship with the associated listener port range.
   * 
   * You can specify up to 20 mapping port range and protocol type entries for each endpoint group.
   */
  destinationConfigurations?: CreateCustomRoutingEndpointGroupsRequestEndpointGroupConfigurationsDestinationConfigurations[];
  /**
   * @remarks
   * The endpoint configurations.
   * 
   * You can specify up to 10 endpoint configurations for each endpoint group.
   */
  endpointConfigurations?: CreateCustomRoutingEndpointGroupsRequestEndpointGroupConfigurationsEndpointConfigurations[];
  /**
   * @remarks
   * The region ID of the endpoint group.
   * 
   * You can specify up to 5 endpoint group region IDs.
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
   * The name must be 1 to 128 characters in length and must start with a letter or Chinese character. The name can contain digits, underscores (_), and hyphens (-).
   * 
   * You can specify up to 5 endpoint group names.
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
   * The ID of the Alibaba Cloud Global Accelerator (GA) instance.
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
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** value as the **ClientToken** value. The **RequestId** value is different for each API request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * - **true**: performs a dry run without creating custom routing type endpoint groups. The system checks the required parameters, request format, and business limits. If the request fails the dry run, the corresponding error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * - **false** (default): sends a normal request. If the request passes the check, an HTTP 2xx status code is returned and the custom routing type endpoint groups are created.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The endpoint group configurations.
   * 
   * You can specify up to 5 endpoint group configurations.
   * 
   * This parameter is required.
   */
  endpointGroupConfigurations?: CreateCustomRoutingEndpointGroupsRequestEndpointGroupConfigurations[];
  /**
   * @remarks
   * The ID of the custom routing type listener.
   * 
   * This parameter is required.
   * 
   * @example
   * lsr-bp1bpn0kn908w4nbw****
   */
  listenerId?: string;
  /**
   * @remarks
   * The region ID of the Alibaba Cloud Global Accelerator (GA) instance. Set the value to **ap-southeast-1**.
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

