// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateWebAuthnAuthenticatorRegistrationUrlResponseBodyWebAuthnAuthenticatorRegistrationUrl extends $dara.Model {
  /**
   * @remarks
   * The WebAuthn authenticator registration URL.
   * 
   * @example
   * https://012cnaliyunidaas..com./login/webauthn/registration
   */
  registrationUrl?: string;
  /**
   * @remarks
   * The parameters for the WebAuthn authenticator registration URL.
   * 
   * @example
   * eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwia2lkIjoia2V5X29ueWNzbXNib3Y1bmV2anlncHgyZnlsbjdhIn0
   */
  registrationUrlParameters?: string;
  static names(): { [key: string]: string } {
    return {
      registrationUrl: 'RegistrationUrl',
      registrationUrlParameters: 'RegistrationUrlParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      registrationUrl: 'string',
      registrationUrlParameters: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateWebAuthnAuthenticatorRegistrationUrlResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  /**
   * @remarks
   * Information about the WebAuthn authenticator registration URL.
   */
  webAuthnAuthenticatorRegistrationUrl?: GenerateWebAuthnAuthenticatorRegistrationUrlResponseBodyWebAuthnAuthenticatorRegistrationUrl;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      webAuthnAuthenticatorRegistrationUrl: 'WebAuthnAuthenticatorRegistrationUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      webAuthnAuthenticatorRegistrationUrl: GenerateWebAuthnAuthenticatorRegistrationUrlResponseBodyWebAuthnAuthenticatorRegistrationUrl,
    };
  }

  validate() {
    if(this.webAuthnAuthenticatorRegistrationUrl && typeof (this.webAuthnAuthenticatorRegistrationUrl as any).validate === 'function') {
      (this.webAuthnAuthenticatorRegistrationUrl as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

