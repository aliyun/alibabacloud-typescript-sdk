// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EmailVerifiedResponseBody extends $dara.Model {
  /**
   * @example
   * BF014B60-C708-4253-B5F2-3F9B493F398B
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

