// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteUniBackupPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the anti-ransomware policy.
   * 
   * >  You can call the [DescribeUniBackupPolicies](~~DescribeUniBackupPolicies~~) operation to query the IDs of anti-ransomware policies. You must specify at least one of the PolicyId parameter and the **PolicyIds** parameter.
   * 
   * @example
   * 123
   */
  policyId?: number;
  /**
   * @remarks
   * The IDs of anti-ransomware policies.
   * 
   * >  You can call the [DescribeUniBackupPolicies](~~DescribeUniBackupPolicies~~) operation to query the IDs of anti-ransomware policies. You must specify at least one of the **PolicyId** parameter and the PolicyIds parameter.
   * 
   * @example
   * 123,124
   */
  policyIds?: string;
  static names(): { [key: string]: string } {
    return {
      policyId: 'PolicyId',
      policyIds: 'PolicyIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyId: 'number',
      policyIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

