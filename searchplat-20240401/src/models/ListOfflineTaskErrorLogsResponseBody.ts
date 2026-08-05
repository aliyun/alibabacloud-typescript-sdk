// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOfflineTaskErrorLogsResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * **The log request body.**
   * 
   * @example
   * {"instance":"123","user":"xuanzhen"}
   */
  request?: string;
  /**
   * @remarks
   * **The log response.**
   * 
   * @example
   * [{"error":{"reason":"unable to authenticate user [elastic] for REST request [/_bulk]","header":{"WWW-Authenticate":["Basic realm=\\"security\\", charset=\\"UTF-8\\"","ApiKey"]},"type":"security_exception","root_cause":[{"reason":"unable to authenticate user [elastic] for REST request [/_bulk]","header":{"WWW-Authenticate":["Basic realm=\\"security\\", charset=\\"UTF-8\\"","ApiKey"]},"type":"security_exception"}]},"status":401}]
   */
  response?: string;
  /**
   * @remarks
   * **The number of retries.**
   * 
   * @example
   * 1
   */
  retry?: string;
  /**
   * @remarks
   * **The timestamp.**
   * 
   * @example
   * 1770272507085
   */
  timestamp?: string;
  static names(): { [key: string]: string } {
    return {
      request: 'request',
      response: 'response',
      retry: 'retry',
      timestamp: 'timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      request: 'string',
      response: 'string',
      retry: 'string',
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

export class ListOfflineTaskErrorLogsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1-2-3-4
   */
  requestId?: string;
  /**
   * @remarks
   * The collection of log request bodies, log responses, retry counts, and timestamps.
   */
  result?: ListOfflineTaskErrorLogsResponseBodyResult[];
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListOfflineTaskErrorLogsResponseBodyResult },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

