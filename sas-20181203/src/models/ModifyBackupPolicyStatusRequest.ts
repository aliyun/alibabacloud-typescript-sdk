// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyBackupPolicyStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the anti-ransomware policy.
   * 
   * This parameter is required.
   * 
   * @example
   * 30490
   */
  id?: number;
  /**
   * @remarks
   * The version of the anti-ransomware policy. Set the value to **2.0.0**.
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
   * *   **enabled**: enables the anti-ransomware policy. After you enable the anti-ransomware policy, the anti-ransomware feature protects data on your servers. Data on your servers is backed up based on the policy.
   * *   **disabled**: disables the anti-ransomware policy. After you disable the anti-ransomware policy, the data backup task that is running based on the policy stops.
   * 
   * >  When the system runs data backup tasks, your network bandwidth is consumed. We recommend that you enable the anti-ransomware policy during peak-off hours to back up data.
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

