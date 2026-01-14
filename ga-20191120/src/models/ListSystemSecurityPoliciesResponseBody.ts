// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSystemSecurityPoliciesResponseBodySecurityPolicies extends $dara.Model {
  /**
   * @remarks
   * The supported cipher suites. The value of this parameter is determined by the value of **TLSVersions**.
   * 
   * The specified cipher suites must be supported by at least one value of **TLSVersions**. For example, if you set TLSVersions to **TLSv1.3**, you must specify cipher suites that are supported by **TLSv1.3**.
   * 
   * *   Valid values when TLSVersions is set to **TLSv1.0** or **TLSv1.1**:
   * 
   *     *   ECDHE-ECDSA-AES128-SHA
   *     *   ECDHE-ECDSA-AES256-SHA
   *     *   ECDHE-RSA-AES128-SHA
   *     *   ECDHE-RSA-AES256-SHA
   *     *   AES128-SHA
   *     *   AES256-SHA
   *     *   DES-CBC3-SHA
   * 
   * *   Valid values when TLSVersions is set to **TLSv1.2**:
   * 
   *     *   ECDHE-ECDSA-AES128-SHA
   *     *   ECDHE-ECDSA-AES256-SHA
   *     *   ECDHE-RSA-AES128-SHA
   *     *   ECDHE-RSA-AES256-SHA
   *     *   AES128-SHA
   *     *   AES256-SHA
   *     *   DES-CBC3-SHA
   *     *   ECDHE-ECDSA-AES128-GCM-SHA256
   *     *   ECDHE-ECDSA-AES256-GCM-SHA384
   *     *   ECDHE-ECDSA-AES128-SHA256
   *     *   ECDHE-ECDSA-AES256-SHA384
   *     *   ECDHE-RSA-AES128-GCM-SHA256
   *     *   ECDHE-RSA-AES256-GCM-SHA384
   *     *   ECDHE-RSA-AES128-SHA256
   *     *   ECDHE-RSA-AES256-SHA384
   *     *   AES128-GCM-SHA256
   *     *   AES256-GCM-SHA384
   *     *   AES128-SHA256
   *     *   AES256-SHA256
   * 
   * *   Valid values when TLSVersions is set to **TLSv1.3**:
   * 
   *     *   TLS_AES_128_GCM_SHA256
   *     *   TLS_AES_256_GCM_SHA384
   *     *   TLS_CHACHA20_POLY1305_SHA256
   *     *   TLS_AES_128_CCM_SHA256
   *     *   TLS_AES_128_CCM_8_SHA256
   */
  ciphers?: string[];
  /**
   * @remarks
   * The ID of the TLS security policy.
   * 
   * @example
   * tls_cipher_policy_1_1
   */
  securityPolicyId?: string;
  /**
   * @remarks
   * The supported TLS versions. Valid values: **TLSv1.0**, **TLSv1.1**, **TLSv1.2**, and **TLSv1.3**.
   */
  tlsVersions?: string[];
  static names(): { [key: string]: string } {
    return {
      ciphers: 'Ciphers',
      securityPolicyId: 'SecurityPolicyId',
      tlsVersions: 'TlsVersions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ciphers: { 'type': 'array', 'itemType': 'string' },
      securityPolicyId: 'string',
      tlsVersions: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.ciphers)) {
      $dara.Model.validateArray(this.ciphers);
    }
    if(Array.isArray(this.tlsVersions)) {
      $dara.Model.validateArray(this.tlsVersions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSystemSecurityPoliciesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A9B4E54C-9CCD-4002-91A9-D38C6C209192
   */
  requestId?: string;
  /**
   * @remarks
   * The list of TLS security policies.
   */
  securityPolicies?: ListSystemSecurityPoliciesResponseBodySecurityPolicies[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      securityPolicies: 'SecurityPolicies',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      securityPolicies: { 'type': 'array', 'itemType': ListSystemSecurityPoliciesResponseBodySecurityPolicies },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.securityPolicies)) {
      $dara.Model.validateArray(this.securityPolicies);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

