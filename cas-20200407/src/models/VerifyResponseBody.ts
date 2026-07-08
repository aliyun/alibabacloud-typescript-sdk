// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VerifyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1ed33293-2e48-6b14-861e-538e28e408eb
   */
  requestId?: string;
  /**
   * @remarks
   * The result of the signature verification. Valid values:
   * 
   * - **true**
   * 
   * - **false**
   * 
   * @example
   * true
   */
  signatureValid?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      signatureValid: 'SignatureValid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      signatureValid: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

