// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCustomRoutingPortMappingsResponseBodyPortMappingsDestinationSocketAddress extends $dara.Model {
  /**
   * @remarks
   * The service IP address of the backend instance.
   * 
   * @example
   * 10.0.XX.XX
   */
  ipAddress?: string;
  /**
   * @remarks
   * The service port of the backend instance.
   * 
   * @example
   * 443
   */
  port?: number;
  static names(): { [key: string]: string } {
    return {
      ipAddress: 'IpAddress',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipAddress: 'string',
      port: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomRoutingPortMappingsResponseBodyPortMappings extends $dara.Model {
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
   * The acceleration port.
   * 
   * @example
   * 3000
   */
  acceleratorPort?: number;
  /**
   * @remarks
   * The service IP address and port of the backend instance.
   */
  destinationSocketAddress?: ListCustomRoutingPortMappingsResponseBodyPortMappingsDestinationSocketAddress;
  /**
   * @remarks
   * The access policy of traffic for the backend instance. Valid values:
   * 
   * *   **allow**: allows traffic to the backend instance.
   * *   **deny**: denies traffic to the backend instance.
   * 
   * @example
   * allow
   */
  destinationTrafficState?: string;
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
   * The ID of the region in which the endpoint group resides.
   * 
   * @example
   * us-west-1
   */
  endpointGroupRegion?: string;
  /**
   * @remarks
   * The ID of the endpoint.
   * 
   * @example
   * ep-bp14sz7ftcwwjgrdm****
   */
  endpointId?: string;
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
   * The protocol of the backend service.
   * 
   * *   **tcp**: TCP
   * *   **udp**: UDP
   */
  protocols?: string[];
  /**
   * @remarks
   * The name of the endpoint (vSwitch).
   * 
   * @example
   * vsw-test01
   */
  vswitch?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      acceleratorPort: 'AcceleratorPort',
      destinationSocketAddress: 'DestinationSocketAddress',
      destinationTrafficState: 'DestinationTrafficState',
      endpointGroupId: 'EndpointGroupId',
      endpointGroupRegion: 'EndpointGroupRegion',
      endpointId: 'EndpointId',
      listenerId: 'ListenerId',
      protocols: 'Protocols',
      vswitch: 'Vswitch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      acceleratorPort: 'number',
      destinationSocketAddress: ListCustomRoutingPortMappingsResponseBodyPortMappingsDestinationSocketAddress,
      destinationTrafficState: 'string',
      endpointGroupId: 'string',
      endpointGroupRegion: 'string',
      endpointId: 'string',
      listenerId: 'string',
      protocols: { 'type': 'array', 'itemType': 'string' },
      vswitch: 'string',
    };
  }

  validate() {
    if(this.destinationSocketAddress && typeof (this.destinationSocketAddress as any).validate === 'function') {
      (this.destinationSocketAddress as any).validate();
    }
    if(Array.isArray(this.protocols)) {
      $dara.Model.validateArray(this.protocols);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomRoutingPortMappingsResponseBody extends $dara.Model {
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
   * Details about the port mapping table.
   */
  portMappings?: ListCustomRoutingPortMappingsResponseBodyPortMappings[];
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
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      portMappings: 'PortMappings',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      portMappings: { 'type': 'array', 'itemType': ListCustomRoutingPortMappingsResponseBodyPortMappings },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.portMappings)) {
      $dara.Model.validateArray(this.portMappings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

