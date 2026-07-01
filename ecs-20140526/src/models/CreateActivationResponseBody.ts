// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateActivationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The value of the activation code. The code is returned only once when you call this operation and cannot be queried afterward. Store the return value properly.
   * 
   * @example
   * a-hz0ch3SwhOlE1234+Xo32lAZC****
   */
  activationCode?: string;
  /**
   * @remarks
   * The activation code ID.
   * 
   * @example
   * 4ECEEE12-56F1-4FBC-9AB1-890F1234****
   */
  activationId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4ECEEE12-56F1-4FBC-9AB1-890F1234****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      activationCode: 'ActivationCode',
      activationId: 'ActivationId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activationCode: 'string',
      activationId: 'string',
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

