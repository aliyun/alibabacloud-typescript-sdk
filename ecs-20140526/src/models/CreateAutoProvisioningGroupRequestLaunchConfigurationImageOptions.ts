// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAutoProvisioningGroupRequestLaunchConfigurationImageOptions extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the instance that uses the image supports logons of the ecs-user user. Valid value:
   * 
   * *   true: The instance that uses the image supports logons of the ecs-user user.
   * *   false: The instance that uses the image does not support logons of the ecs-user user.
   * 
   * @example
   * false
   */
  loginAsNonRoot?: boolean;
  static names(): { [key: string]: string } {
    return {
      loginAsNonRoot: 'LoginAsNonRoot',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loginAsNonRoot: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

