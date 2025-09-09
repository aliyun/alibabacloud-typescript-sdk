// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetPolicyApprovalConfigRequestApprovalConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable O&M approval in the control policy. Valid values:
   * 
   * * **On**: enables O&M approval.
   * * **Off**: disables O&M approval.
   * 
   * This parameter is required.
   * 
   * @example
   * On
   */
  switchStatus?: string;
  static names(): { [key: string]: string } {
    return {
      switchStatus: 'SwitchStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      switchStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetPolicyApprovalConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The O&M approval setting in the control policy.
   * 
   * This parameter is required.
   */
  approvalConfig?: SetPolicyApprovalConfigRequestApprovalConfig;
  /**
   * @remarks
   * The bastion host ID.
   * 
   * >  You can call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to query the bastion host ID.
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
   * 
   * >  You can call the [ListPolicies](https://help.aliyun.com/document_detail/2758876.html) operation to query the control policy ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 7
   */
  policyId?: string;
  /**
   * @remarks
   * The region ID of the bastion host.
   * 
   * >  For more information about the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      approvalConfig: 'ApprovalConfig',
      instanceId: 'InstanceId',
      policyId: 'PolicyId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalConfig: SetPolicyApprovalConfigRequestApprovalConfig,
      instanceId: 'string',
      policyId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(this.approvalConfig && typeof (this.approvalConfig as any).validate === 'function') {
      (this.approvalConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

