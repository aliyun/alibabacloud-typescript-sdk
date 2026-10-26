// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachReviewersToReviewRuleRequestPrincipals extends $dara.Model {
  /**
   * @remarks
   * The ID of the RAM user or the ARN of the RAM role of the auditor to be associated. If PrincipalType is set to RamUser, specify the RAM user ID. If PrincipalType is set to RamRole, specify the ARN of the RAM role.
   * 
   * @example
   * 160****9214
   */
  principalId?: string;
  /**
   * @remarks
   * The display name of the RAM user or RAM role of the associated auditor.
   * 
   * @example
   * name
   */
  principalName?: string;
  /**
   * @remarks
   * The type of the auditor to be associated. Valid values:
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
   * The ID of the Bastionhost instance.
   * > You can call the DescribeInstances operation to obtain the Bastionhost instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-7mz2ve7h00a
   */
  instanceId?: string;
  /**
   * @remarks
   * The information about the auditors to be associated with the audit policy.
   */
  principals?: AttachReviewersToReviewRuleRequestPrincipals[];
  /**
   * @remarks
   * The region ID of the Bastionhost instance.
   * > For more information about the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the audit policy.
   * > You can invoke the ListReviewRules operation to obtain this parameter.
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

