// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAutoProvisioningGroupShrinkRequestLaunchConfigurationTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag. Valid values of N: 1 to 20. The tag key cannot be an empty string. It can be up to 128 characters in length and cannot start with acs: or aliyun. It cannot contain `http://` or `https://`. If both the LaunchTemplateId and LaunchConfiguration.* parameters are specified, the LaunchTemplateId parameter takes precedence.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag. Valid values of N: 1 to 20. The tag value can be an empty string. It can be up to 128 characters in length. It cannot start with acs: or contain `http://` or `https://`. If both the LaunchTemplateId and LaunchConfiguration.* parameters are specified, the LaunchTemplateId parameter takes precedence.
   * 
   * @example
   * TestValue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

