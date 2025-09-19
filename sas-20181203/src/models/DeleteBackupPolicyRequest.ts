// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteBackupPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the anti-ransomware policy that you want to delete.
   * 
   * >  You can call the [DescribeBackupPolicies](~~DescribeBackupPolicies~~) operation to query the IDs of anti-ransomware policies.
   * 
   * This parameter is required.
   * 
   * @example
   * 12
   */
  id?: number;
  /**
   * @remarks
   * The version of the anti-ransomware policy that you want to delete. You can call the [DescribeBackupPolicies](~~DescribeBackupPolicies~~) operation to query the versions of anti-ransomware policies. Valid values:
   * 
   * *   **1.0.0**
   * *   **2.0.0**
   * 
   * @example
   * 2.0.0
   */
  policyVersion?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      policyVersion: 'PolicyVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      policyVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

