// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSourceResponseBody extends $dara.Model {
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
   * C67DED2B-F19B-5BEC-88C1-D6EB854CD0D4
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

