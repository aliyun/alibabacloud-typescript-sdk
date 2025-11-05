// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEnterpriseSnapshotPolicyShrinkRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * This parameter is required.
   * 
   * @example
   * tag-key
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * The tag value can be 0 to 128 characters in length, and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * Each tag key must have a unique tag value. You can specify at most 20 tag values in each call.
   * 
   * This parameter is required.
   * 
   * @example
   * tag-value
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

export class CreateEnterpriseSnapshotPolicyShrinkRequest extends $dara.Model {
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
  crossRegionCopyInfoShrink?: string;
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
  retainRuleShrink?: string;
  /**
   * @remarks
   * The rule for scheduling.
   * 
   * This parameter is required.
   */
  scheduleShrink?: string;
  /**
   * @remarks
   * The special snapshot retention rules.
   */
  specialRetainRulesShrink?: string;
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
  storageRuleShrink?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tag?: CreateEnterpriseSnapshotPolicyShrinkRequestTag[];
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
      crossRegionCopyInfoShrink: 'CrossRegionCopyInfo',
      desc: 'Desc',
      name: 'Name',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      retainRuleShrink: 'RetainRule',
      scheduleShrink: 'Schedule',
      specialRetainRulesShrink: 'SpecialRetainRules',
      state: 'State',
      storageRuleShrink: 'StorageRule',
      tag: 'Tag',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      crossRegionCopyInfoShrink: 'string',
      desc: 'string',
      name: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      retainRuleShrink: 'string',
      scheduleShrink: 'string',
      specialRetainRulesShrink: 'string',
      state: 'string',
      storageRuleShrink: 'string',
      tag: { 'type': 'array', 'itemType': CreateEnterpriseSnapshotPolicyShrinkRequestTag },
      targetType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

