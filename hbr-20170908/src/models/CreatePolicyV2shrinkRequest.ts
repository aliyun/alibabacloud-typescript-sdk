// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePolicyV2ShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the backup policy.
   * 
   * @example
   * Data is backed up at 10:00:00 every day and replicated to the China (Shanghai) region for geo-redundancy.
   */
  policyDescription?: string;
  /**
   * @remarks
   * The name of the backup policy.
   * 
   * @example
   * Daily Local Backup + Remote Backup
   */
  policyName?: string;
  /**
   * @remarks
   * The policy type. Valid values:
   * 
   * *   **STANDARD**: the general backup policy. This type of policy applies to backups other than Elastic Compute Service (ECS) instance backup.
   * *   **UDM_ECS_ONLY**: This type of policy applies only to ECS instance backup.
   * 
   * If the policy type is not specified, Cloud Backup automatically sets the policy type based on whether the backup vault is specified in the rules of the policy:
   * 
   * *   If the backup vault is specified, Cloud Backup sets the policy type to **STANDARD**.
   * *   If the backup vault is not specified, Cloud Backup sets the policy type to **UDM_ECS_ONLY**.
   * 
   * @example
   * STANDARD
   */
  policyType?: string;
  /**
   * @remarks
   * The rules in the backup policy.
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

