// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCustomRoutingEndPointTrafficPolicyResponseBodyPortRanges extends $dara.Model {
  /**
   * @remarks
   * The first port of the port range used by the traffic destination to process requests.
   * 
   * @example
   * 80
   */
  fromPort?: number;
  /**
   * @remarks
   * The last port of the port range used by the traffic destination to process requests.
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

export class DescribeCustomRoutingEndPointTrafficPolicyResponseBodyServiceManagedInfos extends $dara.Model {
  /**
   * @remarks
   * The name of the action performed on the managed instance. Valid values:
   * 
   * *   **Create**
   * *   **Update**
   * *   **Delete**
   * *   **Associate**
   * *   **UserUnmanaged**
   * *   **CreateChild**
   * 
   * @example
   * Update
   */
  action?: string;
  /**
   * @remarks
   * The type of the child resource. Valid values:
   * 
   * *   **Listener**: listener.
   * *   **IpSet**: acceleration region.
   * *   **EndpointGroup**: endpoint group.
   * *   **ForwardingRule**: forwarding rule.
   * *   **Endpoint**: endpoint.
   * *   **EndpointGroupDestination**: protocol mapping of an endpoint group that is associated with a custom routing listener.
   * *   **EndpointPolicy**: traffic policy of an endpoint that is associated with a custom routing listener.
   * 
   * >  This parameter takes effect only if the value of **Action** is **CreateChild**.
   * 
   * @example
   * Listener
   */
  childType?: string;
  /**
   * @remarks
   * Indicates whether the specified actions are managed.
   * 
   * *   **true**: The specified actions are managed, and users cannot perform the specified actions on the managed instance.
   * *   **false**: The specified actions are not managed, and users can perform the specified actions on the managed instance.
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

export class DescribeCustomRoutingEndPointTrafficPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * ga-bp1odcab8tmno0hdq****
   */
  acceleratorId?: string;
  /**
   * @remarks
   * The ID of the traffic policy.
   * 
   * @example
   * 10.0.XX.XX
   */
  address?: string;
  /**
   * @remarks
   * The ID of the endpoint to which the traffic policy belongs.
   * 
   * @example
   * vsw-test01
   */
  endpoint?: string;
  /**
   * @remarks
   * The ID of the listener to which the endpoint belongs.
   * 
   * @example
   * epg-bp1bpn0kn908w4nb****
   */
  endpointGroupId?: string;
  /**
   * @remarks
   * The ID of the endpoint group to which the endpoint belongs.
   * 
   * @example
   * ep-2zewuzypq5e6r3pfh****
   */
  endpointId?: string;
  /**
   * @remarks
   * The ID of the GA instance to which the endpoint belongs.
   * 
   * @example
   * lsr-bp1bpn0kn908w4nbw****
   */
  listenerId?: string;
  /**
   * @remarks
   * The name of the vSwitch to which the traffic policy belongs.
   * 
   * @example
   * ply-bptest2****
   */
  policyId?: string;
  /**
   * @remarks
   * The IP address of the traffic policy.
   */
  portRanges?: DescribeCustomRoutingEndPointTrafficPolicyResponseBodyPortRanges[];
  /**
   * @remarks
   * The ID of the endpoint to which the traffic destination belongs.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the service that manages the instance.
   * 
   * >  This parameter is returned only if the value of **ServiceManaged** is **true**.
   * 
   * @example
   * ALB
   */
  serviceId?: string;
  /**
   * @remarks
   * Indicates whether the instance is managed. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  serviceManaged?: boolean;
  /**
   * @remarks
   * The actions that users can perform on the managed instance.
   * > *   This parameter is returned only if the value of **ServiceManaged** is **true**.
   * > *   Users can perform only specific actions on a managed instance.
   */
  serviceManagedInfos?: DescribeCustomRoutingEndPointTrafficPolicyResponseBodyServiceManagedInfos[];
  /**
   * @remarks
   * The status of the traffic destination.
   * 
   * - init: being initialized.
   * - active: running as expected.
   * - updating: being updated.
   * - deleting: being deleted.
   * 
   * @example
   * active
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      address: 'Address',
      endpoint: 'Endpoint',
      endpointGroupId: 'EndpointGroupId',
      endpointId: 'EndpointId',
      listenerId: 'ListenerId',
      policyId: 'PolicyId',
      portRanges: 'PortRanges',
      requestId: 'RequestId',
      serviceId: 'ServiceId',
      serviceManaged: 'ServiceManaged',
      serviceManagedInfos: 'ServiceManagedInfos',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      address: 'string',
      endpoint: 'string',
      endpointGroupId: 'string',
      endpointId: 'string',
      listenerId: 'string',
      policyId: 'string',
      portRanges: { 'type': 'array', 'itemType': DescribeCustomRoutingEndPointTrafficPolicyResponseBodyPortRanges },
      requestId: 'string',
      serviceId: 'string',
      serviceManaged: 'boolean',
      serviceManagedInfos: { 'type': 'array', 'itemType': DescribeCustomRoutingEndPointTrafficPolicyResponseBodyServiceManagedInfos },
      state: 'string',
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

