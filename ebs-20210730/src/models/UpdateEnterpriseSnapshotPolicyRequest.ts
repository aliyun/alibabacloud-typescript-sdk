// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateEnterpriseSnapshotPolicyRequestCrossRegionCopyInfo } from "./UpdateEnterpriseSnapshotPolicyRequestCrossRegionCopyInfo";
import { UpdateEnterpriseSnapshotPolicyRequestRetainRule } from "./UpdateEnterpriseSnapshotPolicyRequestRetainRule";
import { UpdateEnterpriseSnapshotPolicyRequestSchedule } from "./UpdateEnterpriseSnapshotPolicyRequestSchedule";
import { UpdateEnterpriseSnapshotPolicyRequestSpecialRetainRules } from "./UpdateEnterpriseSnapshotPolicyRequestSpecialRetainRules";
import { UpdateEnterpriseSnapshotPolicyRequestStorageRule } from "./UpdateEnterpriseSnapshotPolicyRequestStorageRule";


export class UpdateEnterpriseSnapshotPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * Snapshot replication destination information.
   */
  crossRegionCopyInfo?: UpdateEnterpriseSnapshotPolicyRequestCrossRegionCopyInfo;
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
   * @example
   * xxx
   */
  name?: string;
  /**
   * @remarks
   * The id of the policy.
   * 
   * This parameter is required.
   * 
   * @example
   * esp-xxx
   */
  policyId?: string;
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
   * Snapshot retention rule.
   */
  retainRule?: UpdateEnterpriseSnapshotPolicyRequestRetainRule;
  /**
   * @remarks
   * The rule for scheduling.
   */
  schedule?: UpdateEnterpriseSnapshotPolicyRequestSchedule;
  /**
   * @remarks
   * The special snapshot retention rules.
   */
  specialRetainRules?: UpdateEnterpriseSnapshotPolicyRequestSpecialRetainRules;
  /**
   * @remarks
   * The status of the policy. Valid values:
   * 
   * *   **ENABLED**: Enable snapshot policy execution.
   * *   **DISABLED**: Disable snapshot policy execution.
   * 
   * @example
   * ENABLED
   */
  state?: string;
  /**
   * @remarks
   * Advanced snapshot features.
   */
  storageRule?: UpdateEnterpriseSnapshotPolicyRequestStorageRule;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      crossRegionCopyInfo: 'CrossRegionCopyInfo',
      desc: 'Desc',
      name: 'Name',
      policyId: 'PolicyId',
      regionId: 'RegionId',
      retainRule: 'RetainRule',
      schedule: 'Schedule',
      specialRetainRules: 'SpecialRetainRules',
      state: 'State',
      storageRule: 'StorageRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      crossRegionCopyInfo: UpdateEnterpriseSnapshotPolicyRequestCrossRegionCopyInfo,
      desc: 'string',
      name: 'string',
      policyId: 'string',
      regionId: 'string',
      retainRule: UpdateEnterpriseSnapshotPolicyRequestRetainRule,
      schedule: UpdateEnterpriseSnapshotPolicyRequestSchedule,
      specialRetainRules: UpdateEnterpriseSnapshotPolicyRequestSpecialRetainRules,
      state: 'string',
      storageRule: UpdateEnterpriseSnapshotPolicyRequestStorageRule,
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

