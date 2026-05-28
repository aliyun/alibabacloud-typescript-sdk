// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AsyncSqlResponseDataAsyncSqlMetaPB extends $dara.Model {
  /**
   * @example
   * 10
   */
  cpuCores?: number;
  /**
   * @example
   * 0.2
   */
  cpuSec?: number;
  /**
   * @example
   * 30000
   */
  elapsedMilli?: number;
  keys?: string[];
  /**
   * @example
   * 10000000
   */
  processedRows?: number;
  /**
   * @example
   * Complete
   */
  progress?: string;
  /**
   * @example
   * 12000
   */
  resultRows?: number;
  static names(): { [key: string]: string } {
    return {
      cpuCores: 'cpu_cores',
      cpuSec: 'cpu_sec',
      elapsedMilli: 'elapsed_milli',
      keys: 'keys',
      processedRows: 'processed_rows',
      progress: 'progress',
      resultRows: 'result_rows',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuCores: 'number',
      cpuSec: 'number',
      elapsedMilli: 'number',
      keys: { 'type': 'array', 'itemType': 'string' },
      processedRows: 'number',
      progress: 'string',
      resultRows: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.keys)) {
      $dara.Model.validateArray(this.keys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AsyncSqlResponseData extends $dara.Model {
  asyncSqlMetaPB?: AsyncSqlResponseDataAsyncSqlMetaPB;
  /**
   * @example
   * InvalidQuery
   */
  errorCode?: string;
  /**
   * @example
   * line 37:14: Column \\"xyz\\" cannot be resolved
   */
  errorMessage?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 690C4F2A16FBD65C40000484_14
   */
  id?: string;
  rows?: string[][];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * FINISHED
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      asyncSqlMetaPB: 'AsyncSqlMetaPB',
      errorCode: 'error_code',
      errorMessage: 'error_message',
      id: 'id',
      rows: 'rows',
      state: 'state',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asyncSqlMetaPB: AsyncSqlResponseDataAsyncSqlMetaPB,
      errorCode: 'string',
      errorMessage: 'string',
      id: 'string',
      rows: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': 'string' } },
      state: 'string',
    };
  }

  validate() {
    if(this.asyncSqlMetaPB && typeof (this.asyncSqlMetaPB as any).validate === 'function') {
      (this.asyncSqlMetaPB as any).validate();
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

