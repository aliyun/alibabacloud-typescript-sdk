// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateEnvironmentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID, which is used to trace the API call chain.
   * 
   * @example
   * 52FB803B-3CD8-5FF8-AAE9-C2B841F6A483
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

