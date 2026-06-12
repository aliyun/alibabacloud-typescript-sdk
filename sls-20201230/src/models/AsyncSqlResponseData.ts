// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AsyncSqlResponseDataAsyncSqlMetaPB extends $dara.Model {
  /**
   * @remarks
   * The number of CPU cores used.
   * 
   * @example
   * 10
   */
  cpuCores?: number;
  /**
   * @remarks
   * The total CPU time consumed in seconds.
   * 
   * @example
   * 0.2
   */
  cpuSec?: number;
  /**
   * @remarks
   * The SQL query running time in milliseconds.
   * 
   * @example
   * 30000
   */
  elapsedMilli?: number;
  /**
   * @remarks
   * The names of the columns in the SQL result. The keys correspond one-to-one with the fields in the SELECT statement.
   */
  keys?: string[];
  /**
   * @remarks
   * The number of raw data rows processed.
   * 
   * @example
   * 10000000
   */
  processedRows?: number;
  /**
   * @remarks
   * Indicates whether the SQL result is accurate. Valid values are:
   * 
   * - Complete: The result is accurate.
   * 
   * - Incomplete: The result is not accurate.
   * 
   * @example
   * Complete
   */
  progress?: string;
  /**
   * @remarks
   * The total number of rows in the result. When you read the results, the offset value must not exceed this value.
   * 
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
  /**
   * @remarks
   * The metadata of the SQL query.
   */
  asyncSqlMetaPB?: AsyncSqlResponseDataAsyncSqlMetaPB;
  /**
   * @remarks
   * If the SQL query fails to execute, this parameter contains the specific error code.
   * 
   * @example
   * InvalidQuery
   */
  errorCode?: string;
  /**
   * @remarks
   * If the SQL query fails to execute, this parameter contains the specific error message.
   * 
   * @example
   * line 37:14: Column \\"xyz\\" cannot be resolved
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the asynchronous SQL query.
   * 
   * This parameter is required.
   * 
   * @example
   * 690C4F2A16FBD65C40000484_14
   */
  id?: string;
  /**
   * @remarks
   * The SQL result. Each element in the array is also an array that corresponds to a specific row of the result.
   */
  rows?: string[][];
  /**
   * @remarks
   * The current execution state of the asynchronous SQL query. Valid values are:
   * 
   * - RUNNING
   * 
   * - FINISHED
   * 
   * - FAILED
   * 
   * - CANCELLED
   * 
   * RUNNING is a temporary state that indicates the SQL query is still running. You can read the results only when the state is FINISHED. The error_code and error_message parameters are valid only when the state is FAILED.
   * 
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

