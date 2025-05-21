// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisableAdviceServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned message. Valid values:
   * 
   * *   If the request was successful, a **success** message is returned.
   * *   If the request failed, an error message is returned.
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
   * 57EC6CCA-A582-572C-A33D-F61845CBC03C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

