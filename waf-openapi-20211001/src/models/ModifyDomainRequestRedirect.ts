// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyDomainRequestRedirectRequestHeaders } from "./ModifyDomainRequestRedirectRequestHeaders";


export class ModifyDomainRequestRedirect extends $dara.Model {
  /**
   * @remarks
   * The IP addresses or domain names of the origin server. You cannot specify both IP addresses and domain names. If you specify domain names, the domain names can be resolved only to IPv4 addresses.
   * 
   * *   If you specify IP addresses, specify the value in the **["ip1","ip2",...]** format. You can enter up to 20 IP addresses.
   * *   If you specify domain names, specify the value in the **["domain"]** format. You can enter up to 20 domain names.
   */
  backends?: string[];
  /**
   * @remarks
   * The secondary IP addresses or domain names of the origin server.
   */
  backupBackends?: string[];
  /**
   * @remarks
   * Specifies whether to enable the public cloud disaster recovery feature. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * @example
   * true
   */
  cnameEnabled?: boolean;
  /**
   * @remarks
   * The timeout period of connections. Unit: seconds. Valid values: 1 to 3600.
   * 
   * @example
   * 120
   */
  connectTimeout?: number;
  /**
   * @remarks
   * Specifies whether to enable force redirect from HTTPS to HTTP for back-to-origin requests. This parameter is available only if you specify **HttpsPorts**. Valid values:
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
   * Specifies whether to enable the persistent connection feature. Valid values:
   * 
   * *   **true** (default)
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
   * >  This parameter specifies the number of persistent connections that can be reused after you enable the persistent connection feature.
   * 
   * @example
   * 1000
   */
  keepaliveRequests?: number;
  /**
   * @remarks
   * The timeout period of idle persistent connections. Valid values: 1 to 60. Default value: 15. Unit: seconds.
   * 
   * >  This parameter specifies the period of time after which an idle persistent connection is closed.
   * 
   * @example
   * 15
   */
  keepaliveTimeout?: number;
  /**
   * @remarks
   * The load balancing algorithm that you want to use to forward requests to the origin server. Valid values:
   * 
   * *   **iphash**
   * *   **roundRobin**
   * *   **leastTime**: This value is available only if you set **ProtectionResource** to **gslb**.
   * 
   * This parameter is required.
   * 
   * @example
   * iphash
   */
  loadbalance?: string;
  /**
   * @remarks
   * The timeout period of read connections. Unit: seconds. Valid values: 1 to 3600.
   * 
   * @example
   * 200
   */
  readTimeout?: number;
  /**
   * @remarks
   * The custom header fields, which are key-value pairs. The fields are used to mark requests that pass through WAF.
   * 
   * When a request passes through WAF, WAF automatically adds the custom header fields to the request to mark the request. This way, the backend service can identify requests that are processed by WAF.
   */
  requestHeaders?: ModifyDomainRequestRedirectRequestHeaders[];
  /**
   * @remarks
   * Specifies whether WAF retries if WAF fails to forward requests to the origin server. Valid values:
   * 
   * *   **true** (default)
   * *   **false**
   * 
   * @example
   * true
   */
  retry?: boolean;
  /**
   * @remarks
   * The forwarding rules for the hybrid cloud mode. The value is a string that consists of JSON arrays. Each element in a JSON array is a JSON struct that contains the following fields:
   * 
   * *   **rs**: the back-to-origin IP addresses or CNAMEs. Data type: array.
   * *   **location**: the name of the protection node. Data type: string.
   * *   **locationId**: the ID of the protection node. Data type: long.
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
   * Specifies whether to enable the Server Name Indication (SNI) feature for back-to-origin requests. This parameter is available only if you specify **HttpsPorts**. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * @example
   * true
   */
  sniEnabled?: boolean;
  /**
   * @remarks
   * The custom value of the SNI field. If you do not specify this parameter, the value of the **Host** header field is automatically used. In most cases, you do not need to specify a custom value for the SNI field. However, if you want WAF to use an SNI field whose value is different from the value of the Host header field in back-to-origin requests, you can specify a custom value for the SNI field.
   * 
   * >  This parameter is required only if you set **SniEnabled** to true.
   * 
   * @example
   * www.aliyundoc.com
   */
  sniHost?: string;
  /**
   * @remarks
   * The timeout period of write connections. Unit: seconds. Valid values: 1 to 3600.
   * 
   * @example
   * 200
   */
  writeTimeout?: number;
  /**
   * @remarks
   * Specifies whether to use the X-Forward-For-Proto header field to pass the protocol used by WAF to forward requests to the origin server. Valid values:
   * 
   * *   **true** (default)
   * *   **false**
   * 
   * @example
   * true
   */
  xffProto?: boolean;
  static names(): { [key: string]: string } {
    return {
      backends: 'Backends',
      backupBackends: 'BackupBackends',
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
      xffProto: 'XffProto',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backends: { 'type': 'array', 'itemType': 'string' },
      backupBackends: { 'type': 'array', 'itemType': 'string' },
      cnameEnabled: 'boolean',
      connectTimeout: 'number',
      focusHttpBackend: 'boolean',
      keepalive: 'boolean',
      keepaliveRequests: 'number',
      keepaliveTimeout: 'number',
      loadbalance: 'string',
      readTimeout: 'number',
      requestHeaders: { 'type': 'array', 'itemType': ModifyDomainRequestRedirectRequestHeaders },
      retry: 'boolean',
      routingRules: 'string',
      sniEnabled: 'boolean',
      sniHost: 'string',
      writeTimeout: 'number',
      xffProto: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.backends)) {
      $dara.Model.validateArray(this.backends);
    }
    if(Array.isArray(this.backupBackends)) {
      $dara.Model.validateArray(this.backupBackends);
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

