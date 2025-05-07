// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyRCInstanceAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The hostname of the instance.
   * 
   * @example
   * testHost1
   */
  hostName?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rm-uf62br2491p5l****
   */
  instanceId?: string;
  /**
   * @remarks
   * The new password of the instance.
   * 
   * *   The value must be 8 to 30 characters in length.
   * *   The value must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters. Special characters include `()` ~ ! @ # $ % ^ & \\* - _ + = \\`
   * 
   * @example
   * 2F9e9@a69c!e18b569c8
   */
  password?: string;
  /**
   * @remarks
   * Specifies whether to restart the instance. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * @example
   * true
   */
  reboot?: boolean;
  /**
   * @remarks
   * The region ID of the instance. You can call the DescribeRegions operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  securityGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      hostName: 'HostName',
      instanceId: 'InstanceId',
      password: 'Password',
      reboot: 'Reboot',
      regionId: 'RegionId',
      securityGroupId: 'SecurityGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostName: 'string',
      instanceId: 'string',
      password: 'string',
      reboot: 'boolean',
      regionId: 'string',
      securityGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

