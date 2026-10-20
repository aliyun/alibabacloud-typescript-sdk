// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListExecutorLogsResponseBodyLogs extends $dara.Model {
  /**
   * @remarks
   * The full file path.
   */
  fileName?: string;
  /**
   * @remarks
   * The file size.
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
   * The log update time. The value is a UNIX timestamp in seconds.
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
   * The retrieved logs, sorted in contextual order. This parameter is empty if no contextual logs are found in the log query based on the specified starting log.
   */
  logs?: ListExecutorLogsResponseBodyLogs[];
  /**
   * @remarks
   * The maximum number of records to return in a single request.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The next token.
   * 
   * @example
   * 2
   */
  nextToken?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records.
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

