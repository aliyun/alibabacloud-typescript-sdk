// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeL7RsPolicyResponseBodyAttributes } from "./DescribeL7rsPolicyResponseBodyAttributes";


export class DescribeL7RsPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the parameters for back-to-origin settings.
   */
  attributes?: DescribeL7RsPolicyResponseBodyAttributes[];
  /**
   * @remarks
   * The scheduling algorithm for back-to-origin traffic. Valid values:
   * 
   * *   **ip_hash**: the IP hash algorithm. This algorithm is used to redirect the requests from the same IP address to the same origin server.
   * *   **rr**: the round-robin algorithm. This algorithm is used to redirect requests to origin servers in turn.
   * *   **least_time**: the least response time algorithm. This algorithm is used to minimize the latency when requests are forwarded from Anti-DDoS Pro or Anti-DDoS Premium instances to origin servers based on the intelligent DNS resolution feature.
   * 
   * @example
   * rr
   */
  proxyMode?: string;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 9E7F6B2C-03F2-462F-9076-B782CF0DD502
   */
  requestId?: string;
  /**
   * @remarks
   * The timeout period for a read or write connection.
   * 
   * @example
   * 300
   */
  rsAttrRwTimeoutMax?: number;
  /**
   * @remarks
   * The back-to-origin retry switch. Valid values:
   * 
   * *   **1**: on
   * *   **0**: off
   * 
   * @example
   * 1
   */
  upstreamRetry?: number;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      proxyMode: 'ProxyMode',
      requestId: 'RequestId',
      rsAttrRwTimeoutMax: 'RsAttrRwTimeoutMax',
      upstreamRetry: 'UpstreamRetry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: { 'type': 'array', 'itemType': DescribeL7RsPolicyResponseBodyAttributes },
      proxyMode: 'string',
      requestId: 'string',
      rsAttrRwTimeoutMax: 'number',
      upstreamRetry: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.attributes)) {
      $dara.Model.validateArray(this.attributes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

