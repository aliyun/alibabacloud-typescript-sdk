// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteBackupPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the mitigation policies that you want to delete.
   * >Invoke the [DescribeBackupPolicies](~~DescribeBackupPolicies~~) operation to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 12
   */
  id?: number;
  /**
   * @remarks
   * The version of the mitigation policies that you want to delete. You can invoke the [DescribeBackupPolicies](~~DescribeBackupPolicies~~) operation to query this parameter. Valid values:
   * 
   * - **1.0.0**: The mitigation policies version is 1.0.0.
   * - **2.0.0**: The mitigation policies version is 2.0.0.
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

