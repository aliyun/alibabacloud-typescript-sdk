// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchContextResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 123-0F43-23423-AC43-34234
   */
  requestId?: string;
  /**
   * @remarks
   * Return value
   */
  results?: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      results: 'results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      results: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
    };
  }

  validate() {
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

