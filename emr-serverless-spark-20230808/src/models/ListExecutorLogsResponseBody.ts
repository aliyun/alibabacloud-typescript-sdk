// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListExecutorLogsResponseBodyLogs extends $dara.Model {
  fileName?: string;
  /**
   * @example
   * 6383327
   */
  fileSize?: number;
  /**
   * @example
   * log4j.log
   */
  logName?: string;
  /**
   * @example
   * log4j
   */
  logType?: string;
  /**
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
  logs?: ListExecutorLogsResponseBodyLogs[];
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
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

