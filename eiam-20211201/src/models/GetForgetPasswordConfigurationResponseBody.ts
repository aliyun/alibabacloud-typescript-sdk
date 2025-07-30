// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetForgetPasswordConfigurationResponseBodyOpenForgetPasswordConfiguration extends $dara.Model {
  /**
   * @remarks
   * The authentication channels. Valid values:  
   * email  
   * sms  
   * totp  
   * web_authn
   */
  authenticationChannels?: string[];
  /**
   * @remarks
   * Indicates whether the forgot password feature is enabled.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * Indicates whether email authentication is enabled for the forgot password feature.
   * 
   * @example
   * true
   */
  enableEmail?: boolean;
  /**
   * @remarks
   * Indicates whether Short Message Service (SMS) authentication is enabled for the forgot password feature.
   * 
   * @example
   * true
   */
  enableSms?: boolean;
  /**
   * @remarks
   * The status of the forgot password feature. Valid values: enabled and disabled.
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
   * The forgot password configurations.
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

