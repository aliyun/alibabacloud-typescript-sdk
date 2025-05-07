// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeHybridCloudResourcesResponseBodyDomainsRedirectRequestHeaders } from "./DescribeHybridCloudResourcesResponseBodyDomainsRedirectRequestHeaders";


export class DescribeHybridCloudResourcesResponseBodyDomainsRedirect extends $dara.Model {
  /**
   * @remarks
   * The IP addresses or domain names of the origin server.
   */
  backends?: string[];
  /**
   * @remarks
   * Indicates whether the public cloud disaster recovery feature is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  cnameEnabled?: boolean;
  /**
   * @remarks
   * The timeout period for connections. Unit: seconds. Valid values: 5 to 120.
   * 
   * @example
   * 120
   */
  connectTimeout?: number;
  /**
   * @remarks
   * Indicates whether the HTTPS to HTTP redirection feature is enabled for back-to-origin requests. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  focusHttpBackend?: boolean;
  /**
   * @remarks
   * Indicates whether the persistent connection feature is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  keepalive?: boolean;
  /**
   * @remarks
   * The number of reused persistent connections. Valid values: 60 to 1000.
   * 
   * >  This parameter indicates the number of reused persistent connections after the persistent connection feature is enabled.
   * 
   * @example
   * 1000
   */
  keepaliveRequests?: number;
  /**
   * @remarks
   * The timeout period for persistent connections that are in the Idle state. Unit: seconds. Valid values: 1 to 60. Default value: 15.
   * 
   * >  This parameter indicates the period of time during which a reused persistent connection can remain in the Idle state before the persistent connection is released.
   * 
   * @example
   * 15
   */
  keepaliveTimeout?: number;
  /**
   * @remarks
   * The load balancing algorithm that is used to forward requests to the origin server. Valid values:
   * 
   * *   **iphash**
   * *   **roundRobin**
   * *   **leastTime**
   * 
   * @example
   * iphash
   */
  loadbalance?: string;
  /**
   * @remarks
   * The timeout period for read connections. Unit: seconds. Valid values: 5 to 1800.
   * 
   * @example
   * 200
   */
  readTimeout?: number;
  /**
   * @remarks
   * The key-value pair that is used to label requests that pass through WAF.
   */
  requestHeaders?: DescribeHybridCloudResourcesResponseBodyDomainsRedirectRequestHeaders[];
  /**
   * @remarks
   * Indicates whether WAF retries forwarding requests if requests fail to be forwarded to the origin server. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  retry?: boolean;
  /**
   * @remarks
   * The forwarding rules that are configured for the domain name. This parameter is a string that consists of JSON arrays. Each element in a JSON array is a JSON struct that contains the following fields:
   * 
   * *   **rs**: the back-to-origin IP addresses or CNAMEs. The value is of the ARRAY type.
   * *   **location**: the name of the protection node. The value is of the STRING type.
   * *   **locationId**: the ID of the protection node. The value is of the LONG type.
   * 
   * @example
   * [
   *       {
   *             "rs": [
   *                   "1.1.XX.XX"
   *             ],
   *             "locationId": 535,
   *             "location": "test1111"
   *       }
   * ]
   */
  routingRules?: string;
  /**
   * @remarks
   * Indicates whether the origin Server Name Indication (SNI) feature is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  sniEnabled?: boolean;
  /**
   * @remarks
   * The value of the custom SNI field. If the parameter is left empty, the value of the **Host** field in the request header is automatically used as the value of the SNI field.
   * 
   * >  This parameter is returned only if the value of **SniEnabled** is **true**.
   * 
   * @example
   * www.aliyundoc.com
   */
  sniHost?: string;
  /**
   * @remarks
   * The timeout period for write connections. Unit: seconds. Valid values: 5 to 1800.
   * 
   * @example
   * 200
   */
  writeTimeout?: number;
  static names(): { [key: string]: string } {
    return {
      backends: 'Backends',
      cnameEnabled: 'CnameEnabled',
      connectTimeout: 'ConnectTimeout',
      focusHttpBackend: 'FocusHttpBackend',
      keepalive: 'Keepalive',
      keepaliveRequests: 'KeepaliveRequests',
      keepaliveTimeout: 'KeepaliveTimeout',
      loadbalance: 'Loadbalance',
      readTimeout: 'ReadTimeout',
      requestHeaders: 'RequestHeaders',
      retry: 'Retry',
      routingRules: 'RoutingRules',
      sniEnabled: 'SniEnabled',
      sniHost: 'SniHost',
      writeTimeout: 'WriteTimeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backends: { 'type': 'array', 'itemType': 'string' },
      cnameEnabled: 'boolean',
      connectTimeout: 'number',
      focusHttpBackend: 'boolean',
      keepalive: 'boolean',
      keepaliveRequests: 'number',
      keepaliveTimeout: 'number',
      loadbalance: 'string',
      readTimeout: 'number',
      requestHeaders: { 'type': 'array', 'itemType': DescribeHybridCloudResourcesResponseBodyDomainsRedirectRequestHeaders },
      retry: 'boolean',
      routingRules: 'string',
      sniEnabled: 'boolean',
      sniHost: 'string',
      writeTimeout: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.backends)) {
      $dara.Model.validateArray(this.backends);
    }
    if(Array.isArray(this.requestHeaders)) {
      $dara.Model.validateArray(this.requestHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

