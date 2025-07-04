// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeletePublicUrlResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F43E8AB4-419C-5F4C-90D6-615590DFAA3C
   */
  requestId?: string;
  /**
   * @remarks
   * The result.
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

