// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IndexJsonKey extends $dara.Model {
  /**
   * @remarks
   * The alias of the field.
   * 
   * @example
   * myAlias
   */
  alias?: string;
  /**
   * @remarks
   * Specifies whether queries on this field are case-sensitive.
   * 
   * @example
   * true
   */
  caseSensitive?: boolean;
  /**
   * @remarks
   * Specifies whether to enable Chinese tokenization for the field.
   * 
   * @example
   * true
   */
  chn?: boolean;
  /**
   * @remarks
   * Specifies whether to enable doc_value for the field. This enables sorting, aggregation, and statistical analysis on the field.
   * 
   * @example
   * true
   */
  docValue?: boolean;
  /**
   * @remarks
   * The delimiters used for tokenization.
   */
  token?: string[];
  /**
   * @remarks
   * Specifies the field type.
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

