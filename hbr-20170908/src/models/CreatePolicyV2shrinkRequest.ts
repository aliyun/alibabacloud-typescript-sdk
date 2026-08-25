// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePolicyV2ShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The policy description.
   * 
   * @example
   * Backup once every day at 10:00 AM, with cross-region backup to Shanghai.
   */
  policyDescription?: string;
  /**
   * @remarks
   * The policy name.
   * 
   * @example
   * Daily local backup + geo-redundancy
   */
  policyName?: string;
  /**
   * @remarks
   * The policy type. Valid values:
   * - **STANDARD**: general backup policy. Supports backing up data sources other than ECS instances.
   * - **UDM_ECS_ONLY**: ECS instance backup policy. Supports backing up only ECS instances.
   * 
   * If you do not specify the policy type, Cloud Backup automatically sets the policy type based on whether a backup vault is specified in the policy rules:
   * - A backup vault is specified in the policy rules: **STANDARD**
   * - No backup vault is specified in the policy rules: **UDM_ECS_ONLY**
   * 
   * @example
   * STANDARD
   */
  policyType?: string;
  /**
   * @remarks
   * The list of policy rules.
   */
  rulesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      policyDescription: 'PolicyDescription',
      policyName: 'PolicyName',
      policyType: 'PolicyType',
      rulesShrink: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyDescription: 'string',
      policyName: 'string',
      policyType: 'string',
      rulesShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

