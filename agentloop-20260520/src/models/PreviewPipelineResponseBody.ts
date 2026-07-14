// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PreviewPipelineResponseBodyMeta extends $dara.Model {
  /**
   * @remarks
   * The aggregation analysis SPL statement.
   * 
   * @example
   * * | SELECT status, count(*) AS cnt GROUP BY status
   */
  aggQuery?: string;
  /**
   * @remarks
   * The `meta.columnTypes` field provides a mapping from column names to data types (string / long / double / json).
   */
  columnTypes?: string[];
  /**
   * @remarks
   * The number of matched log entries.
   * 
   * @example
   * 100
   */
  count?: number;
  /**
   * @remarks
   * The number of CPU cores consumed.
   * 
   * @example
   * 2
   */
  cpuCores?: number;
  /**
   * @remarks
   * The CPU time consumed, in seconds.
   * 
   * @example
   * 0.5
   */
  cpuSec?: number;
  /**
   * @remarks
   * The query duration, in milliseconds.
   * 
   * @example
   * 1200
   */
  elapsedMillisecond?: number;
  /**
   * @remarks
   * Indicates whether the query is an SQL query.
   */
  hasSQL?: boolean;
  /**
   * @remarks
   * Indicates whether nanosecond-level ordering is enabled.
   */
  isAccurate?: boolean;
  /**
   * @remarks
   * The list of result column names.
   */
  keys?: string[];
  /**
   * @remarks
   * The maximum number of result rows returned.
   * 
   * @example
   * 5
   */
  limited?: number;
  /**
   * @remarks
   * The query mode identifier.
   * 
   * @example
   * 1
   */
  mode?: number;
  /**
   * @remarks
   * The number of processed data bytes.
   * 
   * @example
   * 524288
   */
  processedBytes?: number;
  /**
   * @remarks
   * The number of processed log rows.
   * 
   * @example
   * 10000
   */
  processedRows?: number;
  /**
   * @remarks
   * The SLS query progress. A value of Complete indicates that the query is complete.
   * 
   * @example
   * Complete
   */
  progress?: string;
  /**
   * @remarks
   * The number of raw data bytes scanned.
   * 
   * @example
   * 1048576
   */
  scanBytes?: number;
  /**
   * @remarks
   * The column type and aggregation information.
   */
  terms?: { [key: string]: any }[];
  /**
   * @remarks
   * The filter condition SPL statement.
   * 
   * @example
   * status: 200
   */
  whereQuery?: string;
  static names(): { [key: string]: string } {
    return {
      aggQuery: 'aggQuery',
      columnTypes: 'columnTypes',
      count: 'count',
      cpuCores: 'cpuCores',
      cpuSec: 'cpuSec',
      elapsedMillisecond: 'elapsedMillisecond',
      hasSQL: 'hasSQL',
      isAccurate: 'isAccurate',
      keys: 'keys',
      limited: 'limited',
      mode: 'mode',
      processedBytes: 'processedBytes',
      processedRows: 'processedRows',
      progress: 'progress',
      scanBytes: 'scanBytes',
      terms: 'terms',
      whereQuery: 'whereQuery',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggQuery: 'string',
      columnTypes: { 'type': 'array', 'itemType': 'string' },
      count: 'number',
      cpuCores: 'number',
      cpuSec: 'number',
      elapsedMillisecond: 'number',
      hasSQL: 'boolean',
      isAccurate: 'boolean',
      keys: { 'type': 'array', 'itemType': 'string' },
      limited: 'number',
      mode: 'number',
      processedBytes: 'number',
      processedRows: 'number',
      progress: 'string',
      scanBytes: 'number',
      terms: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      whereQuery: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.columnTypes)) {
      $dara.Model.validateArray(this.columnTypes);
    }
    if(Array.isArray(this.keys)) {
      $dara.Model.validateArray(this.keys);
    }
    if(Array.isArray(this.terms)) {
      $dara.Model.validateArray(this.terms);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreviewPipelineResponseBody extends $dara.Model {
  /**
   * @remarks
   * The `data` field is a collection of sample rows (an array of maps) that contains only the first N rows (up to 5 by default) and does not reflect the complete write plan.
   */
  data?: { [key: string]: string }[];
  /**
   * @remarks
   * The query metadata.
   */
  meta?: PreviewPipelineResponseBodyMeta;
  /**
   * @remarks
   * The request ID, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 9ACFB10A-1B2C-3D4E-5F6G-7H8I9J0K1L2M
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
      meta: PreviewPipelineResponseBodyMeta,
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

