// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateHostAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the host account to create. The name can be up to 128 characters in length.
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
   * > You can call the [ListHosts](https://help.aliyun.com/document_detail/200665.html) operation to query this parameter.
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
   * The ID of the Bastionhost instance where the host for which you want to create a host account resides.
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
   * The passphrase of the private key for the host account to create.
   * 
   * > You can configure this parameter when ProtocolName is set to SSH. You do not need to configure this parameter when ProtocolName is set to RDP.
   * 
   * @example
   * 123456
   */
  passPhrase?: string;
  /**
   * @remarks
   * The password of the host account to create.
   * 
   * @example
   * 123456
   */
  password?: string;
  /**
   * @remarks
   * The private key of the host account to create. The value is a Base64-encoded string.
   * 
   * > This parameter takes effect only when ProtocolName is set to SSH. You do not need to configure this parameter when ProtocolName is set to RDP. You can configure both a password and a private key for the host account. When connecting to an asset, Bastionhost preferentially uses the private key.
   * 
   * @example
   * LS0tLS1******RCBSU0tLQ==
   */
  privateKey?: string;
  /**
   * @remarks
   * The privilege type of the account. Default value: Normal.
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
   * The project ID.
   */
  projectId?: number;
  /**
   * @remarks
   * The protocol name of the host account to create.
   * <br>Valid values:
   * - SSH
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
   * The region ID of the Bastionhost instance where the host for which you want to create a host account resides.
   * 
   * > For more information about the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The password rotation mode of the account. Default value: Self.
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
      hostAccountName: 'HostAccountName',
      hostId: 'HostId',
      hostShareKeyId: 'HostShareKeyId',
      instanceId: 'InstanceId',
      passPhrase: 'PassPhrase',
      password: 'Password',
      privateKey: 'PrivateKey',
      privilegeType: 'PrivilegeType',
      projectId: 'ProjectId',
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
      projectId: 'number',
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

