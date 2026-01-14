// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIpSetResponseBodyServiceManagedInfos extends $dara.Model {
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
   * *   **true**: The specified actions are managed, and users cannot perform the actions on the managed instance.
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

export class DescribeIpSetResponseBody extends $dara.Model {
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
   * The ID of the GA instance.
   * 
   * @example
   * ga-bp1yeeq8yfoyszmqy****
   */
  acceleratorId?: string;
  /**
   * @remarks
   * The bandwidth that is allocated to the acceleration region. Unit: Mbit/s.
   * 
   * @example
   * 3
   */
  bandwidth?: number;
  /**
   * @remarks
   * The list of accelerated IP addresses in the acceleration region.
   */
  ipAddressList?: string[];
  /**
   * @remarks
   * The ID of the acceleration region.
   * 
   * @example
   * ips-bp11ilwqjdkjeg9r7****
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
   * The ID of the request.
   * 
   * @example
   * 6D2BFF54-6AF2-4679-88C4-2F2E187F16CB
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
   * > *   This parameter is returned only if the value of **ServiceManaged** is **true**.
   * >*   Users can perform only specific actions on a managed instance.
   */
  serviceManagedInfos?: DescribeIpSetResponseBodyServiceManagedInfos[];
  /**
   * @remarks
   * The status of the acceleration region. Valid values:
   * 
   * *   **init**: The acceleration region is being initialized.
   * *   **active**: The acceleration region is in the running state.
   * *   **updating**: The acceleration region is being configured.
   * *   **deleting**: The GA instance is being deleted.
   * 
   * @example
   * active
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      accelerateRegionId: 'AccelerateRegionId',
      acceleratorId: 'AcceleratorId',
      bandwidth: 'Bandwidth',
      ipAddressList: 'IpAddressList',
      ipSetId: 'IpSetId',
      ipVersion: 'IpVersion',
      ispType: 'IspType',
      requestId: 'RequestId',
      serviceId: 'ServiceId',
      serviceManaged: 'ServiceManaged',
      serviceManagedInfos: 'ServiceManagedInfos',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accelerateRegionId: 'string',
      acceleratorId: 'string',
      bandwidth: 'number',
      ipAddressList: { 'type': 'array', 'itemType': 'string' },
      ipSetId: 'string',
      ipVersion: 'string',
      ispType: 'string',
      requestId: 'string',
      serviceId: 'string',
      serviceManaged: 'boolean',
      serviceManagedInfos: { 'type': 'array', 'itemType': DescribeIpSetResponseBodyServiceManagedInfos },
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

