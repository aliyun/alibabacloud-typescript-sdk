// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutDcdnKvWithHighCapacityResponseBody extends $dara.Model {
  /**
   * @example
   * 4
   */
  length?: number;
  /**
   * @example
   * EEEBE525-F576-1196-8DAF-2D70CA3F4D2F
   */
  requestId?: string;
  /**
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
      length: 'number',
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

