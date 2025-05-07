// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReportSessionStatusResponseBody extends $dara.Model {
  /**
   * @example
   * 0EE5DE20-25F4-5870-9D56-C259A45B****
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

