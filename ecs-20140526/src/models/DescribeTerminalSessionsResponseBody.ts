// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTerminalSessionsResponseBodySessionsSessionConnectionsConnection extends $dara.Model {
  /**
   * @remarks
   * The reason why the connection was closed. This parameter is returned only when the `Status` value is `Disconnected`, `Terminated`, or `Failed`. Valid values:
   * 
   * *   InstanceNotExists: The specified instance did not exist or was released.
   * *   InstanceNotRunning: The specified instance was not running.
   * *   DeliveryTimeout: The connection timed out.
   * *   AgentNeedUpgrade: Cloud Assistant Agent required an upgrade.
   * *   AgentNotOnline: Cloud Assistant Agent was not connected to the Cloud Assistant server.
   * *   MessageFormatInvalid: The message format was invalid.
   * *   AgentSocketClosed: The connection was closed as expected.
   * *   ClientClosed: Session Manager Client closed the connection.
   * 
   * @example
   * AgentNeedUpgrade
   */
  closedReason?: string;
  /**
   * @remarks
   * The time when the connection was closed.
   * 
   * @example
   * 2024-01-19T09:16:46Z
   */
  endTime?: string;
  /**
   * @remarks
   * Cause of the connection failure. This parameter is returned only when the Status parameter is Failed.
   * 
   * @example
   * The Session Manager is closed normally.
   */
  failedDetail?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * i-bp1i7gg30r52z2em****
   */
  instanceId?: string;
  /**
   * @remarks
   * The time when the connection started to be established.
   * 
   * @example
   * 2024-01-19T09:16:40Z
   */
  startTime?: string;
  /**
   * @remarks
   * The state of the session. Valid values:
   * 
   * *   Connecting: The connection is being established.
   * *   Connected: The connection is established.
   * *   Terminated: The session is terminated.
   * *   Failed: The connection failed.
   * 
   * @example
   * Connecting
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      closedReason: 'ClosedReason',
      endTime: 'EndTime',
      failedDetail: 'FailedDetail',
      instanceId: 'InstanceId',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      closedReason: 'string',
      endTime: 'string',
      failedDetail: 'string',
      instanceId: 'string',
      startTime: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTerminalSessionsResponseBodySessionsSessionConnections extends $dara.Model {
  connection?: DescribeTerminalSessionsResponseBodySessionsSessionConnectionsConnection[];
  static names(): { [key: string]: string } {
    return {
      connection: 'Connection',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connection: { 'type': 'array', 'itemType': DescribeTerminalSessionsResponseBodySessionsSessionConnectionsConnection },
    };
  }

  validate() {
    if(Array.isArray(this.connection)) {
      $dara.Model.validateArray(this.connection);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class DescribeTerminalSessionsResponseBodySessions extends $dara.Model {
  session?: DescribeTerminalSessionsResponseBodySessionsSession[];
  static names(): { [key: string]: string } {
    return {
      session: 'Session',
    };
  }

  static types(): { [key: string]: any } {
    return {
      session: { 'type': 'array', 'itemType': DescribeTerminalSessionsResponseBodySessionsSession },
    };
  }

  validate() {
    if(Array.isArray(this.session)) {
      $dara.Model.validateArray(this.session);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTerminalSessionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * AAAAAdDWBF2****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  /**
   * @remarks
   * The information of the sessions.
   */
  sessions?: DescribeTerminalSessionsResponseBodySessions;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      sessions: 'Sessions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      sessions: DescribeTerminalSessionsResponseBodySessions,
    };
  }

  validate() {
    if(this.sessions && typeof (this.sessions as any).validate === 'function') {
      (this.sessions as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

