// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRedisAllSessionResponseBodyDataSessions extends $dara.Model {
  /**
   * @remarks
   * The IP address and port number of the client.
   * 
   * @example
   * 172.16.XX.XX:53458
   */
  addr?: string;
  /**
   * @remarks
   * The connection duration of the session. Unit: seconds.
   * 
   * @example
   * 12
   */
  age?: string;
  /**
   * @remarks
   * The IP address of the client.
   * 
   * @example
   * 172.16.XX.XX
   */
  client?: string;
  /**
   * @remarks
   * The alias of the client.
   * 
   * @example
   * prod ip
   */
  clientDesc?: string;
  /**
   * @remarks
   * The command that was last run.
   * 
   * @example
   * PING
   */
  cmd?: string;
  /**
   * @remarks
   * The ID of the database that the client is using.
   * 
   * @example
   * 0
   */
  db?: number;
  /**
   * @remarks
   * The file descriptor event. Valid values:
   * 
   * *   **r**: Client sockets are readable in the event loop.
   * *   **w**: Client sockets are writable in the event loop.
   * 
   * @example
   * r
   */
  events?: string;
  /**
   * @remarks
   * The file descriptor that is used by sockets.
   * 
   * @example
   * 73
   */
  fd?: number;
  /**
   * @remarks
   * The client flag. Valid values:
   * 
   * *   **A**: The connection needs to be closed at the earliest opportunity.
   * *   **b**: The client is waiting for blocked events.
   * *   **c**: The connection is closed after all replies are written.
   * *   **d**: The monitored keys have been modified, and the `EXEC` command is about to fail.
   * *   **i**: The client is waiting for VM I/O operations. This value is no longer used.
   * *   **M**: The client is the primary node.
   * *   **N**: No special flags are configured.
   * *   **O**: The client is in monitor mode.
   * *   **r**: The client is a cluster node in read-only mode.
   * *   **S**: The client is a replica node in normal mode.
   * *   **u**: The client is not blocked.
   * *   **U**: The client is connected by using UNIX domain sockets.
   * *   **x**: The client is executing a transaction.
   * 
   * @example
   * N
   */
  flags?: string;
  /**
   * @remarks
   * The client ID.
   * 
   * @example
   * 9080586
   */
  id?: number;
  /**
   * @remarks
   * The duration during which the session is in the idle state. Unit: seconds.
   * 
   * @example
   * 8
   */
  idle?: number;
  /**
   * @remarks
   * The number of commands in `MULTI` or `EXEC`.
   * 
   * @example
   * -1
   */
  multi?: number;
  /**
   * @remarks
   * The name of the client.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * r-2zemyfd1sh1u2i****-proxy-14#1679****
   */
  nodeId?: string;
  /**
   * @remarks
   * The size of the fixed output buffer. Unit: bytes.
   * 
   * @example
   * 0
   */
  obl?: number;
  /**
   * @remarks
   * The number of objects contained in the output list.
   * 
   * @example
   * 0
   */
  oll?: number;
  /**
   * @remarks
   * The size of the output buffer. Unit: bytes.
   * 
   * @example
   * 0
   */
  omem?: number;
  /**
   * @remarks
   * The number of subscriptions that match the pattern.
   * 
   * @example
   * 0
   */
  psub?: number;
  /**
   * @remarks
   * The size of the input buffer. Unit: bytes.
   * 
   * @example
   * 0
   */
  qbuf?: number;
  /**
   * @remarks
   * The remaining size of the input buffer. Unit: bytes.
   * 
   * @example
   * 0
   */
  qbufFree?: number;
  /**
   * @remarks
   * The number of subscribed channels.
   * 
   * @example
   * 0
   */
  sub?: number;
  static names(): { [key: string]: string } {
    return {
      addr: 'Addr',
      age: 'Age',
      client: 'Client',
      clientDesc: 'ClientDesc',
      cmd: 'Cmd',
      db: 'Db',
      events: 'Events',
      fd: 'Fd',
      flags: 'Flags',
      id: 'Id',
      idle: 'Idle',
      multi: 'Multi',
      name: 'Name',
      nodeId: 'NodeId',
      obl: 'Obl',
      oll: 'Oll',
      omem: 'Omem',
      psub: 'Psub',
      qbuf: 'Qbuf',
      qbufFree: 'QbufFree',
      sub: 'Sub',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addr: 'string',
      age: 'string',
      client: 'string',
      clientDesc: 'string',
      cmd: 'string',
      db: 'number',
      events: 'string',
      fd: 'number',
      flags: 'string',
      id: 'number',
      idle: 'number',
      multi: 'number',
      name: 'string',
      nodeId: 'string',
      obl: 'number',
      oll: 'number',
      omem: 'number',
      psub: 'number',
      qbuf: 'number',
      qbufFree: 'number',
      sub: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRedisAllSessionResponseBodyDataSourceStats extends $dara.Model {
  /**
   * @remarks
   * The total number of sessions from the access source.
   * 
   * @example
   * 1
   */
  count?: string;
  /**
   * @remarks
   * The client IDs.
   */
  ids?: number[];
  /**
   * @remarks
   * The access source.
   * 
   * @example
   * 172.16.XX.XX
   */
  key?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      ids: 'Ids',
      key: 'Key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'string',
      ids: { 'type': 'array', 'itemType': 'number' },
      key: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ids)) {
      $dara.Model.validateArray(this.ids);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRedisAllSessionResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The information about the sessions.
   */
  sessions?: GetRedisAllSessionResponseBodyDataSessions[];
  /**
   * @remarks
   * The statistics on the access source.
   */
  sourceStats?: GetRedisAllSessionResponseBodyDataSourceStats[];
  /**
   * @remarks
   * The time when the instance sessions were returned. The value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1660100753556
   */
  timestamp?: number;
  /**
   * @remarks
   * The total number of sessions.
   * 
   * @example
   * 2
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      sessions: 'Sessions',
      sourceStats: 'SourceStats',
      timestamp: 'Timestamp',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sessions: { 'type': 'array', 'itemType': GetRedisAllSessionResponseBodyDataSessions },
      sourceStats: { 'type': 'array', 'itemType': GetRedisAllSessionResponseBodyDataSourceStats },
      timestamp: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.sessions)) {
      $dara.Model.validateArray(this.sessions);
    }
    if(Array.isArray(this.sourceStats)) {
      $dara.Model.validateArray(this.sourceStats);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRedisAllSessionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The session data.
   */
  data?: GetRedisAllSessionResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * >  If the request was successful, **Successful** is returned. If the request failed, an error message such as an error code is returned.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40C6E9AF-6C23-5614-AA83-34344CC6****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetRedisAllSessionResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

