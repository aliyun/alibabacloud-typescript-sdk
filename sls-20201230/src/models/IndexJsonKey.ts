// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IndexJsonKey extends $dara.Model {
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
  static names(): { [key: string]: string } {
    return {
      alias: 'alias',
      caseSensitive: 'caseSensitive',
      chn: 'chn',
      docValue: 'doc_value',
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
      token: { 'type': 'array', 'itemType': 'string' },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.token)) {
      $dara.Model.validateArray(this.token);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

