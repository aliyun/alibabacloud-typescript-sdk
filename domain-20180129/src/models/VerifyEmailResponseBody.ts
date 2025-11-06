// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VerifyEmailResponseBody extends $dara.Model {
  /**
   * @example
   * FD3AD289-83EE-4E32-803A-CF1B3A8EEE64
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

