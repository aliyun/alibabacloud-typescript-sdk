// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPhoneEncryptionPublicKeyResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The public key.
   * 
   * @example
   * -----BEGIN PUBLIC KEY-----\\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAt+PMrYw4zUDEk+VeTrp0\\n8LZaoVpiVFErX7iuoDjUs4F9vkxMQuIABjcXw\\/swzTMEopLORQV28uqN\\/2\\/x9hjU\\****\\/Zwa\\/Vk5Svp4\\niVY4e22FsJCCWUEMvayO8Q+3UGq0eXXQ+8SlUWEMq1VaJ4pwCLsMnmgybA+VmJxi\\nkwIDAQAB\\n-----END PUBLIC KEY-----"
   */
  encryptionPublicKey?: string;
  /**
   * @remarks
   * The status of the public key. Valid values:
   * 
   * - MISMATCH: The public key is invalid.
   * 
   * - VALID: The public key is valid.
   * 
   * @example
   * VALID
   */
  encryptionPublicKeyStatus?: string;
  /**
   * @remarks
   * The phone number.
   * 
   * @example
   * 861526377****
   */
  phoneNumber?: string;
  static names(): { [key: string]: string } {
    return {
      encryptionPublicKey: 'EncryptionPublicKey',
      encryptionPublicKeyStatus: 'EncryptionPublicKeyStatus',
      phoneNumber: 'PhoneNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encryptionPublicKey: 'string',
      encryptionPublicKeyStatus: 'string',
      phoneNumber: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhoneEncryptionPublicKeyResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The error code. For more information, see [Error codes](https://help.aliyun.com/document_detail/196974.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetPhoneEncryptionPublicKeyResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * None
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DAC72B08-3327-33EF-BEDC-8EC3E83A6575
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: GetPhoneEncryptionPublicKeyResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

