// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCustomRoutingEndpointTrafficPoliciesRequestPolicyConfigurationsPortRanges extends $dara.Model {
  /**
   * @remarks
   * The start port of the traffic destination that is allowed to receive traffic. The port value must fall within the backend service port range of the endpoint group.
   * 
   * This parameter takes effect only when **TrafficToEndpointPolicy** is set to **AllowCustom**.
   * 
   * If you leave both the start port and end port empty, all ports of the traffic destination are supported.
   * 
   * You can specify up to 500 port ranges for each endpoint, and up to 10 start ports for each traffic destination.
   * 
   * @example
   * 80
   */
  fromPort?: number;
  /**
   * @remarks
   * The end port of the traffic destination that is allowed to receive traffic. The port value must fall within the backend service port range of the endpoint group.
   * 
   * This parameter takes effect only when **TrafficToEndpointPolicy** is set to **AllowCustom**.
   * 
   * If you leave both the start port and end port empty, all ports of the traffic destination are supported.
   * 
   * You can specify up to 500 port ranges for each endpoint, and up to 10 end ports for each traffic destination.
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
   * The IP address of the traffic destination that is allowed to receive traffic.
   * 
   * This parameter takes effect only when **TrafficToEndpointPolicy** is set to **AllowCustom**.
   * 
   * You can specify up to 500 traffic destination IP addresses for each endpoint.
   * 
   * > This parameter is required.
   * 
   * @example
   * 10.0.XX.XX
   */
  address?: string;
  /**
   * @remarks
   * The port range of the traffic destination that is allowed to receive traffic. The port range must fall within the backend service port range of the endpoint group.
   * 
   * If you leave this parameter empty, all ports of the traffic destination are supported.
   * 
   * This parameter takes effect only when **TrafficToEndpointPolicy** is set to **AllowCustom**.
   * 
   * You can specify up to 500 port ranges for each endpoint, and up to 10 port ranges for each traffic destination.
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
   * The ID of the endpoint for which you want to create traffic policies.
   * 
   * This parameter is required.
   * 
   * @example
   * ep-2zewuzypq5e6r3pfh****
   */
  endpointId?: string;
  /**
   * @remarks
   * The traffic policy configurations.
   * 
   * You can specify up to 500 traffic policies for each endpoint.
   * 
   * This parameter is required.
   */
  policyConfigurations?: CreateCustomRoutingEndpointTrafficPoliciesRequestPolicyConfigurations[];
  /**
   * @remarks
   * The region ID of the Global Accelerator instance. Set the value to **ap-southeast-1**.
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

