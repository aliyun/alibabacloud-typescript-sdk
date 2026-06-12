// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IndexKey } from "./IndexKey";


export class IndexLine extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the index is case-sensitive.
   * 
   * - true: The index is case-sensitive.
   * 
   * - false (default): The index is not case-sensitive.
   * 
   * @example
   * true
   */
  caseSensitive?: boolean;
  /**
   * @remarks
   * Specifies whether the logs contain Chinese characters.
   * 
   * - true: The logs contain Chinese characters.
   * 
   * - false (default): The logs do not contain Chinese characters.
   * 
   * @example
   * false
   */
  chn?: boolean;
  /**
   * @remarks
   * The list of fields to exclude from the full-text index. This parameter cannot be specified at the same time as \\`include_keys\\`.
   */
  excludeKeys?: string[];
  /**
   * @remarks
   * The list of fields to include in the full-text index. This parameter cannot be specified at the same time as \\`exclude_keys\\`.
   */
  includeKeys?: string[];
  /**
   * @remarks
   * The list of delimiters for tokenization. This parameter specifies how the field is tokenized.
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

export class Index extends $dara.Model {
  /**
   * @remarks
   * The field index configuration. The key is the field name and the value is the index configuration for the field. You must specify either this parameter or the \\`line\\` parameter.
   */
  keys?: { [key: string]: IndexKey };
  /**
   * @remarks
   * The full-text index configuration. You must specify either this parameter or the \\`keys\\` parameter.
   */
  line?: IndexLine;
  /**
   * @remarks
   * Specifies whether to enable log clustering. If enabled, either the whitelist or the blacklist can be active, but not both.
   * 
   * - true: Enable log clustering.
   * 
   * - false (default): Do not enable log clustering.
   * 
   * @example
   * true
   */
  logReduce?: boolean;
  /**
   * @remarks
   * The blacklist of fields for log clustering. This parameter is valid only when log clustering is enabled.
   */
  logReduceBlackList?: string[];
  /**
   * @remarks
   * The whitelist of fields for log clustering. This parameter is valid only when log clustering is enabled.
   */
  logReduceWhiteList?: string[];
  /**
   * @remarks
   * The default maximum length of a field value in Simple Log Service is 2,048 bytes (2 KB). To change this limit, set the maximum length for a text field. The value must be between 64 and 16,384 bytes.
   * 
   * @example
   * 2048
   */
  maxTextLen?: number;
  /**
   * @remarks
   * Specifies whether to enable the scan index.
   * 
   * @example
   * false
   */
  scanIndex?: boolean;
  static names(): { [key: string]: string } {
    return {
      keys: 'keys',
      line: 'line',
      logReduce: 'log_reduce',
      logReduceBlackList: 'log_reduce_black_list',
      logReduceWhiteList: 'log_reduce_white_list',
      maxTextLen: 'max_text_len',
      scanIndex: 'scan_index',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keys: { 'type': 'map', 'keyType': 'string', 'valueType': IndexKey },
      line: IndexLine,
      logReduce: 'boolean',
      logReduceBlackList: { 'type': 'array', 'itemType': 'string' },
      logReduceWhiteList: { 'type': 'array', 'itemType': 'string' },
      maxTextLen: 'number',
      scanIndex: 'boolean',
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

