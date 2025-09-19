// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteBackupPolicyMachineRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the anti-ransomware policy.
   * 
   * > You can call the [DescribeBackupPolicies](~~DescribeBackupPolicies~~) operation to query the IDs of anti-ransomware policies.
   * 
   * This parameter is required.
   * 
   * @example
   * 11
   */
  policyId?: number;
  /**
   * @remarks
   * The version of the anti-ransomware policy. Valid values:
   * 
   * *   **1.0.0**
   * *   **2.0.0**
   * 
   * >  You can call the [DescribeBackupPolicies](~~DescribeBackupPolicies~~) operation to query the versions of anti-ransomware policies.
   * 
   * This parameter is required.
   * 
   * @example
   * 2.0.0
   */
  policyVersion?: string;
  /**
   * @remarks
   * The UUID of the server to which the anti-ransomware policy is applied.
   * 
   * > You must specify at least one of the `UuidList` and `Uuid` parameters.
   * 
   * @example
   * 083036e9-8411-4a9d-83af-9acbd****
   */
  uuid?: string;
  /**
   * @remarks
   * The UUIDs of the servers to which the anti-ransomware policy is applied.
   * 
   * > You must specify at least one of the `UuidList` and `Uuid` parameters.
   */
  uuidList?: string[];
  static names(): { [key: string]: string } {
    return {
      policyId: 'PolicyId',
      policyVersion: 'PolicyVersion',
      uuid: 'Uuid',
      uuidList: 'UuidList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyId: 'number',
      policyVersion: 'string',
      uuid: 'string',
      uuidList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.uuidList)) {
      $dara.Model.validateArray(this.uuidList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

