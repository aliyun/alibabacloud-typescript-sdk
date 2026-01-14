// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCustomRoutingEndpointTrafficPoliciesRequestPolicyConfigurationsPortRanges extends $dara.Model {
  /**
   * @remarks
   * The first port of the destination port range. The value of this parameter must fall within the port range of the endpoint group.
   * 
   * This parameter takes effect only when **TrafficToEndpointPolicy** is set to **AllowCustom**.
   * 
   * If the first port and the last port are not specified, traffic on all ports of the destination is allowed.
   * 
   * You can specify port ranges for up to 500 destinations in each endpoint and specify up to 10 first ports for each destination.
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
   * If the first port and the last port are not specified, traffic on all ports of the destination is allowed.
   * 
   * You can specify port ranges for up to 500 destinations in each endpoint and specify up to 10 last ports for each destination.
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

export class CreateCustomRoutingEndpointTrafficPoliciesRequestPolicyConfigurations extends $dara.Model {
  /**
   * @remarks
   * The IP address of the destination to which traffic is forwarded.
   * 
   * This parameter takes effect only when **TrafficToEndpointPolicy** is set to **AllowCustom**.
   * 
   * You can specify up to 500 destination IP addresses for each endpoint.
   * 
   * > This parameter is required.
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
   * You can specify port ranges for up to 500 traffic destinations in each endpoint and specify up to 10 port ranges for each traffic destination.
   */
  portRanges?: CreateCustomRoutingEndpointTrafficPoliciesRequestPolicyConfigurationsPortRanges[];
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      portRanges: 'PortRanges',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      portRanges: { 'type': 'array', 'itemType': CreateCustomRoutingEndpointTrafficPoliciesRequestPolicyConfigurationsPortRanges },
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

export class CreateCustomRoutingEndpointTrafficPoliciesRequest extends $dara.Model {
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
   * The ID of the endpoint for which you want to create traffic destinations.
   * 
   * This parameter is required.
   * 
   * @example
   * ep-2zewuzypq5e6r3pfh****
   */
  endpointId?: string;
  /**
   * @remarks
   * The configurations of the traffic destinations.
   * 
   * You can specify up to 500 traffic destinations for each endpoint.
   * 
   * This parameter is required.
   */
  policyConfigurations?: CreateCustomRoutingEndpointTrafficPoliciesRequestPolicyConfigurations[];
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
      endpointId: 'EndpointId',
      policyConfigurations: 'PolicyConfigurations',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      endpointId: 'string',
      policyConfigurations: { 'type': 'array', 'itemType': CreateCustomRoutingEndpointTrafficPoliciesRequestPolicyConfigurations },
      regionId: 'string',
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

