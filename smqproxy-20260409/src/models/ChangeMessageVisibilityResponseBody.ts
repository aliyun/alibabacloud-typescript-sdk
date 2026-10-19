// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeMessageVisibilityResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time when the message can be consumed again (millisecond-level timestamp).
   * 
   * @example
   * 1250700979348
   */
  nextVisibleTime?: number;
  /**
   * @remarks
   * The new temporary handle. Use this new handle for subsequent delete or modification operations. This handle is valid before NextVisibleTime.
   * 
   * @example
   * TbZj6wDWli+9CEauMZc8ZRv37sIW2iJKq3M9Mx/TS1
   */
  receiptHandle?: string;
  static names(): { [key: string]: string } {
    return {
      nextVisibleTime: 'NextVisibleTime',
      receiptHandle: 'ReceiptHandle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextVisibleTime: 'number',
      receiptHandle: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

