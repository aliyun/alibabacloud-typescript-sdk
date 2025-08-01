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

export class ListZkTrackResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * mse-100-000
   */
  errorCode?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpCode?: string;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * ok
   */
  message?: string;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * DC34E4A3-5F1C-4E40-86EA-02EDF967****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 20
   */
  totalCount?: number;
  /**
   * @remarks
   * The track data.
   */
  traces?: ListZkTrackResponseBodyTraces[];
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      httpCode: 'HttpCode',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
      traces: 'Traces',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      httpCode: 'string',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
      traces: { 'type': 'array', 'itemType': ListZkTrackResponseBodyTraces },
    };
  }

  validate() {
    if(Array.isArray(this.traces)) {
      $dara.Model.validateArray(this.traces);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

