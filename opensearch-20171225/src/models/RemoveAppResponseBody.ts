// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveAppResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 33477D76-C380-2D84-A4AD-043F52876CB1
   */
  requestId?: string;
  /**
   * @remarks
   * The return result.
   */
  result?: number[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': 'number' },
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

