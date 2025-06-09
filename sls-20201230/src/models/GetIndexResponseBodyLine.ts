// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


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

