// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartTerminalSessionShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must ensure that it is unique among different requests. The **ClientToken** value can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The command to be executed after the session is initiated. The command cannot exceed 512 characters in length.
   * 
   * > After CommandLine is specified, you cannot specify PortNumber or TargetServer.
   * 
   * @example
   * ssh root@192.168.0.246
   */
  commandLine?: string;
  /**
   * @remarks
   * The network type of the WebSocket URL required for a remote connection to the instance. Valid values:
   * - Internet: the Internet. This is the default value.
   * - Intranet: the internal network.
   * 
   * @example
   * Intranet
   */
  connectionType?: string;
  /**
   * @remarks
   * The session encryption configurations.
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
   * The name of the user password used when Session Manager is used on a Windows instance. The name cannot exceed 255 characters in length.
   * If you want to use Session Manager on a Windows instance as a non-default user (System), you must specify both the Username parameter and this parameter. To reduce the risk of password leakage, the plaintext password must be hosted in the operations management parameter repository, and only the password name is passed here. For more information, see [Encrypted parameters](https://help.aliyun.com/document_detail/186828.html).
   * 
   * @example
   * axtSecretPassword
   */
  passwordName?: string;
  /**
   * @remarks
   * The port number of the ECS instance, which is used for data forwarding. After this parameter is specified, data forwarding of Cloud Assistant Agent is directed to the specified port number for port forwarding. For example, SSH uses port 22.
   * 
   * Default value: null, which indicates that the port number for data forwarding is not specified.
   * 
   * @example
   * 22
   */
  portNumber?: number;
  /**
   * @remarks
   * The region ID of the instance. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to view the latest list of Alibaba Cloud regions.
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
   * The destination service address in the VPC that is accessed through the instance.
   * 
   * > When this parameter is not empty, PortNumber specifies the port number of the destination service in the VPC that is accessed through the managed instance.
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

