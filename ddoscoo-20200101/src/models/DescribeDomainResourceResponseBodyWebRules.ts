// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDomainResourceResponseBodyWebRulesProxyTypes } from "./DescribeDomainResourceResponseBodyWebRulesProxyTypes";


export class DescribeDomainResourceResponseBodyWebRules extends $dara.Model {
  /**
   * @remarks
   * The IP addresses that are included in the blacklist of the domain name.
   */
  blackList?: string[];
  /**
   * @remarks
   * Indicates whether Frequency Control is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  ccEnabled?: boolean;
  /**
   * @remarks
   * Indicates whether the Custom Rules switch of Frequency Control is turned on. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  ccRuleEnabled?: boolean;
  /**
   * @remarks
   * The mode of Frequency Control. Valid values:
   * 
   * *   **default**: the Normal mode
   * *   **gf_under_attack**: the Emergency mode
   * *   **gf_sos_verify**: the Strict mode
   * *   **gf_sos_verify**: the Super Strict mode
   * 
   * @example
   * default
   */
  ccTemplate?: string;
  /**
   * @remarks
   * The name of the SSL certificate used by the domain name.
   * 
   * @example
   * 49944XX.pem
   */
  certName?: string;
  /**
   * @remarks
   * The CNAME provided by the instance to which the domain name is added.
   * 
   * @example
   * 0ekb69x3j9wvXXXX.aliyunddosXXXX.com
   */
  cname?: string;
  /**
   * @remarks
   * The custom cipher suites.
   */
  customCiphers?: string[];
  /**
   * @remarks
   * The domain name of the website.
   * 
   * @example
   * www.example.com
   */
  domain?: string;
  /**
   * @remarks
   * Indicates whether Enable HTTP/2 is turned on. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  http2Enable?: boolean;
  /**
   * @remarks
   * Indicates whether Enable HTTPS Redirection is turned on. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  http2HttpsEnable?: boolean;
  /**
   * @remarks
   * Indicates whether Enable HTTP Redirection of Back-to-origin Requests is turned on. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  https2HttpEnable?: boolean;
  /**
   * @remarks
   * The advanced HTTPS settings. This parameter takes effect only when the value of the **ProxyType** parameter includes **https**. The value is a string that consists of a JSON struct. The JSON struct contains the following fields:
   * 
   * *   **Http2https**: indicates whether Enable HTTPS Redirection is turned on. Data type: integer. Valid values: **0** and **1**. The value 0 indicates that Enable HTTPS Redirection is turned on. The value 1 indicates that Enable HTTPS Redirection is turned off.
   * *   **Https2http**: indicates whether Enable HTTP Redirection of Back-to-origin Requests is turned on. Data type: integer. Valid values: **0** and **1**. The value 0 indicates that the feature is turned on. The value 1 indicates that the feature is turned off.
   * *   **Http2**: indicates whether Enable HTTP/2 is turned on. Data type: integer. Valid values: **0** and **1**. The value 0 indicates that Enable HTTP/2 is turned off. The value 1 indicates that Enable HTTP/2 is turned on.
   * 
   * @example
   * {"Https2http":0,"Http2":0,"Http2https":0}
   */
  httpsExt?: string;
  /**
   * @remarks
   * The IDs of the instances to which the domain name is added.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * Indicates whether the Online Certificate Status Protocol (OCSP) feature is turned on. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  ocspEnabled?: boolean;
  /**
   * @remarks
   * The scheduling algorithm for back-to-origin traffic. Valid values:
   * 
   * *   **ip_hash**: the IP hash algorithm. This algorithm is used to redirect the requests from the same IP address to the same origin server.
   * *   **rr**: the round-robin algorithm. This algorithm is used to redirect requests to origin servers in turn.
   * *   **least_time**: the least response time algorithm. This algorithm is used to minimize the latency when requests are forwarded from the instance to origin servers based on the intelligent DNS resolution feature.
   * 
   * @example
   * ip_hash
   */
  policyMode?: string;
  /**
   * @remarks
   * Indicates whether the instance forwards the traffic that is destined for the website. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  proxyEnabled?: boolean;
  /**
   * @remarks
   * The details about the protocol type and port number.
   */
  proxyTypes?: DescribeDomainResourceResponseBodyWebRulesProxyTypes[];
  /**
   * @remarks
   * The reason why the domain name is invalid. Valid values:
   * 
   * *   **1**: No Content Provider (ICP) filing is completed for the domain name.
   * *   **2**: The business for which you registered the domain name does not meet regulatory requirements.
   * 
   * If the two reasons are both involved, the value **2** is returned.
   * 
   * @example
   * 1
   */
  punishReason?: number;
  /**
   * @remarks
   * Indicates whether the domain name is invalid. Valid values:
   * 
   * *   **true**: The domain name is invalid. You can view the specific reasons from the **PunishReason** parameter.
   * *   **false**: The domain name is valid.
   * 
   * @example
   * false
   */
  punishStatus?: boolean;
  /**
   * @remarks
   * The addresses of origin servers.
   */
  realServers?: string[];
  /**
   * @remarks
   * The address type of the origin server. Valid values:
   * 
   * *   **0**: IP address
   * *   **1**: domain name
   * 
   * @example
   * 0
   */
  rsType?: number;
  /**
   * @remarks
   * Indicates whether TLS 1.3 is supported. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  ssl13Enabled?: boolean;
  /**
   * @remarks
   * The type of the cipher suite. Valid values:
   * 
   * *   **default**: custom cipher suite
   * *   **all**: all cipher suites
   * *   **strong**: strong cipher suites
   * 
   * @example
   * default
   */
  sslCiphers?: string;
  /**
   * @remarks
   * The version of the TLS protocol. Valid values:
   * 
   * *   **tls1.0**: TLS 1.0 or later
   * *   **tls1.1**: TLS 1.1 or later
   * *   **tls1.2**: TLS 1.2 or later
   * 
   * @example
   * tls1.0
   */
  sslProtocols?: string;
  /**
   * @remarks
   * The IP addresses that are included in the whitelist of the domain name.
   */
  whiteList?: string[];
  static names(): { [key: string]: string } {
    return {
      blackList: 'BlackList',
      ccEnabled: 'CcEnabled',
      ccRuleEnabled: 'CcRuleEnabled',
      ccTemplate: 'CcTemplate',
      certName: 'CertName',
      cname: 'Cname',
      customCiphers: 'CustomCiphers',
      domain: 'Domain',
      http2Enable: 'Http2Enable',
      http2HttpsEnable: 'Http2HttpsEnable',
      https2HttpEnable: 'Https2HttpEnable',
      httpsExt: 'HttpsExt',
      instanceIds: 'InstanceIds',
      ocspEnabled: 'OcspEnabled',
      policyMode: 'PolicyMode',
      proxyEnabled: 'ProxyEnabled',
      proxyTypes: 'ProxyTypes',
      punishReason: 'PunishReason',
      punishStatus: 'PunishStatus',
      realServers: 'RealServers',
      rsType: 'RsType',
      ssl13Enabled: 'Ssl13Enabled',
      sslCiphers: 'SslCiphers',
      sslProtocols: 'SslProtocols',
      whiteList: 'WhiteList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blackList: { 'type': 'array', 'itemType': 'string' },
      ccEnabled: 'boolean',
      ccRuleEnabled: 'boolean',
      ccTemplate: 'string',
      certName: 'string',
      cname: 'string',
      customCiphers: { 'type': 'array', 'itemType': 'string' },
      domain: 'string',
      http2Enable: 'boolean',
      http2HttpsEnable: 'boolean',
      https2HttpEnable: 'boolean',
      httpsExt: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      ocspEnabled: 'boolean',
      policyMode: 'string',
      proxyEnabled: 'boolean',
      proxyTypes: { 'type': 'array', 'itemType': DescribeDomainResourceResponseBodyWebRulesProxyTypes },
      punishReason: 'number',
      punishStatus: 'boolean',
      realServers: { 'type': 'array', 'itemType': 'string' },
      rsType: 'number',
      ssl13Enabled: 'boolean',
      sslCiphers: 'string',
      sslProtocols: 'string',
      whiteList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.blackList)) {
      $dara.Model.validateArray(this.blackList);
    }
    if(Array.isArray(this.customCiphers)) {
      $dara.Model.validateArray(this.customCiphers);
    }
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    if(Array.isArray(this.proxyTypes)) {
      $dara.Model.validateArray(this.proxyTypes);
    }
    if(Array.isArray(this.realServers)) {
      $dara.Model.validateArray(this.realServers);
    }
    if(Array.isArray(this.whiteList)) {
      $dara.Model.validateArray(this.whiteList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

