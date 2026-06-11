// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteQueryResponseBodyMeta extends $dara.Model {
  /**
   * @remarks
   * The number of scanned or processed log entries.
   * 
   * @example
   * 1
   */
  affectedRows?: number;
  /**
   * @remarks
   * The number of log entries returned.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The query execution time in milliseconds.
   * 
   * @example
   * 1231243
   */
  elapsedMillisecond?: number;
  /**
   * @remarks
   * The query completion status. A value of `Complete` indicates that the query has finished.
   * 
   * @example
   * Complete
   */
  progress?: string;
  static names(): { [key: string]: string } {
    return {
      affectedRows: 'affectedRows',
      count: 'count',
      elapsedMillisecond: 'elapsedMillisecond',
      progress: 'progress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      affectedRows: 'number',
      count: 'number',
      elapsedMillisecond: 'number',
      progress: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteQueryResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array of log entries. Each object in the array represents a log entry.
   */
  data?: { [key: string]: string }[];
  /**
   * @remarks
   * Metadata about the query execution.
   */
  meta?: ExecuteQueryResponseBodyMeta;
  /**
   * @remarks
   * The unique request ID.
   * 
   * @example
   * 3B311FD9-A60B-55E0-A896-A0C73*********
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      meta: 'meta',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'string' } },
      meta: ExecuteQueryResponseBodyMeta,
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    if(this.meta && typeof (this.meta as any).validate === 'function') {
      (this.meta as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

