// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCustomRoutingEndpointTrafficPoliciesResponseBodyPoliciesPortRanges extends $dara.Model {
  /**
   * @remarks
   * The start port of the traffic policy destination for processing requests.
   * 
   * @example
   * 80
   */
  fromPort?: number;
  /**
   * @remarks
   * The end port of the traffic policy destination for processing requests.
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

export class ListCustomRoutingEndpointTrafficPoliciesResponseBodyPoliciesServiceManagedInfos extends $dara.Model {
  /**
   * @remarks
   * The name of the managed policy action. Valid values:
   * - **Create**: Create an instance.
   * - **Update**: Update the current instance.
   * - **Delete**: Delete the current instance.
   * - **Associate**: Reference or be referenced by the current instance.
   * - **UserUnmanaged**: Unmanage the instance.
   * - **CreateChild**: Create a child resource under the current instance.
   * 
   * @example
   * Update
   */
  action?: string;
  /**
   * @remarks
   * The type of the child resource. Valid values:
   * 
   * - **Listener**: listener resource.
   * 
   * - **IpSet**: acceleration region resource.
   * 
   * - **EndpointGroup**: endpoint group resource.
   * 
   * - **ForwardingRule**: forwarding rule resource.
   * 
   * - **Endpoint**: endpoint resource.
   * 
   * - **EndpointGroupDestination**: protocol mapping resource of the endpoint group under the custom routing listener.
   * 
   * - **EndpointPolicy**: traffic policy resource of the endpoint under the custom routing listener.
   * 
   * > This parameter is valid only when **Action** is set to **CreateChild**.
   * 
   * @example
   * Listener
   */
  childType?: string;
  /**
   * @remarks
   * Indicates whether the managed policy action is managed. Valid values:
   * 
   * - **true**: The managed policy action is managed. The user cannot perform the action specified by Action on the managed instance.
   * 
   * - **false**: The managed policy action is not managed. The user can perform the action specified by Action on the managed instance.
   * 
   * @example
   * false
   */
  isManaged?: boolean;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      childType: 'ChildType',
      isManaged: 'IsManaged',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      childType: 'string',
      isManaged: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomRoutingEndpointTrafficPoliciesResponseBodyPolicies extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the Alibaba Cloud Global Accelerator (GA) instance to which the endpoint belongs.
   * 
   * @example
   * ga-bp1odcab8tmno0hdq****
   */
  acceleratorId?: string;
  /**
   * @remarks
   * The IP address of the traffic policy destination.
   * 
   * @example
   * 10.0.XX.XX
   */
  address?: string;
  /**
   * @remarks
   * The ID of the endpoint group to which the endpoint belongs.
   * 
   * @example
   * lsr-bp1bpn0kn908w4nbw****
   */
  endpointGroupId?: string;
  /**
   * @remarks
   * The ID of the endpoint to which the traffic policy belongs.
   * 
   * @example
   * ep-bp14sz7ftcwwjgrdm****
   */
  endpointId?: string;
  /**
   * @remarks
   * The ID of the custom routing type listener to which the endpoint belongs.
   * 
   * @example
   * lsr-bp1bpn0kn908w4nbw****
   */
  listenerId?: string;
  /**
   * @remarks
   * The traffic policy ID.
   * 
   * @example
   * ply-bp1dmlohjjz4kqaun****
   */
  policyId?: string;
  /**
   * @remarks
   * The port range of the traffic policy destination.
   */
  portRanges?: ListCustomRoutingEndpointTrafficPoliciesResponseBodyPoliciesPortRanges[];
  /**
   * @remarks
   * The ID of the service to which the managed instance belongs.
   * > This parameter is valid only when **ServiceManaged** is set to **True**.
   * 
   * @example
   * ALB
   */
  serviceId?: string;
  /**
   * @remarks
   * Indicates whether the instance is managed. Valid values:
   * - **true**: The instance is managed.
   * - **false**: The instance is not managed.
   * 
   * @example
   * true
   */
  serviceManaged?: boolean;
  /**
   * @remarks
   * The list of action policies that the user can perform on the managed instance.
   * 
   * > - This parameter is valid only when **ServiceManaged** is set to **True**.
   * > - When the instance is in the managed state, user operations on the instance are restricted, and certain operations are prohibited.
   */
  serviceManagedInfos?: ListCustomRoutingEndpointTrafficPoliciesResponseBodyPoliciesServiceManagedInfos[];
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      address: 'Address',
      endpointGroupId: 'EndpointGroupId',
      endpointId: 'EndpointId',
      listenerId: 'ListenerId',
      policyId: 'PolicyId',
      portRanges: 'PortRanges',
      serviceId: 'ServiceId',
      serviceManaged: 'ServiceManaged',
      serviceManagedInfos: 'ServiceManagedInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      address: 'string',
      endpointGroupId: 'string',
      endpointId: 'string',
      listenerId: 'string',
      policyId: 'string',
      portRanges: { 'type': 'array', 'itemType': ListCustomRoutingEndpointTrafficPoliciesResponseBodyPoliciesPortRanges },
      serviceId: 'string',
      serviceManaged: 'boolean',
      serviceManagedInfos: { 'type': 'array', 'itemType': ListCustomRoutingEndpointTrafficPoliciesResponseBodyPoliciesServiceManagedInfos },
    };
  }

  validate() {
    if(Array.isArray(this.portRanges)) {
      $dara.Model.validateArray(this.portRanges);
    }
    if(Array.isArray(this.serviceManagedInfos)) {
      $dara.Model.validateArray(this.serviceManagedInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomRoutingEndpointTrafficPoliciesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number of the list.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page in a paging query.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The list of traffic policies.
   */
  policies?: ListCustomRoutingEndpointTrafficPoliciesResponseBodyPolicies[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      policies: 'Policies',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      policies: { 'type': 'array', 'itemType': ListCustomRoutingEndpointTrafficPoliciesResponseBodyPolicies },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.policies)) {
      $dara.Model.validateArray(this.policies);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

