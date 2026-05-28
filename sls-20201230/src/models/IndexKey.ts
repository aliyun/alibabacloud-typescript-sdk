// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IndexJsonKey } from "./IndexJsonKey";


export class IndexKey extends $dara.Model {
  /**
   * @remarks
   * Alias.
   * 
   * @example
   * myAlias
   */
  alias?: string;
  /**
   * @remarks
   * Case sensitivity.
   * 
   * @example
   * true
   */
  caseSensitive?: boolean;
  /**
   * @remarks
   * Whether the field contains Chinese characters.
   * 
   * @example
   * true
   */
  chn?: boolean;
  /**
   * @remarks
   * Whether to enable statistics.
   * 
   * @example
   * true
   */
  docValue?: boolean;
  embedding?: string;
  /**
   * @remarks
   * Whether to enable auto indexing for all text fields in JSON.
   * 
   * @example
   * true
   */
  indexAll?: boolean;
  /**
   * @remarks
   * json key
   */
  jsonKeys?: { [key: string]: IndexJsonKey };
  /**
   * @remarks
   * Maximum depth.
   */
  maxDepth?: number;
  /**
   * @remarks
   * Delimiter.
   */
  token?: string[];
  /**
   * @remarks
   * The data type of the field.
   * 
   * This parameter is required.
   * 
   * @example
   * text
   */
  type?: string;
  vectorIndex?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'alias',
      caseSensitive: 'caseSensitive',
      chn: 'chn',
      docValue: 'doc_value',
      embedding: 'embedding',
      indexAll: 'index_all',
      jsonKeys: 'json_keys',
      maxDepth: 'max_depth',
      token: 'token',
      type: 'type',
      vectorIndex: 'vector_index',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      caseSensitive: 'boolean',
      chn: 'boolean',
      docValue: 'boolean',
      embedding: 'string',
      indexAll: 'boolean',
      jsonKeys: { 'type': 'map', 'keyType': 'string', 'valueType': IndexJsonKey },
      maxDepth: 'number',
      token: { 'type': 'array', 'itemType': 'string' },
      type: 'string',
      vectorIndex: 'string',
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

