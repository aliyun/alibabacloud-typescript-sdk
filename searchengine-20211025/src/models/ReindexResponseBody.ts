// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReindexResponseBody extends $dara.Model {
  /**
   * @remarks
   * requestId
   * 
   * @example
   * 10D5E615-69F7-5F49-B850-00169ADE513C
   */
  requestId?: string;
  /**
   * @remarks
   * Map
   * 
   * @example
   * {}
   */
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.result) {
      $dara.Model.validateMap(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

