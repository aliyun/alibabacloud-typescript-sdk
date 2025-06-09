// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IndexJsonKey } from "./IndexJsonKey";


export class IndexKey extends $dara.Model {
  /**
   * @example
   * myAlias
   */
  alias?: string;
  /**
   * @example
   * true
   */
  caseSensitive?: boolean;
  /**
   * @example
   * true
   */
  chn?: boolean;
  /**
   * @example
   * true
   */
  docValue?: boolean;
  /**
   * @example
   * true
   */
  indexAll?: boolean;
  jsonKeys?: { [key: string]: IndexJsonKey };
  maxDepth?: number;
  token?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * text
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'alias',
      caseSensitive: 'caseSensitive',
      chn: 'chn',
      docValue: 'doc_value',
      indexAll: 'index_all',
      jsonKeys: 'json_keys',
      maxDepth: 'max_depth',
      token: 'token',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      caseSensitive: 'boolean',
      chn: 'boolean',
      docValue: 'boolean',
      indexAll: 'boolean',
      jsonKeys: { 'type': 'map', 'keyType': 'string', 'valueType': IndexJsonKey },
      maxDepth: 'number',
      token: { 'type': 'array', 'itemType': 'string' },
      type: 'string',
    };
  }

  validate() {
    if(this.jsonKeys) {
      $dara.Model.validateMap(this.jsonKeys);
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

