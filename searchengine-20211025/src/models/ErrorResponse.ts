// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ErrorResponse extends $dara.Model {
  /**
   * @example
   * InternalServerError
   */
  code?: string;
  /**
   * @example
   * internal server error
   */
  message?: string;
  /**
   * @example
   * 90D6B8F5-FE97-4509-9AAB-367836C51818
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

