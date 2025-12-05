// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteServiceVersionResponseBody extends $dara.Model {
  /**
   * @example
   * Ok
   */
  code?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * A1994B10-C6A8-58FA-8347-6A08B0D4EFDE
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
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

