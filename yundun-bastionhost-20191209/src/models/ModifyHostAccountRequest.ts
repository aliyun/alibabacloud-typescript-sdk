// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyHostAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the host account to modify.
   * 
   * > You can call the [ListHostAccounts](https://help.aliyun.com/document_detail/204372.html) operation to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  hostAccountId?: string;
  /**
   * @remarks
   * The new name of the host account. The name can be up to 128 characters in length.
   * 
   * @example
   * abc
   */
  hostAccountName?: string;
  /**
   * @remarks
   * The ID of the shared key for the host.
   * > You can call the [ListHostShareKeys](https://help.aliyun.com/document_detail/462973.html) operation to obtain this ID.
   * 
   * @example
   * 1
   */
  hostShareKeyId?: string;
  /**
   * @remarks
   * The ID of the bastion host instance where the host account to modify resides.
   * 
   * > You can call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to obtain the bastion host instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-st220aw****
   */
  instanceId?: string;
  /**
   * @remarks
   * The new passphrase of the private key for the host account.
   * 
   * > This parameter takes effect only when the protocol of the host account is SSH. If the protocol is RDP, you do not need to configure this parameter.
   * 
   * @example
   * 123456
   */
  passPhrase?: string;
  /**
   * @remarks
   * The new password of the host account.
   * 
   * @example
   * 123456
   */
  password?: string;
  /**
   * @remarks
   * The new private key of the host account. The private key is a Base64-encoded string.
   * 
   * > This parameter takes effect only when the protocol of the host account is SSH. If the protocol is RDP, you do not need to configure this parameter. You can call the [GetHostAccount](https://help.aliyun.com/document_detail/204391.html) operation to query the protocol used by the host account. You can configure both a password and a private key for the host account. When connecting to an asset, the bastion host preferentially uses the private key.
   * 
   * @example
   * -----BEGIN RSA PRIVATE KEY-----
   * ......
   * -----END RSA PRIVATE KEY-----
   */
  privateKey?: string;
  /**
   * @remarks
   * The privilege type of the account. Valid values:
   * - **Privileged**: privileged account.
   * - **Normal**: standard account.
   * >Only supported in V3.2.47 and later.
   * 
   * @example
   * Normal
   */
  privilegeType?: string;
  /**
   * @remarks
   * The ID of the project to which the host of the host account belongs.
   * 
   * @example
   * 1
   */
  projectId?: number;
  /**
   * @remarks
   * The region ID of the bastion host instance where the host account to query resides.
   * 
   * > For the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The password rotation mode of the account. Valid values:
   * - **Privileged**: uses a privileged account to rotate the password.
   * - **Self**: does not use a privileged account to rotate the password.
   * >Only supported in V3.2.47 and later.
   * 
   * @example
   * Self
   */
  rotationMode?: string;
  static names(): { [key: string]: string } {
    return {
      hostAccountId: 'HostAccountId',
      hostAccountName: 'HostAccountName',
      hostShareKeyId: 'HostShareKeyId',
      instanceId: 'InstanceId',
      passPhrase: 'PassPhrase',
      password: 'Password',
      privateKey: 'PrivateKey',
      privilegeType: 'PrivilegeType',
      projectId: 'ProjectId',
      regionId: 'RegionId',
      rotationMode: 'RotationMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostAccountId: 'string',
      hostAccountName: 'string',
      hostShareKeyId: 'string',
      instanceId: 'string',
      passPhrase: 'string',
      password: 'string',
      privateKey: 'string',
      privilegeType: 'string',
      projectId: 'number',
      regionId: 'string',
      rotationMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

