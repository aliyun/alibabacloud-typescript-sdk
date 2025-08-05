// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePolicyV2ShrinkRequest extends $dara.Model {
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
   * The ID of the backup policy.
   * 
   * @example
   * po-000************viy
   */
  policyId?: string;
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
   * The rules in the backup policy.
   */
  rulesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      policyDescription: 'PolicyDescription',
      policyId: 'PolicyId',
      policyName: 'PolicyName',
      rulesShrink: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyDescription: 'string',
      policyId: 'string',
      policyName: 'string',
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

