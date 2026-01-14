// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHealthStatusResponseBodyEndpointGroupsEndpoints extends $dara.Model {
  /**
   * @remarks
   * The IP address of the endpoint.
   * 
   * @example
   * 47.0.XX.XX
   */
  address?: string;
  /**
   * @remarks
   * The ID of the endpoint.
   * 
   * @example
   * ep-hp33b2e43fays7s8****
   */
  endpointId?: string;
  /**
   * @remarks
   * The health check details of the endpoint.
   * 
   * >  This parameter is unavailable.
   * 
   * @example
   * null
   */
  healthDetail?: string;
  /**
   * @remarks
   * The health status of the endpoint. Valid values:
   * 
   * *   **init:** The endpoint is being initialized.
   * *   **normal:** The endpoint is normal.
   * *   **abnormal:** The endpoint is abnormal.
   * 
   * @example
   * normal
   */
  healthStatus?: string;
  /**
   * @remarks
   * The port that is used to connect to the endpoint.
   * 
   * @example
   * 80
   */
  port?: number;
  /**
   * @remarks
   * The type of the endpoint. Valid values:
   * 
   * *   **Domain:** a custom domain name.
   * *   **Ip:** a custom IP address.
   * *   **PublicIp:** a public IP address provided by Alibaba Cloud.
   * *   **ECS:** an Elastic Compute Service (ECS) instance.
   * *   **SLB:** a Classic Load Balancer (CLB) instance.
   * *   **ALB:** an Application Load Balancer (ALB) instance.
   * *   **OSS:** an Object Storage Service (OSS) bucket.
   * *   **ENI:** an elastic network interface (ENI).
   * *   **NLB:** a Network Load Balancer (NLB) instance.
   * 
   * @example
   * Ip
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      endpointId: 'EndpointId',
      healthDetail: 'HealthDetail',
      healthStatus: 'HealthStatus',
      port: 'Port',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      endpointId: 'string',
      healthDetail: 'string',
      healthStatus: 'string',
      port: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHealthStatusResponseBodyEndpointGroups extends $dara.Model {
  /**
   * @remarks
   * The ID of the endpoint group.
   * 
   * @example
   * epg-bp14sz7ftcwwjgrdm****
   */
  endpointGroupId?: string;
  /**
   * @remarks
   * The type of the endpoint group. Valid values:
   * 
   * *   **default:** the default endpoint group.
   * *   **virtual:** a virtual endpoint group.
   * 
   * @example
   * default
   */
  endpointGroupType?: string;
  /**
   * @remarks
   * The information about the endpoints.
   */
  endpoints?: GetHealthStatusResponseBodyEndpointGroupsEndpoints[];
  /**
   * @remarks
   * The IDs of the forwarding rules.
   */
  forwardingRuleIds?: string[];
  /**
   * @remarks
   * The health status of the endpoint group. Valid values:
   * 
   * *   **init:** The endpoint group is being initialized.
   * *   **normal:** The endpoint group is normal.
   * *   **abnormal:** The endpoint group is abnormal.
   * *   **partiallyAbnormal:** The endpoint group is partially abnormal.
   * 
   * @example
   * normal
   */
  healthStatus?: string;
  static names(): { [key: string]: string } {
    return {
      endpointGroupId: 'EndpointGroupId',
      endpointGroupType: 'EndpointGroupType',
      endpoints: 'Endpoints',
      forwardingRuleIds: 'ForwardingRuleIds',
      healthStatus: 'HealthStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointGroupId: 'string',
      endpointGroupType: 'string',
      endpoints: { 'type': 'array', 'itemType': GetHealthStatusResponseBodyEndpointGroupsEndpoints },
      forwardingRuleIds: { 'type': 'array', 'itemType': 'string' },
      healthStatus: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.endpoints)) {
      $dara.Model.validateArray(this.endpoints);
    }
    if(Array.isArray(this.forwardingRuleIds)) {
      $dara.Model.validateArray(this.forwardingRuleIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHealthStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the endpoint groups.
   */
  endpointGroups?: GetHealthStatusResponseBodyEndpointGroups[];
  /**
   * @remarks
   * The health status of endpoints and endpoint groups. Valid values:
   * 
   * *   **normal**
   * *   **abnormal**
   * *   **partiallyAbnormal**
   * 
   * @example
   * normal
   */
  healthStatus?: string;
  /**
   * @remarks
   * The ID of the listener.
   * 
   * @example
   * lsr-bp1bpn0kn908w4nbw****
   */
  listenerId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 64ADAB1E-0B7F-4FD8-A404-3BECC0E9CCFF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      endpointGroups: 'EndpointGroups',
      healthStatus: 'HealthStatus',
      listenerId: 'ListenerId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointGroups: { 'type': 'array', 'itemType': GetHealthStatusResponseBodyEndpointGroups },
      healthStatus: 'string',
      listenerId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.endpointGroups)) {
      $dara.Model.validateArray(this.endpointGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

