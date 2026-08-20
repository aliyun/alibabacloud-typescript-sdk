// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTokenInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the token is enabled.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * string_value
   */
  gmtCreate?: string;
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
   * The request ID.
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
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
      enabled: 'enabled',
      gmtCreate: 'gmtCreate',
      message: 'message',
      requestId: 'requestId',
      tokenMasked: 'tokenMasked',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      enabled: 'boolean',
      gmtCreate: 'string',
      message: 'string',
      requestId: 'string',
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

