// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddPermissionPolicyToAccessConfigurationRequest extends $dara.Model {
  /**
   * @remarks
   * The access configuration ID.
   * 
   * @example
   * ac-00jhtfl8thteu6uj****
   */
  accessConfigurationId?: string;
  /**
   * @remarks
   * The directory ID.
   * 
   * @example
   * d-00fc2p61****
   */
  directoryId?: string;
  /**
   * @remarks
   * The content of the inline policy.
   * 
   * The maximum length is 4,096 characters.
   * 
   * If PermissionPolicyType is set to Inline, this parameter is required. For more information about the syntax and structure of access policies, see [Access policy syntax and structure](https://help.aliyun.com/document_detail/93739.html).
   * 
   * @example
   * {"Statement": [{"Action": "*","Effect": "Allow","Resource": "*"}],"Version": "1"}
   */
  inlinePolicyDocument?: string;
  /**
   * @remarks
   * The name of the access policy. 
   * - If PermissionPolicyType is set to System, this parameter specifies the name of the system policy. Because RAM system policies are reused, you must obtain the system policy name from RAM.
   * - If PermissionPolicyType is set to Inline, this parameter specifies the name of the inline policy. You can customize the name. The name can be up to 32 characters in length.
   * 
   * @example
   * AliyunECSFullAccess
   */
  permissionPolicyName?: string;
  /**
   * @remarks
   * The type of the access policy. Valid values:
   * 
   * - System: system policy. Reuses the system policies of Resource Access Management (RAM).
   * - Inline: inline policy. A custom policy written based on the syntax and structure of RAM policies.
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

