// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyHostAccountRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies the ID of the host account to be modified.
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
   * Specifies the modified host account name, which can contain up to 128 characters.
   * 
   * @example
   * abc
   */
  hostAccountName?: string;
  /**
   * @remarks
   * The host shared key ID.
   * 
   * > You can obtain this ID by calling the [ListHostShareKeys](https://help.aliyun.com/document_detail/462973.html) operation.
   * 
   * @example
   * 1
   */
  hostShareKeyId?: string;
  /**
   * @remarks
   * Specifies the ID of the Bastionhost instance where the host account to be modified resides.
   * 
   * > You can call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to query the Bastionhost instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-st220aw****
   */
  instanceId?: string;
  /**
   * @remarks
   * Specifies the modified security token of the host account\\"s private key.
   * 
   * > This parameter takes effect when the host account protocol is SSH. This parameter is not required when the host account protocol is RDP.
   * 
   * @example
   * 123456
   */
  passPhrase?: string;
  /**
   * @remarks
   * Specifies the modified password of the host account.
   * 
   * @example
   * 123456
   */
  password?: string;
  /**
   * @remarks
   * Specifies the modified private key of the host account, which is a Base64-encoded string.
   * 
   * > This parameter takes effect when the host account protocol is SSH. This parameter is not required when the host account protocol is RDP. You can call the [GetHostAccount](https://help.aliyun.com/document_detail/204391.html) operation to query the protocol used by the host account. You can configure both a password and a private key for a host account. When connecting to an asset, Bastionhost preferentially uses the private key for connection.
   * 
   * @example
   * -----BEGIN RSA PRIVATE KEY-----
   * ......
   * -----END RSA PRIVATE KEY-----
   */
  privateKey?: string;
  /**
   * @remarks
   * Account permission type. Valid values:
   * 
   * - **Privileged**: privileged account
   * 
   * - **Normal**: regular account
   * 
   * > This parameter is supported only in V3.2.47 and later versions.
   * 
   * @example
   * Normal
   */
  privilegeType?: string;
  /**
   * @remarks
   * Specifies the region ID of the Bastionhost instance where the host account to be queried resides.
   * 
   * > For the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Account password rotation mode. Valid values:
   * 
   * - **Privileged**: Use a privileged account to change the password
   * 
   * - **Self**: Do not use a privileged account to change the password
   * 
   * > This parameter is supported only in V3.2.47 and later versions.
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

