// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateEnterpriseSnapshotPolicyRequestCrossRegionCopyInfo } from "./CreateEnterpriseSnapshotPolicyRequestCrossRegionCopyInfo";
import { CreateEnterpriseSnapshotPolicyRequestRetainRule } from "./CreateEnterpriseSnapshotPolicyRequestRetainRule";
import { CreateEnterpriseSnapshotPolicyRequestSchedule } from "./CreateEnterpriseSnapshotPolicyRequestSchedule";
import { CreateEnterpriseSnapshotPolicyRequestSpecialRetainRules } from "./CreateEnterpriseSnapshotPolicyRequestSpecialRetainRules";
import { CreateEnterpriseSnapshotPolicyRequestStorageRule } from "./CreateEnterpriseSnapshotPolicyRequestStorageRule";
import { CreateEnterpriseSnapshotPolicyRequestTag } from "./CreateEnterpriseSnapshotPolicyRequestTag";


export class CreateEnterpriseSnapshotPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotency of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * Snapshot replication destination information.
   */
  crossRegionCopyInfo?: CreateEnterpriseSnapshotPolicyRequestCrossRegionCopyInfo;
  /**
   * @remarks
   * The description of the policy.
   * 
   * @example
   * xxx
   */
  desc?: string;
  /**
   * @remarks
   * The name of the policy.
   * 
   * This parameter is required.
   * 
   * @example
   * xx
   */
  name?: string;
  /**
   * @remarks
   * The region ID . You can call the [DescribeRegions](https://help.aliyun.com/document_detail/354276.html) operation to query the most recent list of regions in which snapshot policy is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which to assign the snapshot policy.
   * 
   * @example
   * xxx
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The snapshot retention rule.
   * 
   * This parameter is required.
   */
  retainRule?: CreateEnterpriseSnapshotPolicyRequestRetainRule;
  /**
   * @remarks
   * The rule for scheduling.
   * 
   * This parameter is required.
   */
  schedule?: CreateEnterpriseSnapshotPolicyRequestSchedule;
  /**
   * @remarks
   * The special snapshot retention rules.
   */
  specialRetainRules?: CreateEnterpriseSnapshotPolicyRequestSpecialRetainRules;
  /**
   * @remarks
   * The status of the policy. Valid values:
   * 
   * - ENABLED: Enable snapshot policy execution.
   * 
   * - DISABLED: Disable snapshot policy execution.
   * 
   * @example
   * ENABLED
   */
  state?: string;
  /**
   * @remarks
   * Advanced snapshot features.
   */
  storageRule?: CreateEnterpriseSnapshotPolicyRequestStorageRule;
  /**
   * @remarks
   * The list of tags.
   */
  tag?: CreateEnterpriseSnapshotPolicyRequestTag[];
  /**
   * @remarks
   * Binding target type, valid value:
   * 
   * - DISK
   * 
   * This parameter is required.
   * 
   * @example
   * DISK
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      crossRegionCopyInfo: 'CrossRegionCopyInfo',
      desc: 'Desc',
      name: 'Name',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      retainRule: 'RetainRule',
      schedule: 'Schedule',
      specialRetainRules: 'SpecialRetainRules',
      state: 'State',
      storageRule: 'StorageRule',
      tag: 'Tag',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      crossRegionCopyInfo: CreateEnterpriseSnapshotPolicyRequestCrossRegionCopyInfo,
      desc: 'string',
      name: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      retainRule: CreateEnterpriseSnapshotPolicyRequestRetainRule,
      schedule: CreateEnterpriseSnapshotPolicyRequestSchedule,
      specialRetainRules: CreateEnterpriseSnapshotPolicyRequestSpecialRetainRules,
      state: 'string',
      storageRule: CreateEnterpriseSnapshotPolicyRequestStorageRule,
      tag: { 'type': 'array', 'itemType': CreateEnterpriseSnapshotPolicyRequestTag },
      targetType: 'string',
    };
  }

  validate() {
    if(this.crossRegionCopyInfo && typeof (this.crossRegionCopyInfo as any).validate === 'function') {
      (this.crossRegionCopyInfo as any).validate();
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
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

