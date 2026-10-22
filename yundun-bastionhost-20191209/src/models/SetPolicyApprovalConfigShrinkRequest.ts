// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetPolicyApprovalConfigShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The O&M approval configuration in the control policy.
   * 
   * This parameter is required.
   */
  approvalConfigShrink?: string;
  /**
   * @remarks
   * The Bastionhost instance ID.
   * > You can call the DescribeInstances operation to obtain the Bastionhost instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-st220aw****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the control policy that you want to modify.
   * > You can call the [ListPolicies](https://help.aliyun.com/document_detail/2758876.html) operation to obtain the value of this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 7
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
      approvalConfigShrink: 'ApprovalConfig',
      instanceId: 'InstanceId',
      policyId: 'PolicyId',
      projectId: 'ProjectId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalConfigShrink: 'string',
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

