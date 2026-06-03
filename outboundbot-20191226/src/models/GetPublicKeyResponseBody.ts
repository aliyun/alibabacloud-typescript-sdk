// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPublicKeyResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * -----BEGIN PUBLIC KEY-----\\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAwkftR4j5P9ng+Si/2ydc\\\\/K03NlhpzI4nW3JoNZIZR83P\\nMeyoULt+ivvFI7R++BU413QfX7l5FZnuUrII\\nNNBfFX84m1tmsdythDQmS2soG2sBiGKMv6O5mlBvXi+GA0/GqQ2juEv5DAb0GfOk\\nw8syQDkpNZflUSTnh10qbnDQxIGeisv1S4/Eo00djX48y5N8qXEcz9CUgwQpKQ0s\\nWQIDAQAB\\n-----END PUBLIC KEY-----\\n
   */
  data?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * Success
   */
  message?: string;
  /**
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

