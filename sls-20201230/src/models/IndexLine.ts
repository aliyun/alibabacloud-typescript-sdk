// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IndexLine extends $dara.Model {
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
  excludeKeys?: string[];
  includeKeys?: string[];
  /**
   * @remarks
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

