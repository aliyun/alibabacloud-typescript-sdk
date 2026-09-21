// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeBackupPolicyVersionRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the anti-ransomware mitigation policies.
   * >You can invoke [DescribeBackupPolicies](~~DescribeBackupPolicies~~) to obtain this parameter.
   * 
   * Only policy IDs with PolicyVersion set to 1.0.0 and UpgradeStatus set to NotUpgraded are supported. Otherwise, the API returns an InvalidParam fault.
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

