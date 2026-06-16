// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListExecutorLogsResponseBodyLogs extends $dara.Model {
  /**
   * @remarks
   * The full path of the log file.
   */
  fileName?: string;
  /**
   * @remarks
   * The size of the file, in bytes.
   * 
   * @example
   * 6383327
   */
  fileSize?: number;
  /**
   * @remarks
   * The log name.
   * 
   * @example
   * log4j.log
   */
  logName?: string;
  /**
   * @remarks
   * The log type.
   * 
   * @example
   * log4j
   */
  logType?: string;
  /**
   * @remarks
   * The time the log file was last updated, as a Unix timestamp.
   * 
   * @example
   * 1745390462
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      fileName: 'fileName',
      fileSize: 'fileSize',
      logName: 'logName',
      logType: 'logType',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      fileSize: 'number',
      logName: 'string',
      logType: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExecutorLogsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The retrieved logs, sorted in contextual order. If no contextual logs are found based on the specified starting log, this parameter is empty.
   */
  logs?: ListExecutorLogsResponseBodyLogs[];
  /**
   * @remarks
   * The maximum number of results returned per page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token to retrieve the next page of results. This value is null when there are no more results to return.
   * 
   * @example
   * 2
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944
   */
  requestId?: string;
  /**
   * @remarks
   * The total count of log files.
   * 
   * @example
   * 200
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      logs: 'logs',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logs: { 'type': 'array', 'itemType': ListExecutorLogsResponseBodyLogs },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
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

