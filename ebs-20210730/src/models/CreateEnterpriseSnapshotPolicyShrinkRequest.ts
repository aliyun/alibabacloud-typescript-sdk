// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEnterpriseSnapshotPolicyShrinkRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the resource.
   * 
   * This parameter is required.
   * 
   * @example
   * tag-key
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the resource.
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
   * Ensures the idempotence of the request. Generate a parameter value from your client that is unique across different requests. ClientToken supports only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The snapshot replication information.
   */
  crossRegionCopyInfoShrink?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * xxx
   */
  desc?: string;
  /**
   * @remarks
   * The Policy Name.
   * 
   * This parameter is required.
   * 
   * @example
   * xx
   */
  name?: string;
  /**
   * @remarks
   * The region ID. You can call DescribeRegions to query the regions that support asynchronous replication.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * xxx
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The retention rule.
   * 
   * This parameter is required.
   */
  retainRuleShrink?: string;
  /**
   * @remarks
   * The schedule rule.
   * 
   * This parameter is required.
   */
  scheduleShrink?: string;
  /**
   * @remarks
   * The special retention rules.
   */
  specialRetainRulesShrink?: string;
  /**
   * @remarks
   * The status. Valid values:
   * 
   * - DISABLED
   * - ENABLED
   * 
   * @example
   * ENABLED
   */
  state?: string;
  /**
   * @remarks
   * The advanced snapshot feature.
   */
  storageRuleShrink?: string;
  /**
   * @remarks
   * The tag key-value pairs. Valid values of n: 1 to 20.
   */
  tag?: CreateEnterpriseSnapshotPolicyShrinkRequestTag[];
  /**
   * @remarks
   * The type. Valid values:
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

