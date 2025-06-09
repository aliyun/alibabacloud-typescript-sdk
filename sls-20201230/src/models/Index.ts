// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IndexKey } from "./IndexKey";
import { IndexLine } from "./IndexLine";


export class Index extends $dara.Model {
  keys?: { [key: string]: IndexKey };
  line?: IndexLine;
  /**
   * @example
   * true
   */
  logReduce?: boolean;
  logReduceBlackList?: string[];
  logReduceWhiteList?: string[];
  /**
   * @example
   * 2048
   */
  maxTextLen?: number;
  static names(): { [key: string]: string } {
    return {
      keys: 'keys',
      line: 'line',
      logReduce: 'log_reduce',
      logReduceBlackList: 'log_reduce_black_list',
      logReduceWhiteList: 'log_reduce_white_list',
      maxTextLen: 'max_text_len',
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

