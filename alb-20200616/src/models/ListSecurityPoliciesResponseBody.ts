// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSecurityPoliciesResponseBodySecurityPoliciesTags extends $dara.Model {
  /**
   * @remarks
   * The tag key. The tag key can be up to 128 characters in length. It cannot start with aliyun or acs: and cannot contain http:// or https://.
   * 
   * @example
   * env
   */
  key?: string;
  /**
   * @remarks
   * The tag value. The tag value can be up to 128 characters in length. It cannot start with aliyun or acs: and cannot contain http:// or https://.
   * 
   * @example
   * product
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

export class ListSecurityPoliciesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. Valid values:
   * 
   * *   If **NextToken** is empty, no next page exists.
   * *   If a value is returned for **NextToken**, the value is the token that determines the start point of the next query.
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
   * 593B0448-D13E-4C56-AC0D-FDF0FDE0E9A3
   */
  requestId?: string;
  /**
   * @remarks
   * The supported security policies.
   */
  securityPolicies?: ListSecurityPoliciesResponseBodySecurityPolicies[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1000
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
      securityPolicies: { 'type': 'array', 'itemType': ListSecurityPoliciesResponseBodySecurityPolicies },
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

