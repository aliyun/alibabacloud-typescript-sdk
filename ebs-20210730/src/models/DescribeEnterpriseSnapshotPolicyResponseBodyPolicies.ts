// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeEnterpriseSnapshotPolicyResponseBodyPoliciesCrossRegionCopyInfo } from "./DescribeEnterpriseSnapshotPolicyResponseBodyPoliciesCrossRegionCopyInfo";
import { DescribeEnterpriseSnapshotPolicyResponseBodyPoliciesRetainRule } from "./DescribeEnterpriseSnapshotPolicyResponseBodyPoliciesRetainRule";
import { DescribeEnterpriseSnapshotPolicyResponseBodyPoliciesSchedule } from "./DescribeEnterpriseSnapshotPolicyResponseBodyPoliciesSchedule";
import { DescribeEnterpriseSnapshotPolicyResponseBodyPoliciesSpecialRetainRules } from "./DescribeEnterpriseSnapshotPolicyResponseBodyPoliciesSpecialRetainRules";
import { DescribeEnterpriseSnapshotPolicyResponseBodyPoliciesStorageRule } from "./DescribeEnterpriseSnapshotPolicyResponseBodyPoliciesStorageRule";
import { DescribeEnterpriseSnapshotPolicyResponseBodyPoliciesTags } from "./DescribeEnterpriseSnapshotPolicyResponseBodyPoliciesTags";


export class DescribeEnterpriseSnapshotPolicyResponseBodyPolicies extends $dara.Model {
  /**
   * @remarks
   * The time when the enterprise-level snapshot policy was created.
   * 
   * @example
   * 2023-06-24T06:03:35Z
   */
  createTime?: string;
  /**
   * @remarks
   * The replication rule of snapshots in the enterprise-level snapshot policy.
   */
  crossRegionCopyInfo?: DescribeEnterpriseSnapshotPolicyResponseBodyPoliciesCrossRegionCopyInfo;
  /**
   * @remarks
   * The description of the enterprise-level snapshot policy.
   * 
   * @example
   * xxx
   */
  desc?: string;
  /**
   * @remarks
   * The disks that are associated with the snapshot policy.
   */
  diskIds?: string[];
  /**
   * @remarks
   * Indicates whether snapshots are managed.
   * 
   * @example
   * false
   */
  managedForEcs?: boolean;
  /**
   * @remarks
   * The name of the enterprise-level snapshot policy.
   * 
   * @example
   * xxx
   */
  name?: string;
  /**
   * @remarks
   * The ID of the enterprise-level snapshot policy.
   * 
   * @example
   * esp-xxx
   */
  policyId?: string;
  /**
   * @remarks
   * the resource group
   * 
   * @example
   * rg-xxx
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The retention rule of the enterprise-level snapshot policy.
   */
  retainRule?: DescribeEnterpriseSnapshotPolicyResponseBodyPoliciesRetainRule;
  /**
   * @remarks
   * The scheduling rule of the enterprise-level snapshot policy.
   */
  schedule?: DescribeEnterpriseSnapshotPolicyResponseBodyPoliciesSchedule;
  /**
   * @remarks
   * The special retention rules of the enterprise-level snapshot policy.
   */
  specialRetainRules?: DescribeEnterpriseSnapshotPolicyResponseBodyPoliciesSpecialRetainRules;
  /**
   * @remarks
   * The status of the enterprise-level snapshot policy.
   * 
   * @example
   * DISABLED
   */
  state?: string;
  /**
   * @remarks
   * The storage rule of snapshots in the enterprise-level snapshot policy.
   */
  storageRule?: DescribeEnterpriseSnapshotPolicyResponseBodyPoliciesStorageRule;
  /**
   * @remarks
   * the pair tags
   */
  tags?: DescribeEnterpriseSnapshotPolicyResponseBodyPoliciesTags[];
  /**
   * @remarks
   * The number of objects that are associated with the enterprise-level snapshot policy.
   * 
   * @example
   * 10
   */
  targetCount?: number;
  /**
   * @remarks
   * The type of the enterprise-level snapshot policy.
   * 
   * @example
   * DISK
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      crossRegionCopyInfo: 'CrossRegionCopyInfo',
      desc: 'Desc',
      diskIds: 'DiskIds',
      managedForEcs: 'ManagedForEcs',
      name: 'Name',
      policyId: 'PolicyId',
      resourceGroupId: 'ResourceGroupId',
      retainRule: 'RetainRule',
      schedule: 'Schedule',
      specialRetainRules: 'SpecialRetainRules',
      state: 'State',
      storageRule: 'StorageRule',
      tags: 'Tags',
      targetCount: 'TargetCount',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      crossRegionCopyInfo: DescribeEnterpriseSnapshotPolicyResponseBodyPoliciesCrossRegionCopyInfo,
      desc: 'string',
      diskIds: { 'type': 'array', 'itemType': 'string' },
      managedForEcs: 'boolean',
      name: 'string',
      policyId: 'string',
      resourceGroupId: 'string',
      retainRule: DescribeEnterpriseSnapshotPolicyResponseBodyPoliciesRetainRule,
      schedule: DescribeEnterpriseSnapshotPolicyResponseBodyPoliciesSchedule,
      specialRetainRules: DescribeEnterpriseSnapshotPolicyResponseBodyPoliciesSpecialRetainRules,
      state: 'string',
      storageRule: DescribeEnterpriseSnapshotPolicyResponseBodyPoliciesStorageRule,
      tags: { 'type': 'array', 'itemType': DescribeEnterpriseSnapshotPolicyResponseBodyPoliciesTags },
      targetCount: 'number',
      targetType: 'string',
    };
  }

  validate() {
    if(this.crossRegionCopyInfo && typeof (this.crossRegionCopyInfo as any).validate === 'function') {
      (this.crossRegionCopyInfo as any).validate();
    }
    if(Array.isArray(this.diskIds)) {
      $dara.Model.validateArray(this.diskIds);
    }
    if(this.retainRule && typeof (this.retainRule as any).validate === 'function') {
      (this.retainRule as any).validate();
    }
    if(this.schedule && typeof (this.schedule as any).validate === 'function') {
      (this.schedule as any).validate();
    }
    if(this.specialRetainRules && typeof (this.specialRetainRules as any).validate === 'function') {
      (this.specialRetainRules as any).validate();
    }
    if(this.storageRule && typeof (this.storageRule as any).validate === 'function') {
      (this.storageRule as any).validate();
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

