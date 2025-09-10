// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IndexKey } from "./IndexKey";


export class GetIndexResponseBodyLine extends $dara.Model {
  /**
   * @remarks
   * Indicates whether case sensitivity is enabled. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  caseSensitive?: boolean;
  /**
   * @remarks
   * Indicates whether Chinese characters are included. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  chn?: boolean;
  /**
   * @remarks
   * The excluded fields.
   */
  excludeKeys?: string[];
  /**
   * @remarks
   * The included fields.
   */
  includeKeys?: string[];
  /**
   * @remarks
   * The delimiters.
   * 
   * This parameter is required.
   */
  token?: string[];
  static names(): { [key: string]: string } {
    return {
      caseSensitive: 'caseSensitive',
      chn: 'chn',
      excludeKeys: 'exclude_keys',
      includeKeys: 'include_keys',
      token: 'token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caseSensitive: 'boolean',
      chn: 'boolean',
      excludeKeys: { 'type': 'array', 'itemType': 'string' },
      includeKeys: { 'type': 'array', 'itemType': 'string' },
      token: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.excludeKeys)) {
      $dara.Model.validateArray(this.excludeKeys);
    }
    if(Array.isArray(this.includeKeys)) {
      $dara.Model.validateArray(this.includeKeys);
    }
    if(Array.isArray(this.token)) {
      $dara.Model.validateArray(this.token);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIndexResponseBody extends $dara.Model {
  /**
   * @remarks
   * The type of the index.
   * 
   * @example
   * v2
   */
  indexMode?: string;
  /**
   * @remarks
   * The configurations of field indexes. A field index is in the key-value format in which the key specifies the name of the field and the value specifies the index configuration of the field.
   */
  keys?: { [key: string]: IndexKey };
  /**
   * @remarks
   * The time when the index configurations were last updated. The value is a UNIX timestamp representing the number of seconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1524155379
   */
  lastModifyTime?: number;
  /**
   * @remarks
   * The configurations of full-text indexes.
   */
  line?: GetIndexResponseBodyLine;
  /**
   * @remarks
   * Indicates whether the log clustering feature is enabled.
   * 
   * @example
   * false
   */
  logReduce?: boolean;
  /**
   * @remarks
   * The fields in the blacklist that are used to cluster logs. This parameter is valid only if the log clustering feature is enabled.
   */
  logReduceBlackList?: string[];
  /**
   * @remarks
   * The fields in the whitelist that are used to cluster logs. This parameter is valid only if the log clustering feature is enabled.
   */
  logReduceWhiteList?: string[];
  /**
   * @remarks
   * The maximum length of a field value that can be retained. Default value: 2048. Unit: bytes. The default value is equal to 2 KB. You can change the value of the max_text_len parameter. Valid values: 64 to 16384. Unit: bytes.
   * 
   * @example
   * 2048
   */
  maxTextLen?: number;
  /**
   * @remarks
   * The storage type. The value is fixed as pg.
   * 
   * @example
   * pg
   */
  storage?: string;
  /**
   * @remarks
   * The lifecycle of the index file. Valid values: 7, 30, and 90. Unit: day.
   * 
   * This parameter is required.
   * 
   * @example
   * 30
   */
  ttl?: number;
  static names(): { [key: string]: string } {
    return {
      indexMode: 'index_mode',
      keys: 'keys',
      lastModifyTime: 'lastModifyTime',
      line: 'line',
      logReduce: 'log_reduce',
      logReduceBlackList: 'log_reduce_black_list',
      logReduceWhiteList: 'log_reduce_white_list',
      maxTextLen: 'max_text_len',
      storage: 'storage',
      ttl: 'ttl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      indexMode: 'string',
      keys: { 'type': 'map', 'keyType': 'string', 'valueType': IndexKey },
      lastModifyTime: 'number',
      line: GetIndexResponseBodyLine,
      logReduce: 'boolean',
      logReduceBlackList: { 'type': 'array', 'itemType': 'string' },
      logReduceWhiteList: { 'type': 'array', 'itemType': 'string' },
      maxTextLen: 'number',
      storage: 'string',
      ttl: 'number',
    };
  }

  validate() {
    if(this.keys) {
      $dara.Model.validateMap(this.keys);
    }
    if(this.line && typeof (this.line as any).validate === 'function') {
      (this.line as any).validate();
    }
    if(Array.isArray(this.logReduceBlackList)) {
      $dara.Model.validateArray(this.logReduceBlackList);
    }
    if(Array.isArray(this.logReduceWhiteList)) {
      $dara.Model.validateArray(this.logReduceWhiteList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

