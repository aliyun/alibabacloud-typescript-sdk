// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUniBackupPolicyDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the anti-ransomware backup policy for databases.
   * >Call the [DescribeUniBackupPolicies](~~DescribeUniBackupPolicies~~) operation to obtain this parameter.
   * 
   * If DescribeUniBackupPolicies returns an empty list, activate the anti-ransomware feature of Security Center first, make sure that the Security Center agent is installed on the ECS instance and the database has been discovered, and then call CreateUniBackupPolicy to create a backup policy.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  policyId?: string;
  static names(): { [key: string]: string } {
    return {
      policyId: 'PolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

