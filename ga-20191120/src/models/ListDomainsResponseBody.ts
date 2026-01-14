// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDomainsResponseBodyDomainsAcceleratorsServiceManagedInfos extends $dara.Model {
  /**
   * @remarks
   * The name of the action on the managed instance. Valid values:
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

export class ListDomainsResponseBodyDomainsAccelerators extends $dara.Model {
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
   * The name of the GA instance.
   * 
   * @example
   * Accelerator
   */
  name?: string;
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
   * *   **true**: The GA instance is managed.
   * *   **false**: The GA instance is not managed.
   * 
   * @example
   * true
   */
  serviceManaged?: boolean;
  /**
   * @remarks
   * The actions that you can perform on the managed instance.
   * 
   * >  This parameter takes effect only if **ServiceManaged** is set to **True**.
   * 
   * *   You can perform only specific actions on a managed instance.
   */
  serviceManagedInfos?: ListDomainsResponseBodyDomainsAcceleratorsServiceManagedInfos[];
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      name: 'Name',
      serviceId: 'ServiceId',
      serviceManaged: 'ServiceManaged',
      serviceManagedInfos: 'ServiceManagedInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      name: 'string',
      serviceId: 'string',
      serviceManaged: 'boolean',
      serviceManagedInfos: { 'type': 'array', 'itemType': ListDomainsResponseBodyDomainsAcceleratorsServiceManagedInfos },
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

export class ListDomainsResponseBodyDomains extends $dara.Model {
  /**
   * @remarks
   * A list of GA instances.
   */
  accelerators?: ListDomainsResponseBodyDomainsAccelerators[];
  /**
   * @remarks
   * The accelerated domain name.
   * 
   * @example
   * www.example.com
   */
  domain?: string;
  /**
   * @remarks
   * The ICP filing status of the accelerated domain name. Valid values:
   * 
   * *   **illegal:** The domain name is illegal.
   * *   **inactive:** The domain name has not completed ICP filing.
   * *   **active:** The domain name has a valid ICP number.
   * *   **unknown:** The ICP filing status is unknown.
   * 
   * @example
   * active
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      accelerators: 'Accelerators',
      domain: 'Domain',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accelerators: { 'type': 'array', 'itemType': ListDomainsResponseBodyDomainsAccelerators },
      domain: 'string',
      state: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.accelerators)) {
      $dara.Model.validateArray(this.accelerators);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDomainsResponseBody extends $dara.Model {
  /**
   * @remarks
   * A list of accelerated domain names.
   */
  domains?: ListDomainsResponseBodyDomains[];
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
      domains: 'Domains',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domains: { 'type': 'array', 'itemType': ListDomainsResponseBodyDomains },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.domains)) {
      $dara.Model.validateArray(this.domains);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

