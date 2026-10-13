// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetForgetPasswordConfigurationResponseBodyOpenForgetPasswordConfiguration extends $dara.Model {
  /**
   * @remarks
   * The list of forgot password authentication channels. Required when ForgetPasswordStatus is set to enabled. Valid values:
   * 
   * - email: Email.
   * - sms: SMS.
   * - totp: OTP dynamic password.
   * - web_authn: WebAuthn.
   */
  authenticationChannels?: string[];
  /**
   * @remarks
   * **[Deprecated]** Indicates whether the forgot password feature is enabled. This parameter is deprecated. Use the ForgetPasswordStatus parameter instead.
   * 
   * @example
   * deprecated: true
   */
  enable?: boolean;
  /**
   * @remarks
   * **[Deprecated]** Indicates whether email is enabled as a forgot password authentication method. This parameter is deprecated. Use the AuthenticationChannels parameter instead.
   * 
   * @example
   * deprecated: true
   */
  enableEmail?: boolean;
  /**
   * @remarks
   * **[Deprecated]** Indicates whether SMS is enabled as a forgot password authentication method. This parameter is deprecated. Use the AuthenticationChannels parameter instead.
   * 
   * @example
   * deprecated: true
   */
  enableSms?: boolean;
  /**
   * @remarks
   * The forgot password configuration status. Valid values:
   * 
   * - enabled: Enabled.
   * - disabled: Disabled.
   * 
   * @example
   * enabled
   */
  forgetPasswordStatus?: string;
  static names(): { [key: string]: string } {
    return {
      authenticationChannels: 'AuthenticationChannels',
      enable: 'Enable',
      enableEmail: 'EnableEmail',
      enableSms: 'EnableSms',
      forgetPasswordStatus: 'ForgetPasswordStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authenticationChannels: { 'type': 'array', 'itemType': 'string' },
      enable: 'boolean',
      enableEmail: 'boolean',
      enableSms: 'boolean',
      forgetPasswordStatus: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.authenticationChannels)) {
      $dara.Model.validateArray(this.authenticationChannels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetForgetPasswordConfigurationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The forgot password configuration.
   */
  openForgetPasswordConfiguration?: GetForgetPasswordConfigurationResponseBodyOpenForgetPasswordConfiguration;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      openForgetPasswordConfiguration: 'OpenForgetPasswordConfiguration',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      openForgetPasswordConfiguration: GetForgetPasswordConfigurationResponseBodyOpenForgetPasswordConfiguration,
      requestId: 'string',
    };
  }

  validate() {
    if(this.openForgetPasswordConfiguration && typeof (this.openForgetPasswordConfiguration as any).validate === 'function') {
      (this.openForgetPasswordConfiguration as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

