// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSecurityPolicyResponseBodySecurityPoliciesRelatedListeners extends $dara.Model {
  /**
   * @remarks
   * The listener ID.
   * 
   * @example
   * lsn-bp1bpn0kn908w4nbw****@443
   */
  listenerId?: string;
  /**
   * @remarks
   * The listener port.
   * 
   * @example
   * 443
   */
  listenerPort?: number;
  /**
   * @remarks
   * The listener protocol. Valid value: **TCPSSL**.
   * 
   * @example
   * TCPSSL
   */
  listenerProtocol?: string;
  /**
   * @remarks
   * The NLB instance ID.
   * 
   * @example
   * nlb-83ckzc8d4xlp8o****
   */
  loadBalancerId?: string;
  static names(): { [key: string]: string } {
    return {
      listenerId: 'ListenerId',
      listenerPort: 'ListenerPort',
      listenerProtocol: 'ListenerProtocol',
      loadBalancerId: 'LoadBalancerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenerId: 'string',
      listenerPort: 'number',
      listenerProtocol: 'string',
      loadBalancerId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecurityPolicyResponseBodySecurityPoliciesTags extends $dara.Model {
  /**
   * @remarks
   * The tag key. You can specify up to 10 tag keys.
   * 
   * The tag key can be up to 64 characters in length, and cannot contain `http://` or `https://`. It cannot start with `aliyun` or `acs:`.
   * 
   * @example
   * Test
   */
  key?: string;
  /**
   * @remarks
   * The tag value. You can specify up to 10 tag values.
   * 
   * The tag value can be up to 128 characters in length, and cannot contain `http://` or `https://`. It cannot start with `aliyun` or `acs:`.
   * 
   * @example
   * Test
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecurityPolicyResponseBodySecurityPolicies extends $dara.Model {
  /**
   * @remarks
   * The cipher suites supported by the security policy. Valid values of this parameter vary based on the value of TlsVersions. A security policy supports up to 32 cipher suites.
   * 
   * TLSv1.0 and TLSv1.1 support the following cipher suites:
   * 
   * *   **ECDHE-ECDSA-AES128-SHA**
   * *   **ECDHE-ECDSA-AES256-SHA**
   * *   **ECDHE-RSA-AES128-SHA**
   * *   **ECDHE-RSA-AES256-SHA**
   * *   **AES128-SHA**
   * *   **AES256-SHA**
   * *   **DES-CBC3-SHA**
   * 
   * TLSv1.2 supports the following cipher suites:
   * 
   * *   **ECDHE-ECDSA-AES128-SHA**
   * *   **ECDHE-ECDSA-AES256-SHA**
   * *   **ECDHE-RSA-AES128-SHA**
   * *   **ECDHE-RSA-AES256-SHA**
   * *   **AES128-SHA**
   * *   **AES256-SHA**
   * *   **DES-CBC3-SHA**
   * *   **ECDHE-ECDSA-AES128-GCM-SHA256**
   * *   **ECDHE-ECDSA-AES256-GCM-SHA384**
   * *   **ECDHE-ECDSA-AES128-SHA256**
   * *   **ECDHE-ECDSA-AES256-SHA384**
   * *   **ECDHE-RSA-AES128-GCM-SHA256**
   * *   **ECDHE-RSA-AES256-GCM-SHA384**
   * *   **ECDHE-RSA-AES128-SHA256**
   * *   **ECDHE-RSA-AES256-SHA384**
   * *   **AES128-GCM-SHA256**
   * *   **AES256-GCM-SHA384**
   * *   **AES128-SHA256**
   * *   **AES256-SHA256**
   * 
   * TLSv1.3 supports the following cipher suites:
   * 
   * *   **TLS_AES_128_GCM_SHA256**
   * *   **TLS_AES_256_GCM_SHA384**
   * *   **TLS_CHACHA20_POLY1305_SHA256**
   * *   **TLS_AES_128_CCM_SHA256**
   * *   **TLS_AES_128_CCM_8_SHA256**
   * 
   * @example
   * ECDHE-ECDSA-AES128-SHA
   */
  ciphers?: string;
  /**
   * @remarks
   * The region ID of the NLB instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The listeners that are associated with the NLB instance.
   */
  relatedListeners?: ListSecurityPolicyResponseBodySecurityPoliciesRelatedListeners[];
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-atstuj3rtop****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the TLS security policy.
   * 
   * @example
   * tls-bp14bb1e7dll4f****
   */
  securityPolicyId?: string;
  /**
   * @remarks
   * The name of the TLS security policy.
   * 
   * @example
   * TLSCipherPolicy
   */
  securityPolicyName?: string;
  /**
   * @remarks
   * The status of the TLS security policy. Valid values:
   * 
   * *   **Configuring**
   * *   **Available**
   * 
   * @example
   * Available
   */
  securityPolicyStatus?: string;
  /**
   * @remarks
   * The tags.
   */
  tags?: ListSecurityPolicyResponseBodySecurityPoliciesTags[];
  /**
   * @remarks
   * The supported versions of the TLS protocol. Valid values: **TLSv1.0**, **TLSv1.1**, **TLSv1.2**, and **TLSv1.3**.
   * 
   * @example
   * TLSv1.0
   */
  tlsVersion?: string;
  static names(): { [key: string]: string } {
    return {
      ciphers: 'Ciphers',
      regionId: 'RegionId',
      relatedListeners: 'RelatedListeners',
      resourceGroupId: 'ResourceGroupId',
      securityPolicyId: 'SecurityPolicyId',
      securityPolicyName: 'SecurityPolicyName',
      securityPolicyStatus: 'SecurityPolicyStatus',
      tags: 'Tags',
      tlsVersion: 'TlsVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ciphers: 'string',
      regionId: 'string',
      relatedListeners: { 'type': 'array', 'itemType': ListSecurityPolicyResponseBodySecurityPoliciesRelatedListeners },
      resourceGroupId: 'string',
      securityPolicyId: 'string',
      securityPolicyName: 'string',
      securityPolicyStatus: 'string',
      tags: { 'type': 'array', 'itemType': ListSecurityPolicyResponseBodySecurityPoliciesTags },
      tlsVersion: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.relatedListeners)) {
      $dara.Model.validateArray(this.relatedListeners);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecurityPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. Valid values:
   * 
   * *   If NextToken is empty, no next page exists.
   * *   If a value is returned for NextToken, specify the value in the next request to retrieve a new page of results.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D7A8875F-373A-5F48-8484-25B07A61F2AF
   */
  requestId?: string;
  /**
   * @remarks
   * The TLS security policies.
   */
  securityPolicies?: ListSecurityPolicyResponseBodySecurityPolicies[];
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
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      securityPolicies: 'SecurityPolicies',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      securityPolicies: { 'type': 'array', 'itemType': ListSecurityPolicyResponseBodySecurityPolicies },
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

