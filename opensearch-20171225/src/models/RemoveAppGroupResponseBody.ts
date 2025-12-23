// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveAppGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3AA29D02-54F3-8569-F71A-90E1B7BE4E7E
   */
  requestId?: string;
  /**
   * @remarks
   * The returned results.
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

