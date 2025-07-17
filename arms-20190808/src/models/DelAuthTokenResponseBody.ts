// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DelAuthTokenResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the call was successful.
   * 
   * @example
   * success
   */
  data?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A5EC8221-08F2-4C95-9AF1-49FD998C647A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
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

