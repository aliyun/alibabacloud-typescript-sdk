// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ClearDynamicTagCacheResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 78C17888****C462E57A95
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the cache is purged.
   * 
   * - true: The cache is purged.
   * - false: No cache exists.
   * 
   * @example
   * true
   */
  result?: boolean;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

