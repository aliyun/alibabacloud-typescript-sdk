// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTLSCipherPoliciesResponseBodyTLSCipherPoliciesRelateListeners extends $dara.Model {
  /**
   * @remarks
   * The ID of the CLB instance.
   * 
   * @example
   * lb-bp1b6c719dfa08ex****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The listening port. Valid values: **1** to **65535**.
   * 
   * @example
   * 80
   */
  port?: number;
  /**
   * @remarks
   * The listening protocol. Valid values:
   * 
   * *   **TCP**
   * *   **UDP**
   * *   **HTTP**
   * *   **HTTPS**
   * 
   * @example
   * HTTPS
   */
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      loadBalancerId: 'LoadBalancerId',
      port: 'Port',
      protocol: 'Protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancerId: 'string',
      port: 'number',
      protocol: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTLSCipherPoliciesResponseBodyTLSCipherPolicies extends $dara.Model {
  /**
   * @remarks
   * The cipher suites supported by the TLS version.
   * 
   * TLS 1.0 and TLS 1.1 support the following cipher suites:
   * 
   * *   ECDHE-ECDSA-AES128-SHA
   * *   ECDHE-ECDSA-AES256-SHA
   * *   ECDHE-RSA-AES128-SHA
   * *   ECDHE-RSA-AES256-SHA
   * *   AES128-SHA AES256-SHA
   * *   DES-CBC3-SHA
   * 
   * TLS 1.2 supports the following cipher suites:
   * 
   * *   ECDHE-ECDSA-AES128-SHA
   * *   ECDHE-ECDSA-AES256-SHA
   * *   ECDHE-RSA-AES128-SHA
   * *   ECDHE-RSA-AES256-SHA
   * *   AES128-SHA AES256-SHA
   * *   DES-CBC3-SHA
   * *   ECDHE-ECDSA-AES128-GCM-SHA256
   * *   ECDHE-ECDSA-AES256-GCM-SHA384
   * *   ECDHE-ECDSA-AES128-SHA256
   * *   ECDHE-ECDSA-AES256-SHA384
   * *   ECDHE-RSA-AES128-GCM-SHA256
   * *   ECDHE-RSA-AES256-GCM-SHA384
   * *   ECDHE-RSA-AES128-SHA256
   * *   ECDHE-RSA-AES256-SHA384
   * *   AES128-GCM-SHA256
   * *   AES256-GCM-SHA384
   * *   AES128-SHA256 AES256-SHA256
   * 
   * TLS 1.3 supports the following cipher suites:
   * 
   * *   TLS_AES_128_GCM_SHA256
   * *   TLS_AES_256_GCM_SHA384
   * *   TLS_CHACHA20_POLY1305_SHA256
   * *   TLS_AES_128_CCM_SHA256
   * *   TLS_AES_128_CCM_8_SHA256
   */
  ciphers?: string[];
  /**
   * @remarks
   * The timestamp generated when the TLS policy is created.
   * 
   * @example
   * 1608273800000
   */
  createTime?: number;
  /**
   * @remarks
   * The ID of the TLS policy.
   * 
   * @example
   * tls-bp17elso1h323r****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the TLS policy.
   * 
   * @example
   * TLSPolicy-test****
   */
  name?: string;
  /**
   * @remarks
   * The list of associated listeners.
   */
  relateListeners?: ListTLSCipherPoliciesResponseBodyTLSCipherPoliciesRelateListeners[];
  /**
   * @remarks
   * The status of the TLS policy. Valid values:
   * 
   * *   **configuring**: The TLS policy is being configured.
   * *   **normal**: The TLS policy works as expected.
   * 
   * @example
   * normal
   */
  status?: string;
  /**
   * @remarks
   * The version of the TLS protocol.
   */
  TLSVersions?: string[];
  static names(): { [key: string]: string } {
    return {
      ciphers: 'Ciphers',
      createTime: 'CreateTime',
      instanceId: 'InstanceId',
      name: 'Name',
      relateListeners: 'RelateListeners',
      status: 'Status',
      TLSVersions: 'TLSVersions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ciphers: { 'type': 'array', 'itemType': 'string' },
      createTime: 'number',
      instanceId: 'string',
      name: 'string',
      relateListeners: { 'type': 'array', 'itemType': ListTLSCipherPoliciesResponseBodyTLSCipherPoliciesRelateListeners },
      status: 'string',
      TLSVersions: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.ciphers)) {
      $dara.Model.validateArray(this.ciphers);
    }
    if(Array.isArray(this.relateListeners)) {
      $dara.Model.validateArray(this.relateListeners);
    }
    if(Array.isArray(this.TLSVersions)) {
      $dara.Model.validateArray(this.TLSVersions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTLSCipherPoliciesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the current page is the last page. Valid values:
   * 
   * *   **true**: The current page is the last page.
   * *   **false**: The current page is not the last page.
   * 
   * @example
   * false
   */
  isTruncated?: boolean;
  /**
   * @remarks
   * The token that is used for the next query. Valid values:
   * 
   * *   If **NextToken** is empty, it indicates that no next query is to be sent.
   * *   If **NextToken** is not empty, the value indicates the token that is used for the next query.
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
   * CEF72CEB-54B6-4AE8-B225-F876FF7BA984
   */
  requestId?: string;
  /**
   * @remarks
   * The list of TLS policies.
   */
  TLSCipherPolicies?: ListTLSCipherPoliciesResponseBodyTLSCipherPolicies[];
  /**
   * @remarks
   * The total number of TLS policies returned.
   * 
   * @example
   * 1000
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      isTruncated: 'IsTruncated',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      TLSCipherPolicies: 'TLSCipherPolicies',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isTruncated: 'boolean',
      nextToken: 'string',
      requestId: 'string',
      TLSCipherPolicies: { 'type': 'array', 'itemType': ListTLSCipherPoliciesResponseBodyTLSCipherPolicies },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.TLSCipherPolicies)) {
      $dara.Model.validateArray(this.TLSCipherPolicies);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

