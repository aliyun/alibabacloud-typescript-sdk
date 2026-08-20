// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResetTokenResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The description of the status code.
   * 
   * @example
   * ok
   */
  message?: string;
  /**
   * @remarks
   * The request trace ID.
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * The new token in plaintext. This value is returned only in this response. Store it securely.
   * 
   * @example
   * example_token_value
   */
  token?: string;
  /**
   * @remarks
   * The masked token value.
   * 
   * @example
   * string_value
   */
  tokenMasked?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      token: 'token',
      tokenMasked: 'tokenMasked',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      token: 'string',
      tokenMasked: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

