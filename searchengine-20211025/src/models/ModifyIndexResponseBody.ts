// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyIndexResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 93A9E542-8CF8-5BA6-99AB-94C0FE520429
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

