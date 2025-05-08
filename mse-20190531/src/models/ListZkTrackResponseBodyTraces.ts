// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListZkTrackResponseBodyTraces extends $dara.Model {
  /**
   * @remarks
   * The access control list (ACL).
   * 
   * @example
   * world:anyone:cdrwa
   */
  acl?: string;
  /**
   * @remarks
   * The data type. Valid values:
   * 
   * *   persist
   * *   ephemeral
   * 
   * @example
   * persist
   */
  dataType?: string;
  /**
   * @remarks
   * The type of the event. For trajectory of the Notify type:
   * 
   * *   NodeCreated
   * *   NodeDeleted
   * *   NodeDataChanged
   * *   NodeChildrenChanged
   * 
   * @example
   * NodeCreated
   */
  eventType?: string;
  /**
   * @remarks
   * Indicates whether the transaction ended.
   * 
   * @example
   * true
   */
  finished?: boolean;
  /**
   * @remarks
   * The logging time.
   * 
   * @example
   * 2022-11-28 15:09:15,606
   */
  logDate?: string;
  /**
   * @remarks
   * The transaction size.
   * 
   * @example
   * 3
   */
  multiSize?: number;
  /**
   * @remarks
   * The type of the operation. For trajectory of the Push type:
   * 
   * *   Create
   * *   Update
   * *   Delete
   * *   SetAcl
   * *   Multi
   * 
   * For trajectory of the Pull type:
   * 
   * *   GetData
   * *   GetChild
   * *   GetStat
   * 
   * @example
   * Create
   */
  opType?: string;
  /**
   * @remarks
   * The path.
   * 
   * @example
   * /path
   */
  path?: string;
  /**
   * @remarks
   * The returned result.
   * 
   * @example
   * success
   */
  result?: string;
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * 0x301fdfbdbf00***
   */
  sessionId?: string;
  /**
   * @remarks
   * The timestamp. It is not available.
   * 
   * @example
   * 1669619383000
   */
  timestamp?: string;
  /**
   * @remarks
   * The type of the trajectory. Valid values:
   * 
   * *   Push
   * *   Pull
   * *   Notify
   * 
   * @example
   * Push
   */
  traceType?: string;
  /**
   * @remarks
   * The time to live (TTL).
   * 
   * @example
   * 0
   */
  ttl?: number;
  /**
   * @remarks
   * Indicates whether the monitoring feature is enabled.
   * 
   * @example
   * true
   */
  watch?: boolean;
  static names(): { [key: string]: string } {
    return {
      acl: 'Acl',
      dataType: 'DataType',
      eventType: 'EventType',
      finished: 'Finished',
      logDate: 'LogDate',
      multiSize: 'MultiSize',
      opType: 'OpType',
      path: 'Path',
      result: 'Result',
      sessionId: 'SessionId',
      timestamp: 'Timestamp',
      traceType: 'TraceType',
      ttl: 'Ttl',
      watch: 'Watch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acl: 'string',
      dataType: 'string',
      eventType: 'string',
      finished: 'boolean',
      logDate: 'string',
      multiSize: 'number',
      opType: 'string',
      path: 'string',
      result: 'string',
      sessionId: 'string',
      timestamp: 'string',
      traceType: 'string',
      ttl: 'number',
      watch: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

