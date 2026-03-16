// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TrafficPolicyLoadBalancerSettingsConsistentHashLBConfigHttpCookie extends $dara.Model {
  /**
   * @remarks
   * The name of the cookie.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The path of the cookie.
   * 
   * @example
   * /path
   */
  path?: string;
  /**
   * @remarks
   * The lifecycle of the cookie.
   * 
   * @example
   * 10s
   */
  TTL?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      path: 'Path',
      TTL: 'TTL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      path: 'string',
      TTL: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrafficPolicyLoadBalancerSettingsConsistentHashLBConfig extends $dara.Model {
  /**
   * @remarks
   * The type of the object based on which consistent hashing is performed. Valid values:
   * 
   * *   QUERY_PARAMETER: request parameter
   * *   COOKIE: cookie
   * *   SOURCE_IP: the source IP address
   * *   HEADER: request header
   * 
   * @example
   * QUERY_PARAMETER
   */
  consistentHashLBType?: string;
  /**
   * @remarks
   * You must specify this parameter only if ConsistentHashLBType is set to COOKIE.
   */
  httpCookie?: TrafficPolicyLoadBalancerSettingsConsistentHashLBConfigHttpCookie;
  /**
   * @remarks
   * The name of the object based on which consistent hashing is performed. If consistent hashing is performed based on a parameter, set the value to the parameter name. If consistent hashing is performed based on a header, set the value to the header name.
   * 
   * @example
   * test
   */
  parameterName?: string;
  static names(): { [key: string]: string } {
    return {
      consistentHashLBType: 'ConsistentHashLBType',
      httpCookie: 'HttpCookie',
      parameterName: 'ParameterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consistentHashLBType: 'string',
      httpCookie: TrafficPolicyLoadBalancerSettingsConsistentHashLBConfigHttpCookie,
      parameterName: 'string',
    };
  }

  validate() {
    if(this.httpCookie && typeof (this.httpCookie as any).validate === 'function') {
      (this.httpCookie as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrafficPolicyLoadBalancerSettings extends $dara.Model {
  /**
   * @remarks
   * The data structure.
   */
  consistentHashLBConfig?: TrafficPolicyLoadBalancerSettingsConsistentHashLBConfig;
  /**
   * @remarks
   * The load balancing type. Valid values:
   * 
   * *       ROUND_ROBIN: round robin 
   * *       LEAST_CONN: least connection load balancing 
   * *       RANDOM: random load balancing 
   * *       CONSISTENT_HASH: consistent hashing load balancing
   * 
   * @example
   * RANDOM
   */
  loadbalancerType?: string;
  /**
   * @remarks
   * The prefetch duration. Unit: seconds.
   */
  warmupDuration?: number;
  static names(): { [key: string]: string } {
    return {
      consistentHashLBConfig: 'ConsistentHashLBConfig',
      loadbalancerType: 'LoadbalancerType',
      warmupDuration: 'WarmupDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consistentHashLBConfig: TrafficPolicyLoadBalancerSettingsConsistentHashLBConfig,
      loadbalancerType: 'string',
      warmupDuration: 'number',
    };
  }

  validate() {
    if(this.consistentHashLBConfig && typeof (this.consistentHashLBConfig as any).validate === 'function') {
      (this.consistentHashLBConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrafficPolicyTlsSetting extends $dara.Model {
  /**
   * @remarks
   * The trusted CA certificate chain. In mTLS, if the backend service certificate is issued by a private certificate authority (CA), you must add its CA certificate to the trusted CA certificate chain.
   * 
   * @example
   * -----BEGIN CERTIFICATE----- MIIH0zCCBbugAwIBAgIIXsO3pkN/pOAwDQYJKoZIhvcNAQEFBQAwQjESMBAGA1UE AwwJQUNDVlJBSVoxMRAwDgYDVQQLDAdQS0lBQ0NWMQ0wCwYDVQQKDARBQ0NWMQsw CQYDVQQGEwJFUzAeFw0xMTA1MDUwOTM3MzdaFw0zMDEyMzEwOTM3MzdaMEIxEjAQ BgNVBAMMCUFDQ1ZSQUlaMTEQMA4GA1UECwwHUEtJQUNDVjENMAsGA1UECgwEQUND VjELMAkGA1UEBhMCRVMwggIiMA0GCSqGSIb3DQEBAQUAA4ICDwAwggIKAoICAQCb qau/YUqXry+XZpp0X9DZlv3P4uRm7x8fRzPCRKPfmt4ftVTdFXxpNRFvu8gMjmoY HtiP2Ra8EEg2XPBjs5BaXCQ316PWywlxufEBcoSwfdtNgM3802/J+Nq2DoLSRYWo G2ioPej0RGy9ocLLA76MPhMAhN9KSMDjIgro6TenGEyxCQ0jVn8ETdkXhBilyNpA lHPrzg5XPAOBOp0KoVdDaaxXbXmQeOW1tDvYvEyNKKGno6e6Ak4l0Squ7a4DIrhr IA8wKFSVf+DuzgpmndFALW4ir50awQUZ0m/A8p/4e7MCQvtQqR0tkw8jq8bBD5L/ 0KIV9VMJcRz/RROE5iZe+OCIHAr8Fraocwa48GOEAqDGWuzndN9wrqODJerWx5eH k6fGioozl2A3ED6XPm4pFdahD9GILBKfb6qkxkLrQaLjlUPTAYVtjrs78yM2x/47 4KElB0iryYl0/wiPgL/AlmXz7uxLaL2diMMxs0Dx6M/2OLuc5NF/1OVYm3z61PMO m3WR5LpSLhl+0fXNWhn8ugb2+1KoS5kE3fj5tItQo05iifCHJPqDQsGH+tUtKSpa cXpkatcnYGMN285J9Y0fkIkyF/hzQ7jSWpOGYdbhdQrqeWZ2iE9x6wQl1gpaepPl uUsXQA+xtrn13k/c4LOsOxFwYIRKQ26ZIMApcQrAZQIDAQABo4ICyzCCAscwfQYI KwYBBQUHAQEEcTBvMEwGCCsGAQUFBzAChkBodHRwOi8vd3d3LmFjY3YuZXMvZmls ZWFkbWluL0FyY2hpdm9zL2NlcnRpZmljYWRvcy9yYWl6YWNjdjEuY3J0MB8GCCsG AQUFBzABhhNodHRwOi8vb2NzcC5hY2N2LmVzMB0GA1UdDgQWBBTSh7Tj3zcnk1X2 VuqB5TbMjB4/vTAPBgNVHRMBAf8EBTADAQH/MB8GA1UdIwQYMBaAFNKHtOPfNyeT VfZW6oHlNsyMHj+9MIIBcwYDVR0gBIIBajCCAWYwggFiBgRVHSAAMIIBWDCCASIG CCsGAQUFBwICMIIBFB6CARAAQQB1AHQAbwByAGkAZABhAGQAIABkAGUAIABDAGUA cgB0AGkAZgBpAGMAYQBjAGkA8wBuACAAUgBhAO0AegAgAGQAZQAgAGwAYQAgAEEA QwBDAFYAIAAoAEEAZwBlAG4AYwBpAGEAIABkAGUAIABUAGUAYwBuAG8AbABvAGcA 7QBhACAAeQAgAEMAZQByAHQAaQBmAGkAYwBhAGMAaQDzAG4AIABFAGwAZQBjAHQA cgDzAG4AaQBjAGEALAAgAEMASQBGACAAUQA0ADYAMAAxADEANQA2AEUAKQAuACAA QwBQAFMAIABlAG4AIABoAHQAdABwADoALwAvAHcAdwB3AC4AYQBjAGMAdgAuAGUA czAwBggrBgEFBQcCARYkaHR0cDovL3d3dy5hY2N2LmVzL2xlZ2lzbGFjaW9uX2Mu aHRtMFUGA1UdHwROMEwwSqBIoEaGRGh0dHA6Ly93d3cuYWNjdi5lcy9maWxlYWRt aW4vQXJjaGl2b3MvY2VydGlmaWNhZG9zL3JhaXphY2N2MV9kZXIuY3JsMA4GA1Ud DwEB/wQEAwIBBjAXBgNVHREEEDAOgQxhY2N2QGFjY3YuZXMwDQYJKoZIhvcNAQEF BQADggIBAJcxAp/n/UNnSEQU5CmH7UwoZtCPNdpNYbdKl02125DgBS4OxnnQ8pdp D70ER9m+27Up2pvZrqmZ1dM8MJP1jaGo/AaNRPTKFpV8M9xii6g3+CfYCS0b78gU JyCpZET/LtZ1qmxNYEAZSUNUY9rizLpm5U9EelvZaoErQNV/+QEnWCzI7UiRfD+m AM/EKXMRNt6GGT6d7hmKG9Ww7Y49nCrADdg9ZuM8Db3VlFzi4qc1GwQA9j9ajepD vV+JHanBsMyZ4k0ACtrJJ1vnE5Bc5PUzolVt3OAJTS+xJlsndQAJxGJ3KQhfnlms tn6tn1QwIgPBHnFk/vk4CpYY3QIUrCPLBhwepH2NDd4nQeit2hW3sCPdK6jT2iWH 7ehVRE2I9DZ+hJp4rPcOVkkO1jMl1oRQQmwgEh0q1b688nCBpHBgvgW1m54ERL5h I6zppSSMEYCUWqKiuUnSwdzRp+0xESyeGabu4VXhwOrPDYTkF7eifKXeVSUG7szA h1xA2syVP1XgNce4hL60Xc16gwFy7ofmXx2utYXGJt/mwZrpHgJHnyqobalbz+xF d3+YJ5oyXSrjhO7FmGYvliAd3djDJ9ew+f7Zfc3Qn48LFFhRny+Lwzgt3uiP1o2H pPVWQxaZLPSkVrQ0uGE3ycJYgBugl6H8WY3pEfbRD0tVNEYqi4Y7 -----END CERTIFICATE-----
   */
  caCertContent?: string;
  /**
   * @remarks
   * The ID of the certificate that is managed in Alibaba Cloud Security.
   * 
   * @example
   * 6456988-cn-hangzhou
   */
  certId?: string;
  /**
   * @remarks
   * The server name indication (SNI) that is used to establish TLS links.
   * 
   * @example
   * www.aliyun.com
   */
  sni?: string;
  /**
   * @remarks
   * The Transport Layer Security (TLS) mode that is used to distribute traffic to backend services. Valid values:
   * 
   * *   DISABLE: TLS is disabled. Plaintext is used.
   * *   SIMPLE: TLS is enabled.
   * *   MUTUAL: Mutual Transport Layer Security (mTLS) is enabled.
   * 
   * This parameter is required.
   * 
   * @example
   * SIMPLE
   */
  tlsMode?: string;
  static names(): { [key: string]: string } {
    return {
      caCertContent: 'CaCertContent',
      certId: 'CertId',
      sni: 'Sni',
      tlsMode: 'TlsMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caCertContent: 'string',
      certId: 'string',
      sni: 'string',
      tlsMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrafficPolicy extends $dara.Model {
  /**
   * @remarks
   * The load balancing settings.
   */
  loadBalancerSettings?: TrafficPolicyLoadBalancerSettings;
  /**
   * @remarks
   * The data structure.
   */
  tlsSetting?: TrafficPolicyTlsSetting;
  static names(): { [key: string]: string } {
    return {
      loadBalancerSettings: 'LoadBalancerSettings',
      tlsSetting: 'TlsSetting',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancerSettings: TrafficPolicyLoadBalancerSettings,
      tlsSetting: TrafficPolicyTlsSetting,
    };
  }

  validate() {
    if(this.loadBalancerSettings && typeof (this.loadBalancerSettings as any).validate === 'function') {
      (this.loadBalancerSettings as any).validate();
    }
    if(this.tlsSetting && typeof (this.tlsSetting as any).validate === 'function') {
      (this.tlsSetting as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

