// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutDcdnKvResponseBody extends $dara.Model {
  /**
   * @remarks
   * The length of the key.
   * 
   * @example
   * 5
   */
  length?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 96ED3127-EC7A-57C5-AFA6-A689B24B2530
   */
  requestId?: string;
  /**
   * @remarks
   * The value of the key. If the value exceeds 256 characters in length, the first 100 characters and the last 100 characters are retained and other characters are not displayed.
   * 
   * @example
   * value1
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

