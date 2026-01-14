// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCustomRoutingEndpointGroupResponseBodyServiceManagedInfos extends $dara.Model {
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
   * Indicates whether the specified actions are managed. Valid values:
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

export class DescribeCustomRoutingEndpointGroupResponseBody extends $dara.Model {
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
   * Indicates the status of the binding between the Log Service project and the endpoint group. Valid values:
   * 
   * *   **on:** The endpoint group is bound to the Log Service project.
   * *   **off:** The endpoint group is not bound to the Log Service project.
   * *   **binding:** The endpoint group is being bound to the Log Service project.
   * *   **unbinding:** The endpoint group is being unbound from the Log Service project.
   * 
   * @example
   * on
   */
  accessLogSwitch?: string;
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
   * Indicates whether the access log feature is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  enableAccessLog?: boolean;
  /**
   * @remarks
   * The endpoint group ID.
   * 
   * @example
   * epg-bp1dmlohjjz4kqaua****
   */
  endpointGroupId?: string;
  /**
   * @remarks
   * The endpoint group IP addresses.
   */
  endpointGroupIpList?: string[];
  /**
   * @remarks
   * The region ID of the endpoint group.
   * 
   * @example
   * cn-hangzhou
   */
  endpointGroupRegion?: string;
  /**
   * @remarks
   * The endpoint group IP addresses that need to be confirmed after the GA instance is upgraded.
   */
  endpointGroupUnconfirmedIpList?: string[];
  /**
   * @remarks
   * The custom routing listener ID.
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
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
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
   * >  This parameter takes effect only if **ServiceManaged** is set to **True**.
   * 
   * *   Users can perform only specific actions on a managed instance.
   */
  serviceManagedInfos?: DescribeCustomRoutingEndpointGroupResponseBodyServiceManagedInfos[];
  /**
   * @remarks
   * The name of the Logstore.
   * 
   * @example
   * lsn-01
   */
  slsLogStoreName?: string;
  /**
   * @remarks
   * The name of the Log Service project.
   * 
   * @example
   * pn-01
   */
  slsProjectName?: string;
  /**
   * @remarks
   * The region of the logs that are created in Log Service.
   * 
   * @example
   * cn-hangzhou
   */
  slsRegion?: string;
  /**
   * @remarks
   * The status of the endpoint group. Valid values:
   * 
   * *   **init:** The endpoint group is being initialized.
   * *   **active:** The endpoint group is running normally.
   * *   **updating:** The endpoint group is being updated.
   * *   **deleting:** The ACL is being deleted.
   * 
   * @example
   * active
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      accessLogSwitch: 'AccessLogSwitch',
      description: 'Description',
      enableAccessLog: 'EnableAccessLog',
      endpointGroupId: 'EndpointGroupId',
      endpointGroupIpList: 'EndpointGroupIpList',
      endpointGroupRegion: 'EndpointGroupRegion',
      endpointGroupUnconfirmedIpList: 'EndpointGroupUnconfirmedIpList',
      listenerId: 'ListenerId',
      name: 'Name',
      requestId: 'RequestId',
      serviceId: 'ServiceId',
      serviceManaged: 'ServiceManaged',
      serviceManagedInfos: 'ServiceManagedInfos',
      slsLogStoreName: 'SlsLogStoreName',
      slsProjectName: 'SlsProjectName',
      slsRegion: 'SlsRegion',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      accessLogSwitch: 'string',
      description: 'string',
      enableAccessLog: 'boolean',
      endpointGroupId: 'string',
      endpointGroupIpList: { 'type': 'array', 'itemType': 'string' },
      endpointGroupRegion: 'string',
      endpointGroupUnconfirmedIpList: { 'type': 'array', 'itemType': 'string' },
      listenerId: 'string',
      name: 'string',
      requestId: 'string',
      serviceId: 'string',
      serviceManaged: 'boolean',
      serviceManagedInfos: { 'type': 'array', 'itemType': DescribeCustomRoutingEndpointGroupResponseBodyServiceManagedInfos },
      slsLogStoreName: 'string',
      slsProjectName: 'string',
      slsRegion: 'string',
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

