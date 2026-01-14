// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCustomRoutingEndpointGroupDestinationsResponseBodyServiceManagedInfos extends $dara.Model {
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

export class DescribeCustomRoutingEndpointGroupDestinationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the Global Accelerator (GA) instance.
   * 
   * @example
   * ga-bp1odcab8tmno0hdq****
   */
  acceleratorId?: string;
  /**
   * @remarks
   * The ID of the endpoint group mapping configuration.
   * 
   * @example
   * dst-123abc****
   */
  destinationId?: string;
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
   * The start port of the backend service port range of the endpoint group.
   * 
   * @example
   * 80
   */
  fromPort?: number;
  /**
   * @remarks
   * The ID of the listener.
   * 
   * @example
   * lsr-bp1bpn0kn908w4nbw****
   */
  listenerId?: string;
  /**
   * @remarks
   * The backend service protocol of the endpoint group.
   * 
   * *   **TCP**: TCP
   * *   **UDP**: UDP
   * *   **TCP,UDP**: TCP and UDP
   */
  protocols?: string[];
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
  serviceManagedInfos?: DescribeCustomRoutingEndpointGroupDestinationsResponseBodyServiceManagedInfos[];
  /**
   * @remarks
   * The status of the endpoint group mapping configuration.
   * 
   * *   **init**: being initialized.
   * *   **active**: normal.
   * *   **updating**: being updated.
   * *   **deleting**: being deleted.
   * 
   * @example
   * active
   */
  state?: string;
  /**
   * @remarks
   * The end port of the backend service port range of the endpoint group.
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
      requestId: 'RequestId',
      serviceId: 'ServiceId',
      serviceManaged: 'ServiceManaged',
      serviceManagedInfos: 'ServiceManagedInfos',
      state: 'State',
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
      requestId: 'string',
      serviceId: 'string',
      serviceManaged: 'boolean',
      serviceManagedInfos: { 'type': 'array', 'itemType': DescribeCustomRoutingEndpointGroupDestinationsResponseBodyServiceManagedInfos },
      state: 'string',
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

