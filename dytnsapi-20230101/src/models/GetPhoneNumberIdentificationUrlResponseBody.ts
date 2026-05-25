// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPhoneNumberIdentificationUrlResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The verification URL.
   * 
   * @example
   * https://global-ip-auth.dycpaas.com/global/biz/ip_auth/start?ipa_s_c_c=IPF0000000000000******&ipa_s_i=8636b75e2fcb40c53ffecc2b59******
   */
  identificationUrl?: string;
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * 8636b75e2fcb40c53ffecc2b5947115c.149b03d2a7494e6e8f5b34c915245815.707c7f0d93f4409db0761aa5da94ce01.1686******041
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      identificationUrl: 'IdentificationUrl',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identificationUrl: 'string',
      sessionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhoneNumberIdentificationUrlResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return code. Valid values:
   * 
   * *   **OK**: The request is successful.
   * *   **IdentificationNotAvailable**: The verification system does not support the phone number that corresponds to the IP address.
   * *   **MobileNumberIllegal**: The format of the phone number is invalid.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetPhoneNumberIdentificationUrlResponseBodyData;
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
      data: GetPhoneNumberIdentificationUrlResponseBodyData,
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

