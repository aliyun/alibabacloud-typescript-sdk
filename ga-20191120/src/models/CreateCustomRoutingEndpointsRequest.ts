// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCustomRoutingEndpointsRequestEndpointConfigurationsPolicyConfigurationsPortRanges extends $dara.Model {
  /**
   * @remarks
   * The start port of the traffic destination that can receive traffic. The port value must fall within the backend service port range of the endpoint group.
   * 
   * This parameter takes effect only when **TrafficToEndpointPolicy** is set to **AllowCustom**.
   * 
   * You can specify up to 20 port ranges for each endpoint, and up to 20 start ports for each traffic destination.
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
   * You can specify up to 20 port ranges for each endpoint, and up to 20 end ports for each traffic destination.
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
   * The IP address of the traffic destination that can receive traffic.
   * 
   * This parameter takes effect only when **TrafficToEndpointPolicy** is set to **AllowCustom**.
   * 
   * You can specify up to 20 traffic destination IP addresses for each endpoint.
   * 
   * This parameter is required.
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
   * You can specify up to 20 port ranges for each endpoint, and up to 20 port ranges for each traffic destination.
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
   * The instance ID of the endpoint vSwitch.
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
  policyConfigurations?: CreateCustomRoutingEndpointsRequestEndpointConfigurationsPolicyConfigurations[];
  /**
   * @remarks
   * The traffic policy for the backend service. Valid values:
   * - **DenyAll** (default): denies all traffic to the specified backend service.
   * - **AllowAll**: allows all traffic to the specified backend service.
   * - **AllowCustom**: allows traffic only to specified destinations.
   * You must specify the IP address and port range of the destination. If the port range is left empty, all ports of the destination are supported.
   * 
   * @example
   * DenyAll
   */
  trafficToEndpointPolicy?: string;
  /**
   * @remarks
   * The backend service type of the endpoint. Valid values:
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
   * The client token that is used to ensure the idempotence of a request.
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
   * The endpoint configurations.
   * 
   * You can specify up to 20 endpoint configurations.
   * 
   * This parameter is required.
   */
  endpointConfigurations?: CreateCustomRoutingEndpointsRequestEndpointConfigurations[];
  /**
   * @remarks
   * The ID of the endpoint group in which you want to create an endpoint.
   * 
   * This parameter is required.
   * 
   * @example
   * epg-bp1bpn0kn908w4nb****
   */
  endpointGroupId?: string;
  /**
   * @remarks
   * The region ID of the Alibaba Cloud Global Accelerator (GA) instance. Set the value to **cn-hangzhou**.
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

