// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLogsV2ResponseBodyMetaPhraseQueryInfo extends $dara.Model {
  /**
   * @remarks
   * The starting offset of the scan result after index filtering.
   * 
   * @example
   * 0
   */
  beginOffset?: number;
  /**
   * @remarks
   * The end offset of the scan result after index filtering.
   * 
   * @example
   * 0
   */
  endOffset?: number;
  /**
   * @remarks
   * The end time of the scan result after index filtering.
   * 
   * @example
   * 1
   */
  endTime?: number;
  /**
   * @remarks
   * Indicates whether all logs are scanned.
   * 
   * @example
   * true
   */
  scanAll?: boolean;
  static names(): { [key: string]: string } {
    return {
      beginOffset: 'beginOffset',
      endOffset: 'endOffset',
      endTime: 'endTime',
      scanAll: 'scanAll',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginOffset: 'number',
      endOffset: 'number',
      endTime: 'number',
      scanAll: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLogsV2ResponseBodyMeta extends $dara.Model {
  /**
   * @remarks
   * The SQL part of the query statement that follows the pipe character (|).
   * 
   * @example
   * select *
   */
  aggQuery?: string;
  /**
   * @remarks
   * The column types.
   */
  columnTypes?: string[];
  /**
   * @remarks
   * The number of log entries returned in this query.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The number of CPU cores used.
   * 
   * @example
   * 3
   */
  cpuCores?: number;
  /**
   * @remarks
   * The core-hours for the Exclusive SQL.
   * 
   * @example
   * 0.002
   */
  cpuSec?: number;
  /**
   * @remarks
   * The time consumed by the query, in milliseconds.
   * 
   * @example
   * 5
   */
  elapsedMillisecond?: number;
  /**
   * @remarks
   * Indicates whether the query is an SQL query.
   * 
   * @example
   * false
   */
  hasSQL?: boolean;
  /**
   * @remarks
   * The highlighted content.
   */
  highlights?: { [key: string]: any }[];
  /**
   * @remarks
   * Indicates whether nanosecond-level sorting is enabled.
   * 
   * @example
   * true
   */
  isAccurate?: boolean;
  /**
   * @remarks
   * All keys in the query result.
   */
  keys?: string[];
  /**
   * @remarks
   * The number of entries returned. This parameter is returned if the SQL statement does not contain a LIMIT clause.
   * 
   * @example
   * 100
   */
  limited?: number;
  /**
   * @remarks
   * The query mode. Valid values: 0: Normal query, which includes SQL queries. 1: Phrase query. 2: SCAN query. 3: SCAN SQL query.
   * 
   * @example
   * 0
   */
  mode?: number;
  /**
   * @remarks
   * The information about the phrase query.
   */
  phraseQueryInfo?: GetLogsV2ResponseBodyMetaPhraseQueryInfo;
  /**
   * @remarks
   * The volume of logs processed in the query, in bytes.
   * 
   * @example
   * 10000
   */
  processedBytes?: number;
  /**
   * @remarks
   * The number of rows processed in the query.
   * 
   * @example
   * 10000
   */
  processedRows?: number;
  /**
   * @remarks
   * The progress of the query. Valid values:
   * 
   * - Complete: The query is complete, and the returned result is complete.
   * 
   * - Incomplete: The query is complete, but the returned result is incomplete. You must send the request again to obtain the complete result.
   * 
   * @example
   * Complete
   */
  progress?: string;
  /**
   * @remarks
   * The volume of data scanned in the scan query, in bytes.
   * 
   * @example
   * 1024
   */
  scanBytes?: number;
  /**
   * @remarks
   * The type of observable data.
   * 
   * @example
   * None
   */
  telementryType?: string;
  /**
   * @remarks
   * All terms in the query statement.
   */
  terms?: { [key: string]: any }[];
  /**
   * @remarks
   * The part of the query statement that precedes the pipe character (|).
   * 
   * @example
   * *
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
      highlights: 'highlights',
      isAccurate: 'isAccurate',
      keys: 'keys',
      limited: 'limited',
      mode: 'mode',
      phraseQueryInfo: 'phraseQueryInfo',
      processedBytes: 'processedBytes',
      processedRows: 'processedRows',
      progress: 'progress',
      scanBytes: 'scanBytes',
      telementryType: 'telementryType',
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
      highlights: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      isAccurate: 'boolean',
      keys: { 'type': 'array', 'itemType': 'string' },
      limited: 'number',
      mode: 'number',
      phraseQueryInfo: GetLogsV2ResponseBodyMetaPhraseQueryInfo,
      processedBytes: 'number',
      processedRows: 'number',
      progress: 'string',
      scanBytes: 'number',
      telementryType: 'string',
      terms: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      whereQuery: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.columnTypes)) {
      $dara.Model.validateArray(this.columnTypes);
    }
    if(Array.isArray(this.highlights)) {
      $dara.Model.validateArray(this.highlights);
    }
    if(Array.isArray(this.keys)) {
      $dara.Model.validateArray(this.keys);
    }
    if(this.phraseQueryInfo && typeof (this.phraseQueryInfo as any).validate === 'function') {
      (this.phraseQueryInfo as any).validate();
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

export class GetLogsV2ResponseBody extends $dara.Model {
  /**
   * @remarks
   * The query results.
   */
  data?: { [key: string]: string }[];
  /**
   * @remarks
   * The metadata of the returned data.
   */
  meta?: GetLogsV2ResponseBodyMeta;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      meta: 'meta',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'string' } },
      meta: GetLogsV2ResponseBodyMeta,
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

