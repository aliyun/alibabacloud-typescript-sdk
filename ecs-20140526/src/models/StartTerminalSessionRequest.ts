// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartTerminalSessionRequest extends $dara.Model {
  /**
   * @remarks
   * The command to run after the session is initiated. The command length cannot exceed 512 characters.
   * 
   * >  If you specify the `CommandLine` parameter, you cannot specify the `PortNumber` or `TargetServer` parameter.
   * 
   * @example
   * ssh root@192.168.0.246
   */
  commandLine?: string;
  /**
   * @remarks
   * The network type of the WebSocket URL required to connect to the instance. Valid values:
   * 
   * *   Internet (default)
   * *   Intranet
   * 
   * @example
   * Intranet
   */
  connectionType?: string;
  /**
   * @remarks
   * The instance IDs.
   * 
   * This parameter is required.
   */
  instanceId?: string[];
  ownerAccount?: string;
  ownerId?: number;
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
   * >  If this parameter is not empty, `PortNumber` specifies the port number that is used by the managed instance to access the destination service in the VPC.
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
      commandLine: 'CommandLine',
      connectionType: 'ConnectionType',
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
      commandLine: 'string',
      connectionType: 'string',
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

