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

