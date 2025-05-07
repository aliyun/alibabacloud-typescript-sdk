// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTokenResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID, which is used to troubleshoot issues.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-xxxxxxxx
   */
  requestId?: string;
  /**
   * @remarks
   * The sharing token, used to view the information about the shared job.
   * 
   * @example
   * eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9*****
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

