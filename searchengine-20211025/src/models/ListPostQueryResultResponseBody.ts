// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPostQueryResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 022F36C7-9FB4-5D67-BEBC-3D14B0984463
   */
  requestId?: string;
  /**
   * @remarks
   * The result.
   * 
   * @example
   * {}
   */
  result?: any;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'any',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

