// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeBackupPolicyVersionRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the anti-ransomware policy.
   * 
   * > You can call the [DescribeBackupPolicies](~~DescribeBackupPolicies~~) operation to query the IDs of anti-ransomware policies.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

