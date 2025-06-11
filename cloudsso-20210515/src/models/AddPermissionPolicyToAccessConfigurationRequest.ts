// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddPermissionPolicyToAccessConfigurationRequest extends $dara.Model {
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
   * The configurations of the inline policy.
   * 
   * The value can be up to 4,096 characters in length.
   * 
   * If you set `PermissionPolicyType` to `Inline`, you must specify this parameter. For more information about the syntax and structure of RAM policies, see [Policy syntax and structure](https://help.aliyun.com/document_detail/93739.html).
   * 
   * @example
   * {"Statement": [{"Action": "*","Effect": "Allow","Resource": "*"}],"Version": "1"}
   */
  inlinePolicyDocument?: string;
  /**
   * @remarks
   * The name of the policy.
   * 
   * *   If you set `PermissionPolicyType` to `System`, you must set PermissionPolicyName to the name of a system policy. You can obtain the name of the system policy from RAM.
   * *   If you set `PermissionPolicyType` to `Inline`, you must set PermissionPolicyName to the name of an inline policy. A custom value is supported. The value can be up to 32 characters in length.
   * 
   * @example
   * AliyunECSFullAccess
   */
  permissionPolicyName?: string;
  /**
   * @remarks
   * The type of the policy. Valid values:
   * 
   * *   System: system policy. Resource Access Management (RAM) system policies are reused.
   * *   Inline: inline policy. Inline policies are created based on the RAM policy syntax and structure.
   * 
   * @example
   * System
   */
  permissionPolicyType?: string;
  static names(): { [key: string]: string } {
    return {
      accessConfigurationId: 'AccessConfigurationId',
      directoryId: 'DirectoryId',
      inlinePolicyDocument: 'InlinePolicyDocument',
      permissionPolicyName: 'PermissionPolicyName',
      permissionPolicyType: 'PermissionPolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessConfigurationId: 'string',
      directoryId: 'string',
      inlinePolicyDocument: 'string',
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

