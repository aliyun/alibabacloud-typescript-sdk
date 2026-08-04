// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTokenResponseBody extends $dara.Model {
  /**
   * @remarks
   * ID of the request.
   * 
   * @example
   * F2D0392B-D749-5C48-A98A-3FAE5C9444A6
   */
  requestId?: string;
  /**
   * @remarks
   * Share token for the training task. Use this token as the Token parameter in the GetJob API to view details of the shared task.
   * 
   * @example
   * ql4OU830nJaF17LP6KTry4a9DvnjIXHP
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      token: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

