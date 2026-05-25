// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPhoneNumberIdentificationResultResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the phone number passed the verification.
   * 
   * @example
   * true
   */
  isIdentified?: string;
  static names(): { [key: string]: string } {
    return {
      isIdentified: 'IsIdentified',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isIdentified: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhoneNumberIdentificationResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return code. Valid values:
   * 
   * *   OK: The request is successful.
   * *   NoIdentificationResult: No verification result is available or the verification failed.
   * *   SessionNotValid: The session is invalid or expired.
   * *   MobileNumberIllegal: The format of the phone number is invalid.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetPhoneNumberIdentificationResultResponseBodyData;
  /**
   * @remarks
   * The description of the return code.
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
   * 68A40250-50CD-034C-B728-0BD******177
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
      data: GetPhoneNumberIdentificationResultResponseBodyData,
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

