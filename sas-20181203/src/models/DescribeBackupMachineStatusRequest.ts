// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupMachineStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the anti-ransomware backup policy.
   * >Call the [DescribeBackupPolicies](~~DescribeBackupPolicies~~) operation to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  policyId?: number;
  /**
   * @remarks
   * The version of the mitigation policies. Valid values:
   * 
   * - **1.0.0**: The version of the mitigation policies is 1.0.0.
   * - **2.0.0**: The version of the mitigation policies is 2.0.0.
   * 
   * @example
   * 2.0.0
   */
  policyVersion?: string;
  /**
   * @remarks
   * The UUID of the server to query.
   * >Call the [DescribeBackupPolicy](~~DescribeBackupPolicy~~) operation to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * eb2c782e-64f2-4590-a86c-d90164df****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      policyId: 'PolicyId',
      policyVersion: 'PolicyVersion',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyId: 'number',
      policyVersion: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

