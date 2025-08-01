// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeWebRulesResponseBodyWebRulesGmCert } from "./DescribeWebRulesResponseBodyWebRulesGmCert";
import { DescribeWebRulesResponseBodyWebRulesProxyTypes } from "./DescribeWebRulesResponseBodyWebRulesProxyTypes";
import { DescribeWebRulesResponseBodyWebRulesRealServers } from "./DescribeWebRulesResponseBodyWebRulesRealServers";


export class DescribeWebRulesResponseBodyWebRules extends $dara.Model {
  /**
   * @remarks
   * The IP addresses in the blacklist for the domain name.
   */
  blackList?: string[];
  /**
   * @remarks
   * Indicates whether the Frequency Control policy is enabled. Valid values:
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
   * Indicates whether the Custom Rule switch of the Frequency Control policy is turned on. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  ccRuleEnabled?: boolean;
  /**
   * @remarks
   * The mode of the Frequency Control policy. Valid values:
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
   * The name of the SSL certificate.
   * 
   * @example
   * testcert
   */
  certName?: string;
  /**
   * @remarks
   * The region where the certificate is used. Valid values:
   * 
   * *   cn-hangzhou (default): the Chinese mainland
   * *   ap-southeast-1: outside the Chinese mainland
   * 
   * @example
   * cn-hangzhou
   */
  certRegion?: string;
  /**
   * @remarks
   * The CNAME provided by the Anti-DDoS Pro or Anti-DDoS Premium instance to which the domain name is added.
   * 
   * @example
   * kzmk7b8tt351****.aliyunddos1014****
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
   * example.com
   */
  domain?: string;
  /**
   * @remarks
   * The SM certificate settings.
   */
  gmCert?: DescribeWebRulesResponseBodyWebRulesGmCert;
  /**
   * @remarks
   * Indicates whether Enable HTTP/2 is turned on. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  http2Enable?: boolean;
  /**
   * @remarks
   * Indicates whether Enable HTTPS Redirection was turned on. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
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
   * true
   */
  https2HttpEnable?: boolean;
  /**
   * @remarks
   * Indicates whether the Online Certificate Status Protocol (OCSP) feature is enabled. Valid values:
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
   * The load balancing algorithm for back-to-origin traffic. Valid values:
   * 
   * *   **ip_hash**: the IP hash algorithm. This algorithm is used to redirect the requests from the same IP address to the same origin server.
   * *   **rr**: the round-robin algorithm. This algorithm is used to redirect requests to origin servers in turn.
   * *   **least_time**: the least response time algorithm. This algorithm is used to minimize the latency when requests are forwarded from Anti-DDoS Pro or Anti-DDoS Premium instances to origin servers based on the intelligent DNS resolution feature.
   * 
   * @example
   * ip_hash
   */
  policyMode?: string;
  /**
   * @remarks
   * Indicates whether the forwarding rule is enabled. Valid values:
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
   * The details of the protocol type and port number.
   */
  proxyTypes?: DescribeWebRulesResponseBodyWebRulesProxyTypes[];
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
   * *   **true**: You can view the specific reasons from the **PunishReason** parameter.
   * *   **false**
   * 
   * @example
   * true
   */
  punishStatus?: boolean;
  /**
   * @remarks
   * The details of the origin server address.
   */
  realServers?: DescribeWebRulesResponseBodyWebRulesRealServers[];
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
   * *   **default**: custom cipher suites
   * *   **all**: all cipher suites, which contain strong and weak cipher suites
   * *   **strong**: strong cipher suites
   * 
   * @example
   * default
   */
  sslCiphers?: string;
  /**
   * @remarks
   * The version of the Transport Layer Security (TLS) protocol. Valid values:
   * 
   * *   **tls1.0**: TLS 1.0 or later
   * *   **tls1.1**: TLS 1.1 or later
   * *   **tls1.2**: TLS 1.2 or later
   * 
   * @example
   * tls1.1
   */
  sslProtocols?: string;
  /**
   * @remarks
   * The name of the certificate uploaded by the user to the certificate center.
   * 
   * @example
   * test
   */
  userCertName?: string;
  /**
   * @remarks
   * The IP addresses in the whitelist for the domain name.
   */
  whiteList?: string[];
  static names(): { [key: string]: string } {
    return {
      blackList: 'BlackList',
      ccEnabled: 'CcEnabled',
      ccRuleEnabled: 'CcRuleEnabled',
      ccTemplate: 'CcTemplate',
      certName: 'CertName',
      certRegion: 'CertRegion',
      cname: 'Cname',
      customCiphers: 'CustomCiphers',
      domain: 'Domain',
      gmCert: 'GmCert',
      http2Enable: 'Http2Enable',
      http2HttpsEnable: 'Http2HttpsEnable',
      https2HttpEnable: 'Https2HttpEnable',
      ocspEnabled: 'OcspEnabled',
      policyMode: 'PolicyMode',
      proxyEnabled: 'ProxyEnabled',
      proxyTypes: 'ProxyTypes',
      punishReason: 'PunishReason',
      punishStatus: 'PunishStatus',
      realServers: 'RealServers',
      ssl13Enabled: 'Ssl13Enabled',
      sslCiphers: 'SslCiphers',
      sslProtocols: 'SslProtocols',
      userCertName: 'UserCertName',
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
      certRegion: 'string',
      cname: 'string',
      customCiphers: { 'type': 'array', 'itemType': 'string' },
      domain: 'string',
      gmCert: DescribeWebRulesResponseBodyWebRulesGmCert,
      http2Enable: 'boolean',
      http2HttpsEnable: 'boolean',
      https2HttpEnable: 'boolean',
      ocspEnabled: 'boolean',
      policyMode: 'string',
      proxyEnabled: 'boolean',
      proxyTypes: { 'type': 'array', 'itemType': DescribeWebRulesResponseBodyWebRulesProxyTypes },
      punishReason: 'number',
      punishStatus: 'boolean',
      realServers: { 'type': 'array', 'itemType': DescribeWebRulesResponseBodyWebRulesRealServers },
      ssl13Enabled: 'boolean',
      sslCiphers: 'string',
      sslProtocols: 'string',
      userCertName: 'string',
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
    if(this.gmCert && typeof (this.gmCert as any).validate === 'function') {
      (this.gmCert as any).validate();
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

