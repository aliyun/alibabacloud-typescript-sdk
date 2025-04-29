// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetachApiProductResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 98E4A7DC-1EA6-5E6A-ACFE-91B60CE7D4BB
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

