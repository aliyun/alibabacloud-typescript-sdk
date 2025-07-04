// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTableResponseBody extends $dara.Model {
  /**
   * @remarks
   * id of request
   * 
   * @example
   * 2AE63638-5420-56DC-BF59-37D8174039A0
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

