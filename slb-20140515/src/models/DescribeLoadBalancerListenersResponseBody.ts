// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLoadBalancerListenersResponseBodyListenersHTTPListenerConfig extends $dara.Model {
  /**
   * @remarks
   * The cookie configures for the server.
   * 
   * @example
   * B490B5EBF6F3CD402E515D22BCDA****
   */
  cookie?: string;
  /**
   * @remarks
   * The maximum amount of time to wait before the session cookie expires. Unit: seconds.
   * 
   * Valid values: **1** to **86400**.
   * 
   * @example
   * 500
   */
  cookieTimeout?: number;
  /**
   * @remarks
   * The listener port that is used for HTTP-to-HTTPS redirection.
   * 
   * >  If the **ListenerForward** parameter is set to **off**, this parameter is not returned.
   * 
   * @example
   * 80
   */
  forwardPort?: number;
  /**
   * @remarks
   * Indicates whether GZIP compression is enabled. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * on
   */
  gzip?: string;
  /**
   * @remarks
   * Indicates whether the health check feature is enabled. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * on
   */
  healthCheck?: string;
  /**
   * @remarks
   * The port that is used for health checks.
   * 
   * >  This parameter takes effect only when **HealthCheck** is set to **on**.
   * 
   * @example
   * 8080
   */
  healthCheckConnectPort?: number;
  /**
   * @remarks
   * The domain name that is used for health checks.
   * 
   * @example
   * www.example.com
   */
  healthCheckDomain?: string;
  /**
   * @remarks
   * The HTTP status code that indicates a healthy backend server.
   * 
   * @example
   * http_2xx,http_3xx
   */
  healthCheckHttpCode?: string;
  /**
   * @remarks
   * The HTTP version for health checks.
   * 
   * @example
   * HTTP 1.0
   */
  healthCheckHttpVersion?: string;
  /**
   * @remarks
   * The interval at which health checks are performed. Unit: seconds.
   * 
   * @example
   * 5
   */
  healthCheckInterval?: number;
  /**
   * @remarks
   * The health check method. Valid values: **head** and **get**.
   * 
   * @example
   * get
   */
  healthCheckMethod?: string;
  /**
   * @remarks
   * The maximum timeout period of a health check. Unit: seconds.
   * 
   * @example
   * 3
   */
  healthCheckTimeout?: number;
  /**
   * @remarks
   * The protocol that you want to use for health checks.
   * 
   * @example
   * tcp
   */
  healthCheckType?: string;
  /**
   * @remarks
   * The URI that is used for health checks.
   * 
   * @example
   * /test/index.html
   */
  healthCheckURI?: string;
  /**
   * @remarks
   * The number of times that an unhealthy backend server must consecutively pass health checks before it is declared healthy. In this case, the health check status of the backend server changes from **fail** to **success**.
   * 
   * Valid values: **2** to **10**.
   * 
   * @example
   * 4
   */
  healthyThreshold?: number;
  /**
   * @remarks
   * The timeout period of an idle connection. Unit: seconds. Valid values: **1** to **60**.
   * 
   * If no request is received within the specified timeout period, CLB closes the connection. When a request is received, CLB establishes a new connection.
   * 
   * @example
   * 15
   */
  idleTimeout?: number;
  /**
   * @remarks
   * Indicates whether HTTP-to-HTTPS redirection is enabled for the listener. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * on
   */
  listenerForward?: string;
  /**
   * @remarks
   * The timeout period of a request. Unit: seconds. Valid values: **1** to **180**.
   * 
   * If no response is received from a backend server during the request timeout period, CLB sends the `HTTP 504` status code to the client.
   * 
   * @example
   * 60
   */
  requestTimeout?: number;
  /**
   * @remarks
   * Indicates whether session persistence is enabled. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * on
   */
  stickySession?: string;
  /**
   * @remarks
   * The method used to handle the cookie. Valid values:
   * 
   * *   **insert**: inserts a cookie. CLB inserts the SERVERID cookie to the HTTP or HTTPS response to the first request from a client. Subsequent requests that carry the SERVERID cookie from the client are forwarded to the same backend server as the first request.
   * *   **server**: rewrites the original cookie. CLB rewrites the custom cookies in requests from a client. Subsequent requests from the client that carry the new cookie are forwarded to the same backend server as the first request.
   * 
   * @example
   * insert
   */
  stickySessionType?: string;
  /**
   * @remarks
   * The number of times that a healthy backend server must consecutively fail health checks before it is declared unhealthy. In this case, the health check status of the backend server changes from **success** to **fail**.
   * 
   * Valid values: **2** to **10**.
   * 
   * @example
   * 4
   */
  unhealthyThreshold?: number;
  /**
   * @remarks
   * Indicates whether the `X-Forwarded-For` header is used to preserve client IP addresses. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * on
   */
  XForwardedFor?: string;
  /**
   * @remarks
   * Indicates whether the `XForwardedFor_ClientSrcPort` header is used to retrieve the client port. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * on
   */
  XForwardedFor_ClientSrcPort?: string;
  /**
   * @remarks
   * Indicates whether the `SLB-ID` header is used to retrieve the ID of the CLB instance. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * on
   */
  XForwardedFor_SLBID?: string;
  /**
   * @remarks
   * Indicates whether the `SLB-IP` header is used to retrieve the VIP of the client. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * on
   */
  XForwardedFor_SLBIP?: string;
  /**
   * @remarks
   * Indicates whether the `XForwardedFor_SLBPORT` header is used to retrieve the listener port of the CLB instance. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * on
   */
  XForwardedFor_SLBPORT?: string;
  /**
   * @remarks
   * Indicates whether the `X-Forwarded-Proto` header is used to obtain the listener protocol. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * on
   */
  XForwardedFor_proto?: string;
  static names(): { [key: string]: string } {
    return {
      cookie: 'Cookie',
      cookieTimeout: 'CookieTimeout',
      forwardPort: 'ForwardPort',
      gzip: 'Gzip',
      healthCheck: 'HealthCheck',
      healthCheckConnectPort: 'HealthCheckConnectPort',
      healthCheckDomain: 'HealthCheckDomain',
      healthCheckHttpCode: 'HealthCheckHttpCode',
      healthCheckHttpVersion: 'HealthCheckHttpVersion',
      healthCheckInterval: 'HealthCheckInterval',
      healthCheckMethod: 'HealthCheckMethod',
      healthCheckTimeout: 'HealthCheckTimeout',
      healthCheckType: 'HealthCheckType',
      healthCheckURI: 'HealthCheckURI',
      healthyThreshold: 'HealthyThreshold',
      idleTimeout: 'IdleTimeout',
      listenerForward: 'ListenerForward',
      requestTimeout: 'RequestTimeout',
      stickySession: 'StickySession',
      stickySessionType: 'StickySessionType',
      unhealthyThreshold: 'UnhealthyThreshold',
      XForwardedFor: 'XForwardedFor',
      XForwardedFor_ClientSrcPort: 'XForwardedFor_ClientSrcPort',
      XForwardedFor_SLBID: 'XForwardedFor_SLBID',
      XForwardedFor_SLBIP: 'XForwardedFor_SLBIP',
      XForwardedFor_SLBPORT: 'XForwardedFor_SLBPORT',
      XForwardedFor_proto: 'XForwardedFor_proto',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cookie: 'string',
      cookieTimeout: 'number',
      forwardPort: 'number',
      gzip: 'string',
      healthCheck: 'string',
      healthCheckConnectPort: 'number',
      healthCheckDomain: 'string',
      healthCheckHttpCode: 'string',
      healthCheckHttpVersion: 'string',
      healthCheckInterval: 'number',
      healthCheckMethod: 'string',
      healthCheckTimeout: 'number',
      healthCheckType: 'string',
      healthCheckURI: 'string',
      healthyThreshold: 'number',
      idleTimeout: 'number',
      listenerForward: 'string',
      requestTimeout: 'number',
      stickySession: 'string',
      stickySessionType: 'string',
      unhealthyThreshold: 'number',
      XForwardedFor: 'string',
      XForwardedFor_ClientSrcPort: 'string',
      XForwardedFor_SLBID: 'string',
      XForwardedFor_SLBIP: 'string',
      XForwardedFor_SLBPORT: 'string',
      XForwardedFor_proto: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerListenersResponseBodyListenersHTTPSListenerConfig extends $dara.Model {
  /**
   * @remarks
   * The ID of the CA certificate.
   * 
   * @example
   * idkp-234-cn-test-0****
   */
  CACertificateId?: string;
  /**
   * @remarks
   * The cookie configures for the server.
   * 
   * @example
   * B490B5EBF6F3CD402E515D22BCDA****
   */
  cookie?: string;
  /**
   * @remarks
   * The maximum amount of time to wait before the session cookie expires. Unit: seconds.
   * 
   * Valid values: **1** to **86400**.
   * 
   * @example
   * 500
   */
  cookieTimeout?: number;
  /**
   * @remarks
   * Indicates whether `HTTP 2.0` is enabled. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * off
   */
  enableHttp2?: string;
  /**
   * @remarks
   * Indicates whether GZIP compression is enabled. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * on
   */
  gzip?: string;
  /**
   * @remarks
   * Indicates whether the health check feature is enabled. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * on
   */
  healthCheck?: string;
  /**
   * @remarks
   * The port that is used for health checks.
   * 
   * @example
   * 8080
   */
  healthCheckConnectPort?: number;
  /**
   * @remarks
   * The domain name that is used for health checks.
   * 
   * @example
   * www.example.com
   */
  healthCheckDomain?: string;
  /**
   * @remarks
   * The HTTP status code that indicates a healthy backend server.
   * 
   * @example
   * http_2xx,http_3xx
   */
  healthCheckHttpCode?: string;
  /**
   * @remarks
   * The HTTP version for health checks.
   * 
   * @example
   * HTTP 1.0
   */
  healthCheckHttpVersion?: string;
  /**
   * @remarks
   * The interval at which health checks are performed. Unit: seconds.
   * 
   * @example
   * 5
   */
  healthCheckInterval?: number;
  /**
   * @remarks
   * The health check method.
   * 
   * @example
   * get
   */
  healthCheckMethod?: string;
  /**
   * @remarks
   * The timeout period of a health check response. Unit: seconds.
   * 
   * @example
   * 3
   */
  healthCheckTimeout?: number;
  /**
   * @remarks
   * The protocol that you want to use for health checks.
   * 
   * @example
   * tcp
   */
  healthCheckType?: string;
  /**
   * @remarks
   * The URI that is used for health checks.
   * 
   * @example
   * /test/index.html
   */
  healthCheckURI?: string;
  /**
   * @remarks
   * The number of times that an unhealthy backend server must consecutively pass health checks before it is declared healthy. In this case, the health check status of the backend server changes from **fail** to **success**.
   * 
   * Valid values: **2** to **10**.
   * 
   * @example
   * 4
   */
  healthyThreshold?: number;
  /**
   * @remarks
   * The timeout period of an idle connection. Unit: seconds. Valid values: **1** to **60**.
   * 
   * If no request is received within the specified timeout period, CLB closes the connection. When a request is received, CLB establishes a new connection.
   * 
   * @example
   * 15
   */
  idleTimeout?: number;
  /**
   * @remarks
   * The request timeout period. Unit: seconds. Valid values: **1** to **180**.
   * 
   * If no response is received from a backend server during the request timeout period, CLB sends the `HTTP 504` status code to the client.
   * 
   * @example
   * 60
   */
  requestTimeout?: number;
  /**
   * @remarks
   * The ID of the server certificate.
   * 
   * @example
   * idkp-123-cn-test-0****
   */
  serverCertificateId?: string;
  /**
   * @remarks
   * Indicates whether session persistence is enabled. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * on
   */
  stickySession?: string;
  /**
   * @remarks
   * The method used to handle the cookie.
   * 
   * *   **insert**: inserts a cookie. CLB inserts the SERVERID cookie to the HTTP or HTTPS response to the first request from a client. Subsequent requests that carry the SERVERID cookie from the client are forwarded to the same backend server as the first request.
   * *   **server**: rewrites the original cookie. CLB rewrites the custom cookies in requests from a client. Subsequent requests from the client that carry the new cookie are forwarded to the same backend server as the first request.
   * 
   * @example
   * insert
   */
  stickySessionType?: string;
  /**
   * @remarks
   * A TLS security policy contains TLS protocols and cipher suites available for HTTPS.
   * 
   * *   **tls_cipher_policy_1_0**:
   * 
   *     Supported TLS versions: TLSv1.0, TLSv1.1, and TLSv1.2.
   * 
   *     Supported cipher suites: ECDHE-RSA-AES128-GCM-SHA256, ECDHE-RSA-AES256-GCM-SHA384, ECDHE-RSA-AES128-SHA256, ECDHE-RSA-AES256-SHA384, AES128-GCM-SHA256, AES256-GCM-SHA384, AES128-SHA256, AES256-SHA256, ECDHE-RSA-AES128-SHA, ECDHE-RSA-AES256-SHA, AES128-SHA, AES256-SHA, and DES-CBC3-SHA.
   * 
   * *   **tls_cipher_policy_1_1**:
   * 
   *     Supported TLS versions: TLSv1.1 and TLSv1.2.
   * 
   *     Supported cipher suites: ECDHE-RSA-AES128-GCM-SHA256, ECDHE-RSA-AES256-GCM-SHA384, ECDHE-RSA-AES128-SHA256, ECDHE-RSA-AES256-SHA384, AES128-GCM-SHA256, AES256-GCM-SHA384, AES128-SHA256, AES256-SHA256, ECDHE-RSA-AES128-SHA, ECDHE-RSA-AES256-SHA, AES128-SHA, AES256-SHA, and DES-CBC3-SHA.
   * 
   * *   **tls_cipher_policy_1_2**
   * 
   *     Supported TLS versions: TLSv1.2.
   * 
   *     Supported cipher suites: ECDHE-RSA-AES128-GCM-SHA256, ECDHE-RSA-AES256-GCM-SHA384, ECDHE-RSA-AES128-SHA256, ECDHE-RSA-AES256-SHA384, AES128-GCM-SHA256, AES256-GCM-SHA384, AES128-SHA256, AES256-SHA256, ECDHE-RSA-AES128-SHA, ECDHE-RSA-AES256-SHA, AES128-SHA, AES256-SHA, and DES-CBC3-SHA.
   * 
   * *   **tls_cipher_policy_1_2_strict**
   * 
   *     Supported TLS versions: TLSv1.2.
   * 
   *     Supported cipher suites: ECDHE-RSA-AES128-GCM-SHA256, ECDHE-RSA-AES256-GCM-SHA384, ECDHE-RSA-AES128-SHA256, ECDHE-RSA-AES256-SHA384, ECDHE-RSA-AES128-SHA, and ECDHE-RSA-AES256-SHA.
   * 
   * *   **tls_cipher_policy_1_2_strict_with_1_3**
   * 
   *     Supported TLS versions: TLSv1.2 and TLSv1.3.
   * 
   *     Supported cipher suites: TLS_AES_128_GCM_SHA256, TLS_AES_256_GCM_SHA384, TLS_CHACHA20_POLY1305_SHA256, TLS_AES_128_CCM_SHA256, TLS_AES_128_CCM_8_SHA256, ECDHE-ECDSA-AES128-GCM-SHA256, ECDHE-ECDSA-AES256-GCM-SHA384, ECDHE-ECDSA-AES128-SHA256, ECDHE-ECDSA-AES256-SHA384, ECDHE-RSA-AES128-GCM-SHA256, ECDHE-RSA-AES256-GCM-SHA384, ECDHE-RSA-AES128-SHA256, ECDHE-RSA-AES256-SHA384, ECDHE-ECDSA-AES128-SHA, ECDHE-ECDSA-AES256-SHA, ECDHE-RSA-AES128-SHA, and ECDHE-RSA-AES256-SHA.
   * 
   * @example
   * tls_cipher_policy_1_0
   */
  TLSCipherPolicy?: string;
  /**
   * @remarks
   * The number of times that a healthy backend server must consecutively fail health checks before it is declared unhealthy. In this case, the health check status of the backend server changes from **success** to **fail**.
   * 
   * Valid values: **2** to **10**.
   * 
   * @example
   * 4
   */
  unhealthyThreshold?: number;
  /**
   * @remarks
   * Indicates whether the `X-Forwarded-For` header is used to retrieve client IP addresses. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * on
   */
  XForwardedFor?: string;
  /**
   * @remarks
   * Indicates whether the `XForwardedFor_ClientCertClientVerify` header is used to obtain the verification result of the client certificate. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * off
   */
  XForwardedFor_ClientCertClientVerify?: string;
  /**
   * @remarks
   * Indicates whether the `XForwardedFor_ClientCertFingerprint` header is used to obtain the fingerprint of the client certificate. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * off
   */
  XForwardedFor_ClientCertFingerprint?: string;
  /**
   * @remarks
   * Indicates whether the `XForwardedFor_ClientCertIssuerDN` header is used to obtain information about the authority that issues the client certificate. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * off
   */
  XForwardedFor_ClientCertIssuerDN?: string;
  /**
   * @remarks
   * Indicates whether the `XForwardedFor_ClientCertSubjectDN` header is used to obtain information about the owner of the client certificate. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * off
   */
  XForwardedFor_ClientCertSubjectDN?: string;
  /**
   * @remarks
   * Indicates whether the `XForwardedFor_ClientSrcPort` header is used to retrieve the client port. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * off
   */
  XForwardedFor_ClientSrcPort?: string;
  /**
   * @remarks
   * Indicates whether the `SLB-ID` header is used to retrieve the ID of the CLB instance. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * on
   */
  XForwardedFor_SLBID?: string;
  /**
   * @remarks
   * Indicates whether the `SLB-IP` header is used to retrieve the VIP of the client. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * on
   */
  XForwardedFor_SLBIP?: string;
  /**
   * @remarks
   * Indicates whether the `XForwardedFor_SLBPORT` header is used to retrieve the listener port of the CLB instance. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * off
   */
  XForwardedFor_SLBPORT?: string;
  /**
   * @remarks
   * Indicates whether the `X-Forwarded-Proto` header is used to obtain the listener protocol. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * on
   */
  XForwardedFor_proto?: string;
  static names(): { [key: string]: string } {
    return {
      CACertificateId: 'CACertificateId',
      cookie: 'Cookie',
      cookieTimeout: 'CookieTimeout',
      enableHttp2: 'EnableHttp2',
      gzip: 'Gzip',
      healthCheck: 'HealthCheck',
      healthCheckConnectPort: 'HealthCheckConnectPort',
      healthCheckDomain: 'HealthCheckDomain',
      healthCheckHttpCode: 'HealthCheckHttpCode',
      healthCheckHttpVersion: 'HealthCheckHttpVersion',
      healthCheckInterval: 'HealthCheckInterval',
      healthCheckMethod: 'HealthCheckMethod',
      healthCheckTimeout: 'HealthCheckTimeout',
      healthCheckType: 'HealthCheckType',
      healthCheckURI: 'HealthCheckURI',
      healthyThreshold: 'HealthyThreshold',
      idleTimeout: 'IdleTimeout',
      requestTimeout: 'RequestTimeout',
      serverCertificateId: 'ServerCertificateId',
      stickySession: 'StickySession',
      stickySessionType: 'StickySessionType',
      TLSCipherPolicy: 'TLSCipherPolicy',
      unhealthyThreshold: 'UnhealthyThreshold',
      XForwardedFor: 'XForwardedFor',
      XForwardedFor_ClientCertClientVerify: 'XForwardedFor_ClientCertClientVerify',
      XForwardedFor_ClientCertFingerprint: 'XForwardedFor_ClientCertFingerprint',
      XForwardedFor_ClientCertIssuerDN: 'XForwardedFor_ClientCertIssuerDN',
      XForwardedFor_ClientCertSubjectDN: 'XForwardedFor_ClientCertSubjectDN',
      XForwardedFor_ClientSrcPort: 'XForwardedFor_ClientSrcPort',
      XForwardedFor_SLBID: 'XForwardedFor_SLBID',
      XForwardedFor_SLBIP: 'XForwardedFor_SLBIP',
      XForwardedFor_SLBPORT: 'XForwardedFor_SLBPORT',
      XForwardedFor_proto: 'XForwardedFor_proto',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CACertificateId: 'string',
      cookie: 'string',
      cookieTimeout: 'number',
      enableHttp2: 'string',
      gzip: 'string',
      healthCheck: 'string',
      healthCheckConnectPort: 'number',
      healthCheckDomain: 'string',
      healthCheckHttpCode: 'string',
      healthCheckHttpVersion: 'string',
      healthCheckInterval: 'number',
      healthCheckMethod: 'string',
      healthCheckTimeout: 'number',
      healthCheckType: 'string',
      healthCheckURI: 'string',
      healthyThreshold: 'number',
      idleTimeout: 'number',
      requestTimeout: 'number',
      serverCertificateId: 'string',
      stickySession: 'string',
      stickySessionType: 'string',
      TLSCipherPolicy: 'string',
      unhealthyThreshold: 'number',
      XForwardedFor: 'string',
      XForwardedFor_ClientCertClientVerify: 'string',
      XForwardedFor_ClientCertFingerprint: 'string',
      XForwardedFor_ClientCertIssuerDN: 'string',
      XForwardedFor_ClientCertSubjectDN: 'string',
      XForwardedFor_ClientSrcPort: 'string',
      XForwardedFor_SLBID: 'string',
      XForwardedFor_SLBIP: 'string',
      XForwardedFor_SLBPORT: 'string',
      XForwardedFor_proto: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerListenersResponseBodyListenersTCPListenerConfig extends $dara.Model {
  /**
   * @remarks
   * Indicates whether connection draining is enabled. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * off
   */
  connectionDrain?: string;
  /**
   * @remarks
   * The timeout period of connection draining. Unit: seconds.
   * 
   * Value values: **10 to 900**.
   * 
   * @example
   * 300
   */
  connectionDrainTimeout?: number;
  /**
   * @remarks
   * The timeout period of a connection. Unit: seconds.
   * 
   * @example
   * 500
   */
  establishedTimeout?: number;
  /**
   * @remarks
   * Indicates whether the health check feature is enabled. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * on
   */
  healthCheck?: string;
  /**
   * @remarks
   * The port that is used for health checks.
   * 
   * @example
   * 8080
   */
  healthCheckConnectPort?: number;
  /**
   * @remarks
   * The timeout period of health checks. Unit: seconds.
   * 
   * Valid values: **1** to **300**.
   * 
   * @example
   * 100
   */
  healthCheckConnectTimeout?: number;
  /**
   * @remarks
   * The domain name that is used for health checks.
   * 
   * @example
   * www.example.com
   */
  healthCheckDomain?: string;
  /**
   * @remarks
   * The HTTP status code that indicates a healthy backend server.
   * 
   * @example
   * http_2xx,http_3xx
   */
  healthCheckHttpCode?: string;
  /**
   * @remarks
   * The interval between two consecutive health checks. Unit: seconds.
   * 
   * @example
   * 5
   */
  healthCheckInterval?: number;
  /**
   * @remarks
   * The health check method.
   * 
   * @example
   * get
   */
  healthCheckMethod?: string;
  /**
   * @remarks
   * The protocol that you want to use for health checks.
   * 
   * @example
   * tcp
   */
  healthCheckType?: string;
  /**
   * @remarks
   * The URI that is used for health checks.
   * 
   * @example
   * /test/index.html
   */
  healthCheckURI?: string;
  /**
   * @remarks
   * The number of times that an unhealthy backend server must consecutively pass health checks before it is declared healthy. In this case, the health check status of the backend server changes from **fail** to **success**.
   * 
   * Valid values: **2** to **10**.
   * 
   * @example
   * 4
   */
  healthyThreshold?: number;
  /**
   * @remarks
   * The ID of the primary/secondary server group associated with the listener.
   * 
   * @example
   * rsp-0bfucw*****
   */
  masterSlaveServerGroupId?: string;
  /**
   * @remarks
   * Indicates whether session persistence is enabled. Unit: seconds.
   * 
   * Valid values: **0** to **3600**.
   * 
   * **0** indicates that session persistence is disabled.
   * 
   * @example
   * 0
   */
  persistenceTimeout?: number;
  /**
   * @remarks
   * Indicates whether the Proxy protocol is used to pass source client IP addresses to backend servers. Valid values:
   * 
   * *   **true**: enables the burst feature for the data disk.
   * *   **false**: The task is not being retried.
   * 
   * @example
   * false
   */
  proxyProtocolV2Enabled?: string;
  /**
   * @remarks
   * The number of times that a healthy backend server must consecutively fail health checks before it is declared unhealthy. In this case, the health check status of the backend server changes from **success** to **fail**.
   * 
   * Valid values: **2** to **10**.
   * 
   * @example
   * 4
   */
  unhealthyThreshold?: number;
  static names(): { [key: string]: string } {
    return {
      connectionDrain: 'ConnectionDrain',
      connectionDrainTimeout: 'ConnectionDrainTimeout',
      establishedTimeout: 'EstablishedTimeout',
      healthCheck: 'HealthCheck',
      healthCheckConnectPort: 'HealthCheckConnectPort',
      healthCheckConnectTimeout: 'HealthCheckConnectTimeout',
      healthCheckDomain: 'HealthCheckDomain',
      healthCheckHttpCode: 'HealthCheckHttpCode',
      healthCheckInterval: 'HealthCheckInterval',
      healthCheckMethod: 'HealthCheckMethod',
      healthCheckType: 'HealthCheckType',
      healthCheckURI: 'HealthCheckURI',
      healthyThreshold: 'HealthyThreshold',
      masterSlaveServerGroupId: 'MasterSlaveServerGroupId',
      persistenceTimeout: 'PersistenceTimeout',
      proxyProtocolV2Enabled: 'ProxyProtocolV2Enabled',
      unhealthyThreshold: 'UnhealthyThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionDrain: 'string',
      connectionDrainTimeout: 'number',
      establishedTimeout: 'number',
      healthCheck: 'string',
      healthCheckConnectPort: 'number',
      healthCheckConnectTimeout: 'number',
      healthCheckDomain: 'string',
      healthCheckHttpCode: 'string',
      healthCheckInterval: 'number',
      healthCheckMethod: 'string',
      healthCheckType: 'string',
      healthCheckURI: 'string',
      healthyThreshold: 'number',
      masterSlaveServerGroupId: 'string',
      persistenceTimeout: 'number',
      proxyProtocolV2Enabled: 'string',
      unhealthyThreshold: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerListenersResponseBodyListenersTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * TestKey
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * TestValue
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerListenersResponseBodyListenersUDPListenerConfig extends $dara.Model {
  /**
   * @remarks
   * Indicates whether connection draining is enabled. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * off
   */
  connectionDrain?: string;
  /**
   * @remarks
   * The timeout period of connection draining. Unit: seconds.
   * 
   * Value values: **10 to 900**.
   * 
   * @example
   * 300
   */
  connectionDrainTimeout?: number;
  /**
   * @remarks
   * Indicates whether the health check feature is enabled. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * on
   */
  healthCheck?: string;
  /**
   * @remarks
   * The port that is used for health checks.
   * 
   * @example
   * 8080
   */
  healthCheckConnectPort?: number;
  /**
   * @remarks
   * The timeout period for a health check response.
   * 
   * @example
   * 100
   */
  healthCheckConnectTimeout?: number;
  /**
   * @remarks
   * The response string of UDP health checks.
   * 
   * @example
   * ok
   */
  healthCheckExp?: string;
  /**
   * @remarks
   * The interval between two consecutive health checks. Unit: seconds.
   * 
   * @example
   * 5
   */
  healthCheckInterval?: number;
  /**
   * @remarks
   * The request string of UDP health checks.
   * 
   * @example
   * hello
   */
  healthCheckReq?: string;
  /**
   * @remarks
   * The number of times that a backend server must consecutively pass health checks before it is declared healthy.
   * 
   * @example
   * 4
   */
  healthyThreshold?: number;
  /**
   * @remarks
   * The ID of the primary/secondary server group that is associated with the listener.
   * 
   * @example
   * rsp-0bfucw****
   */
  masterSlaveServerGroupId?: string;
  /**
   * @remarks
   * Indicates whether the Proxy protocol is used to pass source client IP addresses to backend servers. Valid values:
   * 
   * *   **true**: enables the burst feature for the data disk.
   * *   **false**: The task is not being retried.
   * 
   * @example
   * false
   */
  proxyProtocolV2Enabled?: string;
  /**
   * @remarks
   * The number of times that a backend server must consecutively fail health checks before it is declared unhealthy.
   * 
   * @example
   * 4
   */
  unhealthyThreshold?: number;
  static names(): { [key: string]: string } {
    return {
      connectionDrain: 'ConnectionDrain',
      connectionDrainTimeout: 'ConnectionDrainTimeout',
      healthCheck: 'HealthCheck',
      healthCheckConnectPort: 'HealthCheckConnectPort',
      healthCheckConnectTimeout: 'HealthCheckConnectTimeout',
      healthCheckExp: 'HealthCheckExp',
      healthCheckInterval: 'HealthCheckInterval',
      healthCheckReq: 'HealthCheckReq',
      healthyThreshold: 'HealthyThreshold',
      masterSlaveServerGroupId: 'MasterSlaveServerGroupId',
      proxyProtocolV2Enabled: 'ProxyProtocolV2Enabled',
      unhealthyThreshold: 'UnhealthyThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionDrain: 'string',
      connectionDrainTimeout: 'number',
      healthCheck: 'string',
      healthCheckConnectPort: 'number',
      healthCheckConnectTimeout: 'number',
      healthCheckExp: 'string',
      healthCheckInterval: 'number',
      healthCheckReq: 'string',
      healthyThreshold: 'number',
      masterSlaveServerGroupId: 'string',
      proxyProtocolV2Enabled: 'string',
      unhealthyThreshold: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerListenersResponseBodyListeners extends $dara.Model {
  /**
   * @remarks
   * The ID of the access control list (ACL).
   * 
   * @example
   * nacl-a2do9e413e0spzasx****
   */
  aclId?: string;
  /**
   * @remarks
   * The IDs of the ACLs.
   */
  aclIds?: string[];
  /**
   * @remarks
   * Indicates whether access control is enabled. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * off
   */
  aclStatus?: string;
  /**
   * @remarks
   * The type of access control. Valid values:
   * 
   * *   **white**: The listener forwards requests only from IP addresses and CIDR blocks on the whitelist. Your service may be adversely affected if the whitelist is not properly configured. If a whitelist is configured, the listener forwards requests only from IP addresses that are added to the whitelist.
   * 
   * If you configure a whitelist but no IP address is added to the whitelist, the listener forwards all requests.
   * 
   * *   **black**: The listener blocks requests from IP addresses and CIDR blocks on the blacklist.
   * 
   * If you configure a blacklist but no IP address is added to the blacklist, the listener forwards all requests.
   * 
   * @example
   * white
   */
  aclType?: string;
  /**
   * @remarks
   * The port of the backend server.
   * 
   * >  This parameter takes effect only when the `VServerGroupId` and `MasterSlaveServerGroupId` parameters are both empty.
   * 
   * @example
   * 80
   */
  backendServerPort?: number;
  /**
   * @remarks
   * The maximum bandwidth of the listener. Unit: Mbit/s.
   * 
   * @example
   * -1
   */
  bandwidth?: number;
  /**
   * @remarks
   * The description of the listener.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The configurations of the HTTP listener.
   */
  HTTPListenerConfig?: DescribeLoadBalancerListenersResponseBodyListenersHTTPListenerConfig;
  /**
   * @remarks
   * The configurations of the HTTPS listener.
   */
  HTTPSListenerConfig?: DescribeLoadBalancerListenersResponseBodyListenersHTTPSListenerConfig;
  /**
   * @remarks
   * The listener port.
   * 
   * @example
   * 80
   */
  listenerPort?: number;
  /**
   * @remarks
   * The protocol used by the listener.
   * 
   * @example
   * http
   */
  listenerProtocol?: string;
  /**
   * @remarks
   * The ID of the CLB instance.
   * 
   * @example
   * lb-bp1b6c719dfa****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The scheduling algorithm. Valid values:
   * 
   * *   **wrr**: Backend servers with higher weights receive more requests than those with lower weights.
   * *   **rr**: Requests are distributed to backend servers in sequence.
   * *   **sch**: consistent hashing that is based on source IP addresses. Requests from the same source IP address are distributed to the same backend server.
   * *   **tch**: specifies consistent hashing based on the source IP address, destination IP address, source port, and destination port. Requests that have the same four factors are distributed to the same backend server.
   * *   **qch**: specifies consistent hashing based on Quick UDP Internet Connection (QUIC) IDs. Requests that contain the same QUIC ID are scheduled to the same backend server.
   * 
   * >  Only high-performance CLB instances support the **sch**, **tch**, and **qch** consistent hashing algorithms.
   * 
   * @example
   * wrr
   */
  scheduler?: string;
  /**
   * @remarks
   * The status of the listener. Valid values:
   * 
   * *   **running**
   * *   **stopped**
   * 
   * @example
   * running
   */
  status?: string;
  /**
   * @remarks
   * The configurations of the TCP listener.
   */
  TCPListenerConfig?: DescribeLoadBalancerListenersResponseBodyListenersTCPListenerConfig;
  /**
   * @remarks
   * A list of tags.
   */
  tags?: DescribeLoadBalancerListenersResponseBodyListenersTags[];
  /**
   * @remarks
   * The configurations of the UDP listener.
   */
  UDPListenerConfig?: DescribeLoadBalancerListenersResponseBodyListenersUDPListenerConfig;
  /**
   * @remarks
   * The ID of the vServer group associated with the listener.
   * 
   * @example
   * rsp-cige6j****
   */
  VServerGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      aclIds: 'AclIds',
      aclStatus: 'AclStatus',
      aclType: 'AclType',
      backendServerPort: 'BackendServerPort',
      bandwidth: 'Bandwidth',
      description: 'Description',
      HTTPListenerConfig: 'HTTPListenerConfig',
      HTTPSListenerConfig: 'HTTPSListenerConfig',
      listenerPort: 'ListenerPort',
      listenerProtocol: 'ListenerProtocol',
      loadBalancerId: 'LoadBalancerId',
      scheduler: 'Scheduler',
      status: 'Status',
      TCPListenerConfig: 'TCPListenerConfig',
      tags: 'Tags',
      UDPListenerConfig: 'UDPListenerConfig',
      VServerGroupId: 'VServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      aclIds: { 'type': 'array', 'itemType': 'string' },
      aclStatus: 'string',
      aclType: 'string',
      backendServerPort: 'number',
      bandwidth: 'number',
      description: 'string',
      HTTPListenerConfig: DescribeLoadBalancerListenersResponseBodyListenersHTTPListenerConfig,
      HTTPSListenerConfig: DescribeLoadBalancerListenersResponseBodyListenersHTTPSListenerConfig,
      listenerPort: 'number',
      listenerProtocol: 'string',
      loadBalancerId: 'string',
      scheduler: 'string',
      status: 'string',
      TCPListenerConfig: DescribeLoadBalancerListenersResponseBodyListenersTCPListenerConfig,
      tags: { 'type': 'array', 'itemType': DescribeLoadBalancerListenersResponseBodyListenersTags },
      UDPListenerConfig: DescribeLoadBalancerListenersResponseBodyListenersUDPListenerConfig,
      VServerGroupId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.aclIds)) {
      $dara.Model.validateArray(this.aclIds);
    }
    if(this.HTTPListenerConfig && typeof (this.HTTPListenerConfig as any).validate === 'function') {
      (this.HTTPListenerConfig as any).validate();
    }
    if(this.HTTPSListenerConfig && typeof (this.HTTPSListenerConfig as any).validate === 'function') {
      (this.HTTPSListenerConfig as any).validate();
    }
    if(this.TCPListenerConfig && typeof (this.TCPListenerConfig as any).validate === 'function') {
      (this.TCPListenerConfig as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    if(this.UDPListenerConfig && typeof (this.UDPListenerConfig as any).validate === 'function') {
      (this.UDPListenerConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerListenersResponseBody extends $dara.Model {
  /**
   * @remarks
   * A list of listeners of the CLB instance.
   * 
   * >  This parameter is not returned if the CLB instance does not have a listener.
   */
  listeners?: DescribeLoadBalancerListenersResponseBodyListeners[];
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that determines the start point of the query. Valid values:
   * 
   * *   If **NextToken** is empty, it indicates that no subsequent query is to be sent.
   * *   If a value is returned for **NextToken**, the value is the token that determines the start point of the next query.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 365F4154-92F6-4AE4-92F8-7FF34B540710
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      listeners: 'Listeners',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listeners: { 'type': 'array', 'itemType': DescribeLoadBalancerListenersResponseBodyListeners },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.listeners)) {
      $dara.Model.validateArray(this.listeners);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

