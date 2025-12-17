// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateServiceVersionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
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

