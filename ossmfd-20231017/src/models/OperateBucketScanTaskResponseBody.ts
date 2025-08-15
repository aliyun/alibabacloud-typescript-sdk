// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OperateBucketScanTaskResponseBody extends $dara.Model {
  /**
   * @example
   * E99D386F-5546-5BCD-BADD-F4EF4B******
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

