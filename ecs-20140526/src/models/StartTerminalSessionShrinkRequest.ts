// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartTerminalSessionShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must ensure that it is unique among different requests. The **ClientToken** can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [Ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The command to execute after the session is initiated. The value cannot exceed 512 characters in length.
   * 
   * > If you specify `CommandLine`, you cannot specify `PortNumber` or `TargetServer`.
   * 
   * @example
   * ssh root@192.168.0.246
   */
  commandLine?: string;
  /**
   * @remarks
   * The network type of the WebSocket URL required for remotely connecting to the instance. Valid values:
   * - Internet: the Internet (default).
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
  encryptionOptionsShrink?: string;
  /**
   * @remarks
   * The list of instance IDs.
   * 
   * This parameter is required.
   */
  instanceId?: string[];
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The name of the user password used when using Session Manager on a Windows instance. The value cannot exceed 255 characters in length.
   * If you want to use Session Manager on a Windows instance as a non-default user (other than System), you must specify both `Username` and this parameter. To reduce the risk of password leakage, the plaintext password must be hosted in the parameter repository of CloudOps Orchestration Service, and you only need to pass the password name here. For more information, see [Encrypt a parameter](https://help.aliyun.com/document_detail/186828.html).
   * 
   * @example
   * axtSecretPassword
   */
  passwordName?: string;
  /**
   * @remarks
   * The port number of the ECS instance used for port forwarding. If you specify this parameter, the Cloud Assistant Agent forwards data to the specified port. For example, SSH uses port 22.
   * 
   * Default value: empty, which indicates that no port number is specified for port forwarding.
   * 
   * @example
   * 22
   */
  portNumber?: number;
  /**
   * @remarks
   * The region ID of the instance. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the latest regions.
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
   * The address of the destination service in the VPC that is accessed through the instance.
   * 
   * > If this parameter is not empty, `PortNumber` specifies the port number of the destination service in the VPC accessed through the managed instance.
   * 
   * @example
   * 192.168.0.246
   */
  targetServer?: string;
  /**
   * @remarks
   * The username used to connect to the instance.
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
      encryptionOptionsShrink: 'EncryptionOptions',
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
      encryptionOptionsShrink: 'string',
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
    if(Array.isArray(this.instanceId)) {
      $dara.Model.validateArray(this.instanceId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

