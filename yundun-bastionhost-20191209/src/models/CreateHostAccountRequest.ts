// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateHostAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the new host account. The name can be up to 128 characters long.
   * 
   * This parameter is required.
   * 
   * @example
   * accountname
   */
  hostAccountName?: string;
  /**
   * @remarks
   * The ID of the host for which you want to create a host account.
   * 
   * > Call the [ListHosts](https://help.aliyun.com/document_detail/200665.html) operation to obtain the host ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  hostId?: string;
  /**
   * @remarks
   * The ID of the shared key for the host.
   * 
   * @example
   * 1
   */
  hostShareKeyId?: string;
  /**
   * @remarks
   * The ID of the Bastionhost instance where you want to create the host account.
   * 
   * > Call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to obtain the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-st220aw****
   */
  instanceId?: string;
  /**
   * @remarks
   * The passphrase for the private key of the new host account.
   * 
   * > You can set this parameter only when ProtocolName is set to SSH. You do not need to set this parameter if ProtocolName is set to RDP.
   * 
   * @example
   * 123456
   */
  passPhrase?: string;
  /**
   * @remarks
   * The password of the new host account.
   * 
   * @example
   * 123456
   */
  password?: string;
  /**
   * @remarks
   * The private key of the new host account. The value is a Base64-encoded string.
   * 
   * > This parameter is used only when ProtocolName is set to SSH. You do not need to set this parameter if ProtocolName is set to RDP. You can set both a password and a private key for the host account. When connecting to the asset, Bastionhost prioritizes the private key for the connection.
   * 
   * @example
   * LS0tLS1******RCBSU0tLQ==
   */
  privateKey?: string;
  /**
   * @remarks
   * The permission type of the account. If you do not set this parameter, the default value is Normal.
   * 
   * - **Privileged**: privileged account
   * 
   * - **Normal**: normal account
   * 
   * > This parameter is supported only in Bastionhost V3.2.47 and later.
   * 
   * @example
   * Normal
   */
  privilegeType?: string;
  /**
   * @remarks
   * The protocol of the new host account. <br>Valid values:<br>
   * 
   * - SSH
   * 
   * - RDP
   * 
   * This parameter is required.
   * 
   * @example
   * SSH
   */
  protocolName?: string;
  /**
   * @remarks
   * The region ID of the Bastionhost instance where you want to create the host account.
   * 
   * > For more information about the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The password change mode for the account. If you do not set this parameter, the default value is Self.
   * 
   * - **Privileged**: Use a privileged account to change the password.
   * 
   * - **Self**: Do not use a privileged account to change the password.
   * 
   * > This parameter is supported only in Bastionhost V3.2.47 and later.
   * 
   * @example
   * Self
   */
  rotationMode?: string;
  static names(): { [key: string]: string } {
    return {
      hostAccountName: 'HostAccountName',
      hostId: 'HostId',
      hostShareKeyId: 'HostShareKeyId',
      instanceId: 'InstanceId',
      passPhrase: 'PassPhrase',
      password: 'Password',
      privateKey: 'PrivateKey',
      privilegeType: 'PrivilegeType',
      protocolName: 'ProtocolName',
      regionId: 'RegionId',
      rotationMode: 'RotationMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostAccountName: 'string',
      hostId: 'string',
      hostShareKeyId: 'string',
      instanceId: 'string',
      passPhrase: 'string',
      password: 'string',
      privateKey: 'string',
      privilegeType: 'string',
      protocolName: 'string',
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

