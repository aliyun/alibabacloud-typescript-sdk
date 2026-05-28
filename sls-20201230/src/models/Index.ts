// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IndexKey } from "./IndexKey";


export class IndexLine extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable case sensitivity. Valid values:
   * 
   * *   true
   * *   false (default)
   * 
   * @example
   * true
   */
  caseSensitive?: boolean;
  /**
   * @remarks
   * Specifies whether the field contains Chinese characters. Valid values:
   * 
   * *   true
   * *   false (default)
   * 
   * @example
   * false
   */
  chn?: boolean;
  /**
   * @remarks
   * The excluded fields. You cannot specify both include_keys and exclude_keys.
   */
  excludeKeys?: string[];
  /**
   * @remarks
   * The included fields. You cannot specify both include_keys and exclude_keys.
   */
  includeKeys?: string[];
  /**
   * @remarks
   * The delimiters. You can specify a delimiter to delimit the content of a field value.
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
   * The configurations of field indexes. A field index is a key-value pair in which the key specifies the name of the field and the value specifies the index configuration of the field. You must specify at least one of the following parameters: line and keys.
   */
  keys?: { [key: string]: IndexKey };
  /**
   * @remarks
   * The configurations of full-text indexes. You must specify at least one of the following parameters: line and keys.
   */
  line?: IndexLine;
  /**
   * @remarks
   * Specifies whether to enable the LogReduce feature. After you enable the LogReduce feature, either the whitelist or blacklist takes effect. Valid values:
   * 
   * *   true
   * *   false (default)
   * 
   * @example
   * true
   */
  logReduce?: boolean;
  /**
   * @remarks
   * The blacklist of fields that are used to cluster logs. This parameter takes effect only when the LogReduce feature is enabled.
   */
  logReduceBlackList?: string[];
  /**
   * @remarks
   * The whitelist of fields that are used to cluster logs. This parameter takes effect only when the LogReduce feature is enabled.
   */
  logReduceWhiteList?: string[];
  /**
   * @remarks
   * The maximum length of a field value that can be retained. Default value: 2048. Unit: bytes. The default value is equal to 2 KB. You can change the value of this parameter. Valid values: 64 to 16384.
   * 
   * @example
   * 2048
   */
  maxTextLen?: number;
  /**
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

