// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartTerminalSessionRequestEncryptionOptions extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable end-to-end encryption for the session connection.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The KMS key ID.
   * Note:
   * - Only KMS symmetric keys are supported.
   * - This parameter can be specified only when the encryption mode is set to Kms.
   * 
   * @example
   * xxx
   */
  KMSKeyId?: string;
  /**
   * @remarks
   * The secret key encryption pattern. Valid values:
   * - Auto: uses an automatically negotiated key to encrypt the session.
   * - Kms: uses a KMS key to encrypt the session.
   * - Default value: Auto.
   * 
   * Note:
   * - This parameter can be specified only when session encryption is enabled.
   * 
   * @example
   * Auto
   */
  mode?: string;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      KMSKeyId: 'KMSKeyId',
      mode: 'Mode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      KMSKeyId: 'string',
      mode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartTerminalSessionRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but make sure that the token is unique among different requests. The **ClientToken** value can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The command to run after the session is initiated. The command can be up to 512 characters in length.
   * 
   * > After you specify `CommandLine`, you cannot specify `PortNumber` or `TargetServer`.
   * 
   * @example
   * ssh root@192.168.0.246
   */
  commandLine?: string;
  /**
   * @remarks
   * The network type of the WebSocket URL required for the remote connection to the instance. Valid values:
   * - Internet: the Internet. This is the default value.
   * - Intranet: the internal network.
   * 
   * @example
   * Intranet
   */
  connectionType?: string;
  /**
   * @remarks
   * The session encryption configuration.
   */
  encryptionOptions?: StartTerminalSessionRequestEncryptionOptions;
  /**
   * @remarks
   * The instance ID list.
   * 
   * This parameter is required.
   */
  instanceId?: string[];
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The name of the password for the user when you use Session Manager on a Windows instance. The name can be up to 255 characters in length.
   * When you want to use Session Manager on a Windows instance as a non-default user (System), specify both Username and this parameter. To reduce the risk of password leaks, store the plaintext password in the parameter repository of operations management and specify only the password name here. For more information, see [Encryption parameters](https://help.aliyun.com/document_detail/186828.html).
   * 
   * @example
   * axtSecretPassword
   */
  passwordName?: string;
  /**
   * @remarks
   * The port number of the ECS instance for data forwarding. After this parameter is specified, Cloud Assistant Agent forwards data to the specified port for port forwarding. For example, SSH uses port 22.
   * 
   * Default value: empty, which indicates that no port number is specified for data forwarding.
   * 
   * @example
   * 22
   */
  portNumber?: number;
  /**
   * @remarks
   * The region ID of the instance. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The address of the destination server in the VPC that you want to access through the instance.
   * 
   * > If this parameter is not empty, `PortNumber` specifies the port number of the destination server in the VPC that you want to access through the managed instance.
   * 
   * @example
   * 192.168.0.246
   */
  targetServer?: string;
  /**
   * @remarks
   * The username used for the connection.
   * 
   * @example
   * testUser
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      commandLine: 'CommandLine',
      connectionType: 'ConnectionType',
      encryptionOptions: 'EncryptionOptions',
      instanceId: 'InstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      passwordName: 'PasswordName',
      portNumber: 'PortNumber',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      targetServer: 'TargetServer',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      commandLine: 'string',
      connectionType: 'string',
      encryptionOptions: StartTerminalSessionRequestEncryptionOptions,
      instanceId: { 'type': 'array', 'itemType': 'string' },
      ownerAccount: 'string',
      ownerId: 'number',
      passwordName: 'string',
      portNumber: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      targetServer: 'string',
      username: 'string',
    };
  }

  validate() {
    if(this.encryptionOptions && typeof (this.encryptionOptions as any).validate === 'function') {
      (this.encryptionOptions as any).validate();
    }
    if(Array.isArray(this.instanceId)) {
      $dara.Model.validateArray(this.instanceId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

