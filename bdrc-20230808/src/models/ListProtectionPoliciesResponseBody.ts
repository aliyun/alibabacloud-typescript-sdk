// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProtectionPoliciesResponseBodyDataContentLatestApplySummaryApplyStatusCount extends $dara.Model {
  /**
   * @remarks
   * The application status.
   * 
   * @example
   * FAILED
   */
  applyStatus?: string;
  /**
   * @remarks
   * The count of resources by type.
   * 
   * @example
   * 3
   */
  count?: number;
  static names(): { [key: string]: string } {
    return {
      applyStatus: 'ApplyStatus',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyStatus: 'string',
      count: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProtectionPoliciesResponseBodyDataContentLatestApplySummaryResourceCount extends $dara.Model {
  /**
   * @remarks
   * The count of resources by type.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * ACS::OTS::Instance
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProtectionPoliciesResponseBodyDataContentLatestApplySummary extends $dara.Model {
  /**
   * @remarks
   * The count statistics of application status.
   */
  applyStatusCount?: ListProtectionPoliciesResponseBodyDataContentLatestApplySummaryApplyStatusCount[];
  /**
   * @remarks
   * The time when the task was completed. Unix timestamp format, in seconds.
   * 
   * @example
   * 1742167218
   */
  completeTime?: number;
  /**
   * @remarks
   * The count of resources by type.
   */
  resourceCount?: ListProtectionPoliciesResponseBodyDataContentLatestApplySummaryResourceCount[];
  static names(): { [key: string]: string } {
    return {
      applyStatusCount: 'ApplyStatusCount',
      completeTime: 'CompleteTime',
      resourceCount: 'ResourceCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyStatusCount: { 'type': 'array', 'itemType': ListProtectionPoliciesResponseBodyDataContentLatestApplySummaryApplyStatusCount },
      completeTime: 'number',
      resourceCount: { 'type': 'array', 'itemType': ListProtectionPoliciesResponseBodyDataContentLatestApplySummaryResourceCount },
    };
  }

  validate() {
    if(Array.isArray(this.applyStatusCount)) {
      $dara.Model.validateArray(this.applyStatusCount);
    }
    if(Array.isArray(this.resourceCount)) {
      $dara.Model.validateArray(this.resourceCount);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProtectionPoliciesResponseBodyDataContentSubProtectionPolicies extends $dara.Model {
  /**
   * @remarks
   * The sub-protection policy configuration.
   * 
   * @example
   * {\\"autoSnapshotPolicyId\\":\\"sp-123***7890\\"}
   */
  config?: string;
  /**
   * @remarks
   * The sub-protection policy type.
   * 
   * @example
   * ECS_AUTO_SNAPSHOT_POLICY
   */
  subProtectionPolicyType?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      subProtectionPolicyType: 'SubProtectionPolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      subProtectionPolicyType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProtectionPoliciesResponseBodyDataContent extends $dara.Model {
  /**
   * @remarks
   * The attached resource category IDs.
   */
  boundResourceCategoryIds?: string[];
  /**
   * @remarks
   * The summary of the latest application result.
   */
  latestApplySummary?: ListProtectionPoliciesResponseBodyDataContentLatestApplySummary;
  /**
   * @remarks
   * The time when the policy was last applied.
   * 
   * @example
   * 1742167218
   */
  latestApplyTime?: number;
  /**
   * @remarks
   * The task ID of the latest policy application.
   * 
   * @example
   * t-123***7890
   */
  latestTaskId?: string;
  /**
   * @remarks
   * The protection policy ID.
   * 
   * @example
   * p-123***7890
   */
  protectionPolicyId?: string;
  /**
   * @remarks
   * The protection policy name.
   * 
   * @example
   * MyProtectionPolicy
   */
  protectionPolicyName?: string;
  /**
   * @remarks
   * The region ID of the protection policy.
   * 
   * @example
   * cn-hangzhou
   */
  protectionPolicyRegionId?: string;
  /**
   * @remarks
   * The sub-protection policies.
   */
  subProtectionPolicies?: ListProtectionPoliciesResponseBodyDataContentSubProtectionPolicies[];
  static names(): { [key: string]: string } {
    return {
      boundResourceCategoryIds: 'BoundResourceCategoryIds',
      latestApplySummary: 'LatestApplySummary',
      latestApplyTime: 'LatestApplyTime',
      latestTaskId: 'LatestTaskId',
      protectionPolicyId: 'ProtectionPolicyId',
      protectionPolicyName: 'ProtectionPolicyName',
      protectionPolicyRegionId: 'ProtectionPolicyRegionId',
      subProtectionPolicies: 'SubProtectionPolicies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boundResourceCategoryIds: { 'type': 'array', 'itemType': 'string' },
      latestApplySummary: ListProtectionPoliciesResponseBodyDataContentLatestApplySummary,
      latestApplyTime: 'number',
      latestTaskId: 'string',
      protectionPolicyId: 'string',
      protectionPolicyName: 'string',
      protectionPolicyRegionId: 'string',
      subProtectionPolicies: { 'type': 'array', 'itemType': ListProtectionPoliciesResponseBodyDataContentSubProtectionPolicies },
    };
  }

  validate() {
    if(Array.isArray(this.boundResourceCategoryIds)) {
      $dara.Model.validateArray(this.boundResourceCategoryIds);
    }
    if(this.latestApplySummary && typeof (this.latestApplySummary as any).validate === 'function') {
      (this.latestApplySummary as any).validate();
    }
    if(Array.isArray(this.subProtectionPolicies)) {
      $dara.Model.validateArray(this.subProtectionPolicies);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProtectionPoliciesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The response parameters.
   */
  content?: ListProtectionPoliciesResponseBodyDataContent[];
  /**
   * @remarks
   * The maximum number of results requested.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The paging token.
   * 
   * @example
   * CAESGgoSChAKDGNvbXBsZXRlVGltZRABCgQiAggAGAAiQAoJAOTzWWYAAAAACjMDLgAAADFTNzMyZDMwMzAzMDM4NzA3NTcwMzY2MjMwNzY2ODcyMzAzMTY2Nzg3ODY5MzY=
   */
  nextToken?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 5
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'array', 'itemType': ListProtectionPoliciesResponseBodyDataContent },
      maxResults: 'number',
      nextToken: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.content)) {
      $dara.Model.validateArray(this.content);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProtectionPoliciesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: ListProtectionPoliciesResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5B2F09BF-CEBD-5A7E-AC01-E7F86169A5E5
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListProtectionPoliciesResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

