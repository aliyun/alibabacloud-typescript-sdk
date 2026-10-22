// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetPolicyAccessTimeRangeConfigShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The logon time limit configuration.
   * 
   * This parameter is required.
   */
  accessTimeRangeConfigShrink?: string;
  /**
   * @remarks
   * The instance ID of the Bastionhost instance.
   * 
   * > You can call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to retrieve this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-st220aw****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the control policy.
   * > You can call the [ListPolicies](https://help.aliyun.com/document_detail/2758876.html) operation to retrieve this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 13
   */
  policyId?: string;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * 3
   */
  projectId?: number;
  /**
   * @remarks
   * The region ID of the Bastionhost instance.
   * > For the mappings between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      accessTimeRangeConfigShrink: 'AccessTimeRangeConfig',
      instanceId: 'InstanceId',
      policyId: 'PolicyId',
      projectId: 'ProjectId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessTimeRangeConfigShrink: 'string',
      instanceId: 'string',
      policyId: 'string',
      projectId: 'number',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

