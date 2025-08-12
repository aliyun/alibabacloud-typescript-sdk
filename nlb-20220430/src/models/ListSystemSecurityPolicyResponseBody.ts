// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSystemSecurityPolicyResponseBodySecurityPolicies extends $dara.Model {
  /**
   * @remarks
   * The cipher suite.
   * 
   * @example
   * ECDHE-ECDSA-AES128-GCM-SHA256,ECDHE-ECDSA-AES256-GCM-SHA384,ECDHE-ECDSA-AES128-SHA256,ECDHE-ECDSA-AES256-SHA384,ECDHE-RSA-AES128-GCM-SHA256,ECDHE-RSA-AES256-GCM-SHA384,ECDHE-RSA-AES128-SHA256,ECDHE-RSA-AES256-SHA384,AES128-GCM-SHA256,AES256-GCM-SHA384,AES128-SHA256,AES256-SHA256,ECDHE-ECDSA-AES128-SHA,ECDHE-ECDSA-AES256-SHA,ECDHE-RSA-AES128-SHA,ECDHE-RSA-AES256-SHA,AES128-SHA,AES256-SHA,DES-CBC3-SHA
   */
  ciphers?: string;
  /**
   * @remarks
   * The ID of the TLS security policy.
   * 
   * @example
   * sp-3fdab6dkkke10s****
   */
  securityPolicyId?: string;
  /**
   * @remarks
   * The name of the TLS security policy.
   * 
   * @example
   * test
   */
  securityPolicyName?: string;
  /**
   * @remarks
   * The TLS version.
   * 
   * @example
   * TLSv1.0
   */
  tlsVersion?: string;
  static names(): { [key: string]: string } {
    return {
      ciphers: 'Ciphers',
      securityPolicyId: 'SecurityPolicyId',
      securityPolicyName: 'SecurityPolicyName',
      tlsVersion: 'TlsVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ciphers: 'string',
      securityPolicyId: 'string',
      securityPolicyName: 'string',
      tlsVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSystemSecurityPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5C057647-284B-5C67-A07E-4B8F3DABA9F9
   */
  requestId?: string;
  /**
   * @remarks
   * A list of TLS security policies.
   */
  securityPolicies?: ListSystemSecurityPolicyResponseBodySecurityPolicies[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      securityPolicies: 'SecurityPolicies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      securityPolicies: { 'type': 'array', 'itemType': ListSystemSecurityPolicyResponseBodySecurityPolicies },
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

