// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InvalidPhoneNumberFilterResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The filtering result.
   * 
   * - **YES**: A valid phone number. The mapping relationship is returned.
   * 
   * - **NO**: An invalid phone number. The mapping relationship is not returned.
   * 
   * @example
   * YES
   */
  code?: string;
  /**
   * @remarks
   * The encrypted phone number.
   * 
   * @example
   * 1400513****
   */
  encryptedNumber?: string;
  /**
   * @remarks
   * The expiration time of the phone number.
   * 
   * @example
   * 2022-05-27 16:05:23
   */
  expireTime?: string;
  /**
   * @remarks
   * The original phone number.
   * 
   * @example
   * 1390000****
   */
  originalNumber?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      encryptedNumber: 'EncryptedNumber',
      expireTime: 'ExpireTime',
      originalNumber: 'OriginalNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      encryptedNumber: 'string',
      expireTime: 'string',
      originalNumber: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvalidPhoneNumberFilterResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code of the request. Valid values:
   * 
   * - **OK**: The request is successful.
   * 
   * - **MobileNumberIllegal**: The mobile number is invalid.
   * 
   * - **EncyrptTypeIllegal**: The encryption type is invalid.
   * 
   * - **MobileNumberTypeNotMatch**: The mobile number does not match the encryption type.
   * 
   * - **CarrierIllegal**: The carrier type is invalid.
   * 
   * - **AuthCodeNotExist**: The authorization code does not exist.
   * 
   * - **PortabilityNumberNotSupported**: Mobile number portability is not supported.
   * 
   * - **Unknown**: An unknown exception occurred.
   * 
   * - **AuthCodeAndApiNotMatch**: A system exception occurred.
   * 
   * - **AuthCodeAndApiNotMatch**: The AuthCode does not match the API operation.
   * - **RequestFrequencyLimit**: Due to carrier restrictions, repeated high-frequency queries against the same phone number within a short period of time are prohibited. If this error code is returned, try again later.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The array of returned data.
   */
  data?: InvalidPhoneNumberFilterResponseBodyData[];
  /**
   * @remarks
   * The description of the status code.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CC3BB6D2-2FDF-4321-9DCE-B38165CE4C47
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': InvalidPhoneNumberFilterResponseBodyData },
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

