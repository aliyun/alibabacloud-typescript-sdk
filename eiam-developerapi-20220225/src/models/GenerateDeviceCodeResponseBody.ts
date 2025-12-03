// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateDeviceCodeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The device code.
   * 
   * @example
   * xxxxx
   */
  deviceCode?: string;
  /**
   * @remarks
   * The time when the token expires. This value is a UNIX timestamp representing the number of seconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1653288641
   */
  expiresAt?: number;
  /**
   * @remarks
   * The remaining validity period of the device code. Unit: seconds.
   * 
   * @example
   * 1200
   */
  expiresIn?: number;
  /**
   * @remarks
   * The timeout period of the request token. Unit: seconds.
   * 
   * @example
   * 5
   */
  interval?: number;
  /**
   * @remarks
   * The user authorization code.
   * 
   * @example
   * xxxxx
   */
  userCode?: string;
  /**
   * @remarks
   * The verification URI.
   * 
   * @example
   * https://example.com/authorize/device
   */
  verificationUri?: string;
  /**
   * @remarks
   * The complete verification URI.
   * 
   * @example
   * https://example.com/authorize/device?user_code=
   * xxxx
   */
  verificationUriComplete?: string;
  static names(): { [key: string]: string } {
    return {
      deviceCode: 'device_code',
      expiresAt: 'expires_at',
      expiresIn: 'expires_in',
      interval: 'interval',
      userCode: 'user_code',
      verificationUri: 'verification_uri',
      verificationUriComplete: 'verification_uri_complete',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceCode: 'string',
      expiresAt: 'number',
      expiresIn: 'number',
      interval: 'number',
      userCode: 'string',
      verificationUri: 'string',
      verificationUriComplete: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

