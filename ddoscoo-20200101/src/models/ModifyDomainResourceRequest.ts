// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDomainResourceRequestProxyTypes extends $dara.Model {
  /**
   * @remarks
   * The port numbers.
   * 
   * This parameter is required.
   */
  proxyPorts?: number[];
  /**
   * @remarks
   * The type of the protocol. Valid values:
   * 
   * *   **http**
   * *   **https**
   * *   **websocket**
   * *   **websockets**
   * 
   * @example
   * https
   */
  proxyType?: string;
  static names(): { [key: string]: string } {
    return {
      proxyPorts: 'ProxyPorts',
      proxyType: 'ProxyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      proxyPorts: { 'type': 'array', 'itemType': 'number' },
      proxyType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.proxyPorts)) {
      $dara.Model.validateArray(this.proxyPorts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDomainResourceRequest extends $dara.Model {
  /**
   * @remarks
   * The domain name that is added to the Anti-DDoS Pro or Anti-DDoS Premium instance.
   * 
   * This parameter is required.
   * 
   * @example
   * www.example.com
   */
  domain?: string;
  /**
   * @remarks
   * The advanced HTTPS settings. This parameter takes effect only when the value of the **ProxyType** parameter includes **https**. The value is a string that consists of a JSON struct. The JSON struct contains the following fields:
   * 
   * *   **Http2https**: specifies whether to turn on Enforce HTTPS Routing. This field is optional and must be an integer. Valid values: **0** and **1**. The value 0 indicates that Enforce HTTPS Routing is turned off. The value 1 indicates that Enforce HTTPS Routing is turned on. The default value is 0.
   * 
   *     If your website supports both HTTP and HTTPS, this feature meets your business requirements. If you enable this feature, all HTTP requests to access the website are redirected to HTTPS requests on the standard port 443.
   * 
   * *   **Https2http**: specifies whether to turn on Enable HTTP. This field is optional and must be an integer. Valid values: **0** and **1**. The value 0 indicates that Enable HTTP is turned off. The value 1 indicates that Enable HTTP is turned on. The default value is 0.
   * 
   *     If your website does not support HTTPS, this feature meets your business requirements If this feature is enabled, all HTTPS requests are redirected to HTTP requests and forwarded to origin servers. This feature can redirect WebSockets requests to WebSocket requests. Requests are redirected over the standard port 80.
   * 
   * *   **Http2**: specifies whether to turn on Enable HTTP/2. This field is optional. Data type: integer. Valid values: **0** and **1**. The value 0 indicates that Enable HTTP/2 is turned off. The value 1 indicates that Enable HTTP/2 is turned on. The default value is 0.
   * 
   *     After you turn on the switch, HTTP/2 is used.
   * 
   * @example
   * {"Http2":1,"Http2https":1,"Https2http":1}
   */
  httpsExt?: string;
  /**
   * @remarks
   * An array consisting of the IDs of instances that you want to associate.
   * 
   * This parameter is required.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The details about the protocol type and port number.
   * 
   * This parameter is required.
   */
  proxyTypes?: ModifyDomainResourceRequestProxyTypes[];
  /**
   * @remarks
   * An array that consists of the addresses of origin servers.
   * 
   * This parameter is required.
   */
  realServers?: string[];
  /**
   * @remarks
   * The address type of the origin server. Valid values:
   * 
   * *   **0**: IP address
   * 
   * *   **1**: domain name
   * 
   *     If you deploy proxies, such as a Web Application Firewall (WAF) instance, between the origin server and the Anti-DDoS Pro or Anti-DDoS Premium instance, set the value to 1. If you use the domain name, you must enter the address of the proxy, such as the CNAME of WAF.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  rsType?: number;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      httpsExt: 'HttpsExt',
      instanceIds: 'InstanceIds',
      proxyTypes: 'ProxyTypes',
      realServers: 'RealServers',
      rsType: 'RsType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      httpsExt: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      proxyTypes: { 'type': 'array', 'itemType': ModifyDomainResourceRequestProxyTypes },
      realServers: { 'type': 'array', 'itemType': 'string' },
      rsType: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    if(Array.isArray(this.proxyTypes)) {
      $dara.Model.validateArray(this.proxyTypes);
    }
    if(Array.isArray(this.realServers)) {
      $dara.Model.validateArray(this.realServers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

