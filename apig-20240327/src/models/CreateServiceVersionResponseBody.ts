// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateServiceVersionResponseBody extends $dara.Model {
  /**
   * @example
   * Ok
   */
  code?: string;
  /**
   * @example
   * Success
   */
  message?: string;
  /**
   * @example
   * 0B373A13-9BB8-5068-9C94-AD6D39E6BBA2
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

