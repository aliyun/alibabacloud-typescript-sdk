// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VerifySmsCodeRequest extends $dara.Model {
  /**
   * @remarks
   * The phone number, which is used to receive SMS verification codes.
   * 
   * This parameter is required.
   * 
   * @example
   * 1321111****
   */
  phoneNumber?: string;
  /**
   * @remarks
   * The SMS verification code.
   * 
   * This parameter is required.
   * 
   * @example
   * 12****
   */
  smsCode?: string;
  /**
   * @remarks
   * The text message verification code. After you successfully call the corresponding API operation to send the SMS verification code, the end users receive the SMS verification code. SmsToken is returned by the SDK for SMS verification for you to verify the text message verification code. For an Android client, sendVerifyCode is called to send the verification code. For an iOS client, sendVerifyCodeWithTimeout is called to send the verification code. For more information, see [Overview](https://help.aliyun.com/document_detail/400434.html).
   * 
   * This parameter is required.
   * 
   * @example
   * sddsbvdbvjd****
   */
  smsToken?: string;
  static names(): { [key: string]: string } {
    return {
      phoneNumber: 'PhoneNumber',
      smsCode: 'SmsCode',
      smsToken: 'SmsToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      phoneNumber: 'string',
      smsCode: 'string',
      smsToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

