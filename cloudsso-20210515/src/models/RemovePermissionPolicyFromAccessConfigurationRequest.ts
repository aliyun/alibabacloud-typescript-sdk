// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemovePermissionPolicyFromAccessConfigurationRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the access configuration.
   * 
   * @example
   * ac-00jhtfl8thteu6uj****
   */
  accessConfigurationId?: string;
  /**
   * @remarks
   * The ID of the directory.
   * 
   * @example
   * d-00fc2p61****
   */
  directoryId?: string;
  /**
   * @remarks
   * The name of the policy.
   * 
   * @example
   * AliyunECSFullAccess
   */
  permissionPolicyName?: string;
  /**
   * @remarks
   * The type of the policy. Valid values:
   * 
   * *   System: system policy.
   * *   Inline: inline policy.
   * 
   * @example
   * System
   */
  permissionPolicyType?: string;
  static names(): { [key: string]: string } {
    return {
      accessConfigurationId: 'AccessConfigurationId',
      directoryId: 'DirectoryId',
      permissionPolicyName: 'PermissionPolicyName',
      permissionPolicyType: 'PermissionPolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessConfigurationId: 'string',
      directoryId: 'string',
      permissionPolicyName: 'string',
      permissionPolicyType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

