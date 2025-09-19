// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UninstallBackupClientRequest extends $dara.Model {
  /**
   * @remarks
   * The version of the anti-ransomware policy. You can call the [DescribeBackupPolicies](~~DescribeBackupPolicies~~) operation to query the versions of anti-ransomware policies. Valid values:
   * 
   * *   **1.0.0**
   * *   **2.0.0**
   * 
   * This parameter is required.
   * 
   * @example
   * 2.0.0
   */
  policyVersion?: string;
  /**
   * @remarks
   * The UUID of the server from which you want to uninstall the anti-ransomware agent.
   * 
   * > You must specify at least one of the UuidList and Uuid parameters.
   * 
   * @example
   * D0D6E6E4-CB8C-4897-B852-46AEFDA0****
   */
  uuid?: string;
  /**
   * @remarks
   * The UUIDs of the servers from which you want to uninstall the anti-ransomware agent.
   * 
   * > You must specify at least one of the UuidList and Uuid parameters.
   * 
   * @example
   * ["D0D6E6E4-CB8C-4897-B852-46AEFDA0****", "3bb30859-b3b5-4f28-868f-b0892c98****"]
   */
  uuidList?: string[];
  static names(): { [key: string]: string } {
    return {
      policyVersion: 'PolicyVersion',
      uuid: 'Uuid',
      uuidList: 'UuidList',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

