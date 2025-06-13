// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListSecurityPoliciesResponseBodySecurityPoliciesTags } from "./ListSecurityPoliciesResponseBodySecurityPoliciesTags";


export class ListSecurityPoliciesResponseBodySecurityPolicies extends $dara.Model {
  /**
   * @remarks
   * The supported cipher suites.
   */
  ciphers?: string[];
  /**
   * @remarks
   * The time when the ACL was created. The time follows the `YYYY-MM-DDThh:mm:ssZ` format.
   * 
   * @example
   * 2023-02-15T07:37:33Z
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-atstuj3rtop****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the security policy.
   * 
   * @example
   * rg-atstuj3rtop****
   */
  securityPolicyId?: string;
  /**
   * @remarks
   * The name of the security policy.
   * 
   * @example
   * test-secrity
   */
  securityPolicyName?: string;
  /**
   * @remarks
   * The status of the security policy. Valid values:
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
   * The supported TLS protocol versions.
   */
  TLSVersions?: string[];
  /**
   * @remarks
   * The tags.
   */
  tags?: ListSecurityPoliciesResponseBodySecurityPoliciesTags[];
  static names(): { [key: string]: string } {
    return {
      ciphers: 'Ciphers',
      createTime: 'CreateTime',
      resourceGroupId: 'ResourceGroupId',
      securityPolicyId: 'SecurityPolicyId',
      securityPolicyName: 'SecurityPolicyName',
      securityPolicyStatus: 'SecurityPolicyStatus',
      TLSVersions: 'TLSVersions',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ciphers: { 'type': 'array', 'itemType': 'string' },
      createTime: 'string',
      resourceGroupId: 'string',
      securityPolicyId: 'string',
      securityPolicyName: 'string',
      securityPolicyStatus: 'string',
      TLSVersions: { 'type': 'array', 'itemType': 'string' },
      tags: { 'type': 'array', 'itemType': ListSecurityPoliciesResponseBodySecurityPoliciesTags },
    };
  }

  validate() {
    if(Array.isArray(this.ciphers)) {
      $dara.Model.validateArray(this.ciphers);
    }
    if(Array.isArray(this.TLSVersions)) {
      $dara.Model.validateArray(this.TLSVersions);
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

