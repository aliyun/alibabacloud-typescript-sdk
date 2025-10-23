// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckDisposableResponseBody extends $dara.Model {
  /**
   * @example
   * true
   */
  isDisposable?: string;
  /**
   * @example
   * true
   */
  isFormatValid?: string;
  /**
   * @example
   * true
   */
  isMxValid?: string;
  /**
   * @example
   * false
   */
  isOkToSend?: string;
  /**
   * @example
   * xxx-xxx-xxxxx-xxxx
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      isDisposable: 'IsDisposable',
      isFormatValid: 'IsFormatValid',
      isMxValid: 'IsMxValid',
      isOkToSend: 'IsOkToSend',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isDisposable: 'string',
      isFormatValid: 'string',
      isMxValid: 'string',
      isOkToSend: 'string',
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

