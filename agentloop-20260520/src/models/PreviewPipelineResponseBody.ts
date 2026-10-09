// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MetaSchemaValue } from "./MetaSchemaValue";


export class PreviewPipelineResponseBodyMeta extends $dara.Model {
  /**
   * @remarks
   * The SPL statement for aggregation analysis.
   * 
   * @example
   * * | SELECT status, count(*) AS cnt GROUP BY status
   */
  aggQuery?: string;
  /**
   * @remarks
   * The list of data types for each column. This field provides a mapping from column names to data types, such as string, long, double, and json.
   * 
   * @example
   * ["long","string"]
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
   * The number of consumed CPU cores.
   * 
   * @example
   * 2
   */
  cpuCores?: number;
  /**
   * @remarks
   * The consumed CPU time in seconds.
   * 
   * @example
   * 0.5
   */
  cpuSec?: number;
  /**
   * @remarks
   * The query duration in milliseconds.
   * 
   * @example
   * 1200
   */
  elapsedMillisecond?: number;
  /**
   * @remarks
   * Specifies whether an SQL query is used.
   * 
   * @example
   * true
   */
  hasSQL?: boolean;
  /**
   * @remarks
   * Specifies whether nanosecond-level ordering is enabled.
   * 
   * @example
   * true
   */
  isAccurate?: boolean;
  /**
   * @remarks
   * The list of result column names.
   * 
   * @example
   * ["status","method","path"]
   */
  keys?: string[];
  /**
   * @remarks
   * The maximum number of rows returned in the result.
   * 
   * @example
   * 5
   */
  limited?: number;
  /**
   * @remarks
   * The identifier of the query mode.
   * 
   * @example
   * 1
   */
  mode?: number;
  /**
   * @remarks
   * The number of bytes of processed data.
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
   * The Simple Log Service (SLS) query progress. A value of Complete indicates that the query is completed.
   * 
   * @example
   * Complete
   */
  progress?: string;
  /**
   * @remarks
   * The number of bytes of scanned raw data.
   * 
   * @example
   * 1048576
   */
  scanBytes?: number;
  /**
   * @remarks
   * The dataset schema of the final pipeline output. The keys are field names, and the type in the values supports text, long, double, and json. The field order is determined by the keys.
   * 
   * @example
   * {"status":{"type":"long"}}
   */
  schema?: { [key: string]: MetaSchemaValue };
  /**
   * @remarks
   * The column types and aggregation information.
   * 
   * @example
   * [{"column":"status","type":"long"}]
   */
  terms?: { [key: string]: any }[];
  /**
   * @remarks
   * The SPL statement for the filter condition.
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
      schema: 'schema',
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
      schema: { 'type': 'map', 'keyType': 'string', 'valueType': MetaSchemaValue },
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
    if(this.schema) {
      $dara.Model.validateMap(this.schema);
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
   * The collection of sample rows for the preview result. Each row is a key-value structure. The array contains only the first N rows, up to 5 rows by default, and does not reflect the complete write plan.
   * 
   * @example
   * [{"status":"200","method":"POST"}]
   */
  data?: { [key: string]: string }[];
  /**
   * @remarks
   * The query metadata.
   */
  meta?: PreviewPipelineResponseBodyMeta;
  /**
   * @remarks
   * The request ID. You can use this ID to locate the request when you troubleshoot issues.
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

