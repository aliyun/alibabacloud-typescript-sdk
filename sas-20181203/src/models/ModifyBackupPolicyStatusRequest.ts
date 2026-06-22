// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyBackupPolicyStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the anti-ransomware policy that you want to enable or shutdown.
   * 
   * This parameter is required.
   * 
   * @example
   * 30490
   */
  id?: number;
  /**
   * @remarks
   * The version of the policy that you want to enable or disable. Set the value to **2.0.0**.
   * 
   * @example
   * 2.0.0
   * 
   * @deprecated
   */
  policyVersion?: string;
  /**
   * @remarks
   * Specifies whether to enable or disable the anti-ransomware policy. Valid values:
   * 
   * - **enabled**: Enables the anti-ransomware policy. After the policy is enabled, anti-ransomware can protect your server data by backing up data on specified servers based on your anti-ransomware policy.
   * - **disabled**: Disables the anti-ransomware policy. After the policy is disabled, running backup tasks are stopped.
   * 
   * > Backup tasks consume network bandwidth. Enable the policy during off-peak hours to execute data backup tasks.
   * 
   * This parameter is required.
   * 
   * @example
   * enabled
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      policyVersion: 'PolicyVersion',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      policyVersion: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

