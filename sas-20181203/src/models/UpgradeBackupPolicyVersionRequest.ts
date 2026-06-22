// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeBackupPolicyVersionRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the anti-ransomware protection policy.
   * >You can call the [DescribeBackupPolicies](~~DescribeBackupPolicies~~) operation to obtain this parameter.
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

