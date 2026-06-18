// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutKvWithHighCapacityResponseBody extends $dara.Model {
  /**
   * @remarks
   * The length of the value in the key-value pair.
   * 
   * @example
   * 4
   */
  length?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EEEBE525-F576-1196-8DAF-2D70CA3F4D2F
   */
  requestId?: string;
  /**
   * @remarks
   * The content of the key. If the length exceeds 256 characters, the first 100 and last 100 characters are displayed, with the middle omitted.
   * 
   * @example
   * test
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      length: 'Length',
      requestId: 'RequestId',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      length: 'string',
      requestId: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

