// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBinarySecurityPoliciesResponseBodyBinarySecurityPoliciesClusters extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * @example
   * c316702acdf5f45e1a9dc7fc52f21****
   */
  clusterId?: string;
  /**
   * @remarks
   * The namespaces.
   */
  namespaces?: string[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      namespaces: 'Namespaces',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      namespaces: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.namespaces)) {
      $dara.Model.validateArray(this.namespaces);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBinarySecurityPoliciesResponseBodyBinarySecurityPolicies extends $dara.Model {
  /**
   * @remarks
   * The information about clusters.
   */
  clusters?: DescribeBinarySecurityPoliciesResponseBodyBinarySecurityPoliciesClusters[];
  /**
   * @remarks
   * The name of the policy.
   * 
   * @example
   * logtail
   */
  name?: string;
  /**
   * @remarks
   * The content of the policy. The value is in the JSON format. A key supports the following values:
   * 
   * *   **policyMode**: the type of the policy. Default value: requireAttestor.
   * *   **requiredAttestors**: the required witnesses.
   * 
   * @example
   * {\\"PolicyMode\\":\\"requireAttestor\\",\\"RequiredAttestors\\":[\\"test-xcs-04-11-hhht\\"]}
   */
  policy?: { [key: string]: any };
  /**
   * @remarks
   * The description.
   * 
   * @example
   * test
   */
  remark?: string;
  /**
   * @remarks
   * The status of the policy. Valid values:
   * 
   * *   **enabled**
   * *   **disabled**
   * 
   * @example
   * enabled
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      clusters: 'Clusters',
      name: 'Name',
      policy: 'Policy',
      remark: 'Remark',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusters: { 'type': 'array', 'itemType': DescribeBinarySecurityPoliciesResponseBodyBinarySecurityPoliciesClusters },
      name: 'string',
      policy: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      remark: 'string',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.clusters)) {
      $dara.Model.validateArray(this.clusters);
    }
    if(this.policy) {
      $dara.Model.validateMap(this.policy);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBinarySecurityPoliciesResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned on each page.
   * 
   * @example
   * 20
   */
  count?: number;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 218
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBinarySecurityPoliciesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about security policies.
   */
  binarySecurityPolicies?: DescribeBinarySecurityPoliciesResponseBodyBinarySecurityPolicies[];
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: DescribeBinarySecurityPoliciesResponseBodyPageInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1EE7B150-D67E-53FD-A52D-3E8E669A****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      binarySecurityPolicies: 'BinarySecurityPolicies',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      binarySecurityPolicies: { 'type': 'array', 'itemType': DescribeBinarySecurityPoliciesResponseBodyBinarySecurityPolicies },
      pageInfo: DescribeBinarySecurityPoliciesResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.binarySecurityPolicies)) {
      $dara.Model.validateArray(this.binarySecurityPolicies);
    }
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

