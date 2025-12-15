// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCommonLogsResponseBodyLogs extends $dara.Model {
  /**
   * @remarks
   * The name of the action corresponding to the log.
   * 
   * @example
   * CreaterCluster
   */
  action?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * ehpc-hz-9T3xPNezoS
   */
  clusterId?: string;
  /**
   * @remarks
   * The log type.
   * 
   * @example
   * Operation
   */
  logType?: string;
  /**
   * @remarks
   * The message of the log.
   * 
   * @example
   * ok
   */
  message?: string;
  /**
   * @remarks
   * The account ID of the operator.
   * 
   * @example
   * 137***
   */
  operatorUid?: string;
  /**
   * @remarks
   * The request ID associated with the action that generated the log.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE7****
   */
  requestId?: string;
  /**
   * @remarks
   * The action state in the log. Valid values:
   * 
   * *   InProgress: The action is being performed.
   * *   Finished: The action is completed.
   * *   Failed: The action failed.
   * 
   * @example
   * Finished
   */
  status?: string;
  /**
   * @remarks
   * The involved resource.
   * 
   * @example
   * i-abc***
   */
  target?: string;
  /**
   * @remarks
   * The time when the log was generated.
   * 
   * @example
   * 2024-08-22 14:21:54
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      clusterId: 'ClusterId',
      logType: 'LogType',
      message: 'Message',
      operatorUid: 'OperatorUid',
      requestId: 'RequestId',
      status: 'Status',
      target: 'Target',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      clusterId: 'string',
      logType: 'string',
      message: 'string',
      operatorUid: 'string',
      requestId: 'string',
      status: 'string',
      target: 'string',
      time: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCommonLogsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The brief information of operation logs.
   */
  logs?: ListCommonLogsResponseBodyLogs[];
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
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 464E9919-D04F-4D1D-B375-15989492****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 15
   */
  totalCount?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 137***
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      logs: 'Logs',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logs: { 'type': 'array', 'itemType': ListCommonLogsResponseBodyLogs },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      uid: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.logs)) {
      $dara.Model.validateArray(this.logs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

