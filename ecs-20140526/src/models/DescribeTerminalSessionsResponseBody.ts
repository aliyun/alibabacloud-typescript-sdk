// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTerminalSessionsResponseBodySessionsSessionConnectionsConnection extends $dara.Model {
  closedReason?: string;
  endTime?: string;
  failedDetail?: string;
  instanceId?: string;
  startTime?: string;
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
  clientIP?: string;
  connections?: DescribeTerminalSessionsResponseBodySessionsSessionConnections;
  creationTime?: string;
  identityType?: string;
  portNumber?: number;
  principalId?: string;
  sessionId?: string;
  targetServer?: string;
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

