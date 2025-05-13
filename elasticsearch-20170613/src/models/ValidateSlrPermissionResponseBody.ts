// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ValidateSlrPermissionResponseBody extends $dara.Model {
  /**
   * @example
   * BC4ED7DD-8C84-49B5-8A95-456F82E44D13
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

