// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCustomRoutingEndpointGroupDestinationsResponseBodyDestinationsServiceManagedInfos extends $dara.Model {
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
   * Create
   */
  action?: string;
  /**
   * @remarks
   * The type of the child resource. Valid values:
   * - **Listener**: listener resource.
   * - **IpSet**: acceleration region resource.
   * - **EndpointGroup**: endpoint group resource.
   * - **ForwardingRule**: forwarding rule resource.
   * - **Endpoint**: endpoint resource.
   * - **EndpointGroupDestination**: protocol mapping resource of the endpoint group under a custom routing listener.
   * - **EndpointPolicy**: endpoint traffic policy resource under a custom routing listener.
   * > This parameter is valid only when **Action** is set to **CreateChild**.
   * 
   * @example
   * Listener
   */
  childType?: string;
  /**
   * @remarks
   * Indicates whether the managed policy action is managed. Valid values:
   * - **true**: The managed policy action is managed. The user cannot perform the action specified by Action on the managed instance.
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

export class ListCustomRoutingEndpointGroupDestinationsResponseBodyDestinations extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the Alibaba Cloud Global Accelerator (GA) instance to which the endpoint group destination configuration belongs.
   * 
   * @example
   * ga-bp1odcab8tmno0hdq****
   */
  acceleratorId?: string;
  /**
   * @remarks
   * The ID of the endpoint group destination configuration.
   * 
   * @example
   * dst-123abc****
   */
  destinationId?: string;
  /**
   * @remarks
   * The ID of the endpoint group to which the destination configuration belongs.
   * 
   * @example
   * epg-bp14sz7ftcwwjgrdm****
   */
  endpointGroupId?: string;
  /**
   * @remarks
   * The start port of the backend service of the endpoint group.
   * 
   * @example
   * 80
   */
  fromPort?: number;
  /**
   * @remarks
   * The ID of the listener to which the endpoint group destination configuration belongs.
   * 
   * @example
   * lsr-bp1bpn0kn908w4nbw****
   */
  listenerId?: string;
  /**
   * @remarks
   * The Protocol Type of the backend service of the endpoint group.
   * 
   * - **TCP**: TCP protocol.
   * 
   * - **UDP**: UDP protocol.
   * 
   * - **TCP,UDP**: TCP and UDP protocols.
   */
  protocols?: string[];
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
   * 
   * - true: The instance is managed.  
   * 
   * - false: The instance is not managed.
   * 
   * @example
   * true
   */
  serviceManaged?: boolean;
  /**
   * @remarks
   * The list of action policies that the user can execute on the managed instance.
   * > This parameter is valid only when **ServiceManaged** is set to **True**.
   * > - When the instance is in the managed state, user operations on the instance are restricted, and certain operations are prohibited.
   */
  serviceManagedInfos?: ListCustomRoutingEndpointGroupDestinationsResponseBodyDestinationsServiceManagedInfos[];
  /**
   * @remarks
   * The end port of the backend service of the endpoint group.
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
   * The destination configurations of the endpoint group.
   */
  destinations?: ListCustomRoutingEndpointGroupDestinationsResponseBodyDestinations[];
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

