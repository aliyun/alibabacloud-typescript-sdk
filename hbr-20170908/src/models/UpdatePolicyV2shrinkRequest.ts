// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePolicyV2ShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The policy description.
   * 
   * @example
   * Back up once every day at 10:00 AM, with cross-region backup to Shanghai.
   */
  policyDescription?: string;
  /**
   * @remarks
   * The policy ID.
   * 
   * @example
   * po-000************viy
   */
  policyId?: string;
  /**
   * @remarks
   * The policy name.
   * 
   * @example
   * Daily backup + geo-redundancy
   */
  policyName?: string;
  /**
   * @remarks
   * The list of policy rules.
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

