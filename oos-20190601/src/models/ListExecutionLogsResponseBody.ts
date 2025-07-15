// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListExecutionLogsResponseBodyExecutionLogs extends $dara.Model {
  /**
   * @remarks
   * The log type.
   * 
   * @example
   * System
   */
  logType?: string;
  /**
   * @remarks
   * The details of the task execution.
   * 
   * @example
   * The task CheckDiskCategory completed.
   */
  message?: string;
  /**
   * @remarks
   * The task execution ID.
   * 
   * @example
   * exec-1234567zxcvb.t0010
   */
  taskExecutionId?: string;
  /**
   * @remarks
   * The timestamp when the task was run.
   * 
   * @example
   * 2019-05-24T:02:29:07Z
   */
  timestamp?: string;
  static names(): { [key: string]: string } {
    return {
      logType: 'LogType',
      message: 'Message',
      taskExecutionId: 'TaskExecutionId',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logType: 'string',
      message: 'string',
      taskExecutionId: 'string',
      timestamp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExecutionLogsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The logs of the execution.
   */
  executionLogs?: ListExecutionLogsResponseBodyExecutionLogs[];
  /**
   * @remarks
   * Indicates whether the log is truncated.
   * 
   * @example
   * true
   */
  isTruncated?: boolean;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * gAAAAABdpsGWjX8dJ-a6dl_pvoS7AFxNHSNJKHLCAJJ0ylgA53nWW5V4HTEZKCYTaEPNOrxFir4z43UTOjE150cFr8AGTifA==
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 14A07460-EBE7-47CA-9757-12CC4761D47A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      executionLogs: 'ExecutionLogs',
      isTruncated: 'IsTruncated',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executionLogs: { 'type': 'array', 'itemType': ListExecutionLogsResponseBodyExecutionLogs },
      isTruncated: 'boolean',
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.executionLogs)) {
      $dara.Model.validateArray(this.executionLogs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

