// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAppCallStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 20A6D1E3-1F5F-5440-A4F1-EC7831646FE4
   */
  requestId?: string;
  /**
   * @example
   * enable
   */
  result?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

