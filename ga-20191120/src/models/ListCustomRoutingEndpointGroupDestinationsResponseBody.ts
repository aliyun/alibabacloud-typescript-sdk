// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCustomRoutingEndpointGroupDestinationsResponseBodyDestinationsServiceManagedInfos extends $dara.Model {
  /**
   * @remarks
   * The name of the action that you can perform on the managed instance. Valid values:
   * 
   * *   **Create**: Create an instance.
   * *   **Update**: Update the current instance.
   * *   **Delete**: Delete the current instance.
   * *   **Associate**: Reference the current instance.
   * *   **UserUnmanaged**: Unmanage the instance.
   * *   **CreateChild**: Create a child resource in the current instance.
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
   * *   **EndpointGroupDestination**: protocol mapping of an endpoint group associated with a custom routing listener.
   * *   **EndpointPolicy**: traffic policy of an endpoint associated with a custom routing listener.
   * 
   * >  This parameter takes effect only if **Action** is set to **CreateChild**.
   * 
   * @example
   * Listener
   */
  childType?: string;
  /**
   * @remarks
   * Indicates whether the specified actions are managed. Valid values:
   * 
   * *   **true**: The specified actions are managed, and you cannot perform the specified actions on the managed instance.
   * *   **false**: The specified actions are not managed, and you can perform the specified actions on the managed instance.
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

export class ListCustomRoutingEndpointGroupDestinationsResponseBodyDestinations extends $dara.Model {
  /**
   * @remarks
   * The GA instance ID.
   * 
   * @example
   * ga-bp1odcab8tmno0hdq****
   */
  acceleratorId?: string;
  /**
   * @remarks
   * The ID of the endpoint group mapping.
   * 
   * @example
   * dst-123abc****
   */
  destinationId?: string;
  /**
   * @remarks
   * The endpoint group ID.
   * 
   * @example
   * epg-bp14sz7ftcwwjgrdm****
   */
  endpointGroupId?: string;
  /**
   * @remarks
   * The first port of the backend service port range.
   * 
   * @example
   * 80
   */
  fromPort?: number;
  /**
   * @remarks
   * The listener ID.
   * 
   * @example
   * lsr-bp1bpn0kn908w4nbw****
   */
  listenerId?: string;
  /**
   * @remarks
   * The backend service protocols of the endpoint group. Valid values:
   * 
   * *   **TCP**
   * *   **UDP**
   * *   **TCP,UDP**
   */
  protocols?: string[];
  /**
   * @remarks
   * The ID of the service that manages the GA instance.
   * 
   * >  This parameter takes effect only if **ServiceManaged** is set to **True**.
   * 
   * @example
   * ALB
   */
  serviceId?: string;
  /**
   * @remarks
   * Indicates whether the GA instance is managed. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  serviceManaged?: boolean;
  /**
   * @remarks
   * The actions that you can perform on the managed instance.
   * 
   * >  - This parameter takes effect only if **ServiceManaged** is set to **True**.
   * >  - You can perform only specific actions on the managed instance.
   */
  serviceManagedInfos?: ListCustomRoutingEndpointGroupDestinationsResponseBodyDestinationsServiceManagedInfos[];
  /**
   * @remarks
   * The last port of the backend service port range.
   * 
   * @example
   * 80
   */
  toPort?: number;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      destinationId: 'DestinationId',
      endpointGroupId: 'EndpointGroupId',
      fromPort: 'FromPort',
      listenerId: 'ListenerId',
      protocols: 'Protocols',
      serviceId: 'ServiceId',
      serviceManaged: 'ServiceManaged',
      serviceManagedInfos: 'ServiceManagedInfos',
      toPort: 'ToPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      destinationId: 'string',
      endpointGroupId: 'string',
      fromPort: 'number',
      listenerId: 'string',
      protocols: { 'type': 'array', 'itemType': 'string' },
      serviceId: 'string',
      serviceManaged: 'boolean',
      serviceManagedInfos: { 'type': 'array', 'itemType': ListCustomRoutingEndpointGroupDestinationsResponseBodyDestinationsServiceManagedInfos },
      toPort: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.protocols)) {
      $dara.Model.validateArray(this.protocols);
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

export class ListCustomRoutingEndpointGroupDestinationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the endpoint group mappings.
   */
  destinations?: ListCustomRoutingEndpointGroupDestinationsResponseBodyDestinations[];
  /**
   * @remarks
   * The number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
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
      destinations: 'Destinations',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinations: { 'type': 'array', 'itemType': ListCustomRoutingEndpointGroupDestinationsResponseBodyDestinations },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.destinations)) {
      $dara.Model.validateArray(this.destinations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

