// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateHostAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the host account. The name can be up to 128 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * abc
   */
  hostAccountName?: string;
  /**
   * @remarks
   * The ID of the host to which you want to add a host account.
   * 
   * >  You can call the [ListHosts](https://help.aliyun.com/document_detail/200665.html) operation to query the ID of the host.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  hostId?: string;
  /**
   * @remarks
   * The ID of the shared key.
   * 
   * @example
   * 1
   */
  hostShareKeyId?: string;
  /**
   * @remarks
   * The ID of the bastion host in which you want to add a host account to the host.
   * 
   * >  You can call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to query the ID of the bastion host.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-st220aw****
   */
  instanceId?: string;
  /**
   * @remarks
   * The passphrase for the private key of the host account.
   * 
   * > You can configure this parameter only if ProtocolName is set to SSH. You do not need to configure this parameter if ProtocolName is set to RDP.
   * 
   * @example
   * ****
   */
  passPhrase?: string;
  /**
   * @remarks
   * The password of the host account.
   * 
   * @example
   * ****
   */
  password?: string;
  /**
   * @remarks
   * The private key of the host account. Specify a Base64-encoded string.
   * 
   * > This parameter is valid only if ProtocolName is set to SSH. You do not need to configure this parameter if ProtocolName is set to RDP. You can configure a password and a private key for the host account at the same time. If both a password and a private key are configured for the host account, Bastionhost preferentially uses the private key for logon.
   * 
   * @example
   * ****
   */
  privateKey?: string;
  privilegeType?: string;
  /**
   * @remarks
   * The protocol of the host to which you want to add a host account.
   * 
   * Valid values:
   * 
   * *   SSH
   * *   RDP
   * 
   * This parameter is required.
   * 
   * @example
   * SSH
   */
  protocolName?: string;
  /**
   * @remarks
   * The region ID of the bastion host in which you want to add a host account to the host.
   * 
   * >  For more information about the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
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

