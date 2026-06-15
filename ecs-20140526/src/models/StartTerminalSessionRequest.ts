// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartTerminalSessionRequestEncryptionOptions extends $dara.Model {
  /**
   * @remarks
   * Enable end-to-end encryption for the session connection.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * KMS key ID.<br>
   * Notes:
   * 
   * - Only KMS symmetric keys are supported.
   * 
   * - This parameter can be specified only when the encryption mode is Kms.
   * 
   * @example
   * xxx
   */
  KMSKeyId?: string;
  /**
   * @remarks
   * Encryption mode. Valid values:
   * 
   * - Auto: Use autonegotiation to encrypt the session with a secret key.
   * 
   * - Kms: Use a KMS key to encrypt the session.
   * 
   * - Default value: Auto.
   * 
   * Notes:
   * 
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
   * Ensures the idempotence of the request. Generate a unique parameter value from your client to guarantee uniqueness across different requests. **ClientToken** supports only ASCII characters and must not exceed 64 characters. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The command to run after the session is initiated. The command length cannot exceed 512 characters.
   * 
   * > If you specify the `CommandLine` parameter, you cannot specify the `PortNumber` or `TargetServer` parameter.
   * 
   * @example
   * ssh root@192.168.0.246
   */
  commandLine?: string;
  /**
   * @remarks
   * The network type of the WebSocket URL required to connect to the instance. Valid values:
   * 
   * - Internet (default)
   * 
   * - Intranet
   * 
   * @example
   * Intranet
   */
  connectionType?: string;
  /**
   * @remarks
   * Session encryption configuration items.
   */
  encryptionOptions?: StartTerminalSessionRequestEncryptionOptions;
  /**
   * @remarks
   * The instance IDs.
   * 
   * This parameter is required.
   */
  instanceId?: string[];
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The password name of the user when using Session Manager on a Windows instance. The length cannot exceed 255 characters.<br>
   * When you want to use Session Manager on a Windows instance as a non-default user (System), you must pass both Username and this parameter. To reduce the risk of password disclosure, store the plaintext password in the parameter repository of CloudOps Orchestration Service, and pass only the password name here. For more information, see [encrypted parameters](https://help.aliyun.com/document_detail/186828.html).
   * 
   * @example
   * axtSecretPassword
   */
  passwordName?: string;
  /**
   * @remarks
   * The port number of the ECS instance. The port is used to forward data. After this parameter is configured, Cloud Assistant Agent forwards data to the specified port. For example, you can set this parameter to 22 for data forwarding over SSH.
   * 
   * This parameter is empty by default, which indicates that no port is configured to forward data.
   * 
   * @example
   * 22
   */
  portNumber?: number;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
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
   * The IP address of the instance. You can use the IP address to access the destination service in a virtual private cloud (VPC).
   * 
   * > If this parameter is not empty, `PortNumber` specifies the port number that is used by the managed instance to access the destination service in the VPC.
   * 
   * @example
   * 192.168.0.246
   */
  targetServer?: string;
  /**
   * @remarks
   * The username used for connection establishment.
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

