// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteQueryResponseBodyMetaTruncation extends $dara.Model {
  truncated?: boolean;
  truncatedColumnIndexes?: number[][];
  static names(): { [key: string]: string } {
    return {
      truncated: 'truncated',
      truncatedColumnIndexes: 'truncatedColumnIndexes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      truncated: 'boolean',
      truncatedColumnIndexes: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': 'number' } },
    };
  }

  validate() {
    if(Array.isArray(this.truncatedColumnIndexes)) {
      $dara.Model.validateArray(this.truncatedColumnIndexes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteQueryResponseBodyMeta extends $dara.Model {
  /**
   * @remarks
   * The number of log rows scanned or processed.
   * 
   * @example
   * 100
   */
  affectedRows?: number;
  /**
   * @remarks
   * The number of log rows returned by this query request.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The time consumed by this execution, in milliseconds.
   * 
   * @example
   * 15
   */
  elapsedMillisecond?: number;
  /**
   * @remarks
   * Indicates whether the query result is complete.
   * 
   * @example
   * Complete
   */
  progress?: string;
  truncation?: ExecuteQueryResponseBodyMetaTruncation;
  static names(): { [key: string]: string } {
    return {
      affectedRows: 'affectedRows',
      count: 'count',
      elapsedMillisecond: 'elapsedMillisecond',
      progress: 'progress',
      truncation: 'truncation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      affectedRows: 'number',
      count: 'number',
      elapsedMillisecond: 'number',
      progress: 'string',
      truncation: ExecuteQueryResponseBodyMetaTruncation,
    };
  }

  validate() {
    if(this.truncation && typeof (this.truncation as any).validate === 'function') {
      (this.truncation as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteQueryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result column types.
   */
  columnTypes?: string[];
  /**
   * @remarks
   * The result column information.
   */
  columns?: string[];
  /**
   * @remarks
   * The metadata of the returned data.
   */
  meta?: ExecuteQueryResponseBodyMeta;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EB27D183-8F6C-5C5A-A6A3-E0508AF54F78
   */
  requestId?: string;
  /**
   * @remarks
   * The result rows.
   */
  rows?: any[][];
  static names(): { [key: string]: string } {
    return {
      columnTypes: 'columnTypes',
      columns: 'columns',
      meta: 'meta',
      requestId: 'requestId',
      rows: 'rows',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnTypes: { 'type': 'array', 'itemType': 'string' },
      columns: { 'type': 'array', 'itemType': 'string' },
      meta: ExecuteQueryResponseBodyMeta,
      requestId: 'string',
      rows: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': 'any' } },
    };
  }

  validate() {
    if(Array.isArray(this.columnTypes)) {
      $dara.Model.validateArray(this.columnTypes);
    }
    if(Array.isArray(this.columns)) {
      $dara.Model.validateArray(this.columns);
    }
    if(this.meta && typeof (this.meta as any).validate === 'function') {
      (this.meta as any).validate();
    }
    if(Array.isArray(this.rows)) {
      $dara.Model.validateArray(this.rows);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

