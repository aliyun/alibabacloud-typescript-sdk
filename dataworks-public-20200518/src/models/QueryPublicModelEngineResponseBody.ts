// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryPublicModelEngineResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4CFB2DED-7D9B-4C42-B4AA-CFF4991DFFF4
   */
  requestId?: string;
  /**
   * @remarks
   * The returned information about objects.
   */
  returnValue?: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      returnValue: 'ReturnValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      returnValue: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
    };
  }

  validate() {
    if(Array.isArray(this.returnValue)) {
      $dara.Model.validateArray(this.returnValue);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

