// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSubscriptionResponseBody extends $dara.Model {
  /**
   * @example
   * 2026031915480122c53d0b00c2d347
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

