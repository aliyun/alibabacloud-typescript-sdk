// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCustomRoutingEndpointsResponseBodyEndpointsServiceManagedInfos extends $dara.Model {
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
   * *   **Listener**: listener
   * *   **IpSet**: acceleration region
   * *   **EndpointGroup**: endpoint group
   * *   **ForwardingRule**: forwarding rule
   * *   **Endpoint**: endpoint
   * *   **EndpointGroupDestination**: protocol mapping of an endpoint group associated with a custom routing listener
   * *   **EndpointPolicy**: traffic policy of an endpoint associated with a custom routing listener
   * 
   * >  This parameter is valid only if **Action** is set to **CreateChild**.
   * 
   * @example
   * Listener
   */
  childType?: string;
  /**
   * @remarks
   * Indicates whether the specified actions are managed. Valid values:
   * 
   * *   **true**: The specified actions are managed, and users cannot perform the specified actions on the managed resource.
   * *   **false**: The specified actions are not managed, and users can perform the specified actions on the managed resource.
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

export class ListCustomRoutingEndpointsResponseBodyEndpoints extends $dara.Model {
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
   * The name of the vSwitch that is specified as an endpoint.
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
   * epg-bp16jdc00bhe97sr5****
   */
  endpointGroupId?: string;
  /**
   * @remarks
   * The endpoint ID.
   * 
   * @example
   * ep-bp14sz7ftcwwjgrdm****
   */
  endpointId?: string;
  /**
   * @remarks
   * The ID of the listener to which the endpoint belongs.
   * 
   * @example
   * lsr-bp1bpn0kn908w4nbw****
   */
  listenerId?: string;
  /**
   * @remarks
   * The ID of the service that manages the GA instance.
   * 
   * >  This parameter is valid only if **ServiceManaged** is set to **True**.
   * 
   * @example
   * ALB
   */
  serviceId?: string;
  /**
   * @remarks
   * Indicates whether the GA instance is managed. Valid values:
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
   * 
   * >  This parameter is valid only if **ServiceManaged** is set to **True**.
   * 
   * *   Users can perform only specific actions on a managed instance.
   */
  serviceManagedInfos?: ListCustomRoutingEndpointsResponseBodyEndpointsServiceManagedInfos[];
  /**
   * @remarks
   * The access policy of traffic that is destined for the endpoint. Valid values:
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
   * Only **PrivateSubNet** may be returned, which indicates a private CIDR block.
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
      serviceId: 'ServiceId',
      serviceManaged: 'ServiceManaged',
      serviceManagedInfos: 'ServiceManagedInfos',
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
      serviceId: 'string',
      serviceManaged: 'boolean',
      serviceManagedInfos: { 'type': 'array', 'itemType': ListCustomRoutingEndpointsResponseBodyEndpointsServiceManagedInfos },
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

export class ListCustomRoutingEndpointsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the endpoints.
   */
  endpoints?: ListCustomRoutingEndpointsResponseBodyEndpoints[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
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
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      endpoints: 'Endpoints',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoints: { 'type': 'array', 'itemType': ListCustomRoutingEndpointsResponseBodyEndpoints },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.endpoints)) {
      $dara.Model.validateArray(this.endpoints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

