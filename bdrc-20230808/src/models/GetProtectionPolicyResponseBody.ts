// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetProtectionPolicyResponseBodyDataSubProtectionPolicies extends $dara.Model {
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

export class GetProtectionPolicyResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of associated resource category IDs.
   */
  boundResourceCategoryIds?: string[];
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
   * The ID of the latest application task.
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
   * The list of configured sub-protection policies.
   */
  subProtectionPolicies?: GetProtectionPolicyResponseBodyDataSubProtectionPolicies[];
  static names(): { [key: string]: string } {
    return {
      boundResourceCategoryIds: 'BoundResourceCategoryIds',
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
      latestApplyTime: 'number',
      latestTaskId: 'string',
      protectionPolicyId: 'string',
      protectionPolicyName: 'string',
      protectionPolicyRegionId: 'string',
      subProtectionPolicies: { 'type': 'array', 'itemType': GetProtectionPolicyResponseBodyDataSubProtectionPolicies },
    };
  }

  validate() {
    if(Array.isArray(this.boundResourceCategoryIds)) {
      $dara.Model.validateArray(this.boundResourceCategoryIds);
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

export class GetProtectionPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: GetProtectionPolicyResponseBodyData;
  /**
   * @remarks
   * The unique ID of the request.
   * 
   * @example
   * AE43C4CB-8074-5EBD-9806-8CA6D12800B1
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
      data: GetProtectionPolicyResponseBodyData,
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

