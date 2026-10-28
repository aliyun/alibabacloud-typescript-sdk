// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTokenResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F2D0392B-D749-5C48-A98A-3FAE5C9444A6
   */
  requestId?: string;
  /**
   * @remarks
   * The job sharing token. You can use this token as the Token parameter of the GetJob API to view information about the shared job.
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

