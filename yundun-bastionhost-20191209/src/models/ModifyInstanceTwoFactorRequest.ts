// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceTwoFactorRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable two-factor authentication. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * true
   */
  enableTwoFactor?: string;
  /**
   * @remarks
   * The ID of the bastion host.
   * 
   * > You can call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to query the ID of the bastion host.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-st220aw****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID of the bastion host.
   * 
   * > For more information about the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The duration within which two-factor authentication is not required after a user passes two-factor authentication. Valid values: 0 to 168. Unit: hours. If you set this parameter to 0, the user must pass two-factor authentication every time the user logs on to the bastion host.
   * 
   * @example
   * 1
   */
  skipTwoFactorTime?: string;
  /**
   * @remarks
   * The method used to send a verification code for two-factor authentication. If EnableTwoFactor is set to true, you must specify at least one method. Valid values:
   * 
   * *   **sms:** text message.
   * *   **email**: email.
   * *   **dingtalk**: notice in DingTalk.
   * *   **totp**: one-time password (OTP) token.
   * *   **gmusbkey**: SM-based USB key.
   * 
   * @example
   * ["sms"]
   */
  twoFactorMethods?: string;
  static names(): { [key: string]: string } {
    return {
      enableTwoFactor: 'EnableTwoFactor',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      skipTwoFactorTime: 'SkipTwoFactorTime',
      twoFactorMethods: 'TwoFactorMethods',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableTwoFactor: 'string',
      instanceId: 'string',
      regionId: 'string',
      skipTwoFactorTime: 'string',
      twoFactorMethods: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

