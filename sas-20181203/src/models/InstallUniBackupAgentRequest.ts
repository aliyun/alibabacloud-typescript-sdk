// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InstallUniBackupAgentRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the anti-ransomware backup policy for databases.
   * >You can call the [DescribeUniBackupPolicies](~~DescribeUniBackupPolicies~~) operation to obtain this parameter.
   * 
   * Before calling this operation, call DescribeUniBackupPolicies to confirm that AgentStatus is not INSTALLING. If the status is INSTALLING, wait for the current installation to complete before calling this operation.
   * 
   * Before obtaining a valid PolicyId, install the Security Center agent on the ECS instance, complete database discovery or manual registration, and then call CreateUniBackupPolicy to create a backup policy.
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

