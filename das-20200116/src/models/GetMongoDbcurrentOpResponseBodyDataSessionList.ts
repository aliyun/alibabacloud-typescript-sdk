// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMongoDBCurrentOpResponseBodyDataSessionList extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the operation is active. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  active?: boolean;
  /**
   * @remarks
   * The IP address of the client.
   * 
   * @example
   * 219.143.177.4:52324
   */
  client?: string;
  /**
   * @remarks
   * The document that contains the complete command object associated with the operation.
   * 
   * @example
   * "command" : {
   *   "find" : "items",
   *   "filter" : {
   *     "sku" : 1403978
   *   },
   *   ...
   *   "$db" : "test"
   * }
   */
  command?: string;
  /**
   * @remarks
   * The connection ID.
   * 
   * @example
   * 66378736
   */
  connectionId?: number;
  /**
   * @remarks
   * The description of the connection.
   * 
   * @example
   * conn1013858
   */
  desc?: string;
  /**
   * @remarks
   * The driver for MongoDB.
   * 
   * @example
   * mongo-java-driver|legacy@3.11.2
   */
  driver?: string;
  /**
   * @remarks
   * The host.
   * 
   * @example
   * a79******.cloud.et15:3328
   */
  host?: string;
  /**
   * @remarks
   * Indicates whether the operation is marked as terminated.
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  killPending?: boolean;
  /**
   * @remarks
   * The namespace.
   * 
   * @example
   * admin.cmd
   */
  ns?: string;
  /**
   * @remarks
   * The type of the operation.
   * 
   * @example
   * update
   */
  op?: string;
  /**
   * @remarks
   * The operation ID.
   * 
   * @example
   * 14508
   */
  opId?: string;
  /**
   * @remarks
   * The architecture of the operating system.
   * 
   * @example
   * amd64
   */
  osArch?: string;
  /**
   * @remarks
   * The name of the operating system.
   * 
   * @example
   * Linux
   */
  osName?: string;
  /**
   * @remarks
   * The type of the operating system.
   * 
   * @example
   * Linux
   */
  osType?: string;
  /**
   * @remarks
   * The description of the execution plan.
   * 
   * @example
   * None
   */
  planSummary?: string;
  /**
   * @remarks
   * The platform.
   * 
   * @example
   * Java/Alibaba/1.8.0_152-b5
   */
  platform?: string;
  /**
   * @remarks
   * The duration of the operation. Unit: seconds.
   * 
   * @example
   * 5
   */
  secsRunning?: number;
  /**
   * @remarks
   * The ID of the data shard.
   * 
   * >  This parameter is returned for sharded cluster instances.
   * 
   * @example
   * d-bp1689995b78****
   */
  shard?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      client: 'Client',
      command: 'Command',
      connectionId: 'ConnectionId',
      desc: 'Desc',
      driver: 'Driver',
      host: 'Host',
      killPending: 'KillPending',
      ns: 'Ns',
      op: 'Op',
      opId: 'OpId',
      osArch: 'OsArch',
      osName: 'OsName',
      osType: 'OsType',
      planSummary: 'PlanSummary',
      platform: 'Platform',
      secsRunning: 'SecsRunning',
      shard: 'Shard',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      client: 'string',
      command: 'string',
      connectionId: 'number',
      desc: 'string',
      driver: 'string',
      host: 'string',
      killPending: 'boolean',
      ns: 'string',
      op: 'string',
      opId: 'string',
      osArch: 'string',
      osName: 'string',
      osType: 'string',
      planSummary: 'string',
      platform: 'string',
      secsRunning: 'number',
      shard: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

