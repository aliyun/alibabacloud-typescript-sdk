// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePortResponseBodyNetworkRules extends $dara.Model {
  /**
   * @remarks
   * The port of the origin server.
   * 
   * @example
   * 55
   */
  backendPort?: number;
  /**
   * @remarks
   * The forwarding port.
   * 
   * @example
   * 55
   */
  frontendPort?: number;
  /**
   * @remarks
   * The type of the protocol. Valid values:
   * 
   * *   **tcp**
   * *   **udp**
   * 
   * @example
   * tcp
   */
  frontendProtocol?: string;
  /**
   * @remarks
   * The ID of the instance to which the port forwarding rule is applied.
   * 
   * @example
   * ddoscoo-cn-7e225i41****
   */
  instanceId?: string;
  /**
   * @remarks
   * Indicates whether the port forwarding rule is automatically created by the instance. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * false
   */
  isAutoCreate?: boolean;
  /**
   * @remarks
   * An array that consists of IP addresses of origin servers.
   */
  realServers?: string[];
  static names(): { [key: string]: string } {
    return {
      backendPort: 'BackendPort',
      frontendPort: 'FrontendPort',
      frontendProtocol: 'FrontendProtocol',
      instanceId: 'InstanceId',
      isAutoCreate: 'IsAutoCreate',
      realServers: 'RealServers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendPort: 'number',
      frontendPort: 'number',
      frontendProtocol: 'string',
      instanceId: 'string',
      isAutoCreate: 'boolean',
      realServers: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.realServers)) {
      $dara.Model.validateArray(this.realServers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePortResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array that consists of port forwarding rules.
   */
  networkRules?: DescribePortResponseBodyNetworkRules[];
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 39499F01-19D9-4EA4-A0E9-C6014BA5CDBE
   */
  requestId?: string;
  /**
   * @remarks
   * The number of port forwarding rules returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      networkRules: 'NetworkRules',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkRules: { 'type': 'array', 'itemType': DescribePortResponseBodyNetworkRules },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.networkRules)) {
      $dara.Model.validateArray(this.networkRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

