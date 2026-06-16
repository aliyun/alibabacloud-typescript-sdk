// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteQueryResponseBodyMeta extends $dara.Model {
  affectedRows?: number;
  /**
   * @example
   * 1
   */
  count?: number;
  elapsedMillisecond?: number;
  /**
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
  columnTypes?: string[];
  columns?: string[];
  meta?: ExecuteQueryResponseBodyMeta;
  requestId?: string;
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

