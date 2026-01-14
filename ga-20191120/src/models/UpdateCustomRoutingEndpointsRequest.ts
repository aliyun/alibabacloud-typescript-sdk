// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCustomRoutingEndpointsRequestEndpointConfigurationsPolicyConfigurationsPortRanges extends $dara.Model {
  /**
   * @remarks
   * The start port of the port range in the destination to which to allow traffic. The specified port must fall within the port range of the specified endpoint group.
   * 
   * This parameter takes effect only when **TrafficToEndpointPolicy** is set to **AllowCustom**.
   * 
   * You can specify port ranges for up to 20 destinations for each endpoint and specify up to 20 start ports for each destination.
   * 
   * @example
   * 80
   */
  fromPort?: string;
  /**
   * @remarks
   * The end port of the port range in the destination to which to allow traffic. The specified port must fall within the port range of the specified endpoint group.
   * 
   * This parameter takes effect only when **TrafficToEndpointPolicy** is set to **AllowCustom**.
   * 
   * You can specify port ranges for up to 20 destinations for each endpoint and specify up to 20 end ports for each destination.
   * 
   * @example
   * 80
   */
  toPort?: string;
  static names(): { [key: string]: string } {
    return {
      fromPort: 'FromPort',
      toPort: 'ToPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fromPort: 'string',
      toPort: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCustomRoutingEndpointsRequestEndpointConfigurationsPolicyConfigurations extends $dara.Model {
  /**
   * @remarks
   * The IP address of the destination to which to allow traffic.
   * 
   * This parameter takes effect only when **TrafficToEndpointPolicy** is set to **AllowCustom**.
   * 
   * You can specify up to 20 destination IP addresses for each endpoint.
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
  portRanges?: UpdateCustomRoutingEndpointsRequestEndpointConfigurationsPolicyConfigurationsPortRanges[];
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      portRanges: 'PortRanges',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      portRanges: { 'type': 'array', 'itemType': UpdateCustomRoutingEndpointsRequestEndpointConfigurationsPolicyConfigurationsPortRanges },
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

export class UpdateCustomRoutingEndpointsRequestEndpointConfigurations extends $dara.Model {
  /**
   * @remarks
   * The ID of the endpoint.
   * 
   * You can specify up to 20 endpoint IDs.
   * 
   * @example
   * ep-bp1dmlohjjz4kqaun****
   */
  endpointId?: string;
  /**
   * @remarks
   * The configurations of the policy.
   */
  policyConfigurations?: UpdateCustomRoutingEndpointsRequestEndpointConfigurationsPolicyConfigurations[];
  /**
   * @remarks
   * The access policy of traffic for the specified endpoint. Default value: DenyAll. Valid values:
   * 
   * *   **DenyAll**: denies all traffic to the endpoint.
   * 
   * *   **AllowAll**: allows all traffic to the endpoint.
   * 
   * *   **AllowCustom**: allows traffic only to specified destinations.
   * 
   *     If you set this parameter to AllowCustom, you must specify IP addresses and port ranges of destinations to which to allow traffic. If you specify only IP addresses and do not specify port ranges, GA can forward traffic to all ports and the specified IP addresses in the destinations.
   * 
   * You can specify up to 20 access policies of traffic for the specified endpoint.
   * 
   * @example
   * DenyAll
   */
  trafficToEndpointPolicy?: string;
  static names(): { [key: string]: string } {
    return {
      endpointId: 'EndpointId',
      policyConfigurations: 'PolicyConfigurations',
      trafficToEndpointPolicy: 'TrafficToEndpointPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointId: 'string',
      policyConfigurations: { 'type': 'array', 'itemType': UpdateCustomRoutingEndpointsRequestEndpointConfigurationsPolicyConfigurations },
      trafficToEndpointPolicy: 'string',
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

export class UpdateCustomRoutingEndpointsRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, but you must make sure that it is unique among different requests. The client token can contain only ASCII characters.
   * 
   * >  If you do not set this parameter, **ClientToken** is set to the value of **RequestId**. The value of **RequestId** may be different for each API request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The configurations of the endpoint.
   * 
   * This parameter is required.
   */
  endpointConfigurations?: UpdateCustomRoutingEndpointsRequestEndpointConfigurations[];
  /**
   * @remarks
   * The ID of the endpoint group to which the endpoints that you want to modify belong.
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
      endpointConfigurations: { 'type': 'array', 'itemType': UpdateCustomRoutingEndpointsRequestEndpointConfigurations },
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

