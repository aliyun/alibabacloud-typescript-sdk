// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { LogContent } from "./LogContent";
import { GetLogsV2ResponseBodyMetaPhraseQueryInfo } from "./GetLogsV2responseBodyMetaPhraseQueryInfo";


export class GetLogsV2ResponseBodyMeta extends $dara.Model {
  /**
   * @remarks
   * The SQL statement after | in the query statement.
   * 
   * @example
   * select *
   */
  aggQuery?: string;
  columnTypes?: string[];
  /**
   * @remarks
   * The number of rows that are returned.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @example
   * 3
   */
  cpuCores?: number;
  /**
   * @example
   * 0.002
   */
  cpuSec?: number;
  /**
   * @remarks
   * The amount of time that is consumed by the request. Unit: milliseconds.
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
  highlights?: LogContent[][];
  /**
   * @remarks
   * Indicates whether the returned result is accurate to seconds.
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
   * @example
   * 100
   */
  limited?: number;
  /**
   * @example
   * 0
   */
  mode?: number;
  phraseQueryInfo?: GetLogsV2ResponseBodyMetaPhraseQueryInfo;
  /**
   * @remarks
   * The number of logs that are processed in the request.
   * 
   * @example
   * 10000
   */
  processedBytes?: number;
  /**
   * @remarks
   * The number of rows that are processed in the request.
   * 
   * @example
   * 10000
   */
  processedRows?: number;
  /**
   * @remarks
   * Indicates whether the query result is complete. Valid values:
   * 
   * *   Complete: The query was successful, and the complete result is returned.
   * *   Incomplete: The query was successful, but the query result is incomplete. To obtain the complete result, you must call the operation again.
   * 
   * @example
   * Complete
   */
  progress?: string;
  /**
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
   * The part before | in the query statement.
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
      highlights: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': LogContent } },
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

