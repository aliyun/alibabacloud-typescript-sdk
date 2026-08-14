// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachReviewersToReviewRuleRequestPrincipals extends $dara.Model {
  /**
   * @remarks
   * When PrincipalType is set to RamUser, specify the RAM user ID of the auditor to associate. When PrincipalType is set to RamRole, specify the RAM role ARN of the auditor to associate.
   * 
   * @example
   * 160****9214
   */
  principalId?: string;
  /**
   * @remarks
   * The display name of the associated auditor\\"s RAM user or RAM role.
   * 
   * @example
   * name
   */
  principalName?: string;
  /**
   * @remarks
   * The type of the auditor to associate. Valid values:
   * 
   * - **RamUser**: Resource Access Management (RAM) user.
   * 
   * - **RamRole**: RAM role.
   * 
   * @example
   * RamUser
   */
  principalType?: string;
  static names(): { [key: string]: string } {
    return {
      principalId: 'PrincipalId',
      principalName: 'PrincipalName',
      principalType: 'PrincipalType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      principalId: 'string',
      principalName: 'string',
      principalType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachReviewersToReviewRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the bastion host instance.
   * > You can call the DescribeInstances operation to obtain the bastion host instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-7mz2ve7h00a
   */
  instanceId?: string;
  /**
   * @remarks
   * The information about the auditors associated with the audit policy.
   */
  principals?: AttachReviewersToReviewRuleRequestPrincipals[];
  /**
   * @remarks
   * The region ID of the bastion host.
   * > For the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the audit policy.
   * > You can call the ListReviewRules operation to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  reviewRuleId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      principals: 'Principals',
      regionId: 'RegionId',
      reviewRuleId: 'ReviewRuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      principals: { 'type': 'array', 'itemType': AttachReviewersToReviewRuleRequestPrincipals },
      regionId: 'string',
      reviewRuleId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.principals)) {
      $dara.Model.validateArray(this.principals);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

