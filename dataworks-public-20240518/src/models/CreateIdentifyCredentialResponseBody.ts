// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateIdentifyCredentialResponseBody extends $dara.Model {
  /**
   * @remarks
   * success true or false
   * 
   * @example
   * {   "HttpStatusCode": 200,   "Success": true }
   */
  data?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 0000-ABCD-EFG****
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

