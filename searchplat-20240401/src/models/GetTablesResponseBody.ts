// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTablesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 33E4F0CA-F766-5803-B11C-70DC57A5A6E4
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   */
  result?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

