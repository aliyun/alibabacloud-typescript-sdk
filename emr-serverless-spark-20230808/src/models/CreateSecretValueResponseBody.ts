// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSecretValueResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 5C2B60C6-03CE-5F31-A8A4-13FCBEBACA1C
   */
  requestId?: string;
  /**
   * @remarks
   * The ciphertext ID.
   * 
   * @example
   * st-xxxxxxxxxx
   */
  secretId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      secretId: 'secretId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      secretId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

