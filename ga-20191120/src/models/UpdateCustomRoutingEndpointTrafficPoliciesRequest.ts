// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCustomRoutingEndpointTrafficPoliciesRequestPolicyConfigurationsPortRanges extends $dara.Model {
  /**
   * @remarks
   * The first port of the destination port range. The value of this parameter must fall within the port range of the backend service.
   * 
   * This parameter takes effect only when you set the **TrafficToEndpointPolicy** parameter to **AllowCustom**. You can call the [DescribeCustomRoutingEndpoint](https://help.aliyun.com/document_detail/449386.html) operation to query the traffic policy of an endpoint.
   * 
   * If the start port and end port values are empty, traffic on all ports of the destination is allowed.
   * 
   * You can specify a maximum of 500 port ranges for each endpoint and a maximum of 10 port ranges for each traffic policy.
   * 
   * @example
   * 80
   */
  fromPort?: number;
  /**
   * @remarks
   * The last port of the destination port range. The value of this parameter must fall within the port range of the backend service.
   * 
   * This parameter takes effect only when you set the **TrafficToEndpointPolicy** parameter to **AllowCustom**. You can call the [DescribeCustomRoutingEndpoint](https://help.aliyun.com/document_detail/449386.html) operation to query the traffic policy of an endpoint.
   * 
   * If the start port and end port values are empty, traffic on all ports of the destination is allowed.
   * 
   * You can specify a maximum of 500 port ranges for each endpoint and a maximum of 10 port ranges for each traffic policy.
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

export class UpdateCustomRoutingEndpointTrafficPoliciesRequestPolicyConfigurations extends $dara.Model {
  /**
   * @remarks
   * The IP address of the destination which to allow traffic.
   * 
   * This parameter takes effect only when you set the **TrafficToEndpointPolicy** parameter to **AllowCustom**. You can call the [DescribeCustomRoutingEndpoint](https://help.aliyun.com/document_detail/449386.html) operation to query the traffic policy of an endpoint.
   * 
   * You can specify a maximum of 500 traffic policies for each endpoint.
   * 
   * >  This parameter is required.
   * 
   * @example
   * 10.0.XX.XX
   */
  address?: string;
  /**
   * @remarks
   * The ID of the traffic policy that you want to modify.
   * 
   * >  This parameter is required.
   * 
   * @example
   * ply-bptest2****
   */
  policyId?: string;
  /**
   * @remarks
   * The port range of the destination to which traffic is forwarded. The value of this parameter must fall within the port range of the endpoint group.
   * 
   * If you do not specify object, traffic is forwarded to all ports.
   * 
   * This parameter takes effect only when you set the **TrafficToEndpointPolicy** parameter to **AllowCustom**. You can call the [DescribeCustomRoutingEndpoint](https://help.aliyun.com/document_detail/449386.html) operation to query the traffic policy of an endpoint.
   * 
   * You can specify a maximum of 500 port ranges for each endpoint and a maximum of 10 port ranges for each traffic policy.
   */
  portRanges?: UpdateCustomRoutingEndpointTrafficPoliciesRequestPolicyConfigurationsPortRanges[];
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      policyId: 'PolicyId',
      portRanges: 'PortRanges',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      policyId: 'string',
      portRanges: { 'type': 'array', 'itemType': UpdateCustomRoutingEndpointTrafficPoliciesRequestPolicyConfigurationsPortRanges },
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

export class UpdateCustomRoutingEndpointTrafficPoliciesRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * >  If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the endpoint for which you want to modify the traffic policies.
   * 
   * This parameter is required.
   * 
   * @example
   * ep-2zewuzypq5e6r3pfh****
   */
  endpointId?: string;
  /**
   * @remarks
   * The access policies.
   * 
   * You can specify a maximum of 500 traffic policies for each endpoint.
   * 
   * This parameter is required.
   */
  policyConfigurations?: UpdateCustomRoutingEndpointTrafficPoliciesRequestPolicyConfigurations[];
  /**
   * @remarks
   * The region ID of the Global Accelerator (GA) instance. Set the value to **cn-hangzhou**.
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
      policyConfigurations: { 'type': 'array', 'itemType': UpdateCustomRoutingEndpointTrafficPoliciesRequestPolicyConfigurations },
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

