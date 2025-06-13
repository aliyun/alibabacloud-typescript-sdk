// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetListenerAttributeResponseBodyXForwardedForConfig extends $dara.Model {
  /**
   * @remarks
   * The name of the custom header. This parameter takes effect only when **XForwardedForClientCertClientVerifyEnabled** is set to **true**.
   * 
   * The name is 1 to 40 characters in length, and can contain lowercase letters, hyphens (-), underscores (_), and digits.
   * 
   * > This parameter is available only when you create an HTTPS listener.
   * 
   * @example
   * test_client-verify-alias_123456
   */
  XForwardedForClientCertClientVerifyAlias?: string;
  /**
   * @remarks
   * Indicates whether the `X-Forwarded-Clientcert-clientverify` header is used to retrieve the verification result of the client certificate. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * > This parameter is available only when you create an HTTPS listener.
   * 
   * @example
   * true
   */
  XForwardedForClientCertClientVerifyEnabled?: boolean;
  /**
   * @remarks
   * The name of the custom header. This parameter takes effect only when **XForwardedForClientCertFingerprintEnabled** is set to **true**.
   * 
   * The name is 1 to 40 characters in length, and can contain lowercase letters, hyphens (-), underscores (_), and digits.
   * 
   * > This parameter is available only when you create an HTTPS listener.
   * 
   * @example
   * test_finger-print-alias_123456
   */
  XForwardedForClientCertFingerprintAlias?: string;
  /**
   * @remarks
   * Indicates whether the `X-Forwarded-Clientcert-fingerprint` header is used to retrieve the fingerprint of the client certificate. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * > This parameter is available only when you create an HTTPS listener.
   * 
   * @example
   * true
   */
  XForwardedForClientCertFingerprintEnabled?: boolean;
  /**
   * @remarks
   * The name of the custom header. This parameter takes effect only when **XForwardedForClientCertIssuerDNEnabled** is set to **true**.
   * 
   * The name is 1 to 40 characters in length, and can contain lowercase letters, hyphens (-), underscores (_), and digits.
   * 
   * > This parameter is available only when you create an HTTPS listener.
   * 
   * @example
   * test_issue-dn-alias_123456
   */
  XForwardedForClientCertIssuerDNAlias?: string;
  /**
   * @remarks
   * Indicates whether the `X-Forwarded-Clientcert-issuerdn` header is used to retrieve information about the authority that issues the client certificate. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * > This parameter is available only when you create an HTTPS listener.
   * 
   * @example
   * true
   */
  XForwardedForClientCertIssuerDNEnabled?: boolean;
  /**
   * @remarks
   * The name of the custom header. This parameter takes effect only when **XForwardedForClientCertSubjectDNEnabled** is set to **true**.
   * 
   * The name is 1 to 40 characters in length, and can contain lowercase letters, hyphens (-), underscores (_), and digits.
   * 
   * > This parameter is available only when you create an HTTPS listener.
   * 
   * @example
   * test_subject-dn-alias_123456
   */
  XForwardedForClientCertSubjectDNAlias?: string;
  /**
   * @remarks
   * Indicates whether the `X-Forwarded-Clientcert-subjectdn` header is used to retrieve information about the owner of the client certificate. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * > This parameter is available only when you create an HTTPS listener.
   * 
   * @example
   * true
   */
  XForwardedForClientCertSubjectDNEnabled?: boolean;
  /**
   * @remarks
   * Indicates whether the `X-Forwarded-Client-Ip` header is used to retrieve the source port of the ALB instance. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * > This parameter is available only when you create an HTTP, HTTPS, or QUIC listener.
   * 
   * @example
   * false
   */
  XForwardedForClientSourceIpsEnabled?: boolean;
  /**
   * @remarks
   * The trusted proxy IP address.
   * 
   * ALB traverses `X-Forwarded-For` backward and selects the first IP address that is not on the trusted IP address list as the real IP address of the client. The IP address is used in source IP address throttling.
   * 
   * @example
   * 10.1.1.0/24
   */
  XForwardedForClientSourceIpsTrusted?: string;
  /**
   * @remarks
   * Indicates whether the `X-Forwarded-Client-Port` header is used to retrieve the client port. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * > This parameter is available only when you create an HTTP or HTTPS listener.
   * 
   * @example
   * true
   */
  XForwardedForClientSrcPortEnabled?: boolean;
  /**
   * @remarks
   * Indicates whether the `X-Forwarded-For` header is used to retrieve the client IP address. Valid values:
   * 
   * *   **true** (default)
   * *   **false**
   * 
   * > *   If this parameter is set to **true**, the default value of the **XForwardedForProcessingMode** parameter is **append**. You can change it to **remove**.
   * > *   If this parameter is set to **false**, the `X-Forwarded-For` header in the request is not modified in any way before the request is sent to backend servers.
   * > *   This parameter is only available for HTTP and HTTPS listeners.
   * 
   * @example
   * true
   */
  XForwardedForEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to use the `X-Forwarded-Host` header to retrieve the client domain name. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * >  This parameter is available for HTTP, HTTPS, and QUIC listeners.
   * 
   * @example
   * false
   */
  XForwardedForHostEnabled?: boolean;
  /**
   * @remarks
   * Specifies how the `X-Forwarded-For` header is processed. This parameter takes effect only when **XForwardedForEnabled** is set to **true**. Valid values:
   * 
   * *   **append** (default)
   * *   **remove**
   * 
   * > *   If this parameter is set to **append**, ALB appends the IP address of the last hop to the existing `X-Forwarded-For` header in the request before the request is sent to backend servers.
   * > *   If this parameter is set to **remove**, ALB removes the `X-Forwarded-For` header in the request before the request is sent to backend servers, no matter whether the request carries the `X-Forwarded-For` header.
   * > *   This parameter is only available for HTTP and HTTPS listeners.
   * 
   * @example
   * append
   */
  XForwardedForProcessingMode?: string;
  /**
   * @remarks
   * Indicates whether the `X-Forwarded-Proto` header is used to retrieve the listening protocol. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * > This parameter is available only when you create an HTTP, HTTPS, or QUIC listener.
   * 
   * @example
   * true
   */
  XForwardedForProtoEnabled?: boolean;
  /**
   * @remarks
   * Indicates whether the `SLB-ID` header is used to retrieve the ID of the CLB instance. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * > This parameter is available only when you create an HTTP, HTTPS, or QUIC listener.
   * 
   * @example
   * true
   */
  XForwardedForSLBIdEnabled?: boolean;
  /**
   * @remarks
   * Indicates whether the `X-Forwarded-Port` header is used to retrieve the listening port of the ALB instance. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * > This parameter is available only when you create an HTTP, HTTPS, or QUIC listener.
   * 
   * @example
   * true
   */
  XForwardedForSLBPortEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      XForwardedForClientCertClientVerifyAlias: 'XForwardedForClientCertClientVerifyAlias',
      XForwardedForClientCertClientVerifyEnabled: 'XForwardedForClientCertClientVerifyEnabled',
      XForwardedForClientCertFingerprintAlias: 'XForwardedForClientCertFingerprintAlias',
      XForwardedForClientCertFingerprintEnabled: 'XForwardedForClientCertFingerprintEnabled',
      XForwardedForClientCertIssuerDNAlias: 'XForwardedForClientCertIssuerDNAlias',
      XForwardedForClientCertIssuerDNEnabled: 'XForwardedForClientCertIssuerDNEnabled',
      XForwardedForClientCertSubjectDNAlias: 'XForwardedForClientCertSubjectDNAlias',
      XForwardedForClientCertSubjectDNEnabled: 'XForwardedForClientCertSubjectDNEnabled',
      XForwardedForClientSourceIpsEnabled: 'XForwardedForClientSourceIpsEnabled',
      XForwardedForClientSourceIpsTrusted: 'XForwardedForClientSourceIpsTrusted',
      XForwardedForClientSrcPortEnabled: 'XForwardedForClientSrcPortEnabled',
      XForwardedForEnabled: 'XForwardedForEnabled',
      XForwardedForHostEnabled: 'XForwardedForHostEnabled',
      XForwardedForProcessingMode: 'XForwardedForProcessingMode',
      XForwardedForProtoEnabled: 'XForwardedForProtoEnabled',
      XForwardedForSLBIdEnabled: 'XForwardedForSLBIdEnabled',
      XForwardedForSLBPortEnabled: 'XForwardedForSLBPortEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      XForwardedForClientCertClientVerifyAlias: 'string',
      XForwardedForClientCertClientVerifyEnabled: 'boolean',
      XForwardedForClientCertFingerprintAlias: 'string',
      XForwardedForClientCertFingerprintEnabled: 'boolean',
      XForwardedForClientCertIssuerDNAlias: 'string',
      XForwardedForClientCertIssuerDNEnabled: 'boolean',
      XForwardedForClientCertSubjectDNAlias: 'string',
      XForwardedForClientCertSubjectDNEnabled: 'boolean',
      XForwardedForClientSourceIpsEnabled: 'boolean',
      XForwardedForClientSourceIpsTrusted: 'string',
      XForwardedForClientSrcPortEnabled: 'boolean',
      XForwardedForEnabled: 'boolean',
      XForwardedForHostEnabled: 'boolean',
      XForwardedForProcessingMode: 'string',
      XForwardedForProtoEnabled: 'boolean',
      XForwardedForSLBIdEnabled: 'boolean',
      XForwardedForSLBPortEnabled: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

