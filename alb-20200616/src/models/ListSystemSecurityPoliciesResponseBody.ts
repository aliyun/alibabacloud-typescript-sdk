// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSystemSecurityPoliciesResponseBodySecurityPolicies extends $dara.Model {
  /**
   * @remarks
   * The supported cipher suite.
   */
  ciphers?: string[];
  /**
   * @remarks
   * The ID of the security policy.
   * 
   * @example
   * spy-n0kn923****
   */
  securityPolicyId?: string;
  /**
   * @remarks
   * The supported TLS protocol versions.
   */
  TLSVersions?: string[];
  static names(): { [key: string]: string } {
    return {
      ciphers: 'Ciphers',
      securityPolicyId: 'SecurityPolicyId',
      TLSVersions: 'TLSVersions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ciphers: { 'type': 'array', 'itemType': 'string' },
      securityPolicyId: 'string',
      TLSVersions: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.ciphers)) {
      $dara.Model.validateArray(this.ciphers);
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

export class ListSystemSecurityPoliciesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 593B0448-D13E-4C56-AC0D-FDF0FDE0E9A3
   */
  requestId?: string;
  /**
   * @remarks
   * The security policies.
   */
  securityPolicies?: ListSystemSecurityPoliciesResponseBodySecurityPolicies[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      securityPolicies: 'SecurityPolicies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      securityPolicies: { 'type': 'array', 'itemType': ListSystemSecurityPoliciesResponseBodySecurityPolicies },
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

