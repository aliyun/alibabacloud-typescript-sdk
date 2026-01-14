// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCustomRoutingEndpointGroupsResponseBodyEndpointGroupsServiceManagedInfos extends $dara.Model {
  /**
   * @remarks
   * The name of the action on the managed instance. Valid values:
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
   * >  This parameter takes effect only if **Action** is set to **CreateChild**.
   * 
   * @example
   * Listener
   */
  childType?: string;
  /**
   * @remarks
   * Indicates whether the specified actions are managed.
   * 
   * *   **true**: Users cannot perform the specified actions on the managed instance.
   * *   **false**: Users can perform the specified actions on the managed instance.
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

export class ListCustomRoutingEndpointGroupsResponseBodyEndpointGroups extends $dara.Model {
  /**
   * @remarks
   * The ID of the GA instance.
   * 
   * @example
   * ga-bp1odcab8tmno0hdq****
   */
  acceleratorId?: string;
  /**
   * @remarks
   * The description of the endpoint group.
   * 
   * @example
   * EndpointGroup
   */
  description?: string;
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
   * The endpoint group IP addresses.
   */
  endpointGroupIpList?: string[];
  /**
   * @remarks
   * The ID of the region where the endpoint group is created.
   * 
   * @example
   * cn-hangzhou
   */
  endpointGroupRegion?: string;
  /**
   * @remarks
   * The endpoint group IP addresses to be confirmed after the GA instance is upgraded.
   */
  endpointGroupUnconfirmedIpList?: string[];
  /**
   * @remarks
   * The ID of the custom routing listener.
   * 
   * @example
   * lsr-bp1bpn0kn908w4nbw****
   */
  listenerId?: string;
  /**
   * @remarks
   * The name of the endpoint group.
   * 
   * @example
   * group1
   */
  name?: string;
  /**
   * @remarks
   * The ID of the service that manages the instance.
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
   * > 
   * 
   * *   This parameter takes effect only if **ServiceManaged** is set to **True**.
   * 
   * *   Users can perform only specific actions on a managed instance.
   */
  serviceManagedInfos?: ListCustomRoutingEndpointGroupsResponseBodyEndpointGroupsServiceManagedInfos[];
  /**
   * @remarks
   * The status of the endpoint group. Valid values:
   * 
   * *   **init**
   * *   **active**
   * *   **updating**
   * *   **deleting**
   * 
   * @example
   * active
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      description: 'Description',
      endpointGroupId: 'EndpointGroupId',
      endpointGroupIpList: 'EndpointGroupIpList',
      endpointGroupRegion: 'EndpointGroupRegion',
      endpointGroupUnconfirmedIpList: 'EndpointGroupUnconfirmedIpList',
      listenerId: 'ListenerId',
      name: 'Name',
      serviceId: 'ServiceId',
      serviceManaged: 'ServiceManaged',
      serviceManagedInfos: 'ServiceManagedInfos',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      description: 'string',
      endpointGroupId: 'string',
      endpointGroupIpList: { 'type': 'array', 'itemType': 'string' },
      endpointGroupRegion: 'string',
      endpointGroupUnconfirmedIpList: { 'type': 'array', 'itemType': 'string' },
      listenerId: 'string',
      name: 'string',
      serviceId: 'string',
      serviceManaged: 'boolean',
      serviceManagedInfos: { 'type': 'array', 'itemType': ListCustomRoutingEndpointGroupsResponseBodyEndpointGroupsServiceManagedInfos },
      state: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.endpointGroupIpList)) {
      $dara.Model.validateArray(this.endpointGroupIpList);
    }
    if(Array.isArray(this.endpointGroupUnconfirmedIpList)) {
      $dara.Model.validateArray(this.endpointGroupUnconfirmedIpList);
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

export class ListCustomRoutingEndpointGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The configuration information about the endpoint group.
   */
  endpointGroups?: ListCustomRoutingEndpointGroupsResponseBodyEndpointGroups[];
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned on each page.
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
   * The number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      endpointGroups: 'EndpointGroups',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointGroups: { 'type': 'array', 'itemType': ListCustomRoutingEndpointGroupsResponseBodyEndpointGroups },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
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

