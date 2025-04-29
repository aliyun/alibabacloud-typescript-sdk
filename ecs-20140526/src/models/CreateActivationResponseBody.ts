// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateActivationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The value of the activation code. The value is returned only once after the CreateActivation operation is called and cannot be queried afterward. Properly save the return value.
   * 
   * @example
   * a-hz0ch3SwhOlE1234+Xo32lAZC****
   */
  activationCode?: string;
  /**
   * @remarks
   * The ID of the activation code.
   * 
   * @example
   * 4ECEEE12-56F1-4FBC-9AB1-890F1234****
   */
  activationId?: string;
  /**
   * @remarks
   * The ID of the request.
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

