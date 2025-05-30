// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateUserSessionTokenResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 34C2713A-2270-5EEC-825E-115F9AD3BAC9
   */
  requestId?: string;
  /**
   * @remarks
   * Token.
   * 
   * @example
   * 960f499au184m7****
   */
  userSessionToken?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      userSessionToken: 'UserSessionToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      userSessionToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

