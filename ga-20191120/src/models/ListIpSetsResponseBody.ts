// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIpSetsResponseBodyIpSetsServiceManagedInfos extends $dara.Model {
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
   * Indicates whether the specified actions are managed.
   * 
   * *   **true**: The specified actions are managed, and users cannot perform the actions on the managed instance.****
   * *   **false**: The specified actions are not managed, and users can perform the actions on the managed instance.
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

export class ListIpSetsResponseBodyIpSets extends $dara.Model {
  /**
   * @remarks
   * The ID of the acceleration region.
   * 
   * @example
   * cn-hangzhou
   */
  accelerateRegionId?: string;
  /**
   * @remarks
   * The bandwidth that is allocated to the acceleration region. Unit: **Mbit/s**.
   * 
   * @example
   * 2
   */
  bandwidth?: number;
  /**
   * @remarks
   * The accelerated IP addresses.
   */
  ipAddressList?: string[];
  /**
   * @remarks
   * The ID of the acceleration region.
   * 
   * @example
   * ips-bp11r5jb8ogp122xl****
   */
  ipSetId?: string;
  /**
   * @remarks
   * The IP version. Valid values:
   * 
   * *   **IPv4**
   * *   **IPv6**
   * *   **DUAL_STACK**
   * 
   * @example
   * IPv4
   */
  ipVersion?: string;
  /**
   * @remarks
   * The line type of the elastic IP address (EIP) in the acceleration region. Valid values:
   * 
   * *   **BGP**: BGP (Multi-ISP) lines. This is the default value.
   * *   **BGP_PRO**: BGP (Multi-ISP) Pro lines.
   * 
   * @example
   * BGP
   */
  ispType?: string;
  /**
   * @remarks
   * The ID of the service that manages the instance.
   * 
   * >  This parameter takes effect only if **ServiceManaged** is set to **true**.
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
   * 
   * > *   This parameter takes effect only if **ServiceManaged** is set to **true**.
   * >*   Users can perform only specific actions on a managed instance.
   */
  serviceManagedInfos?: ListIpSetsResponseBodyIpSetsServiceManagedInfos[];
  /**
   * @remarks
   * The status of the acceleration region. Valid values:
   * 
   * *   **init:** The acceleration region is being initialized.
   * *   **active:** The acceleration region is in the running state.
   * *   **updating:** The acceleration region is being configured.
   * *   **deleting:** The acceleration region is being deleted.
   * 
   * @example
   * active
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      accelerateRegionId: 'AccelerateRegionId',
      bandwidth: 'Bandwidth',
      ipAddressList: 'IpAddressList',
      ipSetId: 'IpSetId',
      ipVersion: 'IpVersion',
      ispType: 'IspType',
      serviceId: 'ServiceId',
      serviceManaged: 'ServiceManaged',
      serviceManagedInfos: 'ServiceManagedInfos',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accelerateRegionId: 'string',
      bandwidth: 'number',
      ipAddressList: { 'type': 'array', 'itemType': 'string' },
      ipSetId: 'string',
      ipVersion: 'string',
      ispType: 'string',
      serviceId: 'string',
      serviceManaged: 'boolean',
      serviceManagedInfos: { 'type': 'array', 'itemType': ListIpSetsResponseBodyIpSetsServiceManagedInfos },
      state: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ipAddressList)) {
      $dara.Model.validateArray(this.ipAddressList);
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

export class ListIpSetsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The acceleration regions.
   */
  ipSets?: ListIpSetsResponseBodyIpSets[];
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
   * A9B4E54C-9CCD-4002-91A9-D38C6C209192
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      ipSets: 'IpSets',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipSets: { 'type': 'array', 'itemType': ListIpSetsResponseBodyIpSets },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ipSets)) {
      $dara.Model.validateArray(this.ipSets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

