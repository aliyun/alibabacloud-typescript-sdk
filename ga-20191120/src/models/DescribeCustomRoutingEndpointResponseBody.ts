// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCustomRoutingEndpointResponseBodyServiceManagedInfos extends $dara.Model {
  /**
   * @remarks
   * Managed policy action name, Valid values:
   * 
   * - Create
   * - Update
   * - Delete
   * - Associate
   * - UserUnmanaged
   * - CreateChild
   * 
   * @example
   * Update
   */
  action?: string;
  /**
   * @remarks
   * Sub resource type, Valid values:
   * 
   * - Listener
   * - IpSet
   * - EndpointGroup
   * - ForwardingRule
   * - Endpoint
   * - EndpointGroupDestination
   * - EndpointPolicy
   * 
   * >Only valid when the Action parameter is CreateChild.
   * 
   * @example
   * Listener
   */
  childType?: string;
  /**
   * @remarks
   * Is the managed policy action managed, Valid values:
   * 
   * - true: The managed policy action is managed, and users do not have permission to perform the operation specified in the Action on the managed instance.
   * 
   * - false: The managed policy action is not managed, and users have permission to perform the operation specified in the Action on the managed instance.
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

export class DescribeCustomRoutingEndpointResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the GA instance with which the endpoint is associated.
   * 
   * @example
   * ga-bp1odcab8tmno0hdq****
   */
  acceleratorId?: string;
  /**
   * @remarks
   * The name of the endpoint (vSwitch).
   * 
   * @example
   * vsw-test01
   */
  endpoint?: string;
  /**
   * @remarks
   * The ID of the endpoint group to which the endpoint belongs.
   * 
   * @example
   * epg-bp14sz7ftcwwjgrdm****
   */
  endpointGroupId?: string;
  /**
   * @remarks
   * The ID of the endpoint.
   * 
   * @example
   * ep-bp1dmlohjjz4kqaun****
   */
  endpointId?: string;
  /**
   * @remarks
   * The ID of the listener with which the endpoint is associated.
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
   * String	04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  /**
   * @remarks
   * The service ID to which the managed instance belongs.
   * 
   * >  Valid only when the ServiceManaged parameter is True.
   * 
   * @example
   * ALB
   */
  serviceId?: string;
  /**
   * @remarks
   * Is it a managed instance. Valid values:
   * 
   * - true
   * - false
   * 
   * @example
   * true
   */
  serviceManaged?: boolean;
  /**
   * @remarks
   * A list of action policies that users can execute on this managed instance.
   */
  serviceManagedInfos?: DescribeCustomRoutingEndpointResponseBodyServiceManagedInfos[];
  /**
   * @remarks
   * The status of the endpoint.
   * 
   * @example
   * active
   */
  state?: string;
  /**
   * @remarks
   * The access policy of traffic for the specified endpoint. Valid values:
   * 
   * *   **AllowAll**: allows all traffic to the endpoint.
   * *   **DenyAll**: denies all traffic to the endpoint.
   * *   **AllowCustom**: allows traffic only to specified destinations.
   * 
   * @example
   * DenyAll
   */
  trafficToEndpointPolicy?: string;
  /**
   * @remarks
   * The backend service type of the endpoint.
   * 
   * Set the value to **PrivateSubNet**, which indicates private CIDR blocks.
   * 
   * @example
   * PrivateSubNet
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      endpoint: 'Endpoint',
      endpointGroupId: 'EndpointGroupId',
      endpointId: 'EndpointId',
      listenerId: 'ListenerId',
      requestId: 'RequestId',
      serviceId: 'ServiceId',
      serviceManaged: 'ServiceManaged',
      serviceManagedInfos: 'ServiceManagedInfos',
      state: 'State',
      trafficToEndpointPolicy: 'TrafficToEndpointPolicy',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      endpoint: 'string',
      endpointGroupId: 'string',
      endpointId: 'string',
      listenerId: 'string',
      requestId: 'string',
      serviceId: 'string',
      serviceManaged: 'boolean',
      serviceManagedInfos: { 'type': 'array', 'itemType': DescribeCustomRoutingEndpointResponseBodyServiceManagedInfos },
      state: 'string',
      trafficToEndpointPolicy: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.serviceManagedInfos)) {
      $dara.Model.validateArray(this.serviceManagedInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

