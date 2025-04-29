// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeTerminalSessionsResponseBodySessionsSessionConnections } from "./DescribeTerminalSessionsResponseBodySessionsSessionConnections";


export class DescribeTerminalSessionsResponseBodySessionsSession extends $dara.Model {
  /**
   * @remarks
   * The IP address of the client used to establish connections.
   * 
   * @example
   * 192.168.1.1
   */
  clientIP?: string;
  /**
   * @remarks
   * The information of the connections.
   */
  connections?: DescribeTerminalSessionsResponseBodySessionsSessionConnections;
  /**
   * @remarks
   * The time when the session was created.
   * 
   * @example
   * 2024-01-19T09:15:46Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The principal type. Valid values:
   * 
   * *   Account: an Alibaba Cloud account
   * *   RAMUser: a RAM user
   * *   AssumedRoleUser: a RAM role
   * 
   * @example
   * RAMUser
   */
  identityType?: string;
  /**
   * @remarks
   * The port number of the instance, which is used for data forwarding. If no port number was specified for data forwarding when the session was created, this parameter is empty.
   * 
   * @example
   * 22
   */
  portNumber?: number;
  /**
   * @remarks
   * The ID of the principal. Valid values based on the `IdentityType` value:
   * 
   * *   If the requester uses an Alibaba Cloud account to call the operation, the ID of the Alibaba Cloud account is returned.
   * *   If the requester uses a Resource Access Management (RAM) user to call the operation, the ID of the RAM user is returned.
   * *   If the requester uses a RAM role to call the operation, the ID of the principal that actually calls the operation is returned.
   * 
   * @example
   * 123456xxxx
   */
  principalId?: string;
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * s-hz023od0x9****
   */
  sessionId?: string;
  /**
   * @remarks
   * The address of the service that was accessed in a virtual private cloud (VPC) from the instance.
   * 
   * @example
   * 192.168.0.246
   */
  targetServer?: string;
  /**
   * @remarks
   * The username used to establish connections.
   * 
   * @example
   * root
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      clientIP: 'ClientIP',
      connections: 'Connections',
      creationTime: 'CreationTime',
      identityType: 'IdentityType',
      portNumber: 'PortNumber',
      principalId: 'PrincipalId',
      sessionId: 'SessionId',
      targetServer: 'TargetServer',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIP: 'string',
      connections: DescribeTerminalSessionsResponseBodySessionsSessionConnections,
      creationTime: 'string',
      identityType: 'string',
      portNumber: 'number',
      principalId: 'string',
      sessionId: 'string',
      targetServer: 'string',
      username: 'string',
    };
  }

  validate() {
    if(this.connections && typeof (this.connections as any).validate === 'function') {
      (this.connections as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

