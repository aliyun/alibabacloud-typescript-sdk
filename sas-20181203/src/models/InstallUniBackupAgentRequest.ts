// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InstallUniBackupAgentRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the anti-ransomware policy.
   * 
   * > You can call the [DescribeUniBackupPolicies](~~DescribeUniBackupPolicies~~) operation to query the IDs of anti-ransomware policies.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  policyId?: number;
  static names(): { [key: string]: string } {
    return {
      policyId: 'PolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

