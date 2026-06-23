// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetForgetPasswordConfigurationRequest extends $dara.Model {
  /**
   * @remarks
   * The list of authentication channels. Valid values:
   * - email: email.
   * - sms: text message.
   * 
   * @example
   * email
   */
  authenticationChannels?: string[];
  /**
   * @remarks
   * The forgot password configuration status. Valid values:
   * - enabled: enabled.
   * - disabled: disabled.
   * 
   * This parameter is required.
   * 
   * @example
   * enabled
   */
  forgetPasswordStatus?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * eiam-111ccc1111
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      authenticationChannels: 'AuthenticationChannels',
      forgetPasswordStatus: 'ForgetPasswordStatus',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authenticationChannels: { 'type': 'array', 'itemType': 'string' },
      forgetPasswordStatus: 'string',
      instanceId: 'string',
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

