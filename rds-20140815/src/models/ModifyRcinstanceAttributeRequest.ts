// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyRCInstanceAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the release protection feature for the instance. Valid values:
   * 
   * - **true**: enables the release protection feature.
   * - **false** (default): does not enable the release protection feature.
   * 
   * @example
   * false
   */
  deletionProtection?: boolean;
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
  instanceIds?: string[];
  /**
   * @example
   * k8s-node
   */
  instanceName?: string;
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
  /**
   * @remarks
   * The ID of the security group to which the instance is added.
   * 
   * @example
   * sg-uf6av412xaxixu****
   */
  securityGroupId?: string;
  securityGroupIds?: string[];
  static names(): { [key: string]: string } {
    return {
      deletionProtection: 'DeletionProtection',
      hostName: 'HostName',
      instanceId: 'InstanceId',
      instanceIds: 'InstanceIds',
      instanceName: 'InstanceName',
      password: 'Password',
      reboot: 'Reboot',
      regionId: 'RegionId',
      securityGroupId: 'SecurityGroupId',
      securityGroupIds: 'SecurityGroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deletionProtection: 'boolean',
      hostName: 'string',
      instanceId: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      instanceName: 'string',
      password: 'string',
      reboot: 'boolean',
      regionId: 'string',
      securityGroupId: 'string',
      securityGroupIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    if(Array.isArray(this.securityGroupIds)) {
      $dara.Model.validateArray(this.securityGroupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

